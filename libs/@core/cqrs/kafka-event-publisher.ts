import { Injectable } from '@nestjs/common'
import { EventBus, IEventPublisher, IEvent } from '@nestjs/cqrs'
import { KafkaProducerService } from '../kafka/kafka-producer.service'
import { FtnEvent } from './base'

@Injectable()
export class KafkaEventPublisher implements IEventPublisher {
	constructor(
		private readonly eventBus: EventBus,
		private readonly kafkaProducer: KafkaProducerService,
	) {}

	publish<TEvent extends IEvent>(
		event: TEvent,
		dispatcherContext?: unknown,
		asyncContext?: unknown,
	): void {
		// First, publish to the local event bus
		this.eventBus.subject$.next(event)

		// Check if event is FtnEvent before publishing to Kafka
		if (this.isFtnEvent(event)) {
			// Then, publish to Kafka
			const eventName = this.getEventName(event)
			const topic = `ftn.events.${eventName}`

			this.kafkaProducer
				.send(topic, event, event.id)
				.catch(err => console.error(`Failed to publish event to Kafka: ${err.message}`, err))
		}
	}

	publishAll<TEvent extends IEvent>(
		events: TEvent[],
		dispatcherContext?: unknown,
		asyncContext?: unknown,
	): void {
		// Publish each event individually
		for (const event of events) {
			this.publish(event, dispatcherContext, asyncContext)
		}
	}

	private getEventName(event: any): string {
		// Extract event name from the class name
		const { constructor } = Object.getPrototypeOf(event)
		return constructor.name
	}

	private isFtnEvent(event: any): event is FtnEvent {
		return event && typeof event === 'object' && 'id' in event && 'timestamp' in event
	}
}

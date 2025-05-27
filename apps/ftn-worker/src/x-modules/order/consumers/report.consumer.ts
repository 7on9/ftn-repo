import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { CreateReportMessagePayload } from '~/apps/ftn/src/x-modules/agency/messages/generate-report.message'
import { KafkaConsumerOptions, MessagingConsumerService } from '~/libs/@core/kafka'
import { RedisService } from '~/libs/@core/redis'
import { NSGlobal } from '~/libs/common/enums/NSGlobal'
import { NSMessage } from '~/libs/common/enums/NSMessage'
import { parseDataFromArgs, AllowedParameters } from '~/libs/common/helpers/parameter.helper'

@Injectable()
export class ReportConsumerMessage implements OnModuleInit {
	constructor(
		private readonly consumerService: MessagingConsumerService,
		@Inject(RedisService) private readonly redisService: RedisService,
	) {}

	reportGenerationHandler = async (message: CreateReportMessagePayload) => {
		try {
			// Process the message
			// simulate processing the report message
			// await this.simulateTimeout((message as any).id)
			console.log('Received report message:', message as CreateReportMessagePayload)
			const parsedMessage = JSON.parse((message as CreateReportMessagePayload).value || '{}')
			this.redisService.set(
				`report:${parsedMessage.id}`,
				NSGlobal.EventStatus.Success,
				60 * 60 * 24, // Set expiration to 24 hours
			)
			console.log('Report status updated in Redis:', parsedMessage.id)
			// Here you can add your logic to handle the report message
		} catch (error) {
			// Handle any errors that occur during message processing
			// this.redisService.set(
			//   `report:${parsedMessage?.id}`,
			//   NSGlobal.EventStatus.Failed,
			//   60 * 60 * 24, // Set expiration to 24 hours
			// )
			console.error('Error processing report message:', error)
		}
	}

	async subscribeToReportGeneration(options: KafkaConsumerOptions) {
		await this.consumerService.consume(options)
	}

	async subscribeToTopics(topic: NSMessage.NSKafkaTopics): Promise<void> {
		console.log('Subscribing to topics:', topic)
		let handler: undefined | ((message: NSMessage.MessagePayload) => Promise<void>)
		switch (topic) {
			case NSMessage.NSKafkaTopics.GENERATE_REPORT:
				console.log('Subscribing to GENERATE_REPORT topic')
				handler = this.reportGenerationHandler
				break
			default:
				console.warn(`No subscription for topic: ${topic}`)
				break
		}
		if (!handler) {
			console.warn(`No handler defined for topic: ${topic}`)
			return
		}
		await this.subscribeToReportGeneration({
			topic,
			groupId: `${topic}-consumer-group`,
			onMessage: handler,
		})
	}

	async onModuleInit() {
		const topics = parseDataFromArgs(AllowedParameters.topics)

		if (!topics.length) {
			// If no topics are provided, subscribe to all topics
			for (const topic of Object.values(NSMessage.NSKafkaTopics)) {
				topics.push(topic)
			}
		}
		console.log('Topics to subscribe:', topics)
		for (const topic of topics) {
			await this.subscribeToTopics(topic as NSMessage.NSKafkaTopics)
		}
	}
	async simulateTimeout(id?: string): Promise<void> {
		// Simulate a timeout scenario
		const delay = Math.random() * 10 // Random timeout between 0 and 1 seconds
		return new Promise<void>(resolve => {
			setTimeout(() => {
				console.log('Simulated timeout occurred', id ? `for report ID: ${id}` : '')
				resolve()
			}, delay)
		})
	}
}

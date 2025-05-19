import { NestFactory } from '@nestjs/core'
import { FtnWorkerModule } from './ftn-worker.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'
import {
	PatternResolverStrategy,
	EventPatternService,
	KafkaConfigService,
	TopicConfigService,
} from '~/libs/@core/kafka'

async function bootstrap() {
	const logger = new Logger('FtnWorker')

	// Create the app with hybrid support
	const app = await NestFactory.create(FtnWorkerModule)

	// Get configuration and services
	const configService = app.get(ConfigService)
	const eventPatternService = app.get(EventPatternService)
	const kafkaConfigService = app.get(KafkaConfigService)
	const topicConfigService = app.get(TopicConfigService)

	// Connect to Kafka with standard transport
	app.connectMicroservice<MicroserviceOptions>({
		transport: Transport.KAFKA,
		options: {
			client: {
				clientId: 'ftn-worker',
				brokers: kafkaConfigService.brokers,
			},
			consumer: {
				groupId: kafkaConfigService.consumerGroupId,
				allowAutoTopicCreation: true,
			},
		},
	})
	// Connect to Kafka with our custom pattern resolver strategy
	app.connectMicroservice<MicroserviceOptions>({
		strategy: new PatternResolverStrategy(
			eventPatternService,
			kafkaConfigService,
			configService,
			topicConfigService,
		),
	})

	// Start microservices
	await app.startAllMicroservices()

	// Also listen for HTTP requests (hybrid mode)
	await app.listen(process.env.PORT ?? 3001)

	logger.log(`FtnWorker is running on: ${await app.getUrl()}`)
	logger.log(`Connected to Kafka brokers: ${kafkaConfigService.brokers.join(', ')}`)
}
bootstrap()

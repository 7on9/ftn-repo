import { NestFactory } from '@nestjs/core'
import { FtnWorkerModule } from './ftn-worker.module'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

async function bootstrap() {
	const logger = new Logger('FtnWorker')

	// Create the app with hybrid support
	const app = await NestFactory.create(FtnWorkerModule)

	// Get configuration and services
	const configService = app.get(ConfigService)

	// Also listen for HTTP requests (hybrid mode)
	// await app.listen(process.env.PORT ?? 3001)
	app.init()
	app.enableShutdownHooks()
	logger.log(`FtnWorker is running`)
	// logger.log(`Connected to Kafka brokers: ${kafkaConfigService.brokers.join(', ')}`)
	logger.log('Shutdown hooks enabled for graceful shutdown')
}
bootstrap()

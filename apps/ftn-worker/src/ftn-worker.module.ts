import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { FtnCqrsModule } from '~/libs/@core/cqrs'
import { MessagingModule } from '~/libs/@core/kafka'
import * as allModules from './x-modules'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			// Load environment variables from .env file
			envFilePath: process.env.ENV_FILE || '.env',
		}),
		FtnCqrsModule,
		MessagingModule,
		...Object.values(allModules), // Import all modules dynamically
	],
	controllers: [],
	providers: [],
})
export class FtnWorkerModule {}

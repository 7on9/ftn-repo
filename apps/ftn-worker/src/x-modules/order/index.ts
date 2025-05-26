import { ChildModule } from '@libs/@core/decorator'
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common'
import { RedisService } from '~/libs/@core/redis'
import { MessagingModule } from '~/libs/@core/kafka'
import { RefixModule } from '../config-module'
import { ReportConsumerMessage } from './consumers/report.consumer'

@ChildModule({
	prefix: RefixModule.orders,
	imports: [MessagingModule],
	providers: [
		// ...Object.values(allService),
		...[
			RedisService,
			ReportConsumerMessage, // Add the consumer service
			// KafkaProducerService, // Ensure KafkaProducerService is available for agency services
		],
	],
})
export class AgencyModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		// No middleware configuration needed for this module
		// The consumer will be automatically initialized via OnModuleInit
	}
}

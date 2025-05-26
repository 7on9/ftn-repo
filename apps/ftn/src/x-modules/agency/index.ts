import { ChildModule } from '@libs/@core/decorator'
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common'
import { RefixModule } from '../config-module'
import * as allService from './services'
import * as allController from './controllers'
import { AgencyMiddleware } from './agency.middleware'
import { RedisService } from '~/libs/@core/redis'
import { MessagingModule } from '~/libs/@core/kafka'

@ChildModule({
	prefix: RefixModule.agency,
  imports: [MessagingModule],
	providers: [
		...Object.values(allService),
		...[
      RedisService,
      // KafkaProducerService, // Ensure KafkaProducerService is available for agency services
		],
	],
	controllers: [...Object.values(allController)],
})
export class AgencyModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(AgencyMiddleware)
			.exclude()
			.forRoutes({
				path: `${RefixModule.agency}{/*path}`,
				method: RequestMethod.ALL,
			})
	}
}

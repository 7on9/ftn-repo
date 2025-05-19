import { DynamicModule, Module } from '@nestjs/common'
import * as allModules from './x-modules'
import { JwtModule } from '@nestjs/jwt'
import { configEnv } from '~/libs/@config/env'
import { ScheduleModule } from '@nestjs/schedule'
import { CacheModule } from '@nestjs/cache-manager'
import { ConfigModule } from '@nestjs/config'
import { FtnCqrsModule } from '~/libs/@core/cqrs'
import { KafkaModule } from '~/libs/@core/kafka'

import { AcceptLanguageResolver, HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n'
import { join } from 'path'
import { TechUtils } from '~/libs/@core/utils'

const envConfig = configEnv()
const { JWT_EXPIRY, JWT_SECRET } = envConfig

const multipleDatabaseModule: DynamicModule[] = TechUtils.dbModules(envConfig.DBS)

const globalModules = [
	ConfigModule.forRoot({
		isGlobal: true,
	}),
	JwtModule.register({
		global: true,
		secret: JWT_SECRET,
		signOptions: { expiresIn: JWT_EXPIRY, algorithm: 'HS256' },
	}),
	ScheduleModule.forRoot(),
	CacheModule.register({
		isGlobal: true,
		store: 'memory',
	}),
	FtnCqrsModule,
	KafkaModule,
	I18nModule.forRootAsync({
		useFactory: () => ({
			fallbackLanguage: 'en',
			loaderOptions: {
				path: join(__dirname, '../../assets/locales/'),
				watch: true,
			},
			typesOutputPath: join(__dirname, '../../assets/i18n.generated.ts'),
		}),
		resolvers: [
			{ use: QueryResolver, options: ['lang'] },
			AcceptLanguageResolver,
			new HeaderResolver(['x-lang']),
		],
	}),
]

@Module({
	imports: [...globalModules, ...Object.values(allModules), ...multipleDatabaseModule],
	providers: [
		// Add any application-wide providers here
	],
})
export class FtnModule {}

import { Injectable, OnModuleDestroy, Scope } from '@nestjs/common'
import Redis, { RedisOptions } from 'ioredis'

@Injectable({
	scope: Scope.DEFAULT,
})
export class RedisService implements OnModuleDestroy {
	private client: Redis

	constructor() {
		const redisOptions: RedisOptions = {
			host: process.env.REDIS_HOST || 'localhost',
			port: parseInt(process.env.REDIS_PORT || '6379'),
			password: process.env.REDIS_PASSWORD,
			retryStrategy: times => {
				const delay = Math.min(times * 100, 5000)
				return delay
			},
			maxRetriesPerRequest: 3,
			connectTimeout: 10000, // 10 seconds
			enableReadyCheck: true,
		}

		this.client = new Redis(redisOptions)
	}

	getClient(): Redis {
		return this.client
	}

	async get(key: string): Promise<string | null> {
		return this.client.get(key)
	}

	async set(key: string, value: string, ttl?: number): Promise<'OK'> {
		if (ttl) {
			return this.client.setex(key, ttl, value)
		}
		return this.client.set(key, value)
	}

	async del(key: string): Promise<number> {
		return this.client.del(key)
	}

	async onModuleDestroy() {
		await this.client.quit()
	}
}

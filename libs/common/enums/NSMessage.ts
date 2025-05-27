export namespace NSMessage {
	export enum CompressionTypes {
		None = 0,
		GZIP = 1,
	}

	export type MessagePayload = {
		messageType?: string
		partition?: number
		key?: string
		value?: string
	}

	export interface IMessageRecord {
		topic: string
		messages: IMessage[]
		messageType: string
		acks?: number
		timeout?: number
		compression?: CompressionTypes
	}

	export interface IMessage {
		key: Buffer | string
		value: Buffer | string
		partition?: number
		headers?: Buffer | string | (Buffer | string)[] | undefined
		timestamp?: BigInt
	}

	export enum NSKafkaTopics {
		ALL = 'all',
		GENERATE_REPORT = 'generate-report',
		NOTIFICATION = 'notification',
	}
}

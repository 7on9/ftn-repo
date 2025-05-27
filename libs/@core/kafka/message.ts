import { NSMessage } from '~/libs/common/enums/NSMessage'
import * as Crypto from 'crypto'

export abstract class Message<T extends NSMessage.MessagePayload>
	implements NSMessage.IMessageRecord
{
	abstract topic: string

	messages: NSMessage.IMessage[]
	compression?: NSMessage.CompressionTypes = NSMessage.CompressionTypes.GZIP
	abstract messageType: string
	acks?: number
	timeout?: number

	public constructor(payload: T[], partitionPayload?) {
		this.messages = payload.map(p => {
			p.messageType = this.constructor.name
			this.validatePayload(p)
			return {
				partition: this.getPartition(partitionPayload),
				key: Crypto.randomUUID(),
				value: JSON.stringify(p),
			}
		})
	}

	abstract getPartition(payload: any): number

	protected toString(): string {
		return JSON.stringify(this)
	}

	private createMessages(payload: T[]): NSMessage.IMessage {
		return {
			key: Crypto.randomUUID(),
			value: JSON.stringify(payload),
		}
	}

	abstract validatePayload(payload: T): void
}

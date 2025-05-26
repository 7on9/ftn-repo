import { Message } from '~/libs/@core/kafka'
import { NSMessage } from '~/libs/common/enums/NSMessage'

export interface CreateReportMessagePayload extends NSMessage.MessagePayload {
	userId: string
	action: string
}

export class CreateReportMessage extends Message<CreateReportMessagePayload> {
	override topic: string = NSMessage.NSKafkaTopics.GENERATE_REPORT
	override messageType: string = this.constructor.name

	constructor(payload: CreateReportMessagePayload[]) {
		super(payload)
		payload.forEach(p => this.validatePayload(p))
	}

	override validatePayload(payload: CreateReportMessagePayload): void {
		const { userId, action } = payload

		if (!userId) {
			throw new Error('userId is required.')
		}

		if (!action) {
			throw new Error('action is required.')
		}
	}
}

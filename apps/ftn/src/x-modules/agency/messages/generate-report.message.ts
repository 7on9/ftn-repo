import { Message } from '~/libs/@core/kafka'
import { NSMessage } from '~/libs/common/enums/NSMessage'

export interface CreateReportMessagePayload extends NSMessage.MessagePayload {
	userId: string
	action: string
	headers?: Record<string, string>
	reportId: number
}

export class CreateReportMessage extends Message<CreateReportMessagePayload> {
	override getPartition(payload: CreateReportMessagePayload): number {
		return payload.partition ?? payload.reportId % 3 // Example partitioning logic based on reportId
	}
	override topic: string = NSMessage.NSKafkaTopics.GENERATE_REPORT
	override messageType: string = this.constructor.name

	constructor(payload: CreateReportMessagePayload[], partitionPayload?: any) {
		super(payload, partitionPayload)
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

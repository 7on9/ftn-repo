import { Query } from '@nestjs/common'
import { DefController, DefGet } from '@libs/@core/decorator'
import { ReportService } from '../services'

@DefController('reports')
export class ReportController {
	constructor(private readonly reportService: ReportService) {}

	@DefGet('request', {
		summary: 'Request a new report',
	})
	async requestReport(@Query() query: { reportId: string }) {
		return this.reportService.startGenerateReport(query.reportId)
	}

	@DefGet('status', {
		summary: 'Get report status',
	})
	async getReportStatus(@Query() query: { reportId: string }) {
		return this.reportService.getReportStatus(query.reportId)
	}

	@DefGet(':id', {
		summary: 'Get report by ID',
	})
	async getReportById(@Query() query: { id: string }) {
		return this.reportService.getReport(query.id)
	}
}

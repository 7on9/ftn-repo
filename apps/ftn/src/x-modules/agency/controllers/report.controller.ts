import { Param, Query } from '@nestjs/common'
import { DefController, DefGet } from '@libs/@core/decorator'
import { ReportService } from '../services'

@DefController('reports')
export class ReportController {
	constructor(private readonly reportService: ReportService) {}

	@DefGet('request', {
		summary: 'Request a new report',
	})
	async requestReport(@Query('reportId') reportId: string) {
		return this.reportService.startGenerateReport(reportId)
	}

	@DefGet('request/sync', {
		summary: 'Request a new report synchronously',
	})
	async requestReportSynchronously(@Query('reportId') reportId: string) {
		return this.reportService.generateReportWithSimulatedTimeoutAndWait(reportId)
	}

	@DefGet('status', {
		summary: 'Get report status',
	})
	async getReportStatus(@Query('reportId') reportId: string) {
		return this.reportService.getReportStatus(reportId)
	}

	@DefGet(':id', {
		summary: 'Get report by ID',
	})
	async getReportById(@Param('id') id: string) {
		return this.reportService.getReport(id)
	}
}

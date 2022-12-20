import { QuestionTypeConfig } from './TestSummary.types';

type TestSummaryConfigArgs = {
	types: QuestionTypeConfig;
};
export const TestSummaryConfig: TestSummaryConfigArgs = {
	types: {
		gap: 'fill in the gap',
		mcq: 'mcq',
		ordering: 'ordering',
		essay: 'essay',
	},
};

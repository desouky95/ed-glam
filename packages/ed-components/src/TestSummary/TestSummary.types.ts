import {
	KeyPairAnswer,
	Options,
	OptionsPair,
	QuestionType,
	Answers,
	OrderingAnswer,
} from '..';

export type QuestionTypeConfig = { [key in QuestionType]: string };

type McqOption = {
	answer: string;
	correct: boolean;
	target?: number;
};
type OrderOption = {
	answer: Array<string>;
	correct: boolean;
	target?: number;
};
type GapOption = {
	answer: string | Array<string>;
	correct: boolean;
	target: number;
};
export type McqAnswers = {
	content?: {
		options: McqOption;
	};
} & Answers;
export type GapAnswers = {
	content?: {
		options: Array<GapOption>;
	};
} & Answers;
export type OrderAnswers = {
	content?: {
		options: OrderOption;
	};
} & Answers;

type QuestionOptions = Array<Options | string | OptionsPair>;
export type GapAnswerOptions = GapAnswers;
export type OrderAnswerOptions = OrderAnswers;
export type McqAnswerOptions = McqAnswers;

type QuestionAnswer =
	| Array<KeyPairAnswer>
	| OrderingAnswer
	| GapAnswerOptions
	| OrderAnswerOptions
	| McqAnswerOptions;
export type SummaryQuestion = {
	parsed_content: string | null;
	content: string | null;
	id: number;
	test_id: number;
	type: QuestionType;
	weight: number;
	feedback: string | null;
	order: number;
	options: QuestionOptions;
	answer: QuestionAnswer | null;
	score: number;
	correct: boolean;
};

export declare type Test = {
	id?: number;
	unit_id?: number;
	uuid?: string;
	title?: string;
	duration?: number;
	overall_score?: number;
	model_mode?: string;
	start_text?: string;
	end_text?: string;
	status?: string;
	score?: number;
	allow_movement?: boolean;
	show_score_percentage?: boolean;
	show_score_value?: boolean;
	show_grade?: boolean;
	active?: boolean;
	show_status?: boolean;
	show_correct_if_failed?: boolean;
	show_correct_if_passed?: boolean;
	test_summary: boolean;
	allow_repetition_when?: string;
	message_if_passed?: string;
	message_if_failed?: string;
	allowed_trials?: number;
	questions_count?: string;
	active_end_date?: Date;
	unit?: {
		id?: number;
		course_id?: number;
		name?: string;
		order?: number;
		type_id?: number;
		active?: boolean;
	};
	created_at?: Date;
	updated_at?: Date;
};
export type Attempt = {
	attempt: {
		end_date?: string;
		id?: number;
		student_id?: number;
		test_id?: number;
		active?: false;
		endDate?: Date;
		score?: number;
		status?: string;
		studentId?: number;
		testId?: number;
		testModelId?: number;
		test?: Test;
		questionsOrder?: Array<number>;
		questions?: Array<SummaryQuestion>;
		created_at?: Date;
		updated_at?: Date;
	};
};
export type IGapAnswer = Omit<SummaryQuestion, 'options' | 'type'> & {
	type: 'gap';
	options: Array<Options>;
	parsed_content: string;
	answer: GapAnswerOptions;
};
export type IOrderingAnswer = Omit<SummaryQuestion, 'options' | 'type'> & {
	type: 'ordering';
	options: QuestionOptions;
	content: string;
	answer: OrderAnswerOptions;
};
export type IMcqAnswer = Omit<SummaryQuestion, 'options' | 'type'> & {
	type: 'mcq';
	options: Array<Options>;
	content: string;
	answer: McqAnswerOptions;
};

export const isGapAnswer = (value: SummaryQuestion): value is IGapAnswer => {
	return value !== undefined && value.type === 'gap';
};
export const isOrderingAnswer = (
	value: SummaryQuestion
): value is IOrderingAnswer => {
	return value !== undefined && value.type === 'ordering';
};
export const isMcqAnswer = (value: SummaryQuestion): value is IMcqAnswer => {
	return value !== undefined && value.type === 'mcq';
};

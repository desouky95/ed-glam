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
type EssayOption = {
	answer: string | Array<string>;
	type: string;
};
type McqAnswers = {
	content?: {
		options: McqOption;
	};
} & Answers;
type MrqAnswers = {
	content?: {
		options: {
			answer: string[];
			correct: boolean;
		};
	};
} & Answers;
type GapAnswers = {
	content?: {
		options: Array<GapOption>;
	};
} & Answers;
type OrderAnswers = {
	content?: {
		options: OrderOption;
	};
} & Answers;
type EssayAnswers = {
	content?: {
		options: EssayOption;
	};
} & Answers;

type QuestionOptions = Array<Options | string | OptionsPair>;
type GapAnswerOptions = GapAnswers;
type OrderAnswerOptions = OrderAnswers;
type McqAnswerOptions = McqAnswers;
type MrqAnswerOptions = MrqAnswers;
type EssayAnswerOptions = EssayAnswers;

type QuestionAnswer =
	| Array<KeyPairAnswer>
	| OrderingAnswer
	| GapAnswerOptions
	| OrderAnswerOptions
	| McqAnswerOptions
	| EssayAnswerOptions;
export type SummaryQuestion = {
	parsed_content: string | null;
	answer_schema?: string;
	content: string | null;
	id: number;
	test_id: number;
	type: QuestionType;
	weight: number;
	feedback: string | null;
	order: number;
	options?: QuestionOptions;
	answer: QuestionAnswer;
	score: number;
	correct: boolean;
};

export type Test = {
	id?: number;
	unit_id?: number;
	uuid?: string;
	title?: string;
	duration?: number;
	passing_value: number;
	overall_score?: number;
	passing_unit: string;
	shuffle_questions: boolean;
	shuffle_answers: boolean;
	include_previous_attempts: boolean;
	student_notification_options: Array<any>;
	parent_notification_options: Array<any>;
	active_start_date: Date | null;
	locked: boolean;
	view_mode: string;
	model_mode?: string;
	start_text?: string;
	end_text?: string | null;
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
	message_if_passed?: string | null;
	message_if_failed?: string | null;
	allowed_trials?: number;
	questions_count?: string;
	active_end_date?: Date | null;
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
		grade: string | null;
		id?: number;
		test_model_id?: number | null;
		student_id?: number;
		test_id?: number;
		active?: boolean;
		notification_sent?: boolean;
		endDate?: Date;
		score?: number;
		status?: string;
		testModel?: string | null;
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
export type IEssayAnswer = Omit<SummaryQuestion, 'options' | 'type'> & {
	type: 'essay';
	options: Array<Options>;
	parsed_content: string;
	answer: EssayAnswerOptions;
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
export type IMrqAnswer = Omit<SummaryQuestion, 'options' | 'type'> & {
	type: 'mrq';
	options: Array<Options>;
	content: string;
	answer: MrqAnswerOptions;
};

export const isGapAnswer = (value: SummaryQuestion): value is IGapAnswer => {
	return value !== undefined && value.type === 'gap';
};
export const isEssayAnswer = (
	value: SummaryQuestion
): value is IEssayAnswer => {
	return value !== undefined && value.type === 'essay';
};
export const isOrderingAnswer = (
	value: SummaryQuestion
): value is IOrderingAnswer => {
	return value !== undefined && value.type === 'ordering';
};
export const isMcqAnswer = (value: SummaryQuestion): value is IMcqAnswer => {
	return value !== undefined && value.type === 'mcq';
};

export const isMrqAnswer = (value: SummaryQuestion): value is IMrqAnswer => {
	return value !== undefined && value.type === 'mrq';
};

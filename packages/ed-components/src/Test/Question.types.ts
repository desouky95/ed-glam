export type QuestionType = 'gap' | 'mcq' | 'ordering';
export type OptionsPair = { gap: string | number; choices: string[] };
export type KeyPairAnswer = {
	target: number | string | Array<string>;
	answer: string;
};
type McqOption = {
	answer: string;
	correct: boolean;
	target?: number;
};
type OrderOption = {
	answer: string | Array<string>;
	correct: boolean;
	target?: number;
};
type GapOption = {
	answer: string | Array<string>;
	correct: boolean;
	target: number;
};
export type McqAmswers = {
	content: {
		options: McqOption;
	};
} & Answers;
export type GapAnswers = {
	content: {
		options: Array<GapOption>;
	};
} & Answers;
export type OrderAnswers = {
	content: {
		options: OrderOption;
	};
} & Answers;
export type Answers = {
	id?: number;
	test_attempt_id?: number;
	test_question_id?: number;
	created_at?: Date;
	updated_at?: Date;
};
export type Options = {
	choice?: string;
	is_correct?: boolean;
	option?: string;
	test_question_id?: number;
	order?: number;
	gap?: number;
	choices?: string;
	correct?: string;
};
export type QuestionOptions = Array<Options | string | OptionsPair>;
export type GapAnswerOptions = GapAnswers;
export type OrderAnswerOptions = OrderAnswers;
export type McqAnswerOptions = McqAmswers;
export type OrderingAnswer = Array<string>;
export type ObjectPairAnswer = {
	answer: string;
};
export type QuestionAnswer =
	| Array<KeyPairAnswer>
	| OrderingAnswer
	| ObjectPairAnswer
	| GapAnswerOptions
	| OrderAnswerOptions
	| McqAnswerOptions;
export type Question = {
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
		questions?: Array<Question>;
		created_at?: Date;
		updated_at?: Date;
	};
};

export type IGapAnswer = Omit<Question, 'options' | 'type'> & {
	type: 'gap';
	options: Array<Options>;
	parsed_content: string;
	answer: GapAnswerOptions;
};
export type IOrderingAnswer = Omit<Question, 'options' | 'type'> & {
	type: 'ordering';
	options: QuestionOptions;
	content: string;
	answer: OrderAnswerOptions;
};
export type IMcqAnswer = Omit<Question, 'options' | 'type'> & {
	type: 'mcq';
	options: Array<Options>;
	content: string;
	answer: McqAnswerOptions;
};
export type IGapQuestion = Omit<Question, 'options' | 'type'> & {
	type: 'gap';
	options: Array<OptionsPair>;
	parsed_content: string;
	answer: Array<KeyPairAnswer>;
};
export type IOrderingQuestion = Omit<Question, 'options' | 'type'> & {
	type: 'ordering';
	options: Array<string>;
	content: string;
	answer: Array<string>;
};
export type IMcqQuestion = Omit<Question, 'options' | 'type'> & {
	type: 'mcq';
	options: Array<string>;
	content: string;
	answer: ObjectPairAnswer;
};
export const isGapAnswer = (value: Question): value is IGapAnswer => {
	return value !== undefined && value.type === 'gap';
};
export const isOrderingAnswer = (value: Question): value is IOrderingAnswer => {
	return value !== undefined && value.type === 'ordering';
};
export const isMcqAnswer = (value: Question): value is IMcqAnswer => {
	return value !== undefined && value.type === 'mcq';
};
export const isGapQuestion = (value: Question): value is IGapQuestion => {
	return value !== undefined && value.type === 'gap';
};
export const isOrderingQuestion = (
	value: Question
): value is IOrderingQuestion => {
	return value !== undefined && value.type === 'ordering';
};
export const isMcqQuestion = (value: Question): value is IMcqQuestion => {
	return value !== undefined && value.type === 'mcq';
};

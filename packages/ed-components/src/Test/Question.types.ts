export type QuestionType = 'gap' | 'mcq' | 'ordering';
export type OptionsPair = { gap: string | number; choices: string[] };
export type QuestionOptions = Array<string | OptionsPair>;
export type KeyPairAnswer = {
	target: number | string;
	answer: string;
};
export type OrderingAnswer = Array<string>;
export type ObjectPairAnswer = {
	answer: string;
};
export type QuestionAnswer =
	| Array<KeyPairAnswer>
	| OrderingAnswer
	| ObjectPairAnswer;
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
};

export type IGapQuestion = Omit<Question, 'options' | 'type' | 'answer'> & {
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

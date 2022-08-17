export type QuestionType = 'gap' | 'mcq' | 'ordering';
export type OptionsPair = { key: string | number; value: string[] };
export type QuestionOptions = Array<string | OptionsPair>;
export type KeyPairAnswer = {
	target: number | string;
	answer: string;
};
export type OrderingAnswer = Array<string>;
export type ObjectPairAnswer = {
	[key: string]: string;
};
export type QuestionAnswer = KeyPairAnswer | OrderingAnswer | ObjectPairAnswer;
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

export type IGapQuestion = Omit<Question, 'options' | 'type'> & {
	type: 'gap';
	options: Array<OptionsPair>;
	parsed_content: string;
};
export type IOrderingQuestion = Omit<Question, 'options' | 'type'> & {
	type: 'ordering';
	options: Array<string>;
	content: string;
};
export const isGapQuestion = (value: Question): value is IGapQuestion => {
	return value !== undefined && value.type === 'gap';
};
export const isOrderingQuestion = (
	value: Question
): value is IOrderingQuestion => {
	return value !== undefined && value.type === 'ordering';
};

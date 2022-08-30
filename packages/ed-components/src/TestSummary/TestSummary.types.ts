export type D = {};
// export type QuestionType = "gap" | "mcq" | "ordering";
// export type OptionsPair = { gap: string | number; choices: string[] };

// export type Answers = {
//   id?: number;
//   test_attempt_id?: number;
//   test_question_id?: number;
//   correct: boolean;
//   content: {
//     options: {
//       answer: Array<string>;
//       correct: boolean;
//     };
//   };
//   score: number;
//   created_at?: Date;
//   updated_at?: Date;
// };
// export type Options = {
//   choice?: string;
//   is_correct?: boolean;
//   option?: string;
//   test_question_id?: number;
//   order?: number;
// };
// export type AnswerOptions = Array<Answers>;

// export type QuestionOptions = Array<Options | OptionsPair | string>;

// export type KeyPairAnswer = {
//   target: number | string;
//   answer: string;
// };
// export type OrderingAnswer = Array<string>;
// export type ObjectPairAnswer = {
//   answer: string;
// };
// export type QuestionAnswer =
//   | Array<KeyPairAnswer>
//   | OrderingAnswer
//   | ObjectPairAnswer;
// export type Question = {
//   parsed_content: string | null;
//   content: string | null;
//   id: number;
//   test_id: number;
//   type: QuestionType;
//   weight: number;
//   feedback: string | null;
//   order: number;
//   options: QuestionOptions;
//   answer: AnswerOptions | null;
// };

// export type IGapQuestion = Omit<Question, "options" | "type"> & {
//   type: "gap";
//   options: Array<Options>;
//   parsed_content: string;
//   answer: Array<KeyPairAnswer>;
// };
// export type IOrderingQuestion = Omit<Question, "options" | "type"> & {
//   type: "ordering";
//   options: QuestionOptions;
//   content: string;
//   answer: AnswerOptions;
// };
// export type IMcqQuestion = Omit<Question, "options" | "type"> & {
//   type: "mcq";
//   options: Array<Options>;
//   content: string;
//   answer: ObjectPairAnswer;
// };
// export const isGapQuestion = (value: Question): value is IGapQuestion => {
//   return value !== undefined && value.type === "gap";
// };
// export const isOrderingQuestion = (
//   value: Question
// ): value is IOrderingQuestion => {
//   return value !== undefined && value.type === "ordering";
// };

// export const isMcqQuestion = (value: Question): value is IMcqQuestion => {
//   return value !== undefined && value.type === "mcq";
// };

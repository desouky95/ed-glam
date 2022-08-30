import { GapQuestion } from '@src/Test/GapQuestion';
import { OrderingQuestion } from '@src/Test/OrderingQuestion';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Question } from '@src/Test/Question.types';
import { TestAnswer } from './TestAnswer';

export default {
	subcomponents: {
		gap: GapQuestion,
		ordering: OrderingQuestion,
	},
} as ComponentMeta<any>;

export const Test = () => {
	const [questions, setQuestions] = useState<Array<Question>>([
		{
			parsed_content:
				'<p>&nbsp;</p>\n<p><span style="color: rgb(224, 62, 45);"><strong><img src="https://s3.eu-west-1.amazonaws.com/files.eduact.me/tinymc/d624e31348984971660571625196.jpg" alt="" width="188" height="239"></strong></span></p>\n<p>&nbsp;</p>\n<p><span style="color: rgb(224, 62, 45);"><strong>wewe $$1 &nbsp; dsdsd $$2 </strong></span></p>\n<p>&nbsp;</p>',
			id: 4,
			type: 'gap',
			weight: 3,
			feedback: '<p>2323</p>',
			order: 2,
			options: [
				{
					gap: 1,
					choices: ['we', 'we', 'wewe'],
				},
				{
					gap: 2,
					choices: ['we', 'wewe', 'w'],
				},
			],
			answer: [{ answer: 'we', target: 1 }],
			content: null,
			test_id: 3,
		},
		{
			content:
				'<h2><strong>order the following</strong><img src="https://s3.eu-west-1.amazonaws.com/files.eduact.me/tinymc/Screenshot2022-08-25at181661468605860.png" alt="" width="2880" height="1800"></h2><p>the order is:</p>',
			feedback: null,
			id: 44,
			options: [
				{
					option: 'Lorem epsiem to make',
					test_question_id: 116,
					order: 1,
				},
				{
					option: 'Lorem epsiem to make letter',
					test_question_id: 116,
					order: 2,
				},
			],
			answer: [
				{
					correct: false,
					content: {
						options: {
							answer: [
								'Lorem epsiem to make something create',
								'Lorem epsiem to make something',
							],
							correct: false,
						},
					},
					score: 0,
				},
			],
			order: 2,
			parsed_content: null,
			test_id: 19,
			type: 'ordering',
			weight: 6,
		},
		{
			id: 10,
			test_id: 3,
			weight: 5,
			content: 'what is the best solution ?',
			parsed_content: null,
			type: 'mcq',
			feedback: 'no',
			order: 10,
			options: [
				{
					choice: 'test',
					is_correct: false,
				},
				{
					choice: 'test2',
					is_correct: true,
				},
			],
			answer: null,
		},
	]);
	return (
		<div>
			{questions.map((question, index) => {
				return <TestAnswer index={index} question={question} />;
			})}
		</div>
	);
};

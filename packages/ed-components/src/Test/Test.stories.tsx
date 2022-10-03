import { useCountdown } from '@eduact/utils';
import { ComponentMeta } from '@storybook/react';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { GapQuestion } from './GapQuestion';
import { OrderingQuestion } from './OrderingQuestion';
import { Question } from './Question.types';
import TestQuestion from './TestQuestion/TestQuestion';

export default {
	subcomponents: {
		gap: GapQuestion,
		ordering: OrderingQuestion,
	},
} as ComponentMeta<any>;

export const Test = () => {
	const [questions, setQuestions] = useImmer<Array<Question>>([
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
			// answer: [{ answer: 'we', target: 1 }],
			answer: null,
			content: null,
			test_id: 3,

			correct: false,
			score: 0,
		},
		{
			answer: null,
			content:
				'<h2><strong>order the following</strong><img src="https://s3.eu-west-1.amazonaws.com/files.eduact.me/tinymc/Screenshot2022-08-25at181661468605860.png" alt="" width="2880" height="1800"></h2><p>the order is:</p>',
			feedback: null,
			id: 44,
			options: ['Frankfurt', 'Liverpool', 'Bayern', 'Real Madrid', 'Man City'],
			order: 2,
			parsed_content: null,
			test_id: 19,
			type: 'ordering',
			weight: 6,

			correct: false,
			score: 0,
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
			options: ['first option', 'second option', 'third option'],
			answer: null,
			correct: false,
			score: 0,
		},
		{
			id: 11,
			test_id: 3,
			weight: 5,
			content: 'what is the best solution ?',
			parsed_content: null,
			type: 'mcq',
			feedback: 'no',
			order: 10,
			options: ['first option', 'second option', 'third option'],
			answer: null,
			correct: false,
			score: 0,
		},
	]);
	console.log(questions);
	return (
		<div>
			{questions.map((question, index) => {
				return (
					<TestQuestion
						onChange={(val) => {
							console.log(val);
							setQuestions((draft) => {
								draft[index].answer = val;
							});
						}}
						index={index}
						withNavigation
						question={question}
						showPrev={index > 0}
					/>
				);
			})}
		</div>
	);
};

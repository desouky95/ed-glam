import { GapQuestion } from '@src/Test/GapQuestion';
import { OrderingQuestion } from '@src/Test/OrderingQuestion';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { TestAnswer } from './TestAnswer';
import { Question } from './TestSummary.types';

export default {
	subcomponents: {
		gap: GapQuestion,
		ordering: OrderingQuestion,
	},
} as ComponentMeta<any>;

export const Test = () => {
	const [questions, setQuestions] = useState<Array<Question>>([
		// {
		//   parsed_content:
		//     '<p>&nbsp;</p>\n<p><span style="color: rgb(224, 62, 45);"><strong><img src="https://s3.eu-west-1.amazonaws.com/files.eduact.me/tinymc/d624e31348984971660571625196.jpg" alt="" width="188" height="239"></strong></span></p>\n<p>&nbsp;</p>\n<p><span style="color: rgb(224, 62, 45);"><strong>wewe $$1 &nbsp; dsdsd $$2 </strong></span></p>\n<p>&nbsp;</p>',
		//   id: 4,
		//   type: "gap",
		//   weight: 3,
		//   feedback: "<p>2323</p>",
		//   order: 2,
		//   options: [
		//     {
		//       gap: 1,
		//       choices: ["we", "we", "wewe"],
		//     },
		//     {
		//       gap: 2,
		//       choices: ["we", "wewe", "w"],
		//     },
		//   ],
		//   answer: [{ answer: "we", target: 1 }],
		//   content: null,
		//   test_id: 3,
		// },
		{
			answer: null,
			content:
				'<h2><strong>order the following</strong><img src="https://s3.eu-west-1.amazonaws.com/files.eduact.me/tinymc/Screenshot2022-08-25at181661468605860.png" alt="" width="2880" height="1800"></h2><p>the order is:</p>',
			feedback: null,
			id: 44,
			options: [
				{
					answer: ['2', '3', '1'],
					is_correct: false,
				},
				{
					answer: ['1', '2', '3'],
					is_correct: true,
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
			// options: ["first option", "second option", "third option"],
			answer: null,
		},
	]);
	return (
		<div>
			{questions.map((question, index) => {
				return (
					<TestAnswer
						// onChange={(val) => {}}
						index={index}
						// withNavigation
						question={question}
						// showPrev={index > 0}
					/>
				);
			})}
		</div>
	);
};

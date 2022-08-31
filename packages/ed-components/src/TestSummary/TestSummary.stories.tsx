import { GapQuestion } from '@src/Test/GapQuestion';
import { OrderingQuestion } from '@src/Test/OrderingQuestion';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Base, Question } from '@src/Test/Question.types';
import { TestAnswer } from './TestAnswer';
import styled from 'styled-components';

type TestProps = {
	test: Base;
};

export default {
	subcomponents: {
		gap: GapQuestion,
		ordering: OrderingQuestion,
	},
} as ComponentMeta<any>;

export const Test = () => {
	const [testInfo] = useState<Base>({
		status: 'failed',
		score: 2,
		test: {
			test_summary: true,
			show_correct_if_passed: false,
			show_correct_if_failed: true,
		},
	});
	const [questions] = useState<Array<Question>>([
		{
			parsed_content:
				'<p>Lorem epsiem to make $$1 Lorem epsiem to make something for the creation</p>',
			id: 4,
			type: 'gap',
			weight: 3,
			feedback:
				'<p>Question form of Lorem epsiem to make a better surrounding to create something for feedback that has a limit and make a straight for the lorem epsiem form of Lorem epsiem to make a better surrounding to create something for feedback</p>',
			order: 2,
			options: [
				{
					gap: 1,
					choices: '[flea|mosquito]',
					test_question_id: 139,
					correct: 'mosquito',
				},
			],
			answer: [
				{
					correct: false,
					content: {
						options: [
							{
								answer: 'flea',
								target: 1,
								correct: false,
							},
						],
					},
					score: 2,
				},
			],
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
			answer: [
				{
					correct: false,
					content: {
						options: {
							answer: 'test',
							correct: false,
						},
					},
					score: 0,
				},
			],
		},
	]);
	return (
		<div>
			{testInfo?.test.test_summary && (
				<>
					<SummaryHeader>Test Summary</SummaryHeader>
					{questions.map((question, index) => {
						return (
							<TestAnswer test={testInfo} index={index} question={question} />
						);
					})}
				</>
			)}
		</div>
	);
};

const SummaryHeader = styled.div`
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	height: 4.5rem;
	display: flex;
	align-items: center;
	margin: 1rem 0;
	padding-left: 1.125rem;
`;
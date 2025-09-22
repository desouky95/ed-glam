import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { TestAnswer } from './TestAnswer';
import styled from 'styled-components';
import { Attempt, IMrqAnswer } from './TestSummary.types';
import React from 'react';
import { GapQuestion } from '../Test/GapQuestion';
import { OrderingQuestion } from '../Test/OrderingQuestion';
import { isNullOrUndefined } from 'util';
import { IMrqQuestion } from '@src/Test/Question.types';

export default {
	subcomponents: {
		gap: GapQuestion,
		ordering: OrderingQuestion,
	},
} as ComponentMeta<any>;

export const Test = () => {
	const [attemptInfo] = useState<Attempt>({
		attempt: {
			id: 476,
			student_id: 2,
			test_id: 67,
			status: 'failed',
			score: 0,
			grade: null,
			test_model_id: null,
			end_date: '2022-09-10T21:40:44.108+00:00',
			active: false,
			notification_sent: false,
			testModel: null,
			test: {
				active: true,
				active_end_date: null,
				active_start_date: null,
				allow_movement: false,
				allow_repetition_when: 'always',
				allowed_trials: 500,
				duration: 2,
				end_text: null,
				id: 327,
				include_previous_attempts: false,
				locked: true,
				message_if_failed: null,
				message_if_passed: null,
				model_mode: 'single',
				overall_score: 4,
				parent_notification_options: [],
				passing_unit: 'point',
				passing_value: 2,
				show_correct_if_failed: true,
				show_correct_if_passed: true,
				show_grade: true,
				show_score_percentage: true,
				show_score_value: true,
				show_status: true,
				shuffle_answers: false,
				shuffle_questions: false,
				start_text: 'DDDD',
				student_notification_options: [],
				test_summary: true,
				title: 'test 327',
				unit_id: 779,
				uuid: 'c7053c533e3e4440ad5b7e03f924aaf9',
				view_mode: 'single',
			},
			questions: [
				{
					id: 120,
					test_id: 67,
					weight: 1,
					content: '<p>this is question 1</p>',
					parsed_content: null,

					type: 'mcq',
					feedback: null,
					order: 1,
					options: [
						{
							is_correct: true,
							test_question_id: 120,
							choice: '1',
						},
						{
							is_correct: false,
							test_question_id: 120,
							choice: '2',
						},
						{
							is_correct: false,
							test_question_id: 120,
							choice: '3',
						},
					],
					answer: {
						content: {
							options: {
								answer: '2',
								correct: true,
							},
						},
					},
					correct: true,
					score: 0,
				},
				{
					id: 120,
					test_id: 67,
					weight: 1,
					content: '<p>this is question 1 MRQ</p>',
					parsed_content: null,
					type: 'mrq',
					feedback: null,
					order: 1,
					options: [
						{
							is_correct: true,
							test_question_id: 120,
							choice: '1',
						},
						{
							is_correct: false,
							test_question_id: 120,
							choice: '2',
						},
						{
							is_correct: false,
							test_question_id: 120,
							choice: '3',
						},
						{
							is_correct: true,
							test_question_id: 120,
							choice: '4',
						},
					],
					answer: {
						content: {
							options: [
								{
									answer: '1',
									correct: true,
								},
								{
									answer: '2',
									correct: false,
								},
								{
									answer: '4',
									correct: true,
								},
							],
						},
					},
					correct: false,
					score: 0,
				} as IMrqAnswer,
				{
					id: 121,
					test_id: 67,
					weight: 1,
					content: '<p>test 2</p>',
					parsed_content: null,
					type: 'mcq',
					feedback: null,
					order: 2,
					options: [
						{
							is_correct: false,
							test_question_id: 121,
							choice: '1',
						},
						{
							is_correct: true,
							test_question_id: 121,
							choice: 'c',
						},
					],
					answer: {},
					correct: false,
					score: 0,
				},
				{
					id: 906,
					test_id: 67,
					weight: 2,
					content: '<p>how is your first essay test?</p>',
					parsed_content: null,
					type: 'essay',
					feedback: '<p>how is your first essay test?</p>',
					answer_schema: 'text',
					order: 1,
					answer: {
						content: {
							options: {
								answer:
									'["https://s3.eu-west-1.amazonaws.com/files.eduact.me/uncategorized/1672229684877.pdf","https://s3.eu-west-1.amazonaws.com/files.eduact.me/uncategorized/1672229687478.pdf","https://s3.eu-west-1.amazonaws.com/files.eduact.me/uncategorized/1672229692665.pdf"]',
								type: 'attachment',
							},
						},
					},
					correct: false,
					score: 1,
				},
				{
					id: 3575,
					test_id: 67,
					weight: 2,
					content: '<p>how is your first essay test?</p>',
					type: 'gap',
					parsed_content: '<p>Ismail is $$1 and bolla is?</p>',
					feedback: '<p>how is your first gap test?</p>',
					order: 1,
					options: [
						{
							choices: '[great|eight|sobeet]',
							correct: 'great',
							gap: 1,
							test_question_id: 3575,
						},
					],
					answer: {
						content: {
							options: [
								{
									answer: 'eight',
									correct: false,
									target: 1,
								},
							],
						},
					},
					correct: false,
					score: 1,
				},
			],
		},
	});

	return (
		<div>
			{attemptInfo?.attempt?.test?.test_summary && (
				<>
					<SummaryHeader>Test Summary</SummaryHeader>
					{attemptInfo?.attempt?.questions?.map((question, index) => {
						return (
							<TestAnswer
								test={attemptInfo?.attempt?.test}
								index={index}
								question={question}
								status={attemptInfo?.attempt.status}
								type={'fill in the gap'}
								questionNum={'Q'}
								points={'points'}
								notAnswered={'not answered'}
							/>
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

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
			id: 1140,
			student_id: 195,
			test_id: 372,
			status: 'failed',
			score: 0,
			grade: null,
			test_model_id: null,
			end_date: null,
			active: false,
			created_at: '2025-09-24T17:23:17.069+00:00',
			updated_at: '2025-09-24T17:28:35.933+00:00',
			notification_sent: false,
			overall_score: 3,
			auto_evaluate: true,
			evaluation_status: null,
			testModel: null,
			test: {
				id: 372,
				unit_id: 939,
				uuid: 'f59ff6df2fd9493b81be1005d9e8ac77',
				title: 'test 370',
				duration: null,
				overall_score: 3,
				passing_value: 1,
				passing_unit: 'point',
				allowed_trials: 2000,
				allow_repetition_when: 'always',
				model_mode: 'single',
				shuffle_questions: false,
				shuffle_answers: false,
				// show_correct_if_passed: true,
				show_correct_if_failed: true,
				start_text: null,
				end_text: null,
				message_if_passed: null,
				message_if_failed: null,
				allow_movement: true,
				view_mode: 'single',
				show_score_percentage: true,
				show_score_value: true,
				show_grade: false,
				active: true,
				active_start_date: null,
				active_end_date: null,
				test_summary: true,
				created_at: '2025-09-24T15:33:18.461+00:00',
				updated_at: '2025-09-24T17:22:23.990+00:00',
				locked: true,
				show_status: true,
				student_notification_options: [],
				parent_notification_options: [],
				include_previous_attempts: false,
			},
			questions: [
				{
					id: 4717,
					test_id: 372,
					weight: 1,
					content: '<p>q111</p>',
					parsed_content: null,
					type: 'mrq',
					feedback: null,
					order: 1,
					created_at: '2025-09-24T15:33:53.314+00:00',
					updated_at: '2025-09-24T15:33:53.314+00:00',
					answer_schema: '*',
					options: [
						{
							is_correct: true,
							test_question_id: 4717,
							choice: 'a',
						},
						{
							is_correct: false,
							test_question_id: 4717,
							choice: 'b',
						},
						{
							is_correct: true,
							test_question_id: 4717,
							choice: 'c',
						},
						{
							is_correct: false,
							test_question_id: 4717,
							choice: 'd',
						},
						{
							is_correct: false,
							test_question_id: 4717,
							choice: 'e',
						},
					],
					answer: {
						id: 5107,
						test_attempt_id: 1140,
						test_question_id: 4717,
						content: {
							options: [
								{
									answer: 'b',
									correct: false,
								},
								{
									answer: 'c',
									correct: true,
								},
							],
						},
						created_at: '2025-09-24T17:28:32.615+00:00',
						updated_at: '2025-09-24T17:28:32.616+00:00',
						feedback: null,
					},
					correct: false,
					score: 0,
				},
				{
					id: 4718,
					test_id: 372,
					weight: 1,
					content: '<p>q112</p>',
					parsed_content: null,
					type: 'mrq',
					feedback: null,
					order: 2,
					created_at: '2025-09-24T15:34:11.617+00:00',
					updated_at: '2025-09-24T15:34:11.617+00:00',
					answer_schema: '*',
					options: [
						{
							is_correct: false,
							test_question_id: 4718,
							choice: 'a',
						},
						{
							is_correct: true,
							test_question_id: 4718,
							choice: 'b',
						},
						{
							is_correct: false,
							test_question_id: 4718,
							choice: 'c',
						},
						{
							is_correct: true,
							test_question_id: 4718,
							choice: 'd',
						},
						{
							is_correct: false,
							test_question_id: 4718,
							choice: 'e',
						},
					],
					answer: {
						id: 5106,
						test_attempt_id: 1140,
						test_question_id: 4718,
						content: {
							options: [
								{
									answer: 'b',
									correct: true,
								},
								{
									answer: 'c',
									correct: false,
								},
							],
						},
						created_at: '2025-09-24T17:28:32.335+00:00',
						updated_at: '2025-09-24T17:28:32.335+00:00',
						feedback: null,
					},
					correct: false,
					score: 0,
				},
				{
					id: 4719,
					test_id: 372,
					weight: 1,
					content: '<p>q113</p>',
					parsed_content: null,
					type: 'mrq',
					feedback: null,
					order: 3,
					created_at: '2025-09-24T15:34:32.028+00:00',
					updated_at: '2025-09-24T15:34:32.028+00:00',
					answer_schema: '*',
					options: [
						{
							is_correct: false,
							test_question_id: 4719,
							choice: 'a',
						},
						{
							is_correct: false,
							test_question_id: 4719,
							choice: 'b',
						},
						{
							is_correct: true,
							test_question_id: 4719,
							choice: 'c',
						},
						{
							is_correct: false,
							test_question_id: 4719,
							choice: 'd',
						},
						{
							is_correct: true,
							test_question_id: 4719,
							choice: 'e',
						},
					],
					answer: {
						id: 5109,
						test_attempt_id: 1140,
						test_question_id: 4719,
						content: {
							options: [
								{
									answer: 'b',
									correct: false,
								},
								{
									answer: 'c',
									correct: true,
								},
							],
						},
						created_at: '2025-09-24T17:28:35.945+00:00',
						updated_at: '2025-09-24T17:28:35.945+00:00',
						feedback: null,
					},
					correct: false,
					score: 0,
				},
			],
		},
	} as any);

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
								extraContent={({ question, showCorrectAnswer }) => {
									if (question.type !== 'mrq' || !showCorrectAnswer) return null;
									return <div>Content</div>;
								}}
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

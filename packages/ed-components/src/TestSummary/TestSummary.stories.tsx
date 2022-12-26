import { GapQuestion } from '@src/Test/GapQuestion';
import { OrderingQuestion } from '@src/Test/OrderingQuestion';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { TestAnswer } from './TestAnswer';
import styled from 'styled-components';
import { Attempt } from './TestSummary.types';

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
			status: 'passed',
			score: 0,
			grade: null,
			test_model_id: null,
			end_date: '2022-09-10T21:40:44.108+00:00',
			active: false,
			notification_sent: false,
			testModel: null,
			test: {
				id: 67,
				unit_id: 134,
				uuid: '760136b174104c228e31c00136c696c8',
				title: 'test 67',
				duration: 1,
				overall_score: 2,
				passing_value: 2,
				passing_unit: 'point',
				allowed_trials: 1,
				allow_repetition_when: 'always',
				model_mode: 'single',
				shuffle_questions: true,
				shuffle_answers: true,
				show_correct_if_passed: true,
				show_correct_if_failed: false,
				start_text: 'uyiuhj',
				end_text: null,
				message_if_passed: null,
				message_if_failed: null,
				allow_movement: true,
				view_mode: 'single',
				show_score_percentage: true,
				show_score_value: true,
				show_grade: true,
				active: true,
				active_start_date: null,
				active_end_date: null,
				test_summary: true,
				locked: true,
				show_status: true,
				student_notification_options: [],
				parent_notification_options: [],
				include_previous_attempts: false,
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
								correct: false,
							},
						},
					},
					correct: true,
					score: 0,
				},
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
								answer: 'not bad ...',
								type: 'text',
							},
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

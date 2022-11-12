import { FlexLayout } from '@eduact/ed-system';
import Spacer from '../../Spacer';
import { QuestionContentWrapper } from '../../Test/Question.styled';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { FeedbacktWrapper } from '../GapAnswer/GapAnswer';
import { IOrderingAnswer, Test } from '../TestSummary.types';

type OrderingProps = {
	question: IOrderingAnswer;
	test: Test | undefined;
	status: string | undefined;
};
type Option = {
	answer: Array<string>;
	is_correct: boolean;
};
type Options = {
	option: Option;
	id: string;
};

const OrderingAnswer: React.VoidFunctionComponent<OrderingProps> = ({
	question,
	test,
	status,
}) => {
	const [options] = useState<Array<Options | any>>(question.options);

	const isCorrect = useMemo(() => {
		return question.correct;
	}, [question]);

	const showStudentAnswer = useMemo(() => {
		return status === 'passed' && test?.show_correct_if_passed === false;
	}, []);
	const showCorrectAnswer = useMemo(() => {
		return status === 'passed' && test?.show_correct_if_passed === true;
	}, []);

	const isStudentFailed = useMemo(() => {
		return status === 'failed' && test?.show_correct_if_failed === false;
	}, []);

	const isStudentFailedRightAnswer = useMemo(() => {
		return status === 'failed' && test?.show_correct_if_failed === true;
	}, []);

	return (
		<div>
			<QuestionContentWrapper
				dangerouslySetInnerHTML={{ __html: question.content }}
			/>
			<Spacer mb={{ sm: '0.813rem', lg: '2.313rem' }} />
			<FlexLayout
				mb={{ sm: '1rem', lg: '2rem' }}
				flexDirection="column"
				gridGap="1.5rem"
				flexWrap="wrap"
			>
				{question.answer.content?.options.answer.map((_) => {
					return (
						<Answer
							key={`${question.id}`}
							background={`${
								question.answer.content?.options.correct ? '#e5fbf0' : '#ffd5cc'
							}`}
						>
							{' '}
							{_}{' '}
						</Answer>
					);
				})}
			</FlexLayout>
			{isCorrect !== undefined &&
				!isCorrect &&
				(showCorrectAnswer || isStudentFailedRightAnswer) && (
					<>
						<Text>Correct answer</Text>
						<FlexLayout
							mb={{ sm: '1rem', lg: '2rem' }}
							flexDirection="column"
							gridGap="1.5rem"
							flexWrap="wrap"
						>
							{options?.map((opt, index) => {
								return (
									<Answer key={`${opt.option}-${index}`} background="#e5fbf0">
										{opt.option}
									</Answer>
								);
							})}
						</FlexLayout>
					</>
				)}
			{question.feedback !== null && (
				<>
					<Text>Feedback</Text>
					<FeedbacktWrapper
						dangerouslySetInnerHTML={{ __html: question.feedback as string }}
					/>
				</>
			)}
		</div>
	);
};

const AnswerText = styled.p`
	margin-bottom: 1erm;
`;

const Answer = styled.span<{ background: string }>`
	font-size: 0.625rem;
	font-weight: 600;
	background: ${({ background }) => background};
	min-height: 1.063rem;
	border-radius: 10px;
	padding: 0.594rem 3rem 0.5rem 1rem;
	width: fit-content;
	@media screen and (min-width: 769px) {
		font-size: 1.125rem;
	}
`;
export const Text = styled.p`
	font-size: 0.625rem;
	font-weight: 500;
	color: #707070;
	display: flex;
	align-items: center;
	gap: 0.719rem;
	margin-bottom: 0.938rem;
	margin-top: 0.938rem;
	@media screen and (min-width: 769px) {
		font-size: 0.875rem;
		gap: 1rem;
		margin-top: 2.75rem;
		margin-bottom: 3.188rem;
	}
	&::after {
		content: '';
		height: 0;
		flex-grow: 1;
		border: solid 0.5px #d3d3d3;
	}
`;

export default OrderingAnswer;

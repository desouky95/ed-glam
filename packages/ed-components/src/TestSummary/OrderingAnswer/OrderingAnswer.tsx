import { FlexLayout } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import { QuestionContentWrapper } from '@src/Test/Question.styled';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Answers, IOrderingAnswer, Test } from '../TestSummary.types';

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
	const [answers] = useState<Answers | any>(question.answer);

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
				<Answer
					key={`${question.id}`}
					background={`${
						question.answer.content.options.correct ? '#e5fbf0' : '#ffd5cc'
					}`}
				>
					{question.answer.content.options.answer}
				</Answer>
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
		</div>
	);
};

const Answer = styled.span<{ background: string }>`
	font-size: 0.625rem;
	font-weight: 600;
	background: ${({ background }) => background};
	min-height: 1.063rem;
	border-radius: 10px;
	padding: 0.594rem 3rem 0.5rem 1rem;
	width: fit-content;
	${({ theme }) => `${theme.mediaQueries.medium}{
	font-size: 1.125rem;
}`}
`;
export const Text = styled.p`
	font-size: 0.625rem;
	font-weight: 500;
	color: #707070;
	display: flex;
	align-items: center;
	gap: 0.719rem;
	${({ theme }) => `${theme.mediaQueries.medium}{
	font-size: 0.875rem;
	gap: 1rem;	
}`}
	&::after {
		content: '';
		height: 0;
		flex-grow: 1;
		border: solid 1px #d3d3d3;
	}
`;

export default OrderingAnswer;

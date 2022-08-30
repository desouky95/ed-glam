import { FlexLayout } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import { QuestionContentWrapper } from '@src/Test/Question.styled';
import { Answers, IOrderingAnswer } from '@src/Test/Question.types';
import React, { useState } from 'react';
import styled from 'styled-components';

type OrderingProps = {
	question: IOrderingAnswer;
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
}) => {
	const [options] = useState<Array<Options | any>>(question.options);
	const [answers] = useState<Array<Answers | any>>(question.answer);

	const showCorrectAnswer = true;
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
				{answers?.map((answer) => {
					const ans = answer?.content.options.answer;
					return ans?.map((_: string, index: number) => (
						<Answer key={`${_}-${index}`} background="#ffd5cc">
							{_}
						</Answer>
					));
				})}
			</FlexLayout>
			{showCorrectAnswer && (
				<>
					<CorrectText>Correct answer</CorrectText>
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
const CorrectText = styled.p`
	font-size: 0.625rem;
	font-weight: 500;
	color: #707070;
	${({ theme }) => `${theme.mediaQueries.medium}{
	font-size: 0.875rem;
}`}
`;

export default OrderingAnswer;

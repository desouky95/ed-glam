import React, { useRef } from 'react';
import styled from 'styled-components';
import { QuestionContentWrapper } from '../../Test/Question.styled';
import { IEssayAnswer, Test } from '../TestSummary.types';
import { Text } from '../OrderingAnswer/OrderingAnswer';
import { FeedbacktWrapper } from '../GapAnswer/GapAnswer';
import AnswerAttachments from './AnswerAttachments';
import { Typography } from '@eduact/ed-system';

type EssayProps = {
	question: IEssayAnswer;
	test: Test | undefined;
	status: string | undefined;
};

const EssayAnswer: React.VoidFunctionComponent<EssayProps> = ({
	question,
	status,
	test,
}) => {
	const gapRef = useRef<HTMLDivElement>(null);

	return (
		<QuestionContentWrapper>
			{question.content && (
				<StyledContainer
					ref={gapRef}
					dangerouslySetInnerHTML={{ __html: question?.content }}
				/>
			)}
			<AnswersLabel fontSize={{ sm: '0.5rem', lg: '1rem' }} fontFamily="Roboto">
				Answer
			</AnswersLabel>
			{question.answer.content?.options.type === 'text' && (
				<Answer>{question.answer.content?.options.answer}</Answer>
			)}
			{question.answer.content?.options.type === 'attachment' && (
				<AnswerAttachments
					answer={question.answer.content?.options.answer as string}
				/>
			)}
			{question.feedback !== null && (
				<>
					<FeebackText>Feedback</FeebackText>
					<FeedbacktWrapper
						dangerouslySetInnerHTML={{ __html: question?.feedback as string }}
					/>
				</>
			)}
		</QuestionContentWrapper>
	);
};

const FeebackText = styled(Text)`
	margin: 0.563rem;
	@media screen and (min-width: 769px) {
		margin: 2.063rem;
	}
`;
const AnswersLabel = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
	font-size: 1rem;
	font-weight: 300;
	@media screen and (min-width: 769px) {
		margin-bottom: 0.75rem;
	}
`;
const Answer = styled.p`
	font-size: 0.75rem;
	font-weight: 500;
	color: #2f2e41;
	line-height: 1.9;
	letter-spacing: 0.09px;
	margin-bottom: 0.75rem;
	@media screen and (min-width: 769px) {
		font-size: 1.125rem;
		line-height: 1.7;
		letter-spacing: 0.14px;
	}
`;

const StyledContainer = styled.div`
	font-size: 0.75rem;
	font-weight: 600;
	color: #2f2e41;
	line-height: 1.9;
	letter-spacing: 0.09px;
	@media screen and (min-width: 769px) {
		font-size: 1.125rem;
		line-height: 1.7;
		letter-spacing: 0.14px;
	}
`;

export default EssayAnswer;

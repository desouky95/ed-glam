import { FlexLayout, Typography, DefaultBrowserCss } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import {
	Question,
	isMcqAnswer,
	isOrderingAnswer,
	isGapAnswer,
} from '@src/Test/Question.types';
import React from 'react';
import styled from 'styled-components';
import GapAnswer from '../GapAnswer/GapAnswer';
import McqAnswer from '../McqAnswer/McqAnswer';
import OrderingAnswer from '../OrderingAnswer/OrderingAnswer';

type Props = {
	question: Question;
	index: number;
};

const TestAnswer: React.VoidFunctionComponent<Props> = ({ question }) => {
	return (
		<QuestionContainer tabIndex={question.id}>
			<QuestionWrapper>
				<QuestionHeader>
					<QuestionOrder>Q{question.order}.</QuestionOrder>
					<QuestionPoints>
						<Type>{question.type}</Type>
						<Spacer mx={'0.5rem'} />
						<Points>Points </Points>
						<Spacer mx={'0.5rem'} />
						<Degree>{question.weight}</Degree>
					</QuestionPoints>
				</QuestionHeader>
				<Spacer mb={{ sm: '1rem', lg: '2rem' }} />
				<div>
					{isMcqAnswer(question) && <McqAnswer question={question} />}
					{isOrderingAnswer(question) && <OrderingAnswer question={question} />}
					{isGapAnswer(question) && <GapAnswer question={question} />}
				</div>
			</QuestionWrapper>
		</QuestionContainer>
	);
};

export default TestAnswer;

const QuestionContainer = styled.div`
	${DefaultBrowserCss};
	img {
		display: block;
		height: auto;
	}
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	background: #fff;
	padding: 1rem;
	border-radius: 8px;
	margin-bottom: 0.313rem;
	${({ theme }) => `${theme.mediaQueries.medium}{
	margin-bottom: 1rem;
}`}
`;
const QuestionWrapper = styled.div`
	${({ theme }) => `${theme.mediaQueries.large}{
	padding : 0 8rem;
}`}
`;
const QuestionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #d3d3d3;
	padding-bottom: 8px;
	align-items: center;
	${({ theme }) => `${theme.mediaQueries.large}{
		padding-bottom : 2rem;
	}`}
`;
const QuestionOrder = styled.span`
	font-size: 0.625rem;
	font-weight: bold;
	${({ theme }) => `${theme.mediaQueries.medium}{
		font-size : 1.25rem;
	}`}
`;
const QuestionPoints = styled.span`
	font-size: 8px;
	font-weight: bold;
	display: flex;
	align-items: center;
	/* gap: 0.85rem; */
	${({ theme }) => `${theme.mediaQueries.large}{
		font-size : 16px;
    // gap: 4rem;
	}`}
`;
const Type = styled(Typography)`
	font-size: 0.5rem;
	font-weight: 600;
	color: #251b33;
	margin-top: -3px;
	${({ theme }) => `${theme.mediaQueries.medium}{
	font-size: 1rem;
}`}
`;
const Points = styled(Typography)`
	font-size: 0.5rem;
	font-weight: 500;
	color: ${(props) => props.theme.colors.silver};
	${({ theme }) => `${theme.mediaQueries.medium}{
	font-size: 1rem;
}`}
`;
const Degree = styled.span`
	font-size: 0.5rem;
	font-weight: 600;
	color: #251b33;
	${({ theme }) => `${theme.mediaQueries.medium}{
	font-size: 1rem;
}`}
`;

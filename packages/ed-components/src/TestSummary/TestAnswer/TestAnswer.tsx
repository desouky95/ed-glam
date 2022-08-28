import { FlexLayout, Typography, DefaultBrowserCss } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import React from 'react';
import styled from 'styled-components';
import { McqAnswer } from '../McqAnswer';
import OrderingAnswer from '../OrderingAnswer/OrderingAnswer';
import {
	isMcqQuestion,
	isOrderingQuestion,
	Question,
} from '../TestSummary.types';

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
						<Points>Points </Points>
						<Spacer mx={'0.5rem'} />
						<span>{question.weight}</span>
					</QuestionPoints>
				</QuestionHeader>
				<Spacer mb={{ sm: '1rem', lg: '2rem' }} />
				<div>
					{isMcqQuestion(question) && <McqAnswer question={question} />}
					{isOrderingQuestion(question) && (
						<OrderingAnswer question={question} />
					)}
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
	font-size: 10px;
	font-weight: bold;
	${({ theme }) => `${theme.mediaQueries.large}{
		font-size : 20px;
	}`}
`;

const QuestionPoints = styled.span`
	font-size: 8px;
	font-weight: bold;
	display: flex;
	align-items: center;
	${({ theme }) => `${theme.mediaQueries.large}{
		font-size : 16px;
	}`}
`;

const NavigationButton = styled(FlexLayout)`
	color: ${(props) => props.theme.colors.primary};
	cursor: pointer;
	transition: opacity ease-in-out 300ms;
	&:hover {
		opacity: 0.8;
	}
`;
const Points = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
`;

import { Typography, DefaultBrowserCss } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import React from 'react';
import styled from 'styled-components';
import GapAnswer from '../GapAnswer/GapAnswer';
import McqAnswer from '../McqAnswer/McqAnswer';
import OrderingAnswer from '../OrderingAnswer/OrderingAnswer';
import Failed from '../Assets/failed.svg';
import Passed from '../Assets/passed.svg';
import {
	SummaryQuestion,
	Test,
	isGapAnswer,
	isMcqAnswer,
	isOrderingAnswer,
} from '../TestSummary.types';
import { TestSummaryConfig } from '../TestSummary.config';
import { QuestionType } from '@src/Test/Question.types';

type Props = {
	question: SummaryQuestion;
	index: number;
	test: Test | undefined;
	status: string | undefined;
	type: string | undefined;
	questionNum: string | undefined;
	points: string | undefined;
};

const TestAnswer: React.VoidFunctionComponent<Props> = ({
	question,
	test,
	status,
	index,
	type,
	questionNum,
	points,
}) => {
	return (
		<QuestionContainer tabIndex={question.id}>
			<HeaderWrapper>
				<ImageWrapper>
					{question.correct === true ? (
						<Img src={Passed} alt="passed" />
					) : (
						<Img src={Failed} alt="failed" />
					)}
				</ImageWrapper>
				<QuestionWrapper>
					<QuestionHeader>
						<QuestionOrder>
							{questionNum}
							{index + 1}.
						</QuestionOrder>
						<QuestionPoints>
							<Type>
								{type as QuestionType}
								{/* {TestSummaryConfig.types[question.type as QuestionType]} */}
							</Type>
							<SpacerStyle mx={'3.625rem'} />
							<Points>{points} </Points>
							<Spacer mx={'0.5rem'} />
							<Degree>
								{question.score}/{question.weight}
							</Degree>
						</QuestionPoints>
					</QuestionHeader>

					<Spacer mb={{ sm: '1rem', lg: '2rem' }} />
					<div>
						{isMcqAnswer(question) && (
							<McqAnswer question={question} test={test} status={status} />
						)}
						{isOrderingAnswer(question) && (
							<OrderingAnswer question={question} test={test} status={status} />
						)}
						{isGapAnswer(question) && (
							<GapAnswer question={question} test={test} status={status} />
						)}
					</div>
				</QuestionWrapper>
			</HeaderWrapper>
		</QuestionContainer>
	);
};

export default TestAnswer;
const ImageWrapper = styled.div`
	position: relative;
	top: 2px;
	${({ theme }) => `${theme.mediaQueries.medium}{
	top: 6px;
	}`}
`;
const SpacerStyle = styled(Spacer)`
	margin: 0.8rem;
	${({ theme }) => `${theme.mediaQueries.medium}{
	margin: 3.625rem;
}`}
`;

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
	width: 100%;
`;
const QuestionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #d3d3d3;
	align-items: center;
	width: 100%;
`;
const HeaderWrapper = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 0.375rem;
	${({ theme }) => `${theme.mediaQueries.medium}{
		gap: 1.5rem;
		padding : 0 8rem;
	}`}
`;
const QuestionOrder = styled.span`
	font-size: 0.625rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	${({ theme }) => `${theme.mediaQueries.medium}{
		font-size : 1.25rem;
		gap: 1rem;
	}`}
`;
const Img = styled.img`
	width: 0.625rem;
	height: 0.625rem;
	${({ theme }) => `${theme.mediaQueries.medium}{
	width: 1.563rem;
	height: 1.25rem;
	margin-top: -20px
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
const Type = styled(Typography)`
	font-size: 0.5rem;
	font-weight: 600;
	color: #251b33;
	margin-top: -3px;
	text-transform: capitalize;
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

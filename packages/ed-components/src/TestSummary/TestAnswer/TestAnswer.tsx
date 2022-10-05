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
import { QuestionType } from '@src/Test/Question.types';
import { Icon, Icons } from '@src/Icons';
import { Theme } from '@eduact/student-theme';

type Props = {
	question: SummaryQuestion;
	index: number;
	test: Test | undefined;
	status: string | undefined;
	type: string | undefined;
	questionNum: string | undefined;
	points: string | undefined;
	notAnswered: string | undefined;
};

const TestAnswer: React.VoidFunctionComponent<Props> = ({
	question,
	test,
	status,
	index,
	type,
	questionNum,
	points,
	notAnswered,
}) => {
	const isNotAnswered = Object.keys(question?.answer).length === 0;

	console.log(Theme.mediaQueries.medium);
	console.log(Theme.mediaQueries.large);

	return (
		<QuestionContainer tabIndex={question.id}>
			<HeaderWrapper>
				<ImageWrapper>
					{isNotAnswered ? (
						<IconStyle color="orange">
							<Icons.Warning />
						</IconStyle>
					) : question.correct === true ? (
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
							{isNotAnswered && <Tag>{notAnswered}</Tag>}
							<Type>{type as QuestionType}</Type>
							<Points>{points} </Points>
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

const IconStyle = styled(Icon)`
	border: 2px solid #ff8532;
	width: 0.938rem;
	height: 0.938rem;
	border-radius: 50%;
	margin-top: 5px;
	@media screen and (min-width: 769px) {
		width: 1.5rem;
		height: 1.5rem;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	top: 2px;
	@media screen and (min-width: 769px) {
		top: 6px;
	}
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
	@media screen and (min-width: 769px) {
		margin-bottom: 1rem;
	}
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
	box-sizing: border-box;
	padding-bottom: 0.313rem;
	@media screen and (min-width: 769px) {
		padding-bottom: 0.938rem;
	}
`;
const HeaderWrapper = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 0.375rem;
	@media screen and (min-width: 769px) {
		gap: 1.5rem;
		padding: 0 8rem;
	}
`;
const QuestionOrder = styled.span`
	font-size: 0.625rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	@media screen and (min-width: 769px) {
		font-size: 1.25rem;
		gap: 1rem;
	}
`;
const Img = styled.img`
	width: 0.625rem;
	height: 0.625rem;
	@media screen and (min-width: 769px) {
		width: 1.563rem;
		height: 1.25rem;
		margin-top: -20px;
	}
`;
const QuestionPoints = styled.span`
	font-size: 0.5rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	@media screen and (min-width: 1201px) {
		font-size: 1rem;
	}
`;
const Type = styled(Typography)`
	font-size: 0.5rem;
	font-weight: 600;
	color: #251b33;
	margin-top: -3px;
	text-transform: capitalize;
	margin: 0 0.3rem;
	@media screen and (min-width: 769px) {
		font-size: 1rem;
		margin: 0 1.25rem;
	}
	@media screen and (min-width: 1201px) {
		margin: 0 6.25rem;
	}
`;
const Points = styled(Typography)`
	font-size: 0.5rem;
	font-weight: 500;
	margin: 0 0.388rem;
	color: ${(props) => props.theme.colors.silver};
	@media screen and (min-width: 769px) {
		font-size: 1rem;
		margin: 0 1rem;
	}
`;
const Degree = styled.span`
	font-size: 0.5rem;
	font-weight: 600;
	color: #251b33;
	@media screen and (min-width: 769px) {
		font-size: 1rem;
	}
`;
const Tag = styled.div`
	border-radius: 5px;
	background: #ff8532;
	color: #fff;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1.9;
	padding: 0.188rem 0.294rem 0.25rem 0.331rem;
	font-size: 0.5rem;
	height: 1.063rem;
	margin: 0 0.5rem;
	@media screen and (min-width: 769px) {
		margin: 0 2.25rem;
		padding: 0.313rem 0.294rem 0.313rem 0.331rem;
		font-size: 0.75rem;
		height: 1.563rem;
	}
	@media screen and (min-width: 1201px) {
		margin: 0 5.25rem;
		margin-bottom: -6px;
	}
`;

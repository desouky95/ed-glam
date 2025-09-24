import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '../../Spacer';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { QuestionContentWrapper } from '../../Test/Question.styled';
import { IMcqAnswer, IMrqAnswer, Test } from '../TestSummary.types';
import { Color } from '@eduact/student-theme';
import { Text } from '../OrderingAnswer/OrderingAnswer';
import { FeedbacktWrapper } from '../GapAnswer/GapAnswer';
import { Options } from '../../Test/Question.types';

type McqProps = {
	question: IMrqAnswer;
	test: Test | undefined;
	status: string | undefined;
};

const McqAnswer: React.VoidFunctionComponent<McqProps> = ({
	question,
	test,
	status,
}) => {
	const showAnswer = useMemo(() => {
		return (
			(status === 'failed' && test?.show_correct_if_failed === true) ||
			(status === 'passed' && test?.show_correct_if_passed === true)
		);
	}, [status, test?.show_correct_if_failed, test?.show_correct_if_passed]);

	const getMcqColor = useCallback(
		(item: Options) => {
			const chosenOption = question.answer.content?.options.find(
				(_) => _.answer === item.choice
			);

			if (
				(!showAnswer && chosenOption?.correct === false) ||
				(chosenOption && !chosenOption.correct)
			)
				return '#ffd5cc';
			if (!showAnswer && chosenOption?.correct) return '#aeaeae19';
			if (showAnswer && chosenOption?.correct) return '#00d66b19';
			if (showAnswer && item.is_correct) return '#00a05056';

			return '#FFF';
		},
		[question.answer.content?.options, showAnswer]
	);
	const bulletColor = useCallback(
		(item: Options): Color => {
			const chosenOption = question.answer.content?.options.find(
				(_) => _.answer === item.choice
			);

			if (
				(!showAnswer && chosenOption?.correct === false) ||
				(chosenOption && !chosenOption.correct)
			)
				return 'red';
			if (!showAnswer && chosenOption?.correct) return 'silver';
			if (showAnswer && chosenOption?.correct) return 'green';
			if (showAnswer && item.is_correct) return 'green';
			return 'silver';
		},
		[showAnswer, question.answer.content?.options]
	);
	const bulletState = useCallback(
		(item: Options) => {
			const isExist = question.answer.content?.options.find(
				(_) => _.answer === item.choice
			);

			return !!isExist;
		},
		[question.answer.content?.options]
	);
	return (
		<Spacer p={{ sm: '1rem' }}>
			<QuestionContentWrapper
				dangerouslySetInnerHTML={{ __html: question.content }}
			/>
			<Spacer mb={{ sm: '0.813rem', lg: '2.313rem' }} />
			<FlexLayout px={{ sm: '0.813rem' }} flexDirection="column">
				<AnswersLabel
					fontSize={{ sm: '0.5rem', lg: '1rem' }}
					fontFamily="Roboto"
				>
					Answers
				</AnswersLabel>
				<Spacer mb={{ sm: '6px', lg: '1rem' }} />
				<FlexLayout flexDirection={'column'}>
					{question.options.map((mcqItem, index) => {
						return (
							<FlexLayoutStyle
								alignItems={'center'}
								key={`${mcqItem}-${index}`}
								mb={{ sm: '0.75rem' }}
								background={getMcqColor(mcqItem)}
							>
								<AnswerBullet
									filled={bulletState(mcqItem)}
									// state={'orange'}
									state={bulletColor(mcqItem)}
								/>

								<Spacer mx={{ sm: '4px' }} />
								<Typography fontSize={{ sm: '0.75rem', lg: '1.125rem' }}>
									<Label htmlFor={mcqItem.choice}>{mcqItem.choice}</Label>
								</Typography>
							</FlexLayoutStyle>
						);
					})}
				</FlexLayout>
			</FlexLayout>
			{question.feedback !== null && (
				<>
					<Text>Feedback</Text>
					<FeedbacktWrapper
						dangerouslySetInnerHTML={{ __html: question.feedback as string }}
					/>
				</>
			)}
		</Spacer>
	);
};

export default McqAnswer;

const FlexLayoutStyle = styled(FlexLayout)<{ background: string }>`
	background: ${({ background }) => background};
	height: 2.313rem;
	padding: 0.5rem;
	border-radius: 7px;
	input[type='radio']#correct {
		accent-color: #00d66b;
	}
	input[type='radio']#wrong {
		accent-color: #ff0000;
	}
`;
const Label = styled.label`
	font-size: 0.75rem;
	color: rgba(0, 0, 0, 0.87);
	font-weight: normal;
	@media screen and (min-width: 769px) {
		font-size: 1.125rem;
	}
`;
const StyledRadioButton = styled.input`
	width: 0.535rem;
	height: 0.535rem;
	@media screen and (min-width: 769px) {
		width: 1.5rem;
		height: 1.5rem;
	}
`;
const AnswerBullet = styled.div<{ state: Color; filled: boolean }>`
	border-radius: 50%;
	position: relative;
	background: ${(props) =>
		props.filled ? props.theme.colors[props.state] : ''};
	box-shadow: inset 0 0 0 1px #fff;
	outline: 1px solid
		${(props) => (props.filled ? props.theme.colors[props.state] : 'gray')};
	width: 0.535rem;
	height: 0.535rem;
	@media screen and (min-width: 769px) {
		width: 1.25rem;
		height: 1.25rem;
		box-shadow: inset 0 0 0 3px #fff;
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

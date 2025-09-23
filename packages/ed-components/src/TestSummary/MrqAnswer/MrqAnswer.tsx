import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '../../Spacer';
import React, { useMemo } from 'react';
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
	const isCorrect = useMemo(() => {
		return question.correct;
	}, [question]);

	const showCorrectAnswer = useMemo(() => {
		return status === 'passed' && test?.show_correct_if_passed === true;
	}, []);

	const isStudentFailedRightAnswer = useMemo(() => {
		return status === 'failed' && test?.show_correct_if_failed === true;
	}, []);

	const getMcqColor = (item: Options) => {
		const chosenOption = question.options.find((_) => _.choice === item.choice);
		const option = item;
		const isExist = question.answer?.content?.options.find(
			(_) => _.answer === option.choice
		);
		if (!isExist) return '';

		console.log({
			showCorrectAnswer,
			isStudentFailedRightAnswer,
			option,
			chosenOption,
			question,
		});
		if (
			!(showCorrectAnswer || isStudentFailedRightAnswer) &&
			option.choice === chosenOption?.choice &&
			chosenOption?.correct &&
			!question.correct
		)
			return 'rgba(174, 174, 174, 0.1)';
		// return 'rgba(0, 214, 107, 0.1)';
		if (option.choice === chosenOption?.choice && !chosenOption?.is_correct)
			return '#ffd5cc';
		if (showCorrectAnswer || isStudentFailedRightAnswer)
			if (item?.is_correct) return 'rgba(0, 214, 107, 0.1)';
			else return '';
		return '#FFF';
	};
	const bulletColor = (item: Options): Color => {
		const chosenOption = question.options.find((_) => _.choice === item.choice);
		const option = item;

		if (
			!(showCorrectAnswer || isStudentFailedRightAnswer) &&
			option.choice === chosenOption?.choice &&
			chosenOption?.correct &&
			!question.correct
		)
			return 'silver';
		if (option.choice === chosenOption?.choice && !chosenOption?.is_correct)
			return 'red';
		if (chosenOption?.correct || (option && option.is_correct && !chosenOption))
			return 'green';

		if (showCorrectAnswer || isStudentFailedRightAnswer)
			if (item?.is_correct) return 'green';
			else return 'silver';
		return 'silver';
	};
	const bulletState = (item: Options) => {
		if (
			question.answer?.content?.options
				.map((i) => i.answer)
				.includes(item.choice!)
		)
			return true;
		if (showCorrectAnswer || isStudentFailedRightAnswer)
			if (item?.is_correct) return true;
			else return false;
		return false;
	};
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

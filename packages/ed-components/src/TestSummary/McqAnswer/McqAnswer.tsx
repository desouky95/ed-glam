import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { QuestionContentWrapper } from '@src/Test/Question.styled';
import { IMcqAnswer, Test } from '../TestSummary.types';
import { Color } from '@eduact/student-theme';

type McqProps = {
	question: IMcqAnswer;
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
					<FlexLayoutStyle
						alignItems={'center'}
						key={`${question.id}`}
						mb={{ sm: '0.75rem' }}
						background={isCorrect ? 'rgba(0, 214, 107, 0.1)' : '#ffd5cc'}
					>
						<AnswerBullet
							state={
								question.answer.content.options.correct ? 'green' : 'lightRed'
							}
						/>
						<Spacer mx={{ sm: '4px' }} />
						<Typography fontSize={{ sm: '0.75rem', lg: '1.125rem' }}>
							<Label htmlFor={question.answer.content.options.answer}>
								{question.answer.content.options.answer}
							</Label>
						</Typography>
					</FlexLayoutStyle>

					{isCorrect !== undefined &&
						!isCorrect &&
						(showCorrectAnswer || isStudentFailedRightAnswer) &&
						question.options.map((mcqItem, index) => {
							return (
								mcqItem?.is_correct && (
									<FlexLayoutStyle
										alignItems={'center'}
										key={`${mcqItem}-${index}`}
										mb={{ sm: '0.75rem' }}
										background={
											mcqItem.is_correct ? 'rgba(0, 214, 107, 0.1)' : '#ffd5cc'
										}
									>
										<AnswerBullet
											state={mcqItem.is_correct ? 'green' : 'lightRed'}
										/>

										<Spacer mx={{ sm: '4px' }} />
										<Typography fontSize={{ sm: '0.75rem', lg: '1.125rem' }}>
											<Label htmlFor={mcqItem.choice}>{mcqItem.choice}</Label>
										</Typography>
									</FlexLayoutStyle>
								)
							);
						})}
				</FlexLayout>
			</FlexLayout>
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
	${({ theme }) => `${theme.mediaQueries.medium}{
    font-size: 1.125rem;
	}`};
`;
const StyledRadioButton = styled.input`
	width: 0.535rem;
	height: 0.535rem;
	${({ theme }) => `${theme.mediaQueries.medium}{
		width :1.5rem;
		height :1.5rem;
	}`};
`;
const AnswerBullet = styled.div<{ state: Color }>`
	border-radius: 50%;
	position: relative;
	background: ${(props) => props.theme.colors[props.state]};
	box-shadow: inset 0 0 0 1px #fff;
	outline: 1px solid ${(props) => props.theme.colors[props.state]};
	width: 0.535rem;
	height: 0.535rem;
	${({ theme, state }) => `${theme.mediaQueries.medium}{
		width :1.25rem;
		height :1.25rem;
		box-shadow: inset 0 0 0 3px #fff;
	}`};
`;
const AnswersLabel = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
	font-size: 1rem;
	font-weight: 300;
	${({ theme }) => `${theme.mediaQueries.medium}{
		margin-bottom: 0.75rem;
	}`};
`;

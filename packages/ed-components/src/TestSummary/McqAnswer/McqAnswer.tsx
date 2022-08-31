import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { QuestionContentWrapper } from '@src/Test/Question.styled';
import { Base, IMcqAnswer } from '@src/Test/Question.types';

type McqProps = {
	question: IMcqAnswer;
	test: Base;
};

const McqAnswer: React.VoidFunctionComponent<McqProps> = ({
	question,
	test,
}) => {
	const showStudentAnswer = useMemo(() => {
		return (
			test?.status === 'passed' && test?.test?.show_correct_if_passed === false
		);
	}, []);
	const showCorrectAnswer = useMemo(() => {
		return (
			test?.status === 'passed' && test?.test?.show_correct_if_passed === true
		);
	}, []);

	const isStudentFailed = useMemo(() => {
		return (
			test?.status === 'failed' && test?.test?.show_correct_if_failed === false
		);
	}, []);

	const isStudentFailedRightAnswer = useMemo(() => {
		return (
			test?.status === 'failed' && test?.test?.show_correct_if_failed === true
		);
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
					{(showStudentAnswer || isStudentFailed) &&
						question?.answer.map((ans, index) => {
							const {
								content: {
									options: { answer, correct },
								},
							} = ans;
							return (
								<FlexLayoutStyle
									alignItems={'center'}
									key={`${answer}-${index}`}
									mb={{ sm: '0.75rem' }}
									background={correct ? 'rgba(0, 214, 107, 0.1)' : '#ffd5cc'}
								>
									<StyledRadioButton
										type={'radio'}
										value={answer}
										name="answer"
										id={`${correct ? 'correct' : 'wrong'}`}
										checked={showStudentAnswer || isStudentFailed}
									/>
									<Spacer mx={{ sm: '4px' }} />
									<Typography fontSize={{ sm: '0.75rem', lg: '1.125rem' }}>
										<Label htmlFor={answer}>{answer}</Label>
									</Typography>
								</FlexLayoutStyle>
							);
						})}
					{(showCorrectAnswer || isStudentFailedRightAnswer) &&
						question.options.map((mcqItem, index) => {
							return (
								<FlexLayoutStyle
									alignItems={'center'}
									key={`${mcqItem}-${index}`}
									mb={{ sm: '0.75rem' }}
									background={
										mcqItem.is_correct ? 'rgba(0, 214, 107, 0.1)' : '#ffd5cc'
									}
								>
									<StyledRadioButton
										type={'radio'}
										value={mcqItem.choice}
										name="answer"
										id={`${mcqItem.is_correct ? 'correct' : 'wrong'}`}
										checked={showCorrectAnswer || isStudentFailedRightAnswer}
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
		</Spacer>
	);
};

export default McqAnswer;

const FlexLayoutStyle = styled(FlexLayout)<{ background: string }>`
	background: ${({ background }) => background};
	border-radius: 2px;
	height: 26px;
	input[type='radio']:checked#correct {
		accent-color: #00d66b;
	}
	input[type='radio']:checked#wrong {
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
		width :0.75rem;
		height :0.75rem;
	}`};
`;
const AnswersLabel = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
	font-size: 1rem;
	font-weight: normal;
	${({ theme }) => `${theme.mediaQueries.medium}{
		margin-bottom: 0.75rem;
	}`};
`;

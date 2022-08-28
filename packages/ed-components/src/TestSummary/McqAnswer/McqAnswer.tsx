import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import React from 'react';
import styled from 'styled-components';
import { QuestionContentWrapper } from '@src/Test/Question.styled';
import { IMcqQuestion } from '../TestSummary.types';

type McqProps = {
	question: IMcqQuestion;
};

const McqAnswer: React.VoidFunctionComponent<McqProps> = ({ question }) => {
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
								background={
									mcqItem.is_correct ? 'rgba(0, 214, 107, 0.1)' : '#ffd5cc'
								}
							>
								<StyledRadioButton
									type={'radio'}
									id={mcqItem.choice}
									value={mcqItem.choice}
									name="answer"
									checked={mcqItem.is_correct}
								/>
								<Spacer mx={{ sm: '4px' }} />
								<Typography fontSize={{ sm: '0.75rem', lg: '1.125rem' }}>
									<label htmlFor={mcqItem.choice}>{mcqItem.choice}</label>
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
`;

const StyledRadioButton = styled.input`
	width: 0.563rem;
	height: 0.563rem;
	${({ theme }) => `${theme.mediaQueries.large}{
		width :1.25rem;
		height :1.25rem;
	}`}
`;

const AnswersLabel = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
`;

import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { QuestionContentWrapper } from '../Question.styled';
import { IMcqQuestion } from '../Question.types';

type McqProps = {
	question: IMcqQuestion;
	onChange: (answer: any) => void;
};
const McqQuestion: React.VoidFunctionComponent<McqProps> = ({
	question,
	onChange,
}) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange({ answer: e.target.value });
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
							<FlexLayout
								alignItems={'center'}
								key={`${mcqItem}-${index}`}
								mb={{ sm: '0.75rem' }}
							>
								<StyledRadioButton
									onChange={handleOnChange}
									type={'radio'}
									id={mcqItem}
									checked={
										question.answer && question.answer.answer === mcqItem
									}
									value={mcqItem}
									name="answer"
								/>
								<Spacer mx={{ sm: '4px' }} />
								<Typography fontSize={{ sm: '0.75rem', lg: '1.125rem' }}>
									<label htmlFor={mcqItem}>{mcqItem}</label>
								</Typography>
							</FlexLayout>
						);
					})}
				</FlexLayout>
			</FlexLayout>
		</Spacer>
	);
};

export default McqQuestion;

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

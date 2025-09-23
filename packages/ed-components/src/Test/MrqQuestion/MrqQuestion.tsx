import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '../../Spacer';
import React from 'react';
import styled from 'styled-components';
import { QuestionContentWrapper } from '../Question.styled';
import { IMrqQuestion } from '../Question.types';

type MrqProps = {
	question: IMrqQuestion;
	onChange: (answer: any) => void;
};
const MrqQuestion: React.VoidFunctionComponent<MrqProps> = ({
	question,
	onChange,
}) => {
	console.log('question', question);
	console.log('options', question.options);
	console.log('answer', question.answer);
	console.log(
		'checked',
		question.options.filter((_) => question.answer.includes(_))
	);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			const new_value = [...(question?.answer || []), e.target.value];
			onChange(new_value);
			return;
		} else {
			const new_value = question?.answer?.filter(
				(item) => item !== e.target.value
			);
			onChange(new_value);
		}
	};
	const handleOnSpanClick = (value: string) => {
		if (question?.answer?.map((_) => _).includes(value))
			return onChange(question?.answer?.filter((item) => item !== value));
		else onChange([...(question?.answer?.map((_) => _) || []), value]);
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
				></AnswersLabel>
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
									type={'checkbox'}
									id={mcqItem}
									checked={question?.answer?.map((_) => _).includes(mcqItem)}
									value={mcqItem}
									name={`answer-${question.id}`}
								/>
								<Spacer mx={{ sm: '4px' }} />
								<Typography
									cursor={'pointer'}
									onClick={() => handleOnSpanClick(mcqItem)}
									fontSize={{ sm: '0.75rem', lg: '1.125rem' }}
								>
									<span>{mcqItem}</span>
								</Typography>
							</FlexLayout>
						);
					})}
				</FlexLayout>
			</FlexLayout>
		</Spacer>
	);
};

export default MrqQuestion;

const StyledRadioButton = styled.input`
	width: 1rem;
	height: 1rem;
	${({ theme }) => `${theme.mediaQueries.large}{
		width :1.25rem;
		height :1.25rem;
	}`}
`;

const AnswersLabel = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
`;

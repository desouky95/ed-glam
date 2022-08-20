import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { IMcqQuestion } from '../Question.types';

type McqProps = {
	question: IMcqQuestion;
	onChange: (answer: any) => void;
};
const McqQuestion: React.VoidFunctionComponent<McqProps> = ({ question }) => {
	return (
		<Spacer p={{ sm: '1rem' }}>
			<div dangerouslySetInnerHTML={{ __html: question.content }}></div>
			<Spacer mb={{ sm: '0.813rem' }} />
			<FlexLayout px={{ sm: '0.813rem' }} flexDirection="column">
				<Typography
					color={rgba('#000', 0.6).toString()}
					fontSize={{ sm: '0.5rem' }}
					fontFamily="Roboto"
				>
					Answers
				</Typography>
				<Spacer mb={{ sm: '6px' }} />
				<FlexLayout flexDirection={'column'}>
					{question.options.map((mcqItem, index) => {
						return (
							<FlexLayout mb={{ sm: '0.75rem' }}>
								<StyledRadioButton
									key={`${mcqItem}-${index}`}
									onChange={(e) => console.log(e.target.value)}
									type={'radio'}
									id={mcqItem}
									value={mcqItem}
									name="answer"
								/>
								<Spacer mx={{ sm: '4px' }} />
								<Typography fontSize={{ sm: '0.75rem' }}>
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
`;

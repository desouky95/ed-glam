import { FlexLayout } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import { QuestionContentWrapper } from '@src/Test/Question.styled';
import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import { IOrderingQuestion, QuestionOptions } from '../TestSummary.types';

type OrderingProps = {
	question: IOrderingQuestion;
};
type Option = {
	answer: Array<string>;
	is_correct: boolean;
};
type Options = {
	option: Option;
	// option: string;
	id: string;
};

const OrderingAnswer: React.VoidFunctionComponent<OrderingProps> = ({
	question,
}) => {
	const [values, setValues] = useState<Array<Options | any>>(question.options);
	// const [values, setValues] = useImmer<Array<QuestionOptions>>(
	//   !question.answer
	//     ? question.options.map((option, index) => ({
	//         option,
	//         id: `${index + 1}`,
	//       }))
	//     : question.answer.map((option, index) => ({ option, id: `${index + 1}` }))
	// );
	const opts = values?.map((_) => _.answer);
	console.log({ values, opts });

	return (
		<div>
			<QuestionContentWrapper
				dangerouslySetInnerHTML={{ __html: question.content }}
			/>
			<Spacer mb={{ sm: '0.813rem', lg: '2.313rem' }} />
			<FlexLayout mb={{ sm: '1rem', lg: '2rem' }} flexDirection="column">
				{values?.map((_, index) => {
					return (
						_.is_correct &&
						_.answer?.map((ans: string) => (
							<FlexLayout gridGap="0.5rem">
								<span>{ans}</span>
							</FlexLayout>
						))
					);
				})}
			</FlexLayout>
		</div>
	);
};

export default OrderingAnswer;

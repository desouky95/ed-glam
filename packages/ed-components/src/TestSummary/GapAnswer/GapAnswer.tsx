import { QuestionContentWrapper } from '@src/Test/Question.styled';
import { IGapAnswer, Options } from '@src/Test/Question.types';
import { rgba } from 'polished';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Text } from '../OrderingAnswer/OrderingAnswer';

type GapProps = {
	question: IGapAnswer;
};

const GapAnswer: React.VoidFunctionComponent<GapProps> = ({ question }) => {
	const gapRef = useRef<HTMLDivElement>(null);
	const showCorrect = true;

	const getGapDropdown = (options: Options) => {
		const answer = question?.answer.map((ans) => ans.content.options);
		let isAns;
		for (const ans of answer) {
			isAns = ans.find((_) => _.target === options.gap);
		}

		return `<span class="wrong" >${
			showCorrect && isAns?.answer
		}</span> / <span class="correct">${options?.correct}</span>`;
	};

	const generateQuestion = () => {
		const { parsed_content, options } = question;
		let newContent = parsed_content.toLocaleLowerCase();
		for (const option of options) {
			const toBeReplacedKey = `$$${option.gap}`.toLocaleLowerCase();
			newContent = newContent.replace(toBeReplacedKey, getGapDropdown(option));
		}

		return newContent;
	};

	return (
		<QuestionContentWrapper>
			<StyledContainer
				ref={gapRef}
				dangerouslySetInnerHTML={{ __html: generateQuestion() }}
			/>
			<Text>Feedback</Text>
			<FeedbacktWrapper
				dangerouslySetInnerHTML={{ __html: question.feedback as string }}
			/>
		</QuestionContentWrapper>
	);
};

const FeedbacktWrapper = styled.div`
	max-width: 100%;
	width: 100%;
	overflow-x: auto;
	font-weight: normal;
	font-size: 0.625rem;
	color: #2f2e41;
	line-height: 1.3;
	letter-spacing: 0.08px;
	${({ theme }) => `${theme.mediaQueries.medium}{
    font-size: 1.125rem;
	line-height: 1.33;
  	letter-spacing: 0.14px;

}`}
`;

const StyledContainer = styled.div`
	font-size: 0.75rem;
	font-weight: 600;
	color: #2f2e41;
	line-height: 1.9;
	letter-spacing: 0.09px;
	${({ theme }) => `${theme.mediaQueries.medium}{
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: 0.14px;
}`}
	.wrong {
		height: 1.438rem;
		background: #ffd5cc;
		border-radius: 5px;
		padding: 0.25rem 0.844rem 0.256rem 0.875rem;
		${({ theme }) => `${theme.mediaQueries.medium}{
    height: 1.938rem;
    padding: 0.313rem 0.5rem 0.25rem;
}`}
	}
	.correct {
		height: 1.438rem;
		background: #e5fbf0;
		border-radius: 5px;
		padding: 0.25rem 0.844rem 0.256rem 0.875rem;
		${({ theme }) => `${theme.mediaQueries.medium}{
    height: 1.938rem;
    padding: 0.313rem 0.5rem 0.25rem;
}`}
	}
`;

export default GapAnswer;

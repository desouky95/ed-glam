import { QuestionContentWrapper } from '@src/Test/Question.styled';
import { Base, IGapAnswer, Options } from '@src/Test/Question.types';
import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Text } from '../OrderingAnswer/OrderingAnswer';

type GapProps = {
	question: IGapAnswer;
	test: Base;
};

const GapAnswer: React.VoidFunctionComponent<GapProps> = ({
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

	console.log({
		showStudentAnswer,
		showCorrectAnswer,
		isStudentFailed,
		isStudentFailedRightAnswer,
	});

	const gapRef = useRef<HTMLDivElement>(null);
	const getGapAnswer = (options: Options) => {
		const answer = question?.answer.map((ans) => ans.content.options);
		let isAns;
		for (const ans of answer) {
			isAns = ans.find((_) => _.target === options.gap);
		}

		return `${
			(showStudentAnswer || isStudentFailed) &&
			`<span class="wrong" >${isAns?.answer}</span>`
		}  ${
			showCorrectAnswer || isStudentFailedRightAnswer
				? ` /<span class="correct">${options?.correct}</span>`
				: null
		}`;
	};

	const generateAnswer = () => {
		const { parsed_content, options } = question;
		let newContent = parsed_content.toLocaleLowerCase();
		for (const option of options) {
			const toBeReplacedKey = `$$${option.gap}`.toLocaleLowerCase();
			newContent = newContent.replace(toBeReplacedKey, getGapAnswer(option));
		}
		return newContent;
	};

	return (
		<QuestionContentWrapper>
			<StyledContainer
				ref={gapRef}
				dangerouslySetInnerHTML={{ __html: generateAnswer() }}
			/>
			{question.feedback !== null && (
				<>
					<Text>Feedback</Text>
					<FeedbacktWrapper
						dangerouslySetInnerHTML={{ __html: question.feedback as string }}
					/>
				</>
			)}
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
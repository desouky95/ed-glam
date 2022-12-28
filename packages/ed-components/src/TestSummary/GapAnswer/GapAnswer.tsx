import { QuestionContentWrapper } from '../../Test/Question.styled';
import { Options } from '../../Test/Question.types';
import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Text } from '../OrderingAnswer/OrderingAnswer';
import { IGapAnswer, Test } from '../TestSummary.types';

type GapProps = {
	question: IGapAnswer;
	test: Test | undefined;
	status: string | undefined;
};

const GapAnswer: React.VoidFunctionComponent<GapProps> = ({
	question,
	test,
	status,
}) => {
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

	const showDash = useMemo(() => {
		return (
			(showCorrectAnswer || isStudentFailedRightAnswer) &&
			(test?.show_correct_if_passed === true ||
				test?.show_correct_if_failed === true)
		);
	}, []);

	const gapRef = useRef<HTMLDivElement>(null);
	const getGapAnswer = (options: Options) => {
		const answer = question?.answer?.content?.options;
		const option = options.correct;
		const isAns = answer?.find((_) => _.target === options.gap);

		return `<span class=${
			showStudentAnswer || isStudentFailed
				? isAns?.correct
					? 'correct'
					: 'wrong'
				: ''
		}>${isAns?.answer}</span>  ${
			!isAns?.correct && (showCorrectAnswer || isStudentFailedRightAnswer)
				? `${!isAns?.correct && showDash && `/`} <span class="correct">${
						options?.correct
				  }</span>`
				: ''
		}`;
	};
	const getGapQuestion = (options: Options) => {
		const option = options.correct;
		return `<span class=${option ? 'correct' : 'wrong'}>${option}</span>  ${
			!option && (showCorrectAnswer || isStudentFailedRightAnswer)
				? `${!option && showDash && `/`} <span class="correct">${
						options?.correct
				  }</span>`
				: ''
		}`;
	};

	const generateAnswer = () => {
		const { parsed_content, options } = question;
		let newContent = parsed_content?.toLocaleLowerCase();
		for (const option of options) {
			const toBeReplacedKey = `$$${option.gap}`?.toLocaleLowerCase();
			newContent = newContent?.replace(toBeReplacedKey, getGapAnswer(option));
		}
		return newContent;
	};
	const generateQuestion = () => {
		const { parsed_content, options } = question;
		let newContent = parsed_content?.toLocaleLowerCase();
		for (const option of options) {
			const toBeReplacedKey = `$$${option.gap}`?.toLocaleLowerCase();
			newContent = newContent?.replace(toBeReplacedKey, getGapQuestion(option));
		}
		return newContent;
	};

	return (
		<QuestionContentWrapper>
			{question.answer.content && (
				<StyledContainer
					ref={gapRef}
					dangerouslySetInnerHTML={{
						__html: `${
							showStudentAnswer || isStudentFailed ? '' : generateAnswer()
						}`,
					}}
				/>
			)}
			{!question.answer.content && question.parsed_content && (
				<StyledContainer
					ref={gapRef}
					dangerouslySetInnerHTML={{
						__html: `${
							showStudentAnswer || isStudentFailed ? '' : generateQuestion()
						}`,
					}}
				/>
			)}
			{question.feedback !== null && (
				<>
					<FeebackText>Feedback</FeebackText>
					<FeedbacktWrapper
						dangerouslySetInnerHTML={{ __html: question.feedback as string }}
					/>
				</>
			)}
		</QuestionContentWrapper>
	);
};

const FeebackText = styled(Text)`
	margin: 0.563rem;
	@media screen and (min-width: 769px) {
		margin: 2.063rem;
	}
`;

export const FeedbacktWrapper = styled.div`
	max-width: 100%;
	width: 100%;
	overflow-x: auto;
	font-weight: normal;
	font-size: 0.625rem;
	color: #2f2e41;
	line-height: 1.3;
	letter-spacing: 0.08px;
	@media screen and (min-width: 769px) {
		font-size: 1.125rem;
		line-height: 1.33;
		letter-spacing: 0.14px;
	}
`;

const StyledContainer = styled.div`
	font-size: 0.75rem;
	font-weight: 600;
	color: #2f2e41;
	line-height: 1.9;
	letter-spacing: 0.09px;
	@media screen and (min-width: 769px) {
		font-size: 1.125rem;
		line-height: 1.7;
		letter-spacing: 0.14px;
	}
	.wrong {
		height: 1.438rem;
		background: #ffd5cc;
		border-radius: 5px;
		padding: 0.25rem 0.844rem 0.256rem 0.875rem;
		@media screen and (min-width: 769px) {
			height: 1.938rem;
			padding: 0.313rem 0.5rem 0.25rem;
		}
	}
	.correct {
		height: 1.438rem;
		background: #e5fbf0;
		border-radius: 5px;
		padding: 0.25rem 0.844rem 0.256rem 0.875rem;
		@media screen and (min-width: 769px) {
			height: 1.938rem;
			padding: 0.313rem 0.5rem 0.25rem;
		}
	}
`;

export default GapAnswer;

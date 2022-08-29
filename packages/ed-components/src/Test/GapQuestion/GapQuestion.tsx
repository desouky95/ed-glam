import React, {
	ChangeEvent,
	useEffect,
	useRef,
	useState,
	useMemo,
} from 'react';
import styled from 'styled-components';

import { useImmer } from 'use-immer';
import { current } from 'immer';
import { rgba } from 'polished';
import {
	IGapQuestion,
	KeyPairAnswer,
	OptionsPair,
	QuestionAnswer,
} from '../Question.types';
import { QuestionContentWrapper } from '../Question.styled';

type Props = {
	question: IGapQuestion;
	label: string;
	onChange: (answer: any) => void;
};
const GapQuestion: React.VoidFunctionComponent<Props> = ({
	question,
	label,
	onChange,
}) => {
	const gapRef = useRef<HTMLDivElement>(null);

	const controlledValue = useMemo(() => {
		return question.answer ?? [];
	}, [question.answer]);
	const controlledQuestion = useMemo(() => {
		return question;
	}, [question]);

	const onGapChange = (
		e: ChangeEvent<HTMLSelectElement>,
		option: OptionsPair
	) => {
		let _tempValues = Object.assign([], controlledValue) as KeyPairAnswer[];
		const gap = _tempValues.findIndex((_) => _.target === option.gap);
		if (gap > -1) {
			_tempValues[gap] = { target: option.gap, answer: e.target.value };
		} else {
			_tempValues.push({ target: option.gap, answer: e.target.value });
		}
		onChange(_tempValues);
	};

	const splittedContent =
		controlledQuestion.parsed_content.split(/\$\$[0-9]*/g);

	const getDropdown = (index: number) => {
		const options = controlledQuestion.options[index];
		const answer =
			controlledQuestion.answer &&
			controlledQuestion.answer.find((_) => _.target === options.gap);
		return (
			<select
				className="gap-select"
				onChange={(e) => onGapChange(e, options)}
				value={answer?.answer}
				title={options.gap.toString()}
			>
				{!answer && <option selected></option>}
				{options.choices.map((value) => (
					<option value={value}>{value}</option>
				))}
			</select>
		);
	};
	return (
		<QuestionContentWrapper>
			<StyledContainer>
				{splittedContent.map((_, index) => {
					return (
						<>
							<StyledContainer
								ref={gapRef}
								dangerouslySetInnerHTML={{ __html: _ }}
							/>
							{index < splittedContent.length - 1 && (
								<StyledContainer>{getDropdown(index)}</StyledContainer>
							)}
						</>
					);
				})}
			</StyledContainer>
		</QuestionContentWrapper>
	);
};

export default GapQuestion;

const StyledContainer = styled.span`
	.gap-select {
		border: 1.5px solid ${(props) => props.theme.colors.purple};
		font-weight: bold;
		border-radius: 5px;
		background-color: #fff;

		color: ${(props) => props.theme.colors.purple};
		padding: 6px 10px;
		padding-right: 20px;
		outline: 1px solid ${(props) => rgba(props.theme.colors.purple, 0.5)};
		position: relative;
		margin-bottom: 0.5rem;
		option {
			padding: 3px 12px;
			border: 0;
			color: #000;
			font-weight: bold;
		}
		option:checked {
			background: rgba(0, 0, 0, 0.08);
		}
	}
`;

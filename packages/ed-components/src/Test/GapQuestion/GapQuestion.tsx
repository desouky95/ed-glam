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
		console.log({ gap, _tempValues });
		if (gap > -1) {
			_tempValues[gap] = { target: option.gap, answer: e.target.value };
			// console.log()
		} else {
			_tempValues.push({ target: option.gap, answer: e.target.value });
		}
		onChange(_tempValues);
	};
	useEffect(() => {
		if (gapRef.current) {
			gapRef.current
				?.querySelectorAll('.gap-select')
				.forEach((select, index) => {
					select.addEventListener(
						'change',
						(e) => onGapChange(e as any, controlledQuestion.options[index]),
						false
					);
				});
		}
	}, []);
	const getGapDropdown = (options: OptionsPair) => {
		const answer =
			controlledQuestion.answer &&
			controlledQuestion.answer.find((_) => _.target === options.gap);
		const dropdown = `<select id="${options.gap}-${question.id}" value="${
			answer?.answer
		}" class="gap-select">
			${!answer ? '<option value="" disabled selected></option>' : ''}
        ${options.choices.map(
					(select, index) =>
						`<option ${
							answer?.answer === select ? 'selected' : ''
						}  value='${select}'>${select}</option>`
				)}
                </select>`;

		return dropdown;
	};

	const generateQuestion = () => {
		const { parsed_content, options } = controlledQuestion;
		let newContent = parsed_content.toLocaleLowerCase();
		for (let index = 0; index < options.length; index++) {
			const option = options[index];
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
		</QuestionContentWrapper>
	);
};

export default GapQuestion;

const StyledContainer = styled.div`
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

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useImmer } from 'use-immer';
import { current } from 'immer';
import { rgba } from 'polished';
import { IGapQuestion, OptionsPair, QuestionAnswer } from '../Question.types';

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
	const [value, setValue] = useImmer<Array<QuestionAnswer>>([]);
	const onGapChange = (
		e: ChangeEvent<HTMLSelectElement>,
		option: OptionsPair
	) => {
		setValue((draft) => {
			const gap = draft.findIndex((_) => _.key === option.key);
			if (gap > -1) {
				draft[gap].value = e.target.value;
			} else {
				draft.push({ key: option.key, value: e.target.value });
			}
			onChange(current(draft));
		});
	};
	useEffect(() => {
		if (gapRef.current) {
			gapRef.current?.querySelectorAll('select').forEach((select, index) => {
				select.addEventListener(
					'change',
					(e) => onGapChange(e as any, question.options[index]),
					false
				);
			});
		}
	}, []);
	const getGapDropdown = (options: OptionsPair) => {
		const dropdown = `<select class="gap-select">
        <option value="" disabled selected></option>
        ${options.value.map(
					(select, index) => `<option  value='${select}'>${select}</option>`
				)}
                </select>`;

		return dropdown;
	};

	const generateQuestion = () => {
		const { parsed_content, options } = question;
		let newContent = parsed_content.toLocaleLowerCase();
		for (let index = 0; index < options.length; index++) {
			const option = options[index];
			const toBeReplacedKey = `$$${option.key}`.toLocaleLowerCase();
			newContent = newContent.replace(toBeReplacedKey, getGapDropdown(option));
		}

		return newContent;
	};
	return (
		<>
			<StyledContainer
				ref={gapRef}
				dangerouslySetInnerHTML={{ __html: generateQuestion() }}
			/>
		</>
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

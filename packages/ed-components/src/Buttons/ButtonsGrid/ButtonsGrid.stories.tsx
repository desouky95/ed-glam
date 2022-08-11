import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { RaisedButton } from '../RaisedButton';
import { TextButton } from '../TextButton';
import ButtonsGrid from './ButtonsGrid';

export default {
	title: 'Buttons/ButtonsGrid',
} as ComponentMeta<typeof ButtonsGrid>;

export const ButtonsGridTemplate: ComponentStory<typeof ButtonsGrid> = (
	args
) => {
	const [value, setValue] = useState(1);
	return (
		<>
			<StyledButtonsGrid
				withBorder
				value={{ value }}
				onChange={(value) => {
					if (!value) return;
					setValue(value.value);
				}}
			>
				<StyledButtonItem value={{ value: 1 }}>Test 1</StyledButtonItem>
				<StyledButtonItem value={{ value: 2 }}>Test 2</StyledButtonItem>
				<StyledButtonItem value={{ value: 3 }}>Test 3</StyledButtonItem>
			</StyledButtonsGrid>
			<StyledRaisedButton>Test</StyledRaisedButton>
		</>
	);
};

const StyledButtonItem = styled(ButtonsGrid.Item)`
	background-color: red !important;
	max-height: 8rem;
`;

const StyledButtonsGrid = styled(ButtonsGrid)``;

const StyledRaisedButton = styled(TextButton)`
	border-radius: 30px;
	background: red;
`;

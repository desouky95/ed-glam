import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import ButtonsGrid from './ButtonsGrid';

export default {
	title: 'Buttons/ButtonsGrid',
} as ComponentMeta<typeof ButtonsGrid>;

export const ButtonsGridTemplate: ComponentStory<typeof ButtonsGrid> = (
	args
) => {
	const [value, setValue] = useState(1);
	return (
		<ButtonsGrid
			withBorder
			value={{ value }}
			onChange={(value) => {
				if (!value) return;
				setValue(value.value);
			}}
		>
			<ButtonsGrid.Item value={{ value: 1 }}>Test 1</ButtonsGrid.Item>
			<ButtonsGrid.Item value={{ value: 2 }}>Test 2</ButtonsGrid.Item>
			<ButtonsGrid.Item value={{ value: 3 }}>Test 3</ButtonsGrid.Item>
		</ButtonsGrid>
	);
};

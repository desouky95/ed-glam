import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chip, { ChipProps } from './Chip';

export default {
	title: 'Data Display/Chip',
	component: Chip,
	argTypes: {
		label: {
			defaultValue: 'Chip',
			type: 'string',
		},
	},
	args: {},
	parameters: {},
} as ComponentMeta<typeof Chip>;

export const DefaultChip: ComponentStory<typeof Chip> = (args) => {
	return <Chip {...args} />;
};

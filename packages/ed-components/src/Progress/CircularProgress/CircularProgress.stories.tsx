import { ComponentMeta, ComponentStory } from '@storybook/react';
import CircularProgress from './CircularProgress';

export default {
	title: 'Feedback/Circular',
	component: CircularProgress,
	argTypes: {
		progress: {
			control: { type: 'range' },
		},
	},
} as ComponentMeta<typeof CircularProgress>;

export const CircularProgressStory: ComponentStory<typeof CircularProgress> = (
	args
) => {
	return <CircularProgress {...args} size="large" />;
};

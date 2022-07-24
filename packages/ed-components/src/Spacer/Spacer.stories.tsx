import { TextButton } from '../Buttons/TextButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spacer from '.';

export default {
	title: 'Utilities/Spacer',
	component: Spacer,
	argTypes: {
		mb: {
			control: {
				type: 'range',
			},
		},
		mr: {
			control: {
				type: 'range',
			},
		},
	},
} as ComponentMeta<typeof Spacer>;

export const SpacerTemplate: ComponentStory<typeof Spacer> = ({ ...props }) => (
	<div style={{ display: 'flex' }}>
		<div>
			<TextButton>Button 1</TextButton>
			<Spacer {...props} />
			<TextButton>Button 2</TextButton>
		</div>
		<div style={{ display: 'flex' }}>
			<TextButton>Button 1</TextButton>
			<Spacer {...props} />
			<TextButton>Button 2</TextButton>
		</div>
	</div>
);

SpacerTemplate.storyName = 'Default Spacer';
SpacerTemplate.args = {};

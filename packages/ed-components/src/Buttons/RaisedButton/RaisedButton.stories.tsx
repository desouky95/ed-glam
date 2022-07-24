import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Colors } from '@eduact/student-theme';
import { IoMdAddCircle } from 'react-icons/io';
import { RaisedButton } from '.';

import { RaisedButtonStyled } from './RaisedButton.styled';
import Spacer from '../../Spacer';

export default {
	title: 'Buttons/Raised Button',
	component: RaisedButtonStyled,
	parameters: {
		controls: {
			exclude: ['as', 'theme', 'forwardedAs', 'ref'],
		},
	},
	argTypes: {
		variant: {
			control: {
				type: 'select',
			},
			defaultValue: 'primary',
			options: Object.keys(Colors),
		},
		children: { defaultValue: 'Button', type: 'string' },
		outlined: {
			control: {
				type: 'radio',
			},
			defaultValue: false,
			options: [true, false],
		},
	},
} as ComponentMeta<typeof RaisedButton>;

const RaisedTemplate: ComponentStory<typeof RaisedButton> = ({ ...args }) => {
	return <RaisedButton {...args}>{args.children}</RaisedButton>;
};

export const RaisedButtonStory = RaisedTemplate.bind({});

RaisedButtonStory.storyName = 'Raised Button';

export const RaisedButtonOutlined = RaisedTemplate.bind({});
RaisedButtonOutlined.args = {
	outlined: true,
};
RaisedButtonOutlined.storyName = 'Raised Button Outlined';

export const RaisedButtonIcon: ComponentStory<typeof RaisedButton> = ({
	outlined,
	variant,
	children,
}) => (
	<RaisedButton outlined={outlined} variant={variant}>
		<IoMdAddCircle />
		<Spacer mx={4} />
		{children}
	</RaisedButton>
);
RaisedButtonIcon.storyName = 'Raised Button With Icon';

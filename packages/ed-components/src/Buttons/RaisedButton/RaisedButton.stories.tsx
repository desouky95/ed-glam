import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Colors } from '@eduact/student-theme';
import { IoMdAddCircle } from 'react-icons/io';
import { RaisedButton } from '.';

import { RaisedButtonStyled } from './RaisedButton.styled';
import Spacer from '../../Spacer';
import { useCountdown } from '@eduact/utils';
import { useState } from 'react';
import styled from 'styled-components';

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
	const [status, setStatus] = useState('Not Attended');
	const handleOnEnd = () => {
		// alert('Finished');
		// resetCountdown();
		// startCountdown();
		setStatus('Finished');
	};
	const startDate = new Date();
	const { countdown, startCountdown, resetCountdown, stopCountdown } =
		useCountdown({
			start: { hours: 0, minutes: 5, seconds: 0 },
			end: { hours: 0, minutes: 0, seconds: 0 },
			onEnd: handleOnEnd,
		});

	console.log(countdown);
	return (
		<>
			<RaisedButton onClick={() => startCountdown()} {...args}>
				{countdown ? (
					<>
						{countdown.hours} : {countdown.minutes} : {countdown.seconds}
					</>
				) : (
					args.children
				)}
			</RaisedButton>
			<div>{status}</div>
			<RaisedButton variant="princetonOrange" onClick={() => stopCountdown()}>
				Stop
			</RaisedButton>
			<RaisedButton variant="princetonOrange" onClick={() => resetCountdown()}>
				Reset
			</RaisedButton>
			<CustomButton Test></CustomButton>
		</>
	);
};
const CustomButton = styled(RaisedButton)`
	background: red;
	${({ theme }) => `${theme.mediaQueries.medium}{
	background: green;
}`}
	${({ theme }) => `${theme.mediaQueries.large}{
	background: navy;
}`}
${({ theme }) => `${theme.mediaQueries.xlarge}{
	background: yellow;
}`}
`;

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

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Colors } from '@eduact/student-theme';
import { IoMdAddCircle } from 'react-icons/io';
import { RaisedButton } from '.';

import { RaisedButtonStyled } from './RaisedButton.styled';
import Spacer from '../../Spacer';
import { useCountdown } from '@eduact/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
	const end_date = '2022-09-18T14:10:12.233+00:00';
	const [tabVisible, setTabVisible] = useState(true);
	const start = useMemo(() => {
		const nowDate = Date.now();
		const endDate = new Date(end_date);
		const diff = Math.abs(endDate.getTime() - nowDate);
		let seconds = Math.floor(diff / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		seconds = seconds % 60;
		minutes = minutes % 60;
		hours = hours % 24;
		return { hours, seconds, minutes };
	}, [end_date, tabVisible]);
	// const [time, setTime] = useState(start());
	const { countdown, startCountdown, resetCountdown, stopCountdown } =
		useCountdown({
			start,
			end: { hours: 0, minutes: 0, seconds: 0 },
			onEnd: handleOnEnd,
		});
	useEffect(() => {
		document.addEventListener('visibilitychange', function (e) {
			if (document.visibilityState === 'visible') {
				console.log('TAB FOCUS');
				setTabVisible(true);
				// setTime(start());
			} else {
				setTabVisible(false);
			}
		});
	}, []);

	useEffect(() => {
		resetCountdown();
	}, [start]);

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

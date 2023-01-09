import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Colors } from '@eduact/student-theme';
import { IoMdAddCircle } from 'react-icons/io';
import { RaisedButton } from '.';

import { RaisedButtonStyled } from './RaisedButton.styled';
import Spacer from '../../Spacer';
import { useCountdown, useCountdownInterval } from '@eduact/utils';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

export default {
	title: 'Buttons/Raised Button',
	component: RaisedButton,
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

const RaisedTemplate: ComponentStory<typeof RaisedButton> = (
	{ ...args },
	{ name, hooks, title }
) => {
	const start = useMemo(() => {
		let startDate = new Date('1/9/2023, 3:00:00 PM');
		let endDate = new Date();
		let diff = endDate.getTime() - startDate.getTime();
		return diff;
	}, []);
	const { counterString, startCounter, stopCounter, resetCounter } =
		useCountdownInterval({
			start,
		});
	useEffect(() => {
		if (start) {
			startCounter;
		}
	}, [start]);

	return (
		<>
			<RaisedButton
				onClick={() => {
					startCounter();
				}}
				{...args}
			>
				{counterString ? (
					<>
						{counterString.hours} : {counterString.minutes} :{' '}
						{counterString.seconds}
					</>
				) : (
					args.children
				)}
			</RaisedButton>
			<div>{status}</div>
			<RaisedButton
				variant="princetonOrange"
				onClick={() => {
					stopCounter();
				}}
			>
				Stop
			</RaisedButton>
			<RaisedButton
				variant="princetonOrange"
				onClick={() => {
					resetCounter();
				}}
			>
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

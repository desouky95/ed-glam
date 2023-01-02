import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Avatar';
import React, { useEffect, useRef, useState } from 'react';
import { RaisedButton } from '..';
import { useWorkerInterval } from '@eduact/utils';
export default {
	title: 'Utilities/Avatar',
	component: Avatar,
	argTypes: {
		img: {
			type: 'string',
			control: {
				type: 'file',
			},
		},
		avatarSize: {
			defaultValue: {
				lg: 'large',
				md: 'medium',
				sm: 'small',
			},
		},
	},
} as ComponentMeta<typeof Avatar>;

export const AvatarTemplate: ComponentStory<typeof Avatar> = ({
	img,
	...props
}) => {
	const { worker, startWorker, stopTimer, isRunning } = useWorkerInterval(1000);

	const [time, setTime] = useState(0);
	useEffect(() => {
		if (!worker) return;
		worker.onmessage = (e) => {
			setTime(e.data.value);
		};

		return () => worker.terminate();
	}, [worker]);

	const handleWorker = () => {
		if (isRunning.current) {
			stopTimer();
		} else {
			startWorker();
		}
	};

	return (
		<>
			<Avatar img={img} {...props} onClick={handleWorker} />
			<div>{time / 1000} seconds</div>
		</>
	);
};

AvatarTemplate.storyName = 'Default Avatar';

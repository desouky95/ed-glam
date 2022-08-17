import { FlexLayout } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import { useCountdown } from '@eduact/utils';
import { RaisedButton } from '@src/Buttons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useMemo } from 'react';
import CircularProgress from './CircularProgress';

export default {
	title: 'Feedback/Circular',
	component: CircularProgress,
	argTypes: {
		progress: {
			control: { type: 'range' },
		},
		overallProgress: {
			defaultValue: 100,
		},
		label: {
			defaultValue: undefined,
		},
	},
} as ComponentMeta<typeof CircularProgress>;

export const CircularProgressStory: ComponentStory<typeof CircularProgress> = (
	args
) => {
	return <CircularProgress {...args} size="large" />;
};

export const ProgressWithTime: ComponentStory<typeof CircularProgress> = (
	args
) => {
	const { countdown, startCountdown, resetCountdown } = useCountdown({
		start: { minutes: 0, seconds: 50 },
		end: { minutes: 0, seconds: 0 },
		onEnd() {
			resetCountdown();
		},
	});
	const progress = useMemo(() => {
		return Number(countdown?.seconds) / 50;
	}, [countdown]);

	const getProgressColor = useMemo<Color>(() => {
		if (progress > 0.5) return 'primary';
		if (progress > 0.3) return 'yellow';
		return 'princetonOrange';
	}, [progress]);
	return (
		<>
			<RaisedButton onClick={startCountdown}>Start Countdown</RaisedButton>
			{countdown && (
				<CircularProgress
					{...args}
					color={getProgressColor}
					progress={Number(countdown.seconds)}
					overallProgress={50}
					label={
						<FlexLayout>
							{countdown?.minutes} : {countdown?.seconds}
						</FlexLayout>
					}
					size="xlarge"
				/>
			)}
		</>
	);
};

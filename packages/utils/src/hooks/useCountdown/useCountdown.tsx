import React, { useCallback, useEffect, useMemo, useState } from 'react';

type CountdownTime = {
	seconds?: number;
	minutes?: number;
	hours?: number;
};

type CountdownBaseArgs = {
	isIncrement?: boolean;
	initOnStart?: boolean;
	interval?: number;
	step?: number;
	onEnd?: () => void;
};
type CountdownNumberArgs = {
	start: CountdownTime;
	end?: CountdownTime;
} & CountdownBaseArgs;
type CountdownArgs = CountdownNumberArgs;

function useCountdown(options: CountdownArgs) {
	const {
		start,
		end,
		interval,
		isIncrement,
		onEnd,
		step,
		initOnStart = false,
	} = options;

	const [countdownEndDate, setCountdownEndDate] = useState<
		number | undefined
	>();

	const [countdownDate, setCountdownDate] = useState<number | undefined>();
	const [isRunning, setIsRunning] = useState(false);

	const initCountdown = useCallback(() => {
		setCountdownDate(
			new Date(
				0,
				0,
				0,
				start.hours ?? 0,
				start.minutes ?? 0,
				start.seconds ?? 0
			).getTime()
		);
		if (end) {
			setCountdownEndDate(
				new Date(
					0,
					0,
					0,
					end.hours ?? 0,
					end.minutes ?? 0,
					end.seconds ?? 0
				).getTime()
			);
		}
	}, []);

	useEffect(() => {
		initCountdown();
	}, []);
	const handleCountChange = () => {
		handleDateCountdown();
	};

	const handleDateCountdown = () => {
		if (!countdownDate) return;
		const _ = new Date(countdownDate);
		if (isIncrement) {
			_.setSeconds(_.getSeconds() + (step ?? 1));
		} else {
			_.setSeconds(_.getSeconds() - (step ?? 1));
		}
		setCountdownDate(_.getTime());
	};
	useEffect(() => {
		let _interval: NodeJS.Timer;
		if (isRunning) {
			_interval = setInterval(() => {
				handleCountChange();
			}, interval ?? 1000);
		}

		return () => {
			clearInterval(_interval);
		};
	}, [isRunning, countdownDate]);

	useEffect(() => {
		if (
			end &&
			countdownEndDate &&
			countdownDate &&
			countdownDate === countdownEndDate
		) {
			setIsRunning(false);
			onEnd?.();
		}
	}, [end, countdownDate]);
	const startCountdown = () => {
		if (initOnStart) {
			initCountdown();
		}
		setIsRunning(true);
	};
	const stopCountdown = () => {
		setIsRunning(false);
	};

	const resetCountdown = () => {
		initCountdown();
	};

	const getReturnValues = (countDown: number) => {
		if (!countdownDate) return;
		const date = new Date(countDown).toLocaleTimeString([], {
			hour12: false,
		});
		const splits = date.split(':');
		return {
			hours: start.hours && splits[0],
			minutes: splits[1],
			seconds: splits[2],
		};
	};

	return {
		countdown: getReturnValues(countdownDate ?? 0),
		startCountdown,
		resetCountdown,
		stopCountdown,
	};
}

export default useCountdown;

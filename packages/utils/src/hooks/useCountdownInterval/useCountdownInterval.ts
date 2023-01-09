import React, { useEffect, useMemo, useState } from 'react';
import { CountdownArgs } from '../useCountdown/useCountdown';
import { useWorkerInterval } from '../useWorkerInterval';
type CountdownIntervalArgs = Omit<CountdownArgs, 'start' | 'end'> & {
	start: number;
	end?: number;
};

export const useCountdownInterval = ({
	start,
	end,
	initOnStart = false,
	interval,
	isIncrement,
	step = 1000,
	onEnd,
}: CountdownIntervalArgs) => {
	const { worker, startWorker, stopTimer } = useWorkerInterval(
		interval ?? 1000
	);
	const [isRunning, setIsRunning] = useState(false);
	const [initStart, setInitStart] = useState(start);
	useEffect(() => {
		if (worker) {
			worker.onmessage = (e: MessageEvent) => {
				if (isIncrement) {
					setInitStart((prev) => prev + step);
				} else {
					setInitStart((prev) => prev - step);
				}
			};
		}
		if (initOnStart) {
			startWorker;
		}
		return () => {
			worker?.terminate();
		};
	}, [worker]);

	const outputNumber = useMemo(() => {
		let seconds = Math.floor(initStart / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		seconds = seconds % 60;
		minutes = minutes % 60;
		hours = hours % 24;

		return {
			seconds,
			minutes,
			hours,
		};
	}, [initStart]);

	const outputString = useMemo(() => {
		return {
			minutes: ('0' + outputNumber.minutes).slice(-2),
			seconds: ('0' + outputNumber.seconds).slice(-2),
			hours: ('0' + outputNumber.hours).slice(-2),
		};
	}, [outputNumber]);

	const startCounter = () => {
		setIsRunning(true);
		startWorker();
	};
	const stopCounter = () => {
		setIsRunning(false);
		stopTimer();
	};
	const resetCounter = (autoStart: boolean = false) => {
		setInitStart(start);
		if (autoStart) {
			startCounter();
		} else {
			stopCounter();
		}
	};

	useEffect(() => {
		if (end && end <= initStart) {
			stopCounter();
			onEnd?.();
		}
	}, [end, initStart]);

	return {
		counterNumber: outputNumber,
		counterString: outputString,
		counter: initStart,
		startCounter,
		isRunning,
		stopCounter,
		resetCounter,
	};
};

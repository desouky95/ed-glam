import React, { MutableRefObject, useCallback, useRef } from 'react';

type EdWorker = Worker & { _url?: string };
type WorkerController = {
	status: WORKER_STATUS;
	kill: Function;
};
type Options = {
	timeout?: number;
	remoteDependencies?: string[];
	autoTerminate?: boolean;
	autoRun?: boolean;
};
const DEFAULT_OPTIONS: Options = {
	timeout: undefined,
	remoteDependencies: [],
	autoTerminate: true,
	autoRun: false,
};
enum WORKER_STATUS {
	PENDING = 'PENDING',
	SUCCESS = 'SUCCESS',
	RUNNING = 'RUNNING',
	ERROR = 'ERROR',
	TIMEOUT_EXPIRED = 'TIMEOUT_EXPIRED',
	KILLED = 'KILLED',
}
const jobRunner =
	(fn: Function): Function =>
	(e: MessageEvent) => {
		return Promise.resolve(fn.apply(undefined, e.data))
			.then((result) => {
				postMessage(['SUCCESS', result]);
			})
			.catch((error) => {
				postMessage(['ERROR', error]);
			});
	};
const createWorkerResource = (fn: Function, autoRun: boolean = false) => {
	return `
importScripts('https://unpkg.com/@babel/standalone/babel.min.js');
${
	!autoRun
		? `function setOnMessage(messageHandler) {
            self.onmessage = messageHandler;
        };
        `
		: `self.onmessage = (${jobRunner})(${fn});`
}
    `;
};
// (${fn})(self.postMessage, setOnMessage);

type UseWorkerFnCallback = (...args: any[]) => any;
type UseWorkerArgs<T> = {
	fn: T;
	options?: Options;
};
export const useWorker = <T extends UseWorkerFnCallback>({
	fn,
	options = DEFAULT_OPTIONS,
}: UseWorkerArgs<T>) => {
	const [workerStatus, setWorkerStatus] = React.useState<WORKER_STATUS>(
		WORKER_STATUS.PENDING
	);

	const worker = useRef<EdWorker>();
	const promise = useRef<{
		reject?: (result: ReturnType<T> | ErrorEvent) => void;
		resolve?: (result: ReturnType<T>) => void;
	}>();
	const isRunning = React.useRef(false);

	const timeoutId = React.useRef<number>();

	const killWorker = React.useCallback(() => {
		if (worker.current?._url) {
			worker.current.terminate();
			URL.revokeObjectURL(worker.current._url);
			promise.current = {};
			worker.current = undefined;
			window.clearTimeout(timeoutId.current);
		}
	}, []);
	const generateWorker = useCallback(() => {
		const {
			timeout = DEFAULT_OPTIONS.timeout,
			autoRun = DEFAULT_OPTIONS.autoRun,
		} = options;
		const blobUrl = createWorkerResource(fn, false);
		const blob = new Blob([blobUrl], { type: 'application/javascript' });
		const blobURL = URL.createObjectURL(blob);
		const worker: EdWorker = new Worker(blobURL);
		worker._url = blobURL;
		worker.onmessage = (e: MessageEvent) => {
			const [status, result] = e.data as [WORKER_STATUS, ReturnType<T>];
			switch (status) {
				case WORKER_STATUS.SUCCESS:
					promise.current?.resolve?.(result);
					break;
				default:
					promise.current?.reject?.(result);
					break;
			}
		};
		worker.onerror = (e: ErrorEvent) => {
			promise.current?.reject?.(e);
		};

		if (timeout) {
			timeoutId.current = window.setTimeout(() => {
				killWorker();
				setWorkerStatus(WORKER_STATUS.TIMEOUT_EXPIRED);
			}, timeout);
		}
		return worker;
	}, [fn, options, killWorker]);

	const callWorker = useCallback(
		(...fnArgs: Parameters<T>) => {
			return new Promise<ReturnType<T>>((resolve, reject) => {
				promise.current = {
					resolve,
					reject,
				};
				worker.current?.postMessage([...fnArgs]);
			});
		},
		[setWorkerStatus]
	);

	const workerHook = useCallback(
		(...fnArgs: Parameters<T>) => {
			const terminate =
				options.autoTerminate != null
					? options.autoTerminate
					: DEFAULT_OPTIONS.autoTerminate;
			if (isRunning.current) {
				/* eslint-disable-next-line no-console */
				console.error(
					'[useWorker] You can only run one instance of the worker at a time, if you want to run more than one in parallel, create another instance with the hook useWorker(). Read more: https://github.com/alewin/useWorker'
				);
				return Promise.reject();
			}
			if (terminate || !worker.current) {
				worker.current = generateWorker();
			}
			return callWorker(...fnArgs);
		},
		[callWorker, options.autoTerminate, generateWorker]
	);
	const killWorkerController = React.useCallback(() => {
		killWorker();
		setWorkerStatus(WORKER_STATUS.KILLED);
	}, [killWorker, setWorkerStatus]);
	const workerController = {
		status: workerStatus,
		kill: killWorkerController,
	};

	React.useEffect(() => {
		isRunning.current = workerStatus === WORKER_STATUS.RUNNING;
	}, [workerStatus]);
	React.useEffect(
		() => () => {
			killWorker();
		},
		[killWorker]
	);
	return [workerHook, worker, generateWorker, workerController] as [
		typeof workerHook,
		MutableRefObject<EdWorker>,
		typeof generateWorker,
		WorkerController
	];
};

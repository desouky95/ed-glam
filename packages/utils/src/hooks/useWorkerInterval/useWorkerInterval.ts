import React, { useCallback, useEffect, useRef, useState } from 'react';

type EdWorker = Worker & { _url?: string };

const createWorkerResource = (interval: number) => {
	const codeBlock = `var time = 0;
    var intervalId ;
    onmessage = (event) => {
    //   if (!event.data.interval) throw new Error("No Interval found !!!");
    if(event.data.type === 'Start' || event.data.type === 'Stop') {
        clearInterval(intervalId);
        time = 0;
      }
      if (event.data.type === "Start") {
        time = 0;
        intervalId = setInterval(() => {
          time += ${interval};
          postMessage({
            type: "Time",
            value: time
          });
        }, ${interval});
      }
    };
    `;

	return codeBlock;
};
const useWorkerInterval = (interval: number) => {
	const generateWorker = useCallback(() => {
		const blobUrl = createWorkerResource(interval);
		const blob = new Blob([blobUrl], { type: 'application/javascript' });
		const blobURL = URL.createObjectURL(blob);
		const worker: EdWorker = new Worker(blobURL);
		debugger;
		worker._url = blobURL;

		return worker;
	}, []);

	const [worker, setWorker] = useState<EdWorker | undefined>();
	const isRunning = useRef(false);

	useEffect(() => {
		setWorker(generateWorker());

		return () => worker?.terminate();
	}, []);
	const startWorker = () => {
		if (!isRunning.current) {
			worker?.postMessage({
				type: 'Start',
			});
			isRunning.current = true;
		}
	};

	const stopTimer = () => {
		worker?.postMessage({
			type: 'Stop',
		});
		// worker.terminate();
		isRunning.current = false;
	};

	return { worker, startWorker, stopTimer, isRunning };
};

export default useWorkerInterval;

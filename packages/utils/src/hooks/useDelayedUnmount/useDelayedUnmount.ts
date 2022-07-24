import { useEffect, useState } from 'react';
type DelayedConfig = {
	mounted: boolean;
	delay: number;
};

function useDelayedUnmount({ delay, mounted }: DelayedConfig) {
	const [hasTransition, setHasTransition] = useState(false);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (mounted && !hasTransition) {
			setHasTransition(true);
		} else if (!mounted && hasTransition) {
			timeout = setTimeout(() => setHasTransition(false), delay);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [delay, mounted, hasTransition]);

	return hasTransition;
}

export default useDelayedUnmount;

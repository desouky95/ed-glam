import React, { MutableRefObject, useEffect, useState } from 'react';

type UseElementSizeArgs = MutableRefObject<HTMLElement | null>;
const useElementSize = (ref: UseElementSizeArgs) => {
	const [width, setWidth] = useState<number>();
	const [height, setHeight] = useState<number>();
	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				const { contentRect } = entry;
				setWidth(contentRect.width);
				setHeight(contentRect.height);
			});
		});
		if (ref.current) {
			resizeObserver.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				resizeObserver.unobserve(ref.current);
				resizeObserver.disconnect();
			}
		};
	}, []);

	return { width, height };
};

export default useElementSize;

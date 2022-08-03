import React, { useEffect, useState } from 'react';

const useScreenSize = () => {
	const [width, setWidth] = useState<number>(
		window.document.documentElement.scrollWidth
	);
	const [height, setHeight] = useState<number>(
		window.document.documentElement.scrollHeight
	);
	useEffect(() => {
		let target = window.document.documentElement;
		const resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				const { contentRect } = entry;
				setWidth(contentRect.width);
				setHeight(contentRect.height);
			});
		});
		resizeObserver.observe(target);

		return () => {
			resizeObserver.unobserve(target);
			resizeObserver.disconnect();
		};
	}, []);

	return { width, height };
};

export default useScreenSize;

import React, { RefObject, useEffect, useState } from 'react';

const useHover = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>
): boolean => {
	const [value, setValue] = useState(false);

	const handleMouseEnter = () => setValue(true);
	const handleMouseLeave = () => setValue(false);

	useEffect(() => {
		ref.current?.addEventListener('mouseenter', handleMouseEnter);
		ref.current?.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			ref.current?.removeEventListener('mouseenter', handleMouseEnter);
			ref.current?.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	return value;
};

export default useHover;

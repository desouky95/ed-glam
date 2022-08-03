import React, { useEffect, useState } from 'react';

export type UseThemeScreenSizeArgs = {
	sm: number;
	md: number;
	lg: number;
	xl?: number;
	lgWithXl?: boolean;
};
export type UseThemeScreenSizeReturn = {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isLargeScreen: boolean;
};
const useThemeScreenSize = (
	args: UseThemeScreenSizeArgs
): UseThemeScreenSizeReturn => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setDesktop] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		let target = window.document.documentElement;
		const resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				const { contentRect } = entry;
				setIsMobile(contentRect.width < args.md);
				setIsTablet(
					contentRect.width < args.lg && contentRect.width >= args.md
				);
				setDesktop(contentRect.width >= args.lg);
				setIsLargeScreen(!!args.xl && contentRect.width >= args.xl);
			});
		});
		resizeObserver.observe(target);

		return () => {
			resizeObserver.unobserve(target);
			resizeObserver.disconnect();
		};
	}, []);

	return {
		isDesktop,
		isLargeScreen,
		isMobile,
		isTablet,
	};
};

export default useThemeScreenSize;

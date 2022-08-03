import React, { useEffect, useState } from 'react';
import {
	useThemeScreenSize,
	UseThemeScreenSizeArgs,
	UseThemeScreenSizeReturn,
} from '@eduact/ed-system';
import { Theme } from '../../Theme';

type UseStudentScreenSizeArgs = Pick<UseThemeScreenSizeArgs, 'lgWithXl'>;
const useStudentScreenSize = (
	args?: UseStudentScreenSizeArgs
): UseThemeScreenSizeReturn => {
	const { isDesktop, isLargeScreen, isMobile, isTablet } = useThemeScreenSize({
		sm: Theme.breakpointsInPx.sm,
		md: Theme.breakpointsInPx.md,
		lg: Theme.breakpointsInPx.lg,
		xl: Theme.breakpointsInPx.xl,
		lgWithXl: args?.lgWithXl,
	});

	return { isDesktop, isLargeScreen, isMobile, isTablet };
};

export default useStudentScreenSize;

import { Breakpoint, ITheme, MediaQueriesFns, MediaQuery } from './theme.types';

export type MediaQueries = {
	[key in MediaQuery]: string;
};
export type MediaQueriesFnx = {
	[key in MediaQueriesFns]: (value: number) => string;
};

export const getMediaQueries = (theme: ITheme): MediaQueries => {
	const { mediaQueries } = theme;

	return mediaQueries;
};

const breakpoints = ['640px', '769px', '1201px', '1441px'];

export const breakpointsInPx = {
	sm: 0,
	default: 0,
	md: 768,
	lg: 1200,
	xl: 1440,
};

export const aliasBreakpoints: { [key in Breakpoint]?: string } = {
	// sm: '',
	// default: '',
	md: breakpoints[1],
	// md: '48rem',
	lg: breakpoints[2],
	// lg: '64rem',
	xl: breakpoints[3],
};
export const mediaQueries: MediaQueries & MediaQueriesFnx = {
	small: `@media screen and (max-width : ${aliasBreakpoints.md})`,
	medium: `@media screen and (min-width : ${aliasBreakpoints.md})`,
	large: `@media screen and (min-width : ${aliasBreakpoints.lg})`,
	xlarge: `@media screen and (min-width : ${aliasBreakpoints.xl})`,
	min: (value: number) => `@media screen and (min-width : ${value}px)`,
	max: (value: number) => `@media screen and (max-width : ${value}px)`,
};

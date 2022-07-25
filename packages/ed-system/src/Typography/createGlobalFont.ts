import { css, FlattenSimpleInterpolation } from 'styled-components';
import { FontFamily, Fonts } from './typography.types';

export const createGlobalFont = (
	font: FontFamily,
	fontWeightsSrc: Fonts
): FlattenSimpleInterpolation => {
	const weights = fontWeightsSrc.fonts[font];
	let styles = '';
	Object.keys(weights).forEach((weight, index) => {
		styles += `@font-face {
	    font-family : '${font}';
      	src: url(${Object.values(weights)[index]});
	    font-weight : ${weight};
		font-display: swap;

	  }`;
	});
	return css`
		${styles}
	`;
};

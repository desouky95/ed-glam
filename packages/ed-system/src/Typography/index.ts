import styled, { css } from 'styled-components';
import {
	space,
	SpaceProps,
	textStyle,
	TextStyleProps,
	typography,
	TypographyProps,
	variant,
} from 'styled-system';
import { cursor, CursorProps } from '../Utilities/cursor';
import { createGlobalFont } from './createGlobalFont';
import { generateMaterialIconsFontFaces } from './generateMaterialIconsFontFaces';
import { textDecoration, TextDecorationProps } from './textDecoration';
import {
	Fonts,
	FontFamily,
	FontWeight,
	MaterialIconFontFace,
	MaterialIconsType,
} from './typography.types';
import { wordSpacing, WordSpacingProps } from './wordSpacing';

export const Typography = styled.span<
	TypographyProps &
		TextStyleProps &
		SpaceProps &
		TextDecorationProps &
		WordSpacingProps &
		CursorProps
>`
	${typography};
	${textStyle};
	${space};
	${textDecoration};
	${wordSpacing};
	${cursor};
`;

export const SingleLineCssTrim = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export * from './textDecoration';
export {
	Fonts,
	FontFamily,
	FontWeight,
	MaterialIconFontFace,
	MaterialIconsType,
	createGlobalFont,
	generateMaterialIconsFontFaces,
};

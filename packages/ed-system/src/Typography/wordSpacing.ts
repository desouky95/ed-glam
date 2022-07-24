import {
	Config,
	RequiredTheme,
	ResponsiveValue,
	system,
	Theme,
	ThemeValue,
} from 'styled-system';
import { Property } from 'csstype';

const defaults = {
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};
const wordSpacingConfig: Config = {
	wordSpacing: {
		property: 'wordSpacing',
		defaultScale: defaults.fontSizes,
	},
};

export const wordSpacing = system(wordSpacingConfig);

export interface WordSpacingProps<
	ThemeType extends Theme = RequiredTheme,
	TVal = Property.WordSpacing | number
> {
	wordSpacing?: ResponsiveValue<TVal, ThemeType> | undefined;
}

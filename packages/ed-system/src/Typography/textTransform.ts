import {
	Config,
	RequiredTheme,
	ResponsiveValue,
	system,
	Theme,
} from 'styled-system';
import { Property } from 'csstype';

const textTransformConfig: Config = {
	textTransform: {
		property: 'textTransform',
	},
};

export const textTransform = system(textTransformConfig);

export interface TextTransformProps<ThemeType extends Theme = RequiredTheme> {
	/**
	 * The CSS justify-content property defines how the browser distributes space between and around content items
	 * along the main-axis of a flex container, and the inline axis of a grid container.
	 *
	 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
	 */
	textTransform?:
		| ResponsiveValue<Property.TextTransform, ThemeType>
		| undefined;
}

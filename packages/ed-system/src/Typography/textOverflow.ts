import {
	Config,
	RequiredTheme,
	ResponsiveValue,
	system,
	Theme,
} from 'styled-system';
import { Property } from 'csstype';

const textOverflowConfig: Config = {
	textOverflow: {
		property: 'textOverflow',
	},
};

export const textOverflow = system(textOverflowConfig);

export interface TextOverflowProps<ThemeType extends Theme = RequiredTheme> {
	/**
	 * The CSS justify-content property defines how the browser distributes space between and around content items
	 * along the main-axis of a flex container, and the inline axis of a grid container.
	 *
	 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
	 */
	textOverflow?: ResponsiveValue<Property.TextOverflow, ThemeType> | undefined;
}

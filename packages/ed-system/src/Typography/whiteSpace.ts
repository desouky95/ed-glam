import {
	Config,
	RequiredTheme,
	ResponsiveValue,
	system,
	Theme,
} from 'styled-system';
import { Property } from 'csstype';

const whiteSpaceConfig: Config = {
	whiteSpace: {
		property: 'whiteSpace',
	},
};

export const whiteSpace = system(whiteSpaceConfig);

export interface WhiteSpaceProps<ThemeType extends Theme = RequiredTheme> {
	/**
	 * The CSS justify-content property defines how the browser distributes space between and around content items
	 * along the main-axis of a flex container, and the inline axis of a grid container.
	 *
	 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
	 */
	whiteSpace?: ResponsiveValue<Property.WhiteSpace, ThemeType> | undefined;
}

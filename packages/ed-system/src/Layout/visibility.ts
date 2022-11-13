import {
	Config,
	RequiredTheme,
	ResponsiveValue,
	system,
	Theme,
} from 'styled-system';
import { Property } from 'csstype';

const VisibilityConfig: Config = {
	mixBlendMode: {
		property: 'mixBlendMode',
	},
};

export const visibility = system(VisibilityConfig);

export interface VisibilityProps<
	ThemeType extends Theme = RequiredTheme,
	TVal = Property.Visibility | number
> {
	visibility?: ResponsiveValue<TVal, ThemeType> | undefined;
}

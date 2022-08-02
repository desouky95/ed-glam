import {
	Config,
	RequiredTheme,
	ResponsiveValue,
	system,
	Theme,
} from 'styled-system';
import { Property } from 'csstype';

const mixBlendModeConfig: Config = {
	mixBlendMode: {
		property: 'mixBlendMode',
	},
};

export const mixBlendMode = system(mixBlendModeConfig);

export interface MixBlendModeProps<
	ThemeType extends Theme = RequiredTheme,
	TVal = Property.MixBlendMode | number
> {
	mixBlendMode?: ResponsiveValue<TVal, ThemeType> | undefined;
}

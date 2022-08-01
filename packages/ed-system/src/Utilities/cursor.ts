import {
	Config,
	RequiredTheme,
	ResponsiveValue,
	system,
	Theme,
} from 'styled-system';
import { Property } from 'csstype';

const cursorConfig: Config = {
	cursor: {
		property: 'cursor',
	},
};

export const cursor = system(cursorConfig);

export interface CursorProps<
	ThemeType extends Theme = RequiredTheme,
	TVal = Property.Cursor | number
> {
	cursor?: ResponsiveValue<TVal, ThemeType> | undefined;
}

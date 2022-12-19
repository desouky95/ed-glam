import React, { createContext, useState } from 'react';
import {
	DefaultTheme,
	ThemeProvider as SThemeProvider,
} from 'styled-components';
import { Theme } from './theme';

type ThemeTogglerOptions = {
	theme: DefaultTheme;
	setTheme: React.Dispatch<DefaultTheme>;
};
export const ThemeContextProvider = createContext<ThemeTogglerOptions | null>(
	null
);

const ThemeProviderWrapper: React.FC<ThemeTogglerOptions> = ({
	children,
	theme,
	setTheme,
}) => {
	const [defaultTheme, setThemeInner] = useState(theme ?? Theme);

	return (
		<ThemeContextProvider.Provider
			value={{ theme: defaultTheme, setTheme: setTheme ?? setThemeInner }}
		>
			<SThemeProvider theme={defaultTheme}>{children}</SThemeProvider>
		</ThemeContextProvider.Provider>
	);
};

export const ThemeProvider = ThemeProviderWrapper;

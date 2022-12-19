import { Theme, ThemeProvider } from '@eduact/student-theme';
import React from 'react';
export default function Root({ children }) {
	return (
		<>
			<ThemeProvider theme={Theme}>{children}</ThemeProvider>
		</>
	);
}

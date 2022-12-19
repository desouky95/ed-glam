import React from 'react';
import { Avatar, RaisedButton, TextInput } from '@eduact/ed-components';
import { createTheme, ThemeProvider } from '@eduact/student-theme';
import styled from 'styled-components';
import { Box } from '@eduact/ed-system';

const DefaultRaisedButton = styled(RaisedButton)`
	padding: 3rem;
`;

function App() {
	const theme = createTheme({
		colors: {
			primary: '#13754b',
			lightRed: 'green',
		},
	});
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				{/* <Avatar background='primary' shape='circle' withBorder /> */}
				<RaisedButton>Test</RaisedButton>
				<RaisedButton variant="lightRed">Test</RaisedButton>
			</ThemeProvider>
		</div>
	);
}

export default App;

import React from 'react';
import { RaisedButton, TextInput } from '@eduact/ed-components';
import { Box } from '@eduact/ed-system';
// Add react-live imports you need here
const ReactLiveScope = {
	React,
	...React,
	Box,
	TextInput,
	RaisedButton,
};
export default ReactLiveScope;

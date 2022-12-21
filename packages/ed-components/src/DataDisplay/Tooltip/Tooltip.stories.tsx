import React from 'react';
import { RaisedButton } from '@src/Buttons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import { Typography } from '@eduact/ed-system';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
	title: 'Data Display/Tooltip',
	component: Tooltip,
	args: {
		title: 'Tooltip',
	},
	parameters: {},
	argTypes: {
		// placement: {
		// 	type: 'string',
		// 	defaultValue: 'auto',
		// 	control: {
		// 		type: 'select',
		// 	},
		// },
	},
} as ComponentMeta<typeof Tooltip>;

export const TooltipStory: ComponentStory<typeof Tooltip> = ({
	variant,
	placement,
	title,
}) => {
	return (
		<Tooltip placement={'bottom'} variant={variant} title={title}>
			<AttachmentURL>
				Buttonsfasssssssssssssssssssssssssssssssssssssssssssssssssssssssss
			</AttachmentURL>
			{/* <span>Child</span> */}
		</Tooltip>
	);
};

const AttachmentURL = styled(Typography)`
	display: block;
	font-size: 0.75rem;
	max-width: 8ch;
	background: red;
	margin-top: 0.5rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

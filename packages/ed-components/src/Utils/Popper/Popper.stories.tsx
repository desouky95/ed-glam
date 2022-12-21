import React from 'react';
import { RaisedButton } from '@src/Buttons';
import { ComponentMeta } from '@storybook/react';
import { Popper } from './Popper';
import styled from 'styled-components';
import { Typography } from '@eduact/ed-system';

export default { title: 'Utils/Poppers' } as ComponentMeta<typeof Popper>;

export const PopperStory = () => {
	return (
		<div>
			<div>
				<Popper title="TESTT" placement="bottom">
					<AttachmentURL>
						Buttonsfasssssssssssssssssssssssssssssssssssssssssssssssssssssssss
					</AttachmentURL>
					{/* <span>Child</span> */}
				</Popper>
			</div>
		</div>
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

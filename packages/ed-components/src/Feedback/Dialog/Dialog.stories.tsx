import { RaisedButton } from '../../Buttons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Dialog from './Dialog';

export default { title: 'Feedback/Dialog', component: Dialog } as ComponentMeta<
	typeof Dialog
>;

export const DialogStory: ComponentStory<typeof Dialog> = (args) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<RaisedButton onClick={() => setOpen(true)}>Open</RaisedButton>
			<Dialog
				width={'40vw'}
				{...args}
				onClose={() => setOpen(false)}
				open={open}
			>
				Dialog
			</Dialog>
		</>
	);
};

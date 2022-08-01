import { FlexLayout } from '@eduact/ed-system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { RaisedButton } from '..';
import Modal from './Modal';

export default { title: 'Modal', component: Modal } as ComponentMeta<
	typeof Modal
>;

export const ModalStory: ComponentStory<typeof Modal> = (args) => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<RaisedButton onClick={() => setOpen(true)}>Open</RaisedButton>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				withBackdrop
				withStyling
				center
				persistent
			>
				<FlexLayout
					style={{ background: 'yellowgreen' }}
					height="20vh"
					width="50vh"
				>
					<RaisedButton onClick={() => setOpen(false)}>Close</RaisedButton>
				</FlexLayout>
			</Modal>
		</div>
	);
};

import { FlexLayout } from '@eduact/ed-system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useMemo, useState } from 'react';
import { RaisedButton } from '../..';
import Modal from './Modal';

export default { title: 'Feedback/Modal', component: Modal } as ComponentMeta<
	typeof Modal
>;

export const ModalStory: ComponentStory<typeof Modal> = (args) => {
	const [open, setOpen] = useState(false);
	const [item, setItem] = useState(1);
	const _open = useMemo(() => {
		return item === 1;
	}, [item]);
	return (
		<div style={{ minHeight: '200vh' }}>
			<RaisedButton onClick={() => setItem(1)}>Open</RaisedButton>
			<Modal
				open={_open}
				onClose={() => {
					console.log('ON CLOSE');
					// setOpen(false);
				}}
				withBackdrop
				withStyling
				center
				scrollableBackground
			>
				<FlexLayout
					style={{ background: 'yellowgreen' }}
					height="20vh"
					width="50vh"
				>
					<RaisedButton onClick={() => setItem(0)}>Close</RaisedButton>
				</FlexLayout>
			</Modal>
		</div>
	);
};

import { useDelayedUnmount, useOutsideAlert } from '@eduact/utils';
import { Portal, PortalProps } from '@eduact/ed-system';
import React, { useRef } from 'react';
import { Backdrop } from './Modal.styled';

export type ModalProps = {
	open: boolean;
	onClose?: () => void;
} & PortalProps;

const Modal: React.FC<ModalProps> = ({ children, open, onClose, ...props }) => {
	const modalRef = useRef(null);
	const delayed = useDelayedUnmount({ delay: 1000, mounted: open });
	useOutsideAlert(modalRef, () => {
		onClose?.();
	});
	return (
		<Portal {...props}>
			{(open || delayed) && (
				<Backdrop open={open && delayed}>
					<div ref={modalRef}>{children}</div>
				</Backdrop>
			)}
		</Portal>
	);
};

export default Modal;

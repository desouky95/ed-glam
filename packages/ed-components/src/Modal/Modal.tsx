import { useDelayedUnmount, useOutsideAlert } from '@eduact/utils';
import { Portal, PortalProps } from '@eduact/ed-system';
import React, { useRef } from 'react';
import { Backdrop } from './Modal.styled';

export type ModalProps = {
	open: boolean;
	withBackdrop?: boolean;
	onClose?: () => void;
	withStyling?: boolean;
} & PortalProps;

const Modal: React.FC<ModalProps> = ({
	children,
	open,
	onClose,
	withBackdrop = true,
	withStyling = false,

	...props
}) => {
	const modalRef = useRef(null);
	const delayed = useDelayedUnmount({ delay: 1000, mounted: open });
	useOutsideAlert(modalRef, () => {
		onClose?.();
	});
	return (
		<Portal {...props}>
			{(open || delayed) && (
				<>
					{withStyling && (
						<Backdrop
							position={!!props.parent ? 'absolute' : 'fixed'}
							withBackdrop={withBackdrop}
							open={open && delayed}
						>
							<div ref={modalRef}>{children}</div>
						</Backdrop>
					)}
					{!withStyling && <div ref={modalRef}>{children}</div>}
				</>
			)}
		</Portal>
	);
};

export default Modal;

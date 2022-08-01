import { useDelayedUnmount, useOutsideAlert } from '@eduact/utils';
import { FlexLayout, Portal, PortalProps } from '@eduact/ed-system';
import React, { useRef } from 'react';
import { Backdrop } from './Modal.styled';

export type ModalProps = {
	open: boolean;
	withBackdrop?: boolean;
	onClose?: () => void;
	withStyling?: boolean;
	withDelay?: boolean;
	center?: boolean;
	persistent?: boolean;
} & PortalProps;

const Modal: React.FC<ModalProps> = ({
	children,
	open,
	onClose,
	withBackdrop = true,
	withStyling = false,
	withDelay = true,
	persistent = false,
	center = false,
	...props
}) => {
	const modalRef = useRef(null);
	const delayed = useDelayedUnmount({ delay: 1000, mounted: open });
	useOutsideAlert(modalRef, () => {
		if (!persistent) {
			onClose?.();
		}
	});
	return (
		<Portal {...props}>
			{(open || (delayed && withDelay)) && (
				<>
					{withStyling && (
						<Backdrop
							position={!!props.parent ? 'relative' : 'fixed'}
							withBackdrop={withBackdrop}
							open={open && delayed}
							center={center}
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

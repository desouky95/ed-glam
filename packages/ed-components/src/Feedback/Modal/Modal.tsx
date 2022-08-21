import { useDelayedUnmount, useOutsideAlert } from '@eduact/utils';
import { FlexLayout, Portal, PortalProps } from '@eduact/ed-system';
import React, { useEffect, useRef } from 'react';
import { Backdrop, UnStyledBackdrop } from './Modal.styled';
import { LayoutProps } from 'styled-system';

export type ModalProps = {
	open: boolean;
	withBackdrop?: boolean;
	onClose?: () => void;
	withStyling?: boolean;
	withDelay?: boolean;
	center?: boolean;
	persistent?: boolean;
	scrollableBackground?: boolean;
} & PortalProps &
	LayoutProps;

const Modal: React.FC<ModalProps> = ({
	children,
	open,
	onClose,
	withBackdrop = true,
	withStyling = false,
	withDelay = true,
	persistent = false,
	center = false,
	scrollableBackground = true,
	...props
}) => {
	const modalRef = useRef(null);
	const delayed = useDelayedUnmount({ delay: 1000, mounted: open });
	useOutsideAlert(modalRef, () => {
		if (!persistent) {
			onClose?.();
		}
	});
	useEffect(() => {
		if (scrollableBackground) return;
		if (open || (delayed && withDelay)) {
			document.documentElement.style.overflowY = 'hidden';
			document.body.style.overflowY = 'hidden';
		} else {
			document.documentElement.style.overflowY = '';
			document.body.style.overflowY = '';
		}
	}, [open, delayed, withDelay]);
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
					{!withStyling && (
						<UnStyledBackdrop {...props} ref={modalRef}>
							{children}
						</UnStyledBackdrop>
					)}
				</>
			)}
		</Portal>
	);
};

export default Modal;

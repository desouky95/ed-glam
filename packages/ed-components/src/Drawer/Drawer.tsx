import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDelayedUnmount, useOutsideAlert } from '@eduact/utils';
import Modal from '@src/Modal/Modal';
import { DrawerWrapper } from './Drawer.styled';
import { DrawerProps } from './Drawer.types';

const Drawer: React.FC<DrawerProps> = ({
	open,
	onClose,
	drawerPosition = 'left',
	children,
	variant = 'purpleNavy',
	parent,
	withBackdrop,
	withStyling = true,
	...props
}) => {
	const drawerRef = useRef(null);
	const delayed = useDelayedUnmount({ delay: 500, mounted: open });
	useOutsideAlert(drawerRef, () => onClose?.());
	return (
		<Modal
			withBackdrop={withBackdrop}
			parent={parent}
			open={open}
			withStyling={withStyling}
			onClose={onClose}
		>
			{(open || delayed) && (
				<DrawerWrapper
					variant={variant}
					drawerPosition={drawerPosition}
					position={!!parent ? 'relative' : 'fixed'}
					open={open && delayed}
					{...props}
				>
					<>{children}</>
				</DrawerWrapper>
			)}
		</Modal>
	);
};

export default Drawer;

import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDelayedUnmount, useOutsideAlert } from '@eduact/utils';
import Modal from '@src/Modal/Modal';
import { DrawerWrapper } from './Drawer.styled';
import { DrawerProps } from './Drawer.types';

const Drawer: React.FC<DrawerProps> = ({
	open,
	onClose,
	position = 'left',
	children,
	variant = 'purpleNavy',
	parent,
	withBackdrop,
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
			onClose={onClose}
		>
			{(open || delayed) && (
				<DrawerWrapper
					variant={variant}
					{...props}
					position={position}
					open={open && delayed}
				>
					<>{children}</>
				</DrawerWrapper>
			)}
		</Modal>
	);
};

export default Drawer;

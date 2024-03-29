import { FlexLayout, Stack } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import React from 'react';
import { Icons } from '../../Icons';
import Spacer from '../../Spacer';
import styled from 'styled-components';
import {
	borderRadius,
	BorderRadiusProps,
	FlexboxProps,
	GridGapProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
	variant,
} from 'styled-system';
import { Modal, ModalProps } from '../Modal';

type DialogUIProps = SpaceProps &
	LayoutProps &
	BorderRadiusProps & { bgColor?: Color };
export type DialogProps = {} & ModalProps & DialogUIProps;
interface DialogComposition {
	Header: string;
}
const Dialog: React.FC<DialogProps> = ({
	open,
	bgColor = 'light',
	children,
	withBackdrop,
	withDelay,
	withStyling,
	persistent,
	onClose,
	...props
}) => {
	const modalProps = {
		withBackdrop,
		withDelay,
		withStyling,
		persistent,
		onClose,
	};
	return (
		<Modal {...modalProps} open={open} withStyling center>
			<StyledDialogWrapper {...props} bgColor={bgColor}>
				<ToggleButton onClick={() => onClose?.()} top={0} right={0}>
					<Spacer p={'0.5rem'}>
						<Icons.Close />
					</Spacer>
				</ToggleButton>
				{children}
			</StyledDialogWrapper>
		</Modal>
	);
};

export default Dialog;

const StyledDialogWrapper = styled.div<DialogUIProps>`
	${variant({ prop: 'bgColor', scale: 'backgrounds' })};
	position: relative;
	border-radius: 20px;
	height: 60vh;
	width: 80vw;
	${borderRadius};
	${layout};
	${space};
`;
const ToggleButton = styled(Stack)`
	cursor: pointer;
	z-index: 9999999;
`;

import { Color, Position } from '@eduact/student-theme';
import { BackgroundColorProps, LayoutProps } from 'styled-system';
import { ModalProps } from '..';

export type BaseDrawerProps = {
	drawerPosition?: Position;
	open: boolean;
	variant?: Color;
} & LayoutProps;
export type DrawerProps = {
	onClose?: () => void;
} & BaseDrawerProps &
	ModalProps &
	BackgroundColorProps;

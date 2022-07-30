import { Color, Position } from '@eduact/student-theme';
import { LayoutProps } from 'styled-system';
import { ModalProps } from '..';

export type BaseDrawerProps = {
	position?: Position;
	open: boolean;
	variant?: Color;
} & LayoutProps;
export type DrawerProps = {
	onClose?: () => void;
} & BaseDrawerProps &
	ModalProps;

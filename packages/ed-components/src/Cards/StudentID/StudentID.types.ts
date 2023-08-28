import { LayoutProps, SpaceProps } from 'styled-system';

export type StudentCardProps = {
	withShadow?: boolean;
	scale?: number;
} & LayoutProps &
	SpaceProps;

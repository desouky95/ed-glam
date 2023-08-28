import { LayoutProps, SpaceProps } from 'styled-system';

type BodyProps = SpaceProps;

export type StudentCardProps = {
	withShadow?: boolean;
	scale?: number;
	bodyProps?: BodyProps;
} & LayoutProps &
	SpaceProps;

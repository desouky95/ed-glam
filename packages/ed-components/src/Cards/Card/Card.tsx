import { Color, ResponsiveVal } from '@eduact/student-theme';
import React, { memo } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import { StyledCard } from './Card.styled';

export type CardProps = {
	variant?: ResponsiveVal<Color>;
	withShadow?: boolean;
	children: React.ReactNode;
} & SpaceProps &
	LayoutProps;

const Card: React.FC<CardProps> = ({
	children,
	withShadow = true,
	...props
}) => {
	return <StyledCard {...props}>{children}</StyledCard>;
};

export default memo(Card);

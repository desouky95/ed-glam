import { useDraggable } from '@dnd-kit/core';
import { Color, ResponsiveVal } from '@eduact/student-theme';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import {
	LayoutProps,
	MaxHeightProps,
	maxWidth,
	MaxWidthProps,
	variant,
} from 'styled-system';
import Header from './Header';

type SheetUIProps = {
	expanded?: boolean;
	variant?: ResponsiveVal<Color>;
	headerVariant?: ResponsiveVal<Color>;
} & MaxHeightProps &
	MaxWidthProps;
type SheetProps = {
	header: React.ReactNode;
	children: React.ReactNode;
} & SheetUIProps;

function Sheet({
	header,
	children,
	expanded,
	maxHeight = '75vh',
	maxWidth = '500px',
	variant,
	headerVariant,
}: SheetProps) {
	const { setNodeRef, attributes, listeners, isDragging, transform } =
		useDraggable({
			id: 'header',
		});

	return (
		<StyledSheet
			style={
				{
					'--max-height': maxHeight,
					'--transform': transform ? `${transform.y}px` : undefined,
				} as React.CSSProperties
			}
			dragging={isDragging}
			maxWidth={maxWidth}
			expanded={expanded}
			variant={variant}
		>
			<Header
				dragging={isDragging}
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				variant={headerVariant}
			>
				{header}
			</Header>
			<StyledContent variant={variant}>{children}</StyledContent>
		</StyledSheet>
	);
}

export default Sheet;
const StyledSheet = styled.div<{ dragging: boolean } & SheetUIProps>`
	position: relative;
	--radius: 25px;
	border-top-left-radius: var(--radius);
	border-top-right-radius: var(--radius);
	pointer-events: all;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	max-height: var(--max-height);
	transition: transform 200ms ease;
	transform: translate3d(
		0,
		calc(100% - var(--header-height) + var(--transform, 0px)),
		0
	);
	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 1px;
		width: 100%;
		height: 100%;
		transform: translateY(100%);
		background-color: inherit;
	}
	transition: ${(props) => props.dragging && 'none'};
	transform: ${(props) =>
		props.expanded && 'translate3d(0, var(--transform), 0)'};
	${maxWidth};
	${variant({ prop: 'variant', scale: 'backgrounds' })}
	${({ theme }) => `${theme.mediaQueries.medium}{
		${variant({ prop: 'variant', scale: 'backgrounds' })}
	}`}
	${({ theme }) => `${theme.mediaQueries.large}{
		${variant({ prop: 'variant', scale: 'backgrounds' })}
	}`}
`;

const StyledContent = styled.div<SheetUIProps>`
	display: block;
	overflow-y: auto;
	padding: 20px;
	background-color: inherit;
	/* ${variant({ prop: 'variant', scale: 'backgrounds' })} */
`;

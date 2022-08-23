import {
	DndContext,
	DragEndEvent,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import React, { useRef } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { DropRegions } from './Components/DropRegions';
import { rubberbandModifier } from './modifiers';
import Sheet from './Components/Sheet';
import { Property } from 'csstype';
import { Color, ResponsiveVal } from '@eduact/student-theme';
import { MaxHeightProps, MaxWidthProps, variant } from 'styled-system';
import { getDynamicVariant } from '@eduact/ed-system';
import { useOutsideAlert } from '@eduact/utils';

const modifiers = [restrictToVerticalAxis, rubberbandModifier];
enum Region {
	Collapse = 'collapse',
	Expand = 'expand',
}

type BottomSheetUIProps = {
	headerHeight?: ResponsiveVal<Property.Height>;
	variant?: ResponsiveVal<Color>;
	headerVariant?: ResponsiveVal<Color>;
	relative?: boolean;
} & MaxHeightProps &
	MaxWidthProps;
export type BottomSheetProps = {
	onChange: (expanded: boolean) => void;
	children: React.ReactNode;
	expanded: boolean;
	header: React.ReactNode;
	onBackdropClick?: (clickedOutside: boolean) => void;
} & BottomSheetUIProps &
	Pick<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;
const BottomSheet = ({
	onChange,
	children,
	expanded,
	header,
	headerHeight = '100px',
	onBackdropClick,
	variant = 'light',
	headerVariant = 'light',
	relative = false,
	...props
}: BottomSheetProps) => {
	const tracked = useRef({
		distance: 0,
		timestamp: 0,
		velocity: 0,
	});
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				delay: 25,
				tolerance: 40,
			},
		})
	);

	const handleDragEnd = ({ over }: DragEndEvent) => {
		const { velocity } = tracked.current;
		if (Math.abs(velocity) > 500) {
			onChange(velocity > 0);
		} else if (over) {
			const expanded = over.id === Region.Expand;
			onChange(expanded);
		}
		tracked.current = {
			distance: 0,
			timestamp: 0,
			velocity: 0,
		};
	};

	const bottomSheetRef = useRef(null);

	useOutsideAlert(bottomSheetRef, () => {
		onBackdropClick?.(true);
	});

	return (
		<DndContext
			autoScroll={false}
			modifiers={modifiers}
			sensors={sensors}
			onDragMove={({ delta }) => {
				const timestamp = Date.now();
				const timeDelta = timestamp - tracked.current.timestamp;
				const distance = tracked.current.distance - delta.y;
				const velocity = Math.round((distance / timeDelta) * 1000);
				tracked.current = {
					distance: delta.y,
					velocity,
					timestamp,
				};
			}}
			onDragEnd={handleDragEnd}
		>
			<StyledDrawer
				relative={relative}
				variant={variant}
				ref={bottomSheetRef}
				headerHeight={headerHeight}
			>
				<Sheet
					variant={variant}
					headerVariant={headerVariant}
					expanded={expanded}
					header={header}
					{...props}
				>
					{children}
				</Sheet>
				<DropRegions />
			</StyledDrawer>
		</DndContext>
	);
};

export default BottomSheet;

const StyledDrawer = styled.div<BottomSheetUIProps>`
	--header-height: ${({ headerHeight }) =>
		getDynamicVariant(headerHeight, 'sm')};
	position: ${(props) => (props.relative ? 'absolute' : 'fixed')};
	display: flex;
	justify-content: center;
	align-items: flex-end;
	inset: 0;
	pointer-events: none;
	overflow: hidden;
	${({ theme, headerHeight, relative }) => `${theme.mediaQueries.medium}{
		--header-height: ${getDynamicVariant(headerHeight, 'md')};
	}`}
	${({ theme, headerHeight, relative }) => `${theme.mediaQueries.large}{
		--header-height: ${getDynamicVariant(headerHeight, 'lg')};
	}`}
`;

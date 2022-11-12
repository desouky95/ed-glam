import React, { useEffect, useMemo, useState } from 'react';
import { IOrderingQuestion } from '../Question.types';

import styled from 'styled-components';
import { Transition, animated, Spring } from 'react-spring';
import { useImmer } from 'use-immer';
import { Icon, Icons } from '../../Icons';
import Spacer from '../../Spacer';
import { FlexLayout } from '@eduact/ed-system';
import { easings } from 'react-spring';
import {
	closestCenter,
	DndContext,
	DragEndEvent,
	DragOverlay,
	KeyboardSensor,
	PointerSensor,
	useDraggable,
	useSensor,
	useSensors,
	pointerWithin,
	MouseSensor,
	DragStartEvent,
	UniqueIdentifier,
} from '@dnd-kit/core';
import {
	SortableContext,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
	restrictToParentElement,
	restrictToVerticalAxis,
	restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import { QuestionContentWrapper } from '../Question.styled';
type OrderingProps = {
	question: IOrderingQuestion;
	onChange: (answer: any) => void;
	onBlur?: React.FocusEventHandler<HTMLDivElement>;
	onFocus?: React.FocusEventHandler<HTMLDivElement>;
};
type Option = {
	option: string;
	id: string;
};
const OrderingQuestion: React.VoidFunctionComponent<OrderingProps> = ({
	question,
	onChange,
	onBlur,
	onFocus,
}) => {
	const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
	const [active, setActive] = useState<Option | null | undefined>(null);
	const [values, setValues] = useImmer<Array<Option>>(
		!question.answer
			? question.options.map((option, index) => ({
					option,
					id: `${index + 1}`,
			  }))
			: question.answer.map((option, index) => ({ option, id: `${index + 1}` }))
	);
	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
	);

	const handleDragStart = (event: DragStartEvent) => {
		const { active } = event;

		const _active = values.find((_) => _.id === active.id);
		setActive(_active);
		setActiveId(active.id);
	};
	const handleOnDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (!over?.id) return;
		if (active.id !== over.id) {
			const oldIndex = values.findIndex((_) => _.id === active.id);
			const newIndex = values.findIndex((_) => _.id === over.id);
			const items = reorder(values, oldIndex, newIndex);
			onChange(items.map((item) => item.option));
			setValues(items);
		}
		setActiveId(null);
		setActive(null);
	};
	const reorder = (list: Option[], startIndex: number, endIndex: number) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	return (
		<div>
			<QuestionContentWrapper
				dangerouslySetInnerHTML={{ __html: question.content }}
			/>
			<Spacer mb={{ sm: '0.813rem', lg: '2.313rem' }} />
			<FlexLayout mb={{ sm: '1rem', lg: '2rem' }} flexDirection="column">
				<DndContext
					sensors={sensors}
					onDragStart={handleDragStart}
					collisionDetection={closestCenter}
					autoScroll
					modifiers={[restrictToParentElement, restrictToVerticalAxis]}
					onDragEnd={handleOnDragEnd}
				>
					<SortableContext
						strategy={verticalListSortingStrategy}
						items={values}
					>
						{values.map((option, index) => (
							<DraggableOption
								key={`${option.id}-${index}`}
								content={option.option}
								id={option.id}
							/>
						))}
					</SortableContext>
					<DragOverlay
						dropAnimation={{
							duration: 300,
							easing: 'cubic-bezier(0.65,0.05,0.36,1)',
						}}
					>
						{active ? <DragOverlayItem content={active.option} /> : null}
					</DragOverlay>
				</DndContext>
			</FlexLayout>
		</div>
	);
};

export default OrderingQuestion;

type DraggedProps = { isDragged?: boolean };
const StyledOption = styled.div`
	border-radius: 5px;
	touch-action: none;
	padding: 5px 8px;
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	width: fit-content;
	cursor: pointer;
	${({ theme }) => `${theme.mediaQueries.large}{
		margin-bottom: 1.5rem;
        padding: 0.5rem 1rem;
    }`}
`;
const StyledDraggableOption = styled(StyledOption)<DraggedProps>`
	background-color: #f6f6f6;
	background-color: ${(props) => {
		return props.isDragged && '#e1e0ff';
	}};
	opacity: ${({ isDragged }) => isDragged && '0.2'};
`;

type Props = {
	id: string;
	content: string;
};
const DraggableOption: React.VoidFunctionComponent<Props> = ({
	content,
	id,
}) => {
	const _id = useMemo(() => {
		return id;
	}, []);
	const {
		isDragging,
		setNodeRef,
		attributes,
		listeners,
		transition,
		transform,
	} = useSortable({
		id: _id,
	});

	const style = {
		transform: `translate(${transform?.x}px,${transform?.y}px)`,
		zIndex: isDragging ? '4' : '',
		transition,
	};
	return (
		<>
			<StyledDraggableOption
				ref={(e) => {
					setNodeRef(e);
				}}
				isDragged={isDragging}
				style={style}
				{...attributes}
				{...listeners}
			>
				<Icon color="purpleNavy">
					<Icons.SwapVertically />
				</Icon>
				<Spacer mx="0.25rem" />
				<span>{content}</span>
			</StyledDraggableOption>
		</>
	);
};

type DragOverlayItemProps = Omit<Props, 'id'>;
const DragOverlayItem: React.VoidFunctionComponent<DragOverlayItemProps> = ({
	content,
}) => {
	return (
		<StyledDragOverlay>
			<Icon color="purpleNavy">
				<Icons.SwapVertically />
			</Icon>
			<Spacer mx="0.25rem" />
			<span>{content}</span>
		</StyledDragOverlay>
	);
};

const StyledDragOverlay = styled(StyledOption)`
	background-color: #e1e0ff;
	white-space: nowrap;
`;

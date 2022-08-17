import React, { useEffect } from 'react';
import { IOrderingQuestion } from '../Question.types';

import styled from 'styled-components';
import { Transition, animated, Spring } from 'react-spring';
import { useImmer } from 'use-immer';
import { Icon, Icons } from '@src/Icons';
import Spacer from '@src/Spacer';
import { FlexLayout } from '@eduact/ed-system';
import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import {
	SortableContext,
	useSortable,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
	restrictToParentElement,
	restrictToVerticalAxis,
	restrictToWindowEdges,
} from '@dnd-kit/modifiers';
type OrderingProps = {
	question: IOrderingQuestion;
	onChange: (answer: any) => void;
};
type Option = {
	option: string;
	id: number;
};
const OrderingQuestion: React.VoidFunctionComponent<OrderingProps> = ({
	question,
	onChange,
}) => {
	const [values, setValues] = useImmer<Array<Option>>(
		question.options.map((option, index) => ({ option, id: index + 1 }))
	);
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
	};
	const reorder = (list: Option[], startIndex: number, endIndex: number) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: question.content }} />
			<FlexLayout mb={{ sm: '1rem', lg: '2rem' }} flexDirection="column">
				<DndContext
					collisionDetection={closestCenter}
					onDragEnd={handleOnDragEnd}
					modifiers={[
						restrictToVerticalAxis,
						restrictToWindowEdges,
						restrictToParentElement,
					]}
				>
					<SortableContext
						strategy={verticalListSortingStrategy}
						items={values}
					>
						{values.map((option, index) => (
							<DraggableOption
								key={`${option.id}-${option.option}-${index}`}
								content={option.option}
								id={option.id}
							/>
						))}
					</SortableContext>
				</DndContext>
			</FlexLayout>
		</div>
	);
};

export default OrderingQuestion;

type DraggedProps = { isDragged?: boolean };
const StyledDraggableOption = styled.div<DraggedProps>`
	border-radius: 5px;
	padding: 5px 8px;
	background-color: #f6f6f6;
	background-color: ${(props) => {
		return props.isDragged && '#e1e0ff';
	}};
	cursor: pointer;
	transform: ${(props) => props.isDragged && 'scale(1.2)'};
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	width: fit-content;
	${({ theme }) => `${theme.mediaQueries.large}{
        
        padding: 0.5rem 1rem;
    }`}
`;

type Props = {
	id: number;
	content: string;
};
const DraggableOption: React.VoidFunctionComponent<Props> = ({
	content,
	id,
}) => {
	const {
		isDragging,
		setNodeRef,
		attributes,
		listeners,
		transition,
		transform,
	} = useSortable({
		id,
		transition: {
			duration: 150, // milliseconds
			easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
		},
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		zIndex: isDragging ? '4' : '',
		transition,
	};
	return (
		<StyledDraggableOption
			ref={setNodeRef}
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
	);
};

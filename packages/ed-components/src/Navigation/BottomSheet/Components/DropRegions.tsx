import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Region } from '../constants';
import styled from 'styled-components';

export function DropRegions() {
	const { active, setNodeRef: setExpandRegionNodeRef } = useDroppable({
		id: Region.Expand,
	});
	const { setNodeRef: setCollapseRegionRef } = useDroppable({
		id: Region.Collapse,
	});

	if (!active) {
		return null;
	}

	return (
		<StyledDragRegion>
			<div ref={setExpandRegionNodeRef} />
			<div ref={setCollapseRegionRef} />
		</StyledDragRegion>
	);
}

const StyledDragRegion = styled.div`
	position: absolute;
	inset: 0;
	display: grid;
	grid-template-rows: 1.2fr 0.8fr;
	pointer-events: none;
`;

import styled, { css } from 'styled-components'
import {
	position,
	flexbox,
	FlexboxProps,
	grid,
	gridGap,
	GridGapProps,
	GridProps,
	layout,
	LayoutProps,
	PositionProps,
	space,
	SpaceProps,
	TypographyProps,
	typography,
} from 'styled-system'

export const GridLayout = styled.div<GridProps & SpaceProps & FlexboxProps & LayoutProps>`
	display: grid;
	grid-gap: ${props => props.gridGap ?? '1rem'};
	${grid}
	${space}
	${flexbox}
	${layout}
`
export const FlexLayout = styled.div<SpaceProps & FlexboxProps & LayoutProps & GridGapProps>`
	display: flex;
	${flexbox};
	${space};
	${layout};
	${gridGap};
`
export const GridItem = styled.div<GridProps & FlexboxProps>`
	${grid}
	${flexbox}
`



export const Stack = styled.div<PositionProps>`
	position: absolute;
	${position}
`

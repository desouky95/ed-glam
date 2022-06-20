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

export const Typography = styled.div<TypographyProps>`
	${typography}
`
export const PageWrapper = styled.div`
	padding: 1rem;
	width: 100%;
	@media (min-width: 1024px) {
		padding: 4.25rem 5.75rem;
	}
`
export const PageTitle = styled.h2`
	font-size: 2rem;
	font-weight: 500;
	line-height: 1.2;
	margin: 1rem 0;
`
export const FAQsTable = css`
	.table {
		width: 100%;
		margin-bottom: 1rem;
		color: #212529;
		table-layout: fixed;
		th,
		td {
			padding: 0.75rem;
			vertical-align: top;
			border-top: 1px solid #dee2e6;
			text-align: inherit;
		}
	}
`

export const Stack = styled.div<PositionProps>`
	position: absolute;
	${position}
`

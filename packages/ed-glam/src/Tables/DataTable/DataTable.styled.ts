import { TableLayoutProps } from '@eduact/student-theme'
import styled from 'styled-components'
import { layout, LayoutProps, variant } from 'styled-system'

export const DataTableRow = styled.tr<{ index: number }>`
	background: ${props => (props.index % 2 === 0 ? props.theme.colors.light : '#fafafa')};
	td {
		text-align: center;
		padding: 1em 0.688rem;
		font-size: 0.563rem;
		@media (min-width: 1024px) {
			font-size: 1rem;
			padding: 1em 2rem;
		}
	}
`
export const SortableHeaderSpan = styled.span<{ sortDirection: SortDirection }>`
	margin: 0 0.5rem;
	transition: all ease-in-out 200ms;
	vertical-align: middle;
	svg {
		transition: all ease-in-out 200ms;
		transform: ${props => (props.sortDirection === 'desc' ? 'rotate(180deg)' : '')};
	}
	opacity: 0.5;
`
export const DataTableHeaderStyled = styled.th<{ sortable?: boolean } & LayoutProps>`
	${layout}
	white-space: nowrap;
	padding: 0.5rem;
	font-size: 1rem;
	font-size: 0.625rem;
	text-align: center;
	font-weight: bold;
	border-bottom: 0.2em solid ${props => props.theme.colors.maxBluePurple};
	cursor: ${props => (props.sortable ? 'pointer' : 'default')};
	&:hover {
		${SortableHeaderSpan} {
			opacity: 1;
		}
	}
	@media (min-width: 1024px) {
		font-size: 1rem;
	}
`
export const DataTableWrapper = styled.div`
	overflow: auto;
`

export const DataTableStyled = styled.table<LayoutProps & TableLayoutProps>`
	${layout}
	${variant({ scale: 'tableLayout', prop: 'tableLayout' })}
	border-collapse : collapse;
	thead {
		background: ${props => props.theme.colors.cultured};
	}
`

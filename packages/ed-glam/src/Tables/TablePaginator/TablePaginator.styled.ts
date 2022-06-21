import { rgba } from 'polished'
import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

export const PaginatorWrapper = styled.div`
	display: flex;
	margin: 1rem;
	justify-content: flex-end;
	flex-direction: column;
	align-items: center;
	${({ theme }) => `${theme.mediaQueries.large}{
		flex-direction : row;		
	}`}
`
export const PerPageWrapper = styled.div`
	display: flex;
	align-items: center;
	label {
		font-weight: bold;
	}
`
export const PagesWrapper = styled.div`
	display: flex;
	margin: 0 1rem;
	overflow-x: auto;
	justify-content: flex-start;
	margin-bottom: 2rem;
	width: 100%;
	${({ theme }) => `${theme.mediaQueries.large}{
		width: unset;
		justify-content: flex-end;
	margin-bottom : unset;
}`}
`
export const TablePaginatorSpan = styled.span<{ selected?: boolean }>`
	padding: 0.6rem;
	border-radius: 4%;
	margin: 0 0.1em;
	min-width: 2rem;
	background: ${props => (props.selected ? props.theme.colors.purple : props.theme.colors.cultured)};
	color: ${props => (props.selected ? props.theme.colors.light : props.theme.colors.dark)};
	padding: 0.4em;
	border-radius: 5px;
	margin: 0 0.3em;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: fit-content;
	&:hover {
		box-shadow: 0 0 2px 1px ${props => rgba(props.theme.colors.dark, 0.1)};
	}
`

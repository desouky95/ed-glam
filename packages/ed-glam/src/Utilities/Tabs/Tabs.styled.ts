import { darken } from 'polished'
import styled from 'styled-components'
import { flexbox, FlexboxProps, grid, GridProps, layout, LayoutProps, space, SpaceProps } from 'styled-system'

export const TabsWrapper = styled.div<LayoutProps>`
	${layout};
	/* background: ${props => props.theme.colors.light}; */
	overflow: hidden;
	overflow: auto;
	max-width: 100vw;
	&::-webkit-scrollbar-track {
		width: 3px;
		background: ${props => props.theme.colors.spanishGray};
	}
	&::-webkit-scrollbar-thumb {
		width: 3px;
		background: ${props => props.theme.colors.light};
	}
	&::-webkit-scrollbar {
		width: 3px;
	}
`
export const TabsHeaderWrapper = styled.div`
	display: flex;
	transition: all ease-in-out 200ms;
	width: fit-content;
`
export const TabsHeaderSwiper = styled.div`
	border-bottom: 1px solid rgb(196, 196, 196);
	overflow-x: hidden;
	overflow-y: hidden;
	::-webkit-scrollbar {
		height: 2px;
		position: absolute;
		overflow: hidden;
	}

	::-webkit-scrollbar-track {
		border-radius: ${props => props.theme.borderRadii.small}px;
		background: ${props => props.theme.colors.cultured};
	}

	::-webkit-scrollbar-thumb {
		border-radius: ${props => props.theme.borderRadii.small}px;
		background: ${props => props.theme.colors.platinum};
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${props => darken(0.1, props.theme.colors.platinum)};
	}
`
export const TabHeaderStyled = styled.div<{ selected: boolean }>`
	color: ${props => props.theme.colors.purple};
	font-weight: bold;
	/* width: 6.25rem; */
	text-align: center;
	font-size: 0.875em;
	margin: 0px;
	cursor: pointer;
	line-height: 1.125rem;
	padding: 0.5em 0px;
	position: relative;
	min-width: 5rem;
	&::before {
		display: ${props => (props.selected ? 'block' : 'none')};
		content: '';
		position: absolute;
		height: 3px;
		width: 100%;
		background: rgb(181, 177, 255);
		left: 0;
		bottom: 0;
	}
`
export const TabsContentWrapper = styled.div<{ activeTab: string }>`
	display: flex;
	transform: ${props => {
		if (props.theme.direction === 'ltr') {
			return `translateX(${Number(props.activeTab) * -100}%);`
		}
		return `translateX(${Number(props.activeTab) * 100}%);`
	}};
	transition: all 640ms cubic-bezier(1, 0, 0, 1) 0s;
	/* flex-flow: column; */
`

export const SingleTabWrapper = styled.div<{ isSelected?: boolean } & LayoutProps>`
	/* padding: 1rem; */
	min-width: 100%;
	visibility: ${props => (props.isSelected ? 'visible' : 'hidden')};
	${layout}
	height: ${props => (!props.isSelected ? '0' : '')};
`
export const ParentTabsWrapper = styled.div`
	overflow: hidden;
	/* overflow-x: hidden; */
	:after {
		display: table;
		content: '';
		clear: both;
	}
`

export const StyledTabsHeaders = styled.div<SpaceProps & FlexboxProps & GridProps>`
	display: flex;
	${space};
	${grid}
	${flexbox};
`

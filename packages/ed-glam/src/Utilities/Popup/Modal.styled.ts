import { rgba } from 'polished'
import styled from 'styled-components'
import { layout, LayoutProps } from 'styled-system'

export const Wrapper = styled.div<{ hasParent: boolean }>`
	position: ${props => (props.hasParent ? 'absolute' : 'fixed')};
	z-index: ${props => (props.hasParent ? 9999 : 9999999)};
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${props => (props.hasParent ? '100%' : '100vw')};
	height: ${props => (props.hasParent ? '100%' : '100vh')};
	background: ${rgba('#000', 0.2)};
`
export const StyledModalContent = styled.div<LayoutProps>`
	position: relative;
	background: white;
	border-radius: 20px;
	overflow: auto;
	/* height: 100%; */
	max-width: 80vw;
	min-height: 70vh;
	min-width: 70vw;
	${layout}
`
export const ToggleWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	padding: 0.5em;
	cursor: pointer;
	z-index: 999;
`

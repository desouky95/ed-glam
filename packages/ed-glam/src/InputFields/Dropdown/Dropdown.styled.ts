import React from 'react'
import styled, { css } from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import { TextInputContainerStyled } from '@Components/InputFields/TextInput/TextInput.styled'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { darken } from 'polished'

export const StyledDropdown = styled.div<LayoutProps & SpaceProps & { disabled?: boolean }>`
	${layout};
	${space};
	font-size: 16px;
	position: relative;
	/* pointer-events: none; */

	pointer-events: ${props => (props.disabled ? 'none' : '')};
	cursor: ${props => (props.disabled ? 'not-allowed' : '')};
	* {
		cursor: ${props => (props.disabled ? 'not-allowed' : '')};
		pointer-events: ${props => (props.disabled ? 'none' : '')};
	}
`

export const StyledDropdownContainer = styled(TextInputContainerStyled)`
	cursor: pointer;
	user-select: none;
	margin-bottom: 0;
`

export const StyledDropdownLabel = styled.p`
	width: 100%;
	border: none;
	padding: 20px 0;
	padding: 10px 0;
`

export const InitialStyledDropdownLabel = styled(StyledDropdownLabel)`
	color: #d8d8d8;
`

export const StyledDropdownIconCss = css`
	color: ${props => props.theme.colors.primary};
`

export const UpArrowIcon = styled(IoIosArrowUp)`
	${StyledDropdownIconCss};
`

export const DownArrowIcon = styled(IoIosArrowDown)`
	${StyledDropdownIconCss};
`

export const DropdownItemsContainer = styled.div`
	position: relative;
`

export const DropdownItemsWrapper = styled.div<{ canExpand: boolean }>`
	position: absolute;
	width: 100%;
	max-height: 172px;
	/* overflow: scroll; */
	overflow: auto;
	background-color: #f3f3f3;
	z-index: 99;
	top: ${props => (props.canExpand ? '100%' : 'unset')};
	bottom: ${props => (!props.canExpand ? '100%' : 'unset')};
`

export const StyledDropdownItem = styled.p`
	padding: 12px;
	cursor: pointer;

	&:hover {
		background-color: ${darken(0.05, '#eee')};
	}
`

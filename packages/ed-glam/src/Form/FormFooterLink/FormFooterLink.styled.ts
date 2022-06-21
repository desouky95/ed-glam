import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'

export const StyledFormFooter = styled.p`
	margin-top: 16px;
	color: #979797;
	font-size: 12px;
	text-align: center;
`

export const StyledFormFooterLink = styled(Link)<LinkProps>`
	color: #979797;
	font-size: 12px;
	text-decoration: underline;

	:hover {
		cursor: pointer;
	}
`

export const StyledFormFooterButton = styled.button`
	color: #979797;
	font-size: 12px;
	text-decoration: underline;
	background-color: transparent;
	border: none;

	:hover {
		cursor: pointer;
	}
`

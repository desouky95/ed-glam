import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps, border } from 'styled-system'
import React from 'react'

export type StyledFormProps = SpaceProps & LayoutProps & React.ComponentProps<'form'>
export const StyledForm = styled.form<StyledFormProps>`
	${space};
	${layout};
	${border};
	background-color: ${props => props.theme.colors.light};
	border: 1px solid #ddd;
	border-radius: 14px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

	@media (max-width: 422px) {
		border: none;
		box-shadow: none;
	}
`

export const StyledFormHeader = styled.h2<SpaceProps>`
	${space};
	text-align: center;
	font-size: 20px;
	color: #757575;
`

export const StyledFormSectionLabel = styled.p`
	font-size: 14px;
	margin-top: 30px;
	margin-bottom: 20px;
	color: #979797;
`

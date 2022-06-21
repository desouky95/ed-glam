import React from 'react'
import { Route } from '@Constants/Routes'
import { StyledFormFooter, StyledFormFooterLink } from './FormFooterLink.styled'

type Props = {
	text: string
	link: string
	to: Route
}

const FormFooterLink: React.FC<Props> = ({ text, link, to }) => {
	return (
		<StyledFormFooter>
			{text} <StyledFormFooterLink to={to}>{link}</StyledFormFooterLink>
		</StyledFormFooter>
	)
}

export default FormFooterLink

import { Color } from '@eduact/student-theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { variant } from 'styled-system'

type Props = {
	error?: any
	color?: Color
}
const Error: React.FC<Props> = ({ error, color = 'princetonOrange' }) => {
	const [t] = useTranslation('inputs', { keyPrefix: 'validations' })
	return (
		<ErrorStyled error={error} color={color}>
			{error && t(error.message) ? t(error.message) : error ? t('invalid_input') : ''}
		</ErrorStyled>
	)
}

const ErrorStyled = styled.div<{ color: Color; error: any }>`
	font-size: 0.8rem;
	margin: 0.2rem 0;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	position: absolute;
	top: 100%;
	/* padding: ${props => (!props.error ? '12.8px 0' : '')}; */
	${variant({
		prop: 'color',
		scale: 'textButtonColors',
	})}
`

export default Error

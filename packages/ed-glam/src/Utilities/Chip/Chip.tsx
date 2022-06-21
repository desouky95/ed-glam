import { Color } from '@eduact/student-theme'
import { darken, lighten, opacify, rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { flexbox, FlexboxProps, size, variant } from 'styled-system'
import Spacer from '../Spacer'

type Props = {
	label: string
	icon?: JSX.Element
	variant?: Color
} & FlexboxProps
const Chip: React.FC<Props> = ({ label, icon, variant = 'primary', ...props }) => {
	return (
		<StyledChip variant={variant} {...props}>
			{icon && (
				<>
					<IconWrapper>{icon}</IconWrapper>
					<Spacer mx={4} />
				</>
			)}
			<span>{label}</span>
		</StyledChip>
	)
}

const StyledChip = styled.label<{ variant: Color } & FlexboxProps>`
	display: flex;
	min-width: 8rem;
	overflow: hidden;
	align-items: center;
	justify-content: center;
	${variant({ prop: 'variant', scale: 'buttonColors' })}
	padding: 0.3rem;
	border-radius: 30px;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 0.563rem;
	font-weight: bold;
	@media (min-width: 1024px) {
		font-size: 0.875rem;
	}
	span {
		min-height: 1.8rem;
		display: flex;
		align-items: center;
	}
	${flexbox}
`
const IconWrapper = styled.div`
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 50%;
	background: ${props => `${rgba(props.theme.colors.dark, 0.3)}`};
	display: grid;
	place-content: center;
	font-size: 1rem;
`

export default Chip

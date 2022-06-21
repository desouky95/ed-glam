import { Breakpoint, Color, MediaQuery, Shapes } from '@eduact/student-theme'
import styled from 'styled-components'
import { color, variant, ColorProps, system } from 'styled-system'
import { ReactPropTypes } from 'react'
type ResponsiveVal<T> = T | { [key in Breakpoint]?: MediaQuery }

export const AvatarStyled = styled.div<{
	size: ResponsiveVal<MediaQuery>
	shape: Shapes
	img?: string
	background: Color
	withBorder?: boolean
	borderColor: Color
}>`
	${variant({ scale: 'avatarSizes', prop: 'size' })}
	/* ${system({})}; */
	${variant({ scale: 'avatarShapes', prop: 'shape' })}
	background: url(${props => props.img});
	${variant({ scale: 'backgrounds', prop: 'background' })}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	cursor: ${props => (props.onClick ? 'pointer' : '')};
	border: ${props => {
		if (!props.withBorder) return ''
		return `3px solid ${props.theme.colors[props.borderColor]}`
	}};
	/* background:  ${props => (props.img ? `url${props.img}` : `${props.background}`)}; */
`

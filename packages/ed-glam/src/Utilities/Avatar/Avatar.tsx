import { Breakpoint, Color, MediaQuery, Shapes } from '@eduact/student-theme'
import React from 'react'
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from 'styled-system'
import { AvatarStyled } from './Avatar.styled'

type ResponsiveVal<T> = T | { [key in Breakpoint]?: MediaQuery }
type Props = {
	shape?: Shapes
	avatarSize?: ResponsiveVal<MediaQuery>
	img?: string
	background?: Color
	onClick?: (e: React.MouseEvent) => void
	withBorder?: boolean
	borderColor?: Color
}
const Avatar: React.FC<Props> = ({
	shape = 'circle',
	avatarSize = 'small',
	img,
	background = 'primary',
	borderColor = 'yellow',
	onClick,
	children,
	withBorder,
	...props
}) => {
	return (
		<AvatarStyled
			withBorder={withBorder}
			borderColor={borderColor}
			onClick={e => onClick && onClick(e)}
			background={background}
			shape={shape}
			size={avatarSize}
			img={img}
			{...props}
		>
			{children}
		</AvatarStyled>
	)
}

export default Avatar

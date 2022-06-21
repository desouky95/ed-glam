import { Color } from '@eduact/student-theme'
import React, { FC } from 'react'
import { LayoutProps, SpaceProps, TextAlignProps, FlexboxProps, TypographyProps } from 'styled-system'
import { IconButtonStyled } from './IconButton.styled'

type Props = {
	tooltip?: string
	variant?: Color
	icon: JSX.Element
	size?: number
} & React.ComponentProps<typeof IconButtonStyled> &
	LayoutProps &
	SpaceProps &
	TextAlignProps &
	FlexboxProps &
	TypographyProps &
	React.HTMLProps<HTMLButtonElement>
const IconButton: FC<Props> = ({ tooltip = '', variant = 'primary', icon, size = 16, ...props }) => {
	return (
		<IconButtonStyled tooltip={tooltip} fontSize={props.fontSize ?? size} color={variant} {...props}>
			{icon}
		</IconButtonStyled>
	)
}

export default IconButton

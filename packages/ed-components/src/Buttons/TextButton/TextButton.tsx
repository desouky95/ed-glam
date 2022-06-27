import { Color } from '@eduact/student-theme'
import React, { FC } from 'react'
import { LayoutProps, SpaceProps, TextAlignProps, FlexboxProps, TypographyProps, ColorProps } from 'styled-system'
import { TextButtonStyled } from './TextButton.styled'

type Props = {
	variant?: Color
} & React.ComponentProps<typeof TextButtonStyled> &
	LayoutProps &
	SpaceProps &
	TextAlignProps &
	FlexboxProps &
	TypographyProps &
	React.HTMLProps<HTMLButtonElement>
export type TextButtonProps = Props
const TextButton: FC<Props> = ({ variant = 'primary', children, ...props }) => {
	return (
		<TextButtonStyled variant={variant} {...props}>
			{children}
		</TextButtonStyled>
	)
}

export default TextButton

TextButton.defaultProps = {
	variant: 'primary',
}

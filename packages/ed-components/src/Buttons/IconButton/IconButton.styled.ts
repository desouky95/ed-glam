import { Color } from '@eduact/student-theme'
import styled from 'styled-components'
import {
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
	textAlign,
	TextAlignProps,
	typography,
	TypographyProps,
	variant,
} from 'styled-system'

type Props = {
	color: Color
	fontSize: number
	tooltip: string
} & LayoutProps &
	SpaceProps &
	TextAlignProps &
	FlexboxProps &
	TypographyProps
export const IconButtonStyled = styled.div<Props>`
	${typography}
	${variant({
		scale: 'textButtonColors',
		prop: 'color',
	})}
	${layout}
	${space}
	${flexbox}
	${textAlign}
	font-weight: 500;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: ${props => `${props.theme.borderRadii.large}px`};
	border: none;
	background: transparent;
	position: relative;
	&::before {
		position: absolute;
		left: 80%;
		top: -30%;
		font-size: 10px;
		opacity: 0.5;
		min-width: 48px;
	}
	&:hover {
		&::before {
			content: ${props => `"${props.tooltip}"`};
		}
	}
`

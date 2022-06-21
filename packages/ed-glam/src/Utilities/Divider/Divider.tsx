import { Color, Orientation } from '@eduact/student-theme'
import React from 'react'
import styled from 'styled-components'
import { LayoutProps, SpaceProps, variant } from 'styled-system'
import { StyledDivider } from './Divider.styled'

type Props = {
	orientation?: Orientation
	color?: Color
} & LayoutProps &
	SpaceProps
const Divider: React.FC<Props> = ({ color = 'platinum', orientation = 'vertical', ...props }) => {
	return <StyledDivider orientation={orientation} color={color} {...props} />
}
export default Divider

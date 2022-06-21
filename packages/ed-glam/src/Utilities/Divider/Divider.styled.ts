import { Orientation, Color } from '@eduact/student-theme'
import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system'
type Props = {
	orientation: Orientation
	color: Color
} & LayoutProps &
	SpaceProps
export const StyledDivider = styled.div<Props>`
	${variant({ prop: 'color', scale: 'backgrounds' })}
	flex-shrink : 0;
	width: ${props => (props.orientation === 'vertical' ? '1px' : 'auto')};
	height: ${props => (props.orientation === 'horizontal' ? '1px' : 'auto')};
	/* display: flex; */
	align-self: stretch;
	margin: ${props => (props.orientation === 'vertical' ? '0 5px' : '5px 0')};
	${space}
	${layout}
`

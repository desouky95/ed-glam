import { Color, MediaQuery, Orientation,FlexLayout } from '@eduact/student-theme'
import { cssVar, rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

type Props = {
	orientation?: Orientation
	children: Array<React.ReactElement<StepperItemProps>>
}
interface StepperComposition {
	Item: React.FC<StepperItemProps>
}
const Stepper: React.FC<Props> & StepperComposition = ({ children, orientation = 'vertical' }) => {
	return (
		<div style={{ width: '100%' }}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child))
					return React.cloneElement(child as React.ReactElement<StepperItemProps>, {
						...child.props,
						isLast: index === React.Children.count(children) - 1,
						orientation,
						isFirst: index === 0,
					})
			})}
		</div>
	)
}

type StepperUIProps = {
	isLast?: boolean
	isFirst?: boolean
	orientation?: Orientation
	size?: MediaQuery
	color?: Color
	checked?: boolean
	filled?: boolean
}
type StepperItemProps = {
	children: {
		icon: React.ReactElement
		content?: React.ReactNode | (() => React.ReactNode)
	}
} & StepperUIProps &
	Pick<React.HTMLProps<HTMLDivElement>, 'onClick'>
const StepperItem: React.FC<StepperItemProps> = ({
	color = 'primary',
	size = 'small',
	checked,
	children,
	isLast,
	orientation,
	isFirst,
	filled,
	onClick,
}) => {
	return (
		<FlexLayout alignItems="stretch" onClick={onClick}>
			<StepWrapper orientation={orientation}>
				<StepperIcon filled={filled} size={size} color={color} isLast={isLast} isFirst={isFirst} checked={checked}>
					{children.icon}
				</StepperIcon>
				<StepLine color={color} isFirst={isFirst} isLast={isLast} />
			</StepWrapper>
			<ContentWrapper checked={checked} isLast={isLast} isFirst={isFirst}>
				{typeof children.content === 'function' ? children.content() : children.content}
			</ContentWrapper>
		</FlexLayout>
	)
}

const StepWrapper = styled(FlexLayout)<StepperUIProps>`
	flex-direction: ${props => (props.orientation === 'vertical' ? 'column' : '')};
	width: fit-content;
	position: relative;
	cursor: pointer;
`
const StepperIcon = styled.div<StepperUIProps & Required<Pick<StepperUIProps, 'color'>>>`
	--color: ${props => `${props.theme.colors[props.color]}`};
	border-radius: 50%;
	${variant({ prop: 'size', scale: 'stepperIconSizes' })};
	border-width: 3px;
	border-style: solid;
	box-sizing: border-box;
	${variant({ prop: 'color', scale: 'stepperIconColors' })};
	background: ${props => (!props.filled ? '#FFF' : 'var(--color)')};
	color: ${props => (props.filled ? '#FFF' : `var(--color)`)};
	font-size: 0.781rem;
	font-weight: bold;
	display: grid;
	place-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%) translateX(-50%);
`

const StepLine = styled.div<StepperUIProps>`
	width: 3px;
	height: 60px;
	background: ${props => props.theme.colors[props.color ?? 'primary']};
`
const ContentWrapper = styled(FlexLayout)<StepperUIProps>`
	flex: 1;
	background: ${props => (props.checked ? `${rgba(props.theme.colors.primary, 0.1)}` : '')};
`
Stepper.Item = StepperItem
export default Stepper

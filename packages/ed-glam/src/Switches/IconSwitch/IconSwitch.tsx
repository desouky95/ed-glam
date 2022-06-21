import Icon from '@Components/Icons/Icon/Icon'
import { FlexLayout } from '@eduact/student-theme'
import React, { useState } from 'react'
import styled from 'styled-components'
type InputProps = Pick<React.HTMLProps<HTMLInputElement>, 'value' | 'defaultValue' | 'onClick' | 'checked' | 'tabIndex'>
type Props = {
	children: [React.ReactElement<typeof IconSwitchItem>, React.ReactElement<typeof IconSwitchItem>]
} & InputProps & { onChange: (value: any) => void }
interface IconSwitchComposition {
	Item: React.FC<InputProps>
}
const IconSwitch: React.FC<Props> & IconSwitchComposition = ({ value, onChange, children, defaultValue }) => {
	// const [_value, setValue] = useState(value)

	return (
		<FlexLayout>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child as React.ReactElement<InputProps>, {
						checked: value === child.props.value,
						onClick: (e: React.MouseEvent) => {
							child.props.onClick && child.props.onClick(e)
							// setValue(child.props.value)
							onChange && onChange(child.props.value)
						},
						tabIndex: index,
					})
				}
			})}
		</FlexLayout>
	)
}

const IconSwitchItem: React.FC<InputProps> = ({ value, checked, onClick, tabIndex, children }) => {
	return (
		<StyledIconSwitchItem tabIndex={tabIndex} checked={checked} onClick={onClick}>
			<ChildrenWrapper checked={checked}>{children}</ChildrenWrapper>
		</StyledIconSwitchItem>
	)
}
IconSwitch.Item = IconSwitchItem
const StyledIconSwitchItem = styled.div<InputProps>`
	width: 2.5rem;
	height: 1.875rem;
	padding: 5px;
	background: ${props => (props.checked ? props.theme.colors.primary : '#979797')};
	cursor: pointer;
	color: #fff;
	display: grid;
	place-items: center;
	border-radius: ${props => (props.tabIndex === 0 ? '5px 0 0 5px' : '0 5px  5px 0')};
	transform: ${props => (props.checked ? 'scaleY(1.2)' : '')};
	transition: all ease-in-out 200ms;
`
const ChildrenWrapper = styled.div<InputProps>`
	transform: ${props => (props.checked ? 'scaleY(0.8)' : '')};
	/* position : absolute; */
`

export default IconSwitch

import React from 'react'
import { StyledDropdownItem } from '@Components/InputFields/Dropdown/Dropdown.styled'

type DropdownItemProps = {
	value: any
	onClick?: any
	displayName?: string
} & React.ComponentProps<typeof StyledDropdownItem>

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick, displayName }) => {
	return <StyledDropdownItem onClick={onClick}>{displayName ?? children}</StyledDropdownItem>
}

export default DropdownItem

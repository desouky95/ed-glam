import React, { useState, useRef, useCallback } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import {
	StyledDropdown,
	StyledDropdownContainer,
	StyledDropdownLabel,
	InitialStyledDropdownLabel,
	DropdownItemsContainer,
	DropdownItemsWrapper,
	UpArrowIcon,
	DownArrowIcon,
} from '@Components/InputFields/Dropdown/Dropdown.styled'
import useOutsideAlert from '@Hooks/useOutsideAlert'
import { SpaceProps } from 'styled-system'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { useTranslation } from 'react-i18next'

export type DropdownProps = {
	/** Should have the onClick event on it */
	children?: React.ReactNode
	/** A string Label to describe currently selected item */
	selectedItemLabel?: string
	setSelectedItemLabel?: React.Dispatch<React.SetStateAction<string | undefined>>
	placeholder?: string
	setSelectedItem: React.Dispatch<React.SetStateAction<any>>
	width?: string
	register?: UseFormRegisterReturn
	disabled?: boolean
	i18nLookupKey?: string
} & SpaceProps

// TODO: adjust initial placeholder logic
const Dropdown: React.FC<DropdownProps> = ({
	children,
	placeholder,
	selectedItemLabel,
	setSelectedItemLabel,
	width = '100%',
	setSelectedItem,
	marginY = 16,
	register,
	i18nLookupKey,
	...props
}) => {
	// local state
	const [showDropdownItems, setShowDropdownItems] = useState<boolean>(false)
	const [isTouched, setIsTouched] = useState<boolean>(false)
	const [optionsCanOpen, setOptionsCanOpen] = useState(true)
	const [t] = useTranslation(['inputs', 'dropdowns'])
	// refs
	const dropdownRef = useRef<HTMLDivElement>(null)
	useOutsideAlert(dropdownRef, () => {
		setShowDropdownItems(false)
	})
	const dropdownOptionsRef = useCallback((node: HTMLDivElement) => {
		if (node && node.parentElement) {
			const observer = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry && node) {
						if (entry.intersectionRatio < 1) {
							setOptionsCanOpen(false)
						}
						observer.unobserve(node)
					}
				})
			})
			observer.observe(node)
		}
	}, [])
	const onClickMapper = (
		// child callback parameter type
		element:
			| React.ReactElement<
					any,
					string | ((props: any) => React.ReactElement<any, any> | null) | { new (props: any): React.Component<any, any, any> }
			  >
			| React.ReactPortal
	) => {
		if (!isTouched) setIsTouched(true)

		if (element.props.onClick) {
			return () => {
				element.props.onClick()
				if (setSelectedItemLabel) setSelectedItemLabel(element.props.children)
				setShowDropdownItems(false)
			}
		}
		return () => {
			setSelectedItem(element.props.value)
			if (setSelectedItemLabel) setSelectedItemLabel(element.props.children)
			setShowDropdownItems(false)
		}
	}

	return (
		<StyledDropdown width={width} ref={dropdownRef} {...props}>
			<input hidden {...register} />
			<StyledDropdownContainer onClick={() => setShowDropdownItems(!showDropdownItems)}>
				{selectedItemLabel ? (
					<StyledDropdownLabel>
						{i18nLookupKey ? t(`dropdowns:${i18nLookupKey}.${selectedItemLabel}`) : selectedItemLabel}
					</StyledDropdownLabel>
				) : (
					<InitialStyledDropdownLabel>{t(`${placeholder}`)}</InitialStyledDropdownLabel>
				)}
				{showDropdownItems ? <UpArrowIcon /> : <DownArrowIcon />}
			</StyledDropdownContainer>
			{showDropdownItems && (
				// <DropdownItemsContainer>
				<DropdownItemsWrapper canExpand={optionsCanOpen} ref={dropdownOptionsRef}>
					{React.Children.map(children, child => {
						if (React.isValidElement(child)) {
							return React.cloneElement(child, {
								...child.props,
								onClick: onClickMapper(child),
								displayName: i18nLookupKey ? t(`dropdowns:${i18nLookupKey}.${child.props.displayName ?? child.props.value}`) : null,
							})
						}
					})}
				</DropdownItemsWrapper>
				// </DropdownItemsContainer>
			)}

			{/* {showDropdownItems && (
				// <DropdownItemsContainer>
				<DropdownItemsWrapper canExpand={optionsCanOpen} ref={dropdownOptionsRef}>
					{React.Children.map(children, child => {
						if (React.isValidElement(child)) {
							return React.cloneElement(child, {
								...child.props,
								onClick: onClickMapper(child),
							})
						}
					})}
				</DropdownItemsWrapper>
				// </DropdownItemsContainer>
			)} */}
		</StyledDropdown>
	)
}

export default Dropdown

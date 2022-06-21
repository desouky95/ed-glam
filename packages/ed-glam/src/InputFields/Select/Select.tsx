import useOutsideAlert from '@Hooks/useOutsideAlert'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Control, FieldValues, RefCallBack, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
	ArrowIcon,
	CloseIcon,
	DropdownItemsWrapper,
	HiddenSelect,
	StyledDropdown,
	StyledDropdownContainer,
	StyledDropdownItem,
	StyledDropdownLabel,
} from './Select.styled'

type ItemProps = { onClick?: (value: any, label?: string) => void; children: string | undefined } & React.HTMLProps<HTMLOptionElement>

export const Option: React.FC<ItemProps> = ({ children, value, onClick }) => {
	return <StyledDropdownItem onClick={() => onClick && onClick(value, children)}>{children}</StyledDropdownItem>
}

type Props = {
	children: React.ReactElement<ItemProps>[] | React.ReactElement<ItemProps> | undefined
	control?: any
	name: any
	i18nLookupKey?: string
} & React.HTMLProps<HTMLSelectElement>

const Select: React.FC<Props> = ({ name, children, control, ...props }) => {
	const [expanded, setExpanded] = useState(false)
	const [optionsCanOpen, setOptionsCanOpen] = useState(true)
	const [innerValue, setInnerValue] = useState<string>()
	const [triggerChange, setTriggerChange] = useState(false)
	const [label, setLabel] = useState<string>()
	const SelectRef = useRef<HTMLDivElement>(null)
	const [t] = useTranslation(['inputs', 'dropdowns'])

	useOutsideAlert(SelectRef, () => {
		setExpanded(false)
	})

	const {
		field: { ref, value, ...rest },
	} = useController({
		name: name,
		control,
	})
	useEffect(() => {
		if (value !== undefined && children) {
			setInnerValue(value.toString())
			React.Children.map(children, (child: React.ReactElement<ItemProps>) => {
				if (child) {
					if (child.props.value == value) {
						setLabel(child.props.children)
						return
					}
				}
			})
		} else {
			setInnerValue(undefined)
			setLabel(undefined)
		}
	}, [children, value])

	const hiddenSelectRef = useCallback(
		(e: HTMLSelectElement | null) => {
			if (e && triggerChange) {
				e.value = innerValue?.toString() ?? ''
				var event = document.createEvent('UIEvents')
				event.initEvent('change', true, true)
				e.dispatchEvent(event)
				setTriggerChange(false)
			}
		},
		[innerValue, triggerChange]
	)

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

	const handleChange = React.useCallback((value: any, label?: string) => {
		setExpanded(false)
		setInnerValue(value)
		setLabel(label)
		setTriggerChange(true)
	}, [])

	return (
		<StyledDropdown ref={SelectRef} $disabled={props.disabled}>
			<HiddenSelect
				ref={e => {
					ref(e)
					hiddenSelectRef(e)
				}}
				title={name}
				value={value}
				{...rest}
			>
				{React.Children.toArray(children).map((child, index: any) => {
					const item = child as React.ReactElement<ItemProps>
					return (
						<option key={item.key} {...item.props}>
							{item.props.children}
						</option>
					)
				})}
			</HiddenSelect>

			<StyledDropdownContainer
				onClick={e => {
					if (children) {
						setExpanded(!expanded)
					}
				}}
			>
				<StyledDropdownLabel>
					{props.i18nLookupKey
						? t(`dropdowns:${props.i18nLookupKey}.${innerValue}`)
						: label !== undefined
						? label
						: t(`${props.placeholder}`)}
				</StyledDropdownLabel>
				{!label && <ArrowIcon expanded={expanded ? 1 : 0} />}
				{label && (
					<CloseIcon
						onClick={e => {
							e.stopPropagation()
							handleChange(undefined)
						}}
					/>
				)}
			</StyledDropdownContainer>
			{expanded && (
				<DropdownItemsWrapper canExpand={optionsCanOpen} ref={dropdownOptionsRef}>
					{React.Children.map(children, child => {
						if (React.isValidElement(child)) {
							return React.cloneElement(child, {
								...child.props,
								onClick: handleChange,
							})
						}
					})}
				</DropdownItemsWrapper>
			)}
		</StyledDropdown>
	)
}

export default Select

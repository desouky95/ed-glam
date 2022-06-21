import React, { useState, useRef } from 'react'
import TextInput from '@Components/InputFields/TextInput'
import useOutsideAlert from '@Hooks/useOutsideAlert'
import { WidthProps } from 'styled-system'

export type DatePickerProps = {} & WidthProps & React.ComponentProps<typeof TextInput>

const DatePicker: React.FC<DatePickerProps> = ({ width = '100%', ...props }) => {
	const [inputType, setInputType] = useState<'text' | 'date'>('text')
	const dateRef = useRef<HTMLInputElement>(null)
	useOutsideAlert(dateRef, () => {
		if (dateRef.current?.value) {
			return
		}
		setInputType('text')
	})

	const focusHandler = () => {
		setInputType('date')
	}

	return <TextInput width={width} type={inputType} onFocus={focusHandler} ref={dateRef} {...props} />
}

export default DatePicker

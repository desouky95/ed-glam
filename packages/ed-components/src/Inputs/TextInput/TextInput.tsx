import Spacer from '../..//Spacer';
import React, { useState } from 'react';
import { Icon, Icons } from '../..//Icons/Icons';
import {
	InputBaseWrapper,
	InputWrapper,
	StyledInput,
} from './TextInput.styles';
import {
	InputBaseHelperText,
	RequiredMark,
} from '../BaseInputUtils/BaseInputUtils';
import {
	InputBaseError,
	InputBaseUIProps,
	isDatetime,
} from '../BaseInputUtils/BaseInputs.types';

export type TextInputProps = {
	withToggle?: boolean;
	startAdornment?: JSX.Element;
	endAdornment?: JSX.Element;
} & React.HTMLProps<HTMLInputElement> &
	InputBaseError &
	InputBaseUIProps;
const TextInput = React.forwardRef<
	HTMLInputElement,
	React.PropsWithChildren<TextInputProps>
>(
	(
		{
			ref: _ref,
			as,
			withToggle = true,
			startAdornment,
			endAdornment,
			withHelperText = true,
			...props
		}: React.PropsWithChildren<TextInputProps>,
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		const [type, setType] = useState(
			isDatetime(props.type) && props.placeholder ? 'text' : props.type
		);

		return (
			<InputBaseWrapper {...props}>
				<InputWrapper
					error={props.error}
					onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
						if (isDatetime(props.type)) {
							setType(props.type);
						}
						props.onFocus && props.onFocus(e);
					}}
					onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
						if (isDatetime(props.type)) {
							setType('text');
						}
						props.onBlur && props.onBlur(e);
					}}
				>
					{startAdornment}
					<StyledInput ref={ref as any} {...props} type={type} />
					{props.type === 'password' && withToggle && (
						<Spacer mx={'6px'}>
							<Icon
								onClick={() =>
									setType(type === 'password' ? 'text' : 'password')
								}
							>
								{type === 'password' ? <Icons.EyeIcon /> : <Icons.EyeoffIcon />}
							</Icon>
						</Spacer>
					)}
					{endAdornment}
					{props.required && <RequiredMark>*</RequiredMark>}
				</InputWrapper>
				{withHelperText && (
					<InputBaseHelperText error={props.error}>
						{props.helperText}
					</InputBaseHelperText>
				)}
			</InputBaseWrapper>
		);
	}
);

export default TextInput;

import React, { useState } from "react";
import {
  InputBaseHelperText,
  RequiredMark,
} from "../BaseInputUtils/BaseInputUtils";
import { InputBaseError, isDatetime } from "../BaseInputUtils/BaseInputs.types";
import { TextInputProps } from "../TextInput";
import {
  InputBaseWrapper,
  InputWrapper,
  StyledInput,
} from "../TextInput/TextInput.styles";
import { Typography } from "@eduact/ed-system";

export type PhoneNumberProps = {
  phonePrefix?: string;
} & React.HTMLProps<HTMLInputElement> &
  InputBaseError &
  TextInputProps;
const PhoneNumberInput = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<PhoneNumberProps>
>(
  (
    {
      ref: _ref,
      onChange,
      name,
      as,
      onKeyDown,
      onBlur,
      onFocus,
      value,
      ...props
    }: React.PropsWithChildren<PhoneNumberProps>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputBaseWrapper>
        <InputWrapper error={props.error}>
          {props.phonePrefix && <Typography>{props.phonePrefix}</Typography>}
          <StyledInput
            // onKeyDown={(e) => {
            //   const key = e.key.trim();
            //   const isValid =
            //     key === "Backspace" || (!isNaN(Number(key)) && key.length > 0);

            //   if (!isValid) {
            //     e.preventDefault();
            //     return false;
            //   }
            //   return true;
            // }}
            as={"input"}
            onBlur={onBlur}
            onFocus={onFocus}
            name={name}
            onChange={onChange}
            ref={_ref as any}
            // ref={(e: HTMLInputElement | null) => {
            //   if (typeof ref === "function") {
            //     ref(e);
            //   } else if (ref) {
            //     ref.current = e;
            //   }
            // }}
            {...props}
          />

          {props.required && <RequiredMark>*</RequiredMark>}
        </InputWrapper>
        <InputBaseHelperText error={props.error}>
          {props.helperText}
        </InputBaseHelperText>
      </InputBaseWrapper>
    );
  }
);

export default PhoneNumberInput;

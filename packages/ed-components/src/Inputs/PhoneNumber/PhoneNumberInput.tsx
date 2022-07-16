import React from "react";
import {
  InputBaseHelperText,
  RequiredMark,
} from "../BaseInputUtils/BaseInputUtils";
import { InputBaseError, isDatetime } from "../BaseInputUtils/BaseInputs.types";
import {
  InputBaseWrapper,
  InputWrapper,
  StyledInput,
} from "../TextInput/TextInput.styles";
import { Typography } from "@eduact/ed-system";
export type PhoneNumberProps = {
  phonePrefix?: string;
} & React.HTMLProps<HTMLInputElement> &
  InputBaseError;

const PhoneNumberInput = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<PhoneNumberProps>
>(({ as, ...props }, ref) => {
  return (
    <InputBaseWrapper>
      <InputWrapper error={props.error}>
        {props.phonePrefix && <Typography>{props.phonePrefix}</Typography>}
        <StyledInput
          ref={ref as any}
          onKeyDown={(e) => {
            const { key } = e;
            if (key.match(/^[^0-9]$/)) {
              e.preventDefault();
            }
          }}
          {...props}
        />

        {props.required && <RequiredMark>*</RequiredMark>}
      </InputWrapper>
      <InputBaseHelperText error={props.error}>
        {props.helperText}
      </InputBaseHelperText>
    </InputBaseWrapper>
  );
});

export default PhoneNumberInput;

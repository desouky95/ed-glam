import React, { useState } from "react";
import { Icon, EyeIcon, EyeoffIcon } from "../../Icons/Icons";
import { InputWrapper, StyledInput } from "./TextInput.styles";

export type TextInputProps = {
  withToggle?: boolean;
} & React.HTMLProps<HTMLInputElement>;
const TextInput = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<TextInputProps>
>(
  (
    {
      ref: _ref,
      as,
      withToggle = true,
      ...props
    }: React.PropsWithChildren<TextInputProps>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [type, setType] = useState(props.type);

    return (
      <InputWrapper>
        <StyledInput ref={ref as any} {...props} type={type} />
        {props.type === "password" && withToggle && (
          <Icon
            onClick={() => setType(type === "password" ? "text" : "password")}
          >
            {type === "password" ? <EyeIcon /> : <EyeoffIcon />}
          </Icon>
        )}
      </InputWrapper>
    );
  }
);

export default TextInput;

import React from "react";
import { SpaceProps } from "styled-system";
import { StyledForm, StyledFormHeader, StyledFormProps } from "./Form.styled";

export type FormProps = {
  formHeader?: string;
  formHeaderStyles?: SpaceProps;
} & StyledFormProps &
  React.ComponentProps<typeof StyledForm>;

const Form: React.FC<FormProps> = ({
  children,
  formHeader,
  maxWidth = 422,
  paddingTop = 32,
  paddingBottom = 20,
  paddingX = 20,
  marginY = 16,
  formHeaderStyles,
  ...props
}) => {
  return (
    <StyledForm
      maxWidth={maxWidth}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      marginY={marginY}
      paddingX={paddingX}
      {...props}
    >
      {formHeader && (
        <StyledFormHeader {...formHeaderStyles}>{formHeader}</StyledFormHeader>
      )}
      {children}
    </StyledForm>
  );
};

export default Form;

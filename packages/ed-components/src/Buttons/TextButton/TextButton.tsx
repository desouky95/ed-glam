import { Color, MediaQuery, ResponsiveVal } from "@eduact/student-theme";
import React, { FC } from "react";
import {
  LayoutProps,
  SpaceProps,
  TextAlignProps,
  FlexboxProps,
  TypographyProps,
  ColorProps,
} from "styled-system";
import { TextButtonStyled } from "./TextButton.styled";

type Props = {
  variant?: Color;
  btnSize?: ResponsiveVal<MediaQuery>;
} & React.ComponentProps<typeof TextButtonStyled> &
  LayoutProps &
  SpaceProps &
  TextAlignProps &
  FlexboxProps &
  TypographyProps &
  React.HTMLProps<HTMLButtonElement>;
export type TextButtonProps = Props;
const TextButton: FC<Props> = ({
  variant = "primary",
  btnSize = "large",
  justifyContent = "center",
  children,
  ...props
}) => {
  return (
    <TextButtonStyled variant={variant} btnSize={btnSize} {...props}>
      {children}
    </TextButtonStyled>
  );
};

export default TextButton;

TextButton.defaultProps = {
  variant: "primary",
};

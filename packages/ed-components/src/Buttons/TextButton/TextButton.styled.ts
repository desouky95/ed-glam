import { Color, MediaQuery, ResponsiveVal } from "@eduact/student-theme";
import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  typography,
  TypographyProps,
  variant,
} from "styled-system";

import { Property } from "csstype";
import { textDecoration, TextDecorationProps } from "@eduact/ed-system";

type Props = {
  variant: Color;
  btnSize: MediaQuery;
  textDecoration?: ResponsiveVal<Property.TextDecoration>;
} & LayoutProps &
  SpaceProps &
  TextAlignProps &
  FlexboxProps &
  TypographyProps &
  TextDecorationProps &
  React.HTMLProps<HTMLButtonElement>;
export const TextButtonStyled = styled.button<Props>`
  padding: 1.125rem 2rem;
  font-weight: 500;
  font-size: ${(props) => `${props.theme.fontSizesAliases.body ?? 1}rem`};
  ${variant({ scale: "textButtonColors", prop: "variant" })}
  ${textAlign}
	${flexbox}
	${typography}
  ${textDecoration}
	${space}
	${layout}
	background: none;
  border: none;
  cursor: pointer;
  /* font-size: 0.75rem; */
  transition: all ease-in-out 200ms;
  display: flex;
  align-items: center;
  /* min-width: 9.375rem; */
  white-space: pre;
  &:hover {
    opacity: 0.8;
  }
  @media (min-width: 1024px) {
    ${variant({
      prop: "btnSize",
      scale: "buttonSizes",
    })}
  }

  ${variant({
    prop: "btnSize",
    scale: "buttonSizes",
  })}
`;

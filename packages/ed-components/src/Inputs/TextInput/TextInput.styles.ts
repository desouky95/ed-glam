import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { InputBaseError } from "../BaseInputUtils";

export const InputBaseWrapper = styled.div<SpaceProps & LayoutProps>`
  ${space};
  ${layout};
`;
export const InputWrapper = styled.div<InputBaseError>`
  display: flex;
  border-bottom: 0.6px solid ${(props) => props.theme.colors.silver};
  padding: 6px 0;
  border-bottom-color: ${(props) =>
    props.error ? props.theme.colors.red : ""};
`;
export const StyledInput = styled.input<InputBaseError>`
  flex: 1;
  width: 100%;
  border: none;
  --color: ${(props) => props.theme.colors.silver};
  outline: var(--color);
  /* color: #000; */
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.06;
  letter-spacing: normal;
  &::placeholder {
    color: var(--color);
  }
`;

import { HTMLProps } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Icon } from "../../Icons/Icons";
// import {} from 'styled-system'
import { InputBaseError } from "../BaseInputUtils/BaseInputs.types";

type WrapperProps = SpaceProps &
  LayoutProps &
  InputBaseError & { $hasValue: boolean };
export const DropdownWrapper = styled.div<WrapperProps>`
  display: flex;
  position: relative;
  cursor: pointer;
  justify-content: space-between;
  border-bottom: 0.6px solid ${(props) => props.theme.colors.silver};
  padding: 6px 0;
  --color: ${(props) =>
    props.$hasValue ? props.theme.colors.dark : props.theme.colors.silver};
  color: var(--color);
  align-items: center;
  span {
    flex: 1;
  }
  border-bottom-color: ${(props) =>
    props.error ? props.theme.colors.red : ""};
  ${layout};
  ${space};
`;

export const DropdownIcon = styled(Icon)<{ $opened: boolean }>`
  transform: ${(props) => (props.$opened ? "rotate(180deg)" : "")};
  transition: all ease-in-out 100ms;
`;
export const DropdownOptions = styled.div<{ $opened: boolean }>`
  height: auto;
  box-shadow: 0 2px 2px 2px #000;
`;

export const AnimatedWrapper = styled(animated.div)`
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 999;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background: ${(props) => props.theme.colors.cultured};
  box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
`;
export const StyledInput = styled.input`
  flex: 1;
  border: none;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.06;
  letter-spacing: normal;
`;

export const StyledDropdownOption = styled.option`
  padding: 6px 1.875rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.dark};
  background: ${(props) => (props.selected ? "#eeeeee" : "")};
  &:hover {
    background: #eeeeee;
  }
`;

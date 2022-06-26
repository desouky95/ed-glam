import { FlexLayout } from "@eduact/ed-system";
import styled from "styled-components";
import { StepperItemUIProps } from "./Stepper";

export const StepperItemBullet = styled.div`
  --width: 2.188rem;
  width: var(--width);
  height: var(--width);
  box-shadow: inset 0 0 0px 4px ${(props) => props.theme.colors.silver};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.light};
  cursor: pointer;
  font-size: 1.625rem;
  color: ${(props) => props.theme.colors.primary};
  
`;

export const StepLine = styled.div`
  width: 10rem;
  height: 4px;
  background: ${(props) => props.theme.colors.primary};
`;
export const StepWrapper = styled(FlexLayout)<StepperItemUIProps>`
  ${StepperItemBullet} {
    ---widthSelected: ${(props) => (props.isSelected ? "2.625rem" : "")};
    width: ${(props) => (props.isSelected ? "var(---widthSelected)" : "")};
    height: ${(props) => (props.isSelected ? "var(---widthSelected)" : "")};
    box-shadow: ${(props) =>
      props.isSelected
        ? `inset 0 0 0px 4px ${props.theme.colors.primary}`
        : ""};
    /* background: ${(props) =>
      props.isSelected ? props.theme.colors.primary : ""}; */
  }
`;

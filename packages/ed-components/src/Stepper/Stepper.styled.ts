import { FlexLayout } from "@eduact/ed-system";
import styled, { css, keyframes } from "styled-components";
import { StepperItemUIProps } from "./Stepper.types";

const FillAnimation = keyframes`
 0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-100%) rotate(360deg);
  }
`;

export const BulletContent = styled.div`
  z-index: 4;
`;
export const StepperItemBullet = styled.div`
  /* width: var(--width); */
  /* height: var(--width); */
  box-shadow: inset 0 0 0px 4px ${(props) => props.theme.colors.silver};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.light};
  cursor: pointer;
  font-size: 1.625rem;
  color: ${(props) => props.theme.colors.primary};
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`;

export const StepLine = styled.div`
  width: 10rem;
  height: 4px;
`;
export const StepWrapper = styled(FlexLayout)<StepperItemUIProps>`
  ${StepLine} {
    background: ${(props) => props.finished ? props.theme.colors.primary : props.theme.colors.silver};
  };
  ${StepperItemBullet} {
    --width: ${(props) =>
      props.isSelected || props.finished ? "2.625rem" : "2.188rem"};
    width: var(--width);
    height: var(--width);
    box-shadow: ${(props) =>
      `inset 0 0 0px 4px ${
        props.isSelected || props.finished
          ? props.theme.colors.primary
          : props.theme.colors.silver
      }`};
    color: ${(props) => (props.finished ? "#FFF" : "")};
    transition: color ease-in-out 200ms;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      /* box-sizing: border-box; */
      border-radius: 40%;
      top: 100%;
      background: ${(props) => props.theme.colors.primary};
      animation: ${(props) =>
        props.finished &&
        css`
          ${FillAnimation} 400ms forwards
        `};
    }
  }
`;

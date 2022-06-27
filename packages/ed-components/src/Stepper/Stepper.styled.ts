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

export const BulletTooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  width: fit-content;
  color: ${(props) => props.theme.colors.primary};
  display: none;
  font-weight: 500;
  ${({ theme }) => `${theme.mediaQueries.large}{
    display : block
  }`}
`;
export const BulletContent = styled.div`
  z-index: 4;
  display: grid;
`;
export const BulletWrapper = styled.div`
  position: relative;
`;
export const StepperItemBullet = styled.div`
  position: relative;
  box-shadow: inset 0 0 0px 4px ${(props) => props.theme.colors.silver};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.light};
  cursor: pointer;
  font-size: 0.625rem;
  color: ${(props) => props.theme.colors.primary};
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  font-family: "AvantGarde";
`;

export const StepLine = styled.div`
  /* width: 10rem; */
  flex: 1;
  height: 1.2px;
  ${({ theme }) => `${theme.mediaQueries.large}{
      height: 4px;
    }`}
`;
export const StepWrapper = styled(FlexLayout)<StepperItemUIProps>`
  flex: ${(props) => (props.isLast ? "" : "1")};
  ${BulletWrapper} {
    --width: 0.75rem;
    ${({ theme, isSelected, finished }) => `${theme.mediaQueries.large}{
      --width: ${isSelected || finished ? "2.625rem" : "2.188rem"};

    }`}
    width: var(--width);
    height: var(--width);
  }
  ${StepLine} {
    background: ${(props) =>
      props.finished ? props.theme.colors.primary : props.theme.colors.silver};
  }
  ${StepperItemBullet} {
    --width: 0.75rem;
    svg {
      font-size : 0.5rem;
      height: fit-content;
    }
    ${({ theme, isSelected, finished }) => `${theme.mediaQueries.large}{
      --width: ${isSelected || finished ? "2.625rem" : "2.188rem"};
      font-size :1.625rem;
      box-shadow: ${`inset 0 0 0px 4px ${
        isSelected || finished ? theme.colors.primary : theme.colors.silver
      }`};

      svg {
        font-size : initial;
      }
    }`}
    width: var(--width);
    height: var(--width);
    box-shadow: ${(props) =>
      `inset 0 0 0px 1.2px ${
        props.isSelected || props.finished
          ? props.theme.colors.primary
          : props.theme.colors.silver
      }`};
    color: ${(props) => (props.finished ? "#FFF" : "")};
    transition: color ease-in-out 200ms;
    display: grid;
    place-items: center;
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

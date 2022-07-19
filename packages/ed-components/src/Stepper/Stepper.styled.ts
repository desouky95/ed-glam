import { FlexLayout } from "@eduact/ed-system";
import styled, { css, keyframes } from "styled-components";
import { StepperItemUIProps } from "./Stepper.types";
// import {} from 'styled-system'
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
  font-family: "AvantGarde";
`;

export const StepperBulletWrapper = styled.div`
  position: relative;
`;
export const StepTooltip = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  font-family: "Montserrat";
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.primary};
  white-space: nowrap;
  ${({ theme }) => `${theme.mediaQueries.large}{
  display : block;
}`}
`;
export const StepperItemBullet = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0px 4px ${(props) => props.theme.colors.silver};
  border-radius: 50%;
  background: ${(props) => props.theme.colors.light};
  cursor: pointer;
  ${({ theme }) => `${theme.mediaQueries.large}{
     font-size: 1.625rem; 
  }`}
  font-size: 0.625rem;
  color: ${(props) => props.theme.colors.primary};
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
`;

export const StepLine = styled.div`
  flex: 1;
  height: 2px;
  ${({ theme }) => `${theme.mediaQueries.large}{
    height: 4px;
  }`}
`;
export const StepWrapper = styled(FlexLayout)<StepperItemUIProps>`
  flex: ${(props) => (props.isLast ? "" : "1")};
  ${StepLine} {
    background: ${(props) =>
      props.finished ? props.theme.colors.primary : props.theme.colors.silver};
  }
  ${StepperBulletWrapper} {
    --width: 1rem;
    width: var(--width);
    height: var(--width);
    ${({ theme, isSelected, finished }) => `${theme.mediaQueries.large}{
      --width: ${isSelected || finished ? "2.625rem" : "2.188rem"};
  }`}
  }
  ${StepperItemBullet} {
    box-shadow: ${(props) =>
      `inset 0 0 0px 1.3px ${
        props.isSelected || props.finished
          ? props.theme.colors.primary
          : props.theme.colors.silver
      }`};

    ${({ theme, isSelected, finished }) => `${theme.mediaQueries.large}{
         box-shadow: ${`inset 0 0 0px 4px ${
           isSelected || finished ? theme.colors.primary : theme.colors.silver
         }`}; 
  }`}

    color: ${(props) => (props.finished ? "#FFF" : "")};
    transition: color ease-in-out 200ms;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      border-radius: 50%;
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

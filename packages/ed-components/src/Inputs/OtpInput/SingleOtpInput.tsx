import React, { memo, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import usePrevious from "./usePrevious";
import { rgba } from "polished";
interface SingleOtpInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

const SingleOTPInput: React.FC<SingleOtpInputProps> = ({
  children,
  ...props
}) => {
  const { focus, autoFocus, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);

  // console.log({prevFocus})
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
        if (focus !== prevFocus) {
          inputRef.current.select();
        }
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <StyledInput ref={inputRef} {...rest} />;
};

export default memo(SingleOTPInput);

const StyledInput = styled.input`
  border: none;
  outline-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin: 0 2.5px;
  padding: 0.5rem;
  width: 18px;
  height: 30px;
  background: ${(props) => rgba(props.theme.colors.primary, 0.15)};
  ${({ theme }) => `${theme.mediaQueries.large}{
    width : 28px;
    height : 46px;
  }`};
  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none !important;
    -webkit-appearance: none !important;
  }
`;

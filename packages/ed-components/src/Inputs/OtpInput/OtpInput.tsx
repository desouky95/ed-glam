import React, { CSSProperties, memo, useCallback, useState } from "react";
import { FlexLayout } from "@eduact/ed-system";
import SingleOTPInput from "./SingleOtpInput";

type Props = {
  inputsNum: number;
  inputStyle?: CSSProperties;
  separator?: React.ReactNode;
  initValue?: string;
  isNumberInput?: boolean;
  onChange?: (value: string) => void;
};
const OtpInput: React.FC<Props> = ({
  inputsNum,
  inputStyle,
  separator,
  initValue,
  onChange,
  isNumberInput = true,
}) => {
  const [activeInput, setActiveInput] = useState(-1);
  const [otpValues, setOtpValues] = useState(
    Array<string>(inputsNum)
      .fill("")
      .map((_, index) => initValue?.[index] ?? "")
  );

  // Focus Input Methods

  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(inputsNum - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [inputsNum]
  );
  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  // On Input Value Change Methods
  const validateValue = useCallback(
    (val: string) => {
      const _val = val;
      if (!isNumberInput || !_val) {
        return _val;
      }
      return Number(_val) >= 0 ? _val : "";
    },
    [isNumberInput]
  );

  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join("");
      onChange?.(otpValue);
    },
    [onChange]
  );

  const updateCode = useCallback(
    (value: string) => {
      const toBeUpdatedValues = [...otpValues];
      toBeUpdatedValues[activeInput] = value[0] || "";
      setOtpValues(toBeUpdatedValues);
      handleOtpChange(toBeUpdatedValues);
    },
    [activeInput, otpValues]
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = validateValue(e.currentTarget.value);
      if (!value) {
        e.preventDefault();
        return;
      }

      updateCode(value);
      focusNextInput();
    },
    [updateCode, focusNextInput, validateValue]
  );

  // On Keydown
  const handleOnKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;
      switch (key) {
        case "Delete":
        case "Backspace":
          e.preventDefault();
          if (otpValues[activeInput]) {
            updateCode("");
          } else {
            focusPrevInput();
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          focusPrevInput();
          break;
        case "ArrowRight":
          e.preventDefault();
          focusNextInput();
          break;
        default:
          if (key.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault();
          }
          break;
      }
    },
    [activeInput, focusNextInput, focusPrevInput, updateCode]
  );

  // On Focus
  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index);
    },
    [focusInput]
  );

  const onBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  return (
    <FlexLayout alignItems={"center"}>
      {Array(inputsNum)
        .fill("")
        .map((_, index) => {
          return (
            <React.Fragment key={`SINGLE-OTP-${index}`}>
              <SingleOTPInput
                type={isNumberInput ? "number" : "text"}
                onChange={handleOnChange}
                onKeyDown={handleOnKeydown}
                onFocus={handleOnFocus(index)}
                focus={activeInput === index}
                value={otpValues?.[index]}
                onBlur={onBlur}
                style={inputStyle}
              />
              <>{index < inputsNum - 1 && separator}</>
            </React.Fragment>
          );
        })}
    </FlexLayout>
  );
};

export default memo(OtpInput);

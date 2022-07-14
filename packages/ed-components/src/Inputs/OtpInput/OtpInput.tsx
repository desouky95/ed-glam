import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useImmer } from "use-immer";
import { castDraft } from "immer";
import { rgba } from "polished";
import { FlexLayout } from "@eduact/ed-system";

type Props = {
  inputsNum: number;
  inputComponent?: React.ReactElement<React.HTMLProps<HTMLInputElement>>;
  separator?: React.ReactNode;
  value?: string;
  isNumberInput?: boolean;
  onChange?: (value: string) => void;
};
const OtpInput: React.FC<Props> = ({
  inputsNum,
  inputComponent,
  separator,
  value,
  onChange,
  isNumberInput = true,
}) => {
  const [activeInput, setActiveInput] = useState(0);

  const handleOnFocus = useCallback(
    (index: number) => () => {
      setActiveInput(index);
    },
    []
  );
  //   const onBlur = useCallback(() => {
  //     setActiveInput(-1);
  //   }, []);
  useEffect(() => {
    if (value && value?.length > inputsNum) {
      throw new Error("Value exceeds inputsNum");
    }
  }, [value]);
  const [inputs, setInputs] = useImmer<HTMLInputElement[]>(
    Array.from({ length: inputsNum })
  );
  const [values, setValue] = useImmer<string[]>(Array(inputsNum).fill(""));

  const generateCustomInput = (input: HTMLInputElement, index: number) => {
    if (!inputComponent) return;
    return React.cloneElement(inputComponent, {
      ...inputComponent.props,

      maxLength: 1,
      onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
        inputComponent.props.onFocus?.(e);
        setActiveInput(index);
      },
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
        inputComponent.props.onBlur?.(e);
        setActiveInput(-1);
      },
      key: `${input?.id}-${index}-ed-otp-input`,
      ref: (ref: any) => inputRefCallback(ref, index),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(e, index);
      },
      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDownHandler(e, index);
      },
      value: value?.[index] ?? "",
    });
  };

  const inputRefCallback = (node: HTMLInputElement | null, index: number) => {
    if (node) {
      setInputs((draft) => {
        draft[index] = castDraft(node);
      });
    }
  };

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const _val = getRightValue(e.currentTarget.value);
      if (!_val) {
        e.preventDefault();
        return;
      }

      changeCodeAtFocus(_val, index);
      focusNextInput(index);
    },
    [inputs, inputsNum, values]
  );

  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const pressedKey = e.key;
      switch (pressedKey) {
        case "Backspace":
        case "Delete": {
          e.preventDefault();
          if (values[index]) {
            changeCodeAtFocus("", index);
          } else {
            focusPrevInput(index);
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          focusPrevInput(index);
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          focusNextInput(index);
          break;
        }
        default: {
          if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault();
          }
          break;
        }
      }
    },
    [inputs, inputsNum, values]
  );

  const changeCodeAtFocus = useCallback(
    (value: string, index: number) => {
      setValue((draft) => {
        draft[index] = value;
        handleOtpChange(draft);
      });
    },
    [inputs, inputsNum, value, values]
  );

  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpVal = otp.join("");
      onChange?.(otpVal);
    },
    [onChange]
  );

  const focusNextInput = useCallback(
    (cIndex: number) => {
      if (cIndex + 1 < inputs.length) {
        inputs[cIndex + 1].focus();
      }
    },
    [inputs, activeInput]
  );
  const focusPrevInput = useCallback(
    (cIndex: number) => {
      if (cIndex - 1 > -1) {
        inputs[cIndex - 1].focus();
      }
    },
    [inputs, activeInput]
  );

  const getRightValue = useCallback(
    (str: string) => {
      let changedValue = str;

      if (!isNumberInput || !changedValue) {
        return changedValue;
      }

      return Number(changedValue) >= 0 ? changedValue : "";
    },
    [isNumberInput]
  );

  const onPasteHandler = useCallback(
    (e: React.ClipboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text/plain").trim().split("");
      if (pastedData) {
        values.forEach((_, index) => {
          setValue((draft) => {
            draft[index] = pastedData[index];
          });
        });
        onChange?.(pastedData.slice(0, inputsNum).join(""));
      }
    },
    [inputsNum, value, values]
  );
  return (
    <FlexLayout onPaste={onPasteHandler}>
      {inputs.map((input, index) => {
        return (
          <React.Fragment key={`${index}-ed-otp-input`}>
            <StyledInput
              maxLength={1}
              onFocus={(e) => setActiveInput(index)}
              onBlur={(e) => setActiveInput(-1)}
              onChange={(e) => onChangeHandler(e, index)}
              onKeyDown={(e) => onKeyDownHandler(e, index)}
              ref={(ref) => inputRefCallback(ref, index)}
              value={value?.[index] ?? ""}
            />
            <>
              {separator && index < inputsNum - 1 && <span>{separator}</span>}
            </>
          </React.Fragment>
        );
      })}
    </FlexLayout>
  );
};

export default OtpInput;

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
  }`}
`;

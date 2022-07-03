import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import OtpInput from "./OtpInput";
import Spacer from "../../Spacer";
import { useState } from "react";
import { FlexLayout } from "@eduact/student-theme";
import styled from "styled-components";
export default {
  title: "Inputs/OtpInput",
  component: OtpInput,
  parameters: {
    controls: {
      include: ["value"],
    },
  },
  argTypes: {
    value: {
      defaultValue: "1234",
      type: "string",
    },
    onChange: {
      action: "changed",
    },
  },
} as ComponentMeta<typeof OtpInput>;

export const OtpInputTemplate: ComponentStory<typeof OtpInput> = ({
  inputsNum,
  separator,
  value,
  onChange,
  ...props
}) => {
  const [_args, setArgs] = useArgs();
  return (
    <OtpInput
      value={_args.value}
      onChange={(val) => setArgs({ ..._args, value: val })}
      separator={
        <FlexLayout mx="2.5px" alignItems={"center"} height="100%">
          -
        </FlexLayout>
      }
      inputsNum={4}
      {...props}
    />
  );
};

OtpInputTemplate.storyName = "Default OtpInput";
OtpInputTemplate.args = {};

export const CustomOtpInputTemplate = OtpInputTemplate.bind({});
const StyledInput = styled.input`
  border: none;
  background: navajowhite;
  margin : 0 3px;
  width : 40px;
  height : 40px;
`;
CustomOtpInputTemplate.args = {
  value: "",
  inputComponent: <StyledInput />,
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import OtpInput from "./OtpInput";
import { FlexLayout } from "@eduact/student-theme";
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
  onChange,
  ...props
}) => {
  const [_args, setArgs] = useArgs();
  return (
    <OtpInput
    initValue="1234"
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



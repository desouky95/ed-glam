import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import TextInput from "./TextInput";
import { MdPassword } from "react-icons/md";
import { useArgs } from "@storybook/client-api";
export default {
  title: "Inputs/TextInput",
  component: TextInput,
  argTypes: {
    withToggle: {
      type: "boolean",
    },
    value: {
      type: "string",
    },
    type: {
      type: "string",
    },
    required: {
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof TextInput>;

export const TextInputDefault: ComponentStory<typeof TextInput> = (args) => {
  const [_args, updateArgs] = useArgs();
  //   const [value, setValue] = useState("Init Value");
  return (
    <TextInput
      required
      onChange={(e) => updateArgs({ ...args, value: e.currentTarget.value })}
      //   value={value}
      placeholder="City"
      {...args}
    />
  );
};

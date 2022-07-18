import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Colors, Theme } from "@eduact/student-theme";
import { IoIosAdd } from "react-icons/io";
import TextButton from "./TextButton";

export default {
  component: TextButton,
  title: "Buttons/TextButton",
  parameters: {
    controls: {
      exclude: ["as", "theme", "forwardedAs", "ref"],
    },
  },
  argTypes: {
    variant: {
      defaultValue: "primary",
      type: "string",
      control: { type: "select" },
      options: Object.keys(Colors),
    },
    label: {
      defaultValue: "Text Button",
      type: "string",
    },
  },
} as ComponentMeta<typeof TextButton>;

export const Button: ComponentStory<typeof TextButton> = ({
  variant,
  label,
  ...args
}) => (
  <TextButton btnSize={"small"} variant={variant} {...args}>
    <IoIosAdd />
    {label}
  </TextButton>
);
Button.storyName = "Text Button";

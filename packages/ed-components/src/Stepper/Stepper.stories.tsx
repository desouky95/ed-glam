import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Stepper from "./Stepper";
import { MdWorkspacesFilled, MdAdUnits, MdClass } from "react-icons/md";
export default {
  component : Stepper,
  argTypes : {
    selectedIndex : {defaultValue : 0 ,type : 'number'}
  },

  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof Stepper>;

export const StoryTemplate: ComponentStory<typeof Stepper> = (
  args,
  { hooks }
) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Stepper {...args}>
      <Stepper.Item />
      <Stepper.Item />
      <Stepper.Item />
      <Stepper.Item />
    </Stepper>
  );
};

StoryTemplate.storyName = "Basic Form Stepper";

export const StepperWithIcons: ComponentStory<typeof Stepper> = (args) => {
  return (
    <Stepper {...args}>
      <Stepper.Item icon={<MdAdUnits />} />
      <Stepper.Item icon={<MdWorkspacesFilled />} />
      <Stepper.Item icon={<MdClass />} />
    </Stepper>
  );
};

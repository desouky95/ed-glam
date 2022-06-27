import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Stepper from "./Stepper";
import { MdAttachEmail } from "react-icons/md";
export default {
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof Stepper>;

export const StoryTemplate: ComponentStory<typeof Stepper> = (
  { children, orientation, selectedIndex },
  { hooks }
) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Stepper selectedIndex={0} orientation="horizontal">
      <Stepper.Item>
        {{
          icon: <MdAttachEmail />,
        }}
      </Stepper.Item>
      <Stepper.Item>
        {{
          icon: <MdAttachEmail />,
        }}
      </Stepper.Item>
    </Stepper>
  );
};

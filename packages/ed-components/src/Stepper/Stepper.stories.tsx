import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stepper from "./Stepper";

export default {} as ComponentMeta<typeof Stepper>;

export const StoryTemplate: ComponentStory<typeof Stepper> = ({}) => {
  return (
    <Stepper selectedIndex={0}>
      <Stepper.Item></Stepper.Item>
      <Stepper.Item></Stepper.Item>
      <Stepper.Item></Stepper.Item>
      <Stepper.Item></Stepper.Item>
    </Stepper>
  );
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EyeoffIcon, EyeIcon, Icon } from "./Icons";

export default {
  title: "Icons",
} as ComponentMeta<any>;

export const IconsDefault: ComponentStory<any> = () => {
  return (
    <div>
      <Icon size={40} color="primary">
        <EyeIcon />
      </Icon>
      <Icon size={40} color="primary">
        <EyeoffIcon />
      </Icon>
    </div>
  );
};

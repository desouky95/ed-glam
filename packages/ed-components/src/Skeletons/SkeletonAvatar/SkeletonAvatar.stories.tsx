import { ComponentMeta, ComponentStory } from "@storybook/react";
import SkeletonAvatar from "./SkeletonAvatar";

export default {
  title: "Skeletons/Avatar",
  component: SkeletonAvatar,
  argTypes: {
  
  },
} as ComponentMeta<typeof SkeletonAvatar>;

export const SkeletonAvatarDefault: ComponentStory<typeof SkeletonAvatar> = ({
  isLoading,
  ...args
}) => {
  return <SkeletonAvatar isLoading={true} {...args} />;
};

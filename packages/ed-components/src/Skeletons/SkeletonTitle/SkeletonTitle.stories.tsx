import { ComponentMeta, ComponentStory } from "@storybook/react";
import SkeletonTitle from "./SkeletonTitle";

export default {
  title: "Skeletons/Title",
} as ComponentMeta<typeof SkeletonTitle>;

export const SkeletonTitleDefault: ComponentStory<typeof SkeletonTitle> = ({
  children,
  ...args
}) => {
  return <SkeletonTitle {...args} />;
};

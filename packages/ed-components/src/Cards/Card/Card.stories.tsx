import { Typography } from "@eduact/ed-system";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Cards/Default",
  component: Card,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const DefaultCard: ComponentStory<typeof Card> = (args) => {
  return (
    <Card variant={"maxBluePurple"} p={"4rem"}>
      <>
        <Typography textDecoration={"underline"} wordSpacing={1}>
          fdsfsd sdf sdf sdf sdf sdf{" "}
        </Typography>
      </>
    </Card>
  );
};

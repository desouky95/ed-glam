import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef, useState } from "react";
import Drawer from "./Drawer";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { RaisedButton, IconButton } from "..";
import { useArgs } from "@storybook/client-api";
import { action, actions } from "@storybook/addon-actions";
export default {
  title: "Drawer",
  component: Drawer,

  argTypes: {
    open: {
      type: "boolean",
      defaultValue: false,
    },
    onClose: {
      action: "Closed",
    },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof Drawer>;

const events = actions({ onClose: "closed" });
export const DrawerDefault: ComponentStory<typeof Drawer> = (args) => {
  const [{ open }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({ ...args, open: false });
  };
  return (
    <div>
      <Drawer
        {...args}
        {...events}
        width={'30vw'}
        open={open as boolean}
        onClose={() => {
          handleClose();
          events.onClose();
        }}
      >
        <IconButton
          p={"1rem"}
          icon={<MdClose />}
          onClick={handleClose}
          variant="light"
        />
      </Drawer>
    </div>
  );
};

export const DrawerBottomSheet = DrawerDefault.bind({})
DrawerBottomSheet.args = {...DrawerBottomSheet.args,height : '40vh' , position : 'bottom',open : true}

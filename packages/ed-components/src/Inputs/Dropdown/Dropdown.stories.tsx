import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Inputs/Dropdown",
} as ComponentMeta<typeof Dropdown>;

export const DropdownDefault: ComponentStory<typeof Dropdown> = (args) => {
  const [value, setValue] = useState(1);
  return (
    <>
      <Dropdown
        placeholder="Test"
        value={value}
        onChange={(e) => {
          console.log(e);
          setValue(e);
        }}
      >
        <Dropdown.Option value={1}>Option 1</Dropdown.Option>
        <Dropdown.Option value={2}>Option 2</Dropdown.Option>
        <Dropdown.Option value={3}>Option 3</Dropdown.Option>
        <Dropdown.Option value={4}>Option 4</Dropdown.Option>
      </Dropdown>

      <Dropdown placeholder="Test">
        <Dropdown.Option value={1}>Option 1</Dropdown.Option>
        <Dropdown.Option value={2}>Option 2</Dropdown.Option>
        <Dropdown.Option value={3}>Option 3</Dropdown.Option>
        <Dropdown.Option value={4}>Option 4</Dropdown.Option>
      </Dropdown>
      <select onChange={(e) => console.log(e.currentTarget.value)}>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
    </>
  );
};

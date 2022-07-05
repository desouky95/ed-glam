import { FlexLayout, GridLayout } from "@eduact/student-theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { TextInput } from "../TextInput";
export default {
  title: "Inputs/Dropdown",
  argTypes: {
    required: {
      type: "boolean",
      defaultValue: false,
    },
    width: {
      type: "number",
    },
  },
} as ComponentMeta<typeof Dropdown>;

export const DropdownDefault: ComponentStory<typeof Dropdown> = (args) => {
  const [value, setValue] = useState(1);
  return (
    <>
      <GridLayout gridTemplateColumns={"repeat(2,1fR)"}>
        <Dropdown
          placeholder="Test"
          value={value}
          onChange={(e) => {
            console.log(e);
            setValue(e);
          }}
          {...args}
        >
          <Dropdown.Option value={1}>Option 1</Dropdown.Option>
          <Dropdown.Option value={2}>Option 2</Dropdown.Option>
          <Dropdown.Option value={3}>Option 3</Dropdown.Option>
          <Dropdown.Option value={4}>Option 4</Dropdown.Option>
        </Dropdown>
        <TextInput />

        <Dropdown placeholder="Test">
          <Dropdown.Option value={1}>Option 1</Dropdown.Option>
          <Dropdown.Option value={2}>Option 2</Dropdown.Option>
          <Dropdown.Option value={3}>Option 3</Dropdown.Option>
          <Dropdown.Option value={4}>Option 4</Dropdown.Option>
        </Dropdown>
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

        <Dropdown sx={{ px: "1rem"  , mx : '1rem' }} placeholder="Test">
          <Dropdown.Option value={1}>Option 1</Dropdown.Option>
          <Dropdown.Option value={2}>Option 2</Dropdown.Option>
          <Dropdown.Option value={3}>Option 3</Dropdown.Option>
          <Dropdown.Option value={4}>Option 4</Dropdown.Option>
        </Dropdown>
      </GridLayout>
    </>
  );
};

export const DropdownWithReactHookForm: ComponentStory<typeof Dropdown> = (
  args
) => {
  return <WithRHS />;
};

const WithRHS = () => {
  const { register, control } = useForm({
    defaultValues: { name: "ismail" },
  });

  return (
    <GridLayout>
      <DevTool control={control} />
      <Dropdown {...register("name", { value: "ismail" })}>
        <Dropdown.Option value={"ismail"}>Ismail</Dropdown.Option>
        <Dropdown.Option value={"joe"}>Joe</Dropdown.Option>
        <Dropdown.Option value={"marv"}>Marwan</Dropdown.Option>
      </Dropdown>
      <Controller
        control={control}
        name={"name"}
        render={({ field  , fieldState : {error}}) => {
          return (
            <Dropdown error helperText="Errrorororororororo" {...field}>
              <Dropdown.Option value={"ismail"}>Ismail</Dropdown.Option>
              <Dropdown.Option value={"joe"}>Joe</Dropdown.Option>
              <Dropdown.Option value={"marv"}>Marwan</Dropdown.Option>
            </Dropdown>
          );
        }}
      />
    </GridLayout>
  );
};

import { FlexLayout, GridLayout } from "@eduact/student-theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { TextInput } from "../TextInput";
import { RaisedButton } from "../../Buttons";
import PhoneNumberInput from "./PhoneNumberInput";
export default {
  title: "Inputs/PhoneNumber",
  argTypes: {
    required: {
      type: "boolean",
      defaultValue: false,
    },
    width: {
      type: "number",
    },
  },
} as ComponentMeta<typeof PhoneNumberInput>;

export const PhoneNumberInputDefault: ComponentStory<typeof PhoneNumberInput> =
  (args) => {
    const { control, register, watch } = useForm({
      defaultValues: {
        phone: "",
      },
    });
    const watchPhone = watch("phone");
    console.log(watchPhone);
    const { ref, ...others } = register("phone");
    return (
      <>
        <GridLayout gridTemplateColumns={"repeat(2,1fr)"}>
          <DevTool control={control} />
          <PhoneNumberInput phonePrefix="+2" ref={ref} {...others} />
          {/* <Controller
            control={control}
            name="phone"
            render={({ field }) => {
              return <PhoneNumberInput phonePrefix="+2" {...field} />;
            }}
          /> */}
        </GridLayout>
      </>
    );
  };

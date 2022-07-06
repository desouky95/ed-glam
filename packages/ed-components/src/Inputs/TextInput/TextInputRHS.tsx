import React from "react";
import { Control, Controller, Path } from "react-hook-form";
import TextInput, { TextInputProps } from "./TextInput";

type Props<T> = {
  control: Control<T>;
  name: Path<T>;
} & TextInputProps;
const TextInputRHS = <T extends {}>({
  control,
  name,
  placeholder,
  ref,
  ...props
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...others }, fieldState }) => {
        return <TextInput value={value as any} {...others} {...props} />;
      }}
    />
  );
};

export default TextInputRHS;

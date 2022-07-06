import React from "react";
import { Control, Controller, Path } from "react-hook-form";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

type Props<T> = {
  control: Control<T>;
  name: Path<T>;
} & DropdownProps;

const DropdownRHF = <T extends {}>({
  control,
  name,
  children,
  ...props
}: React.PropsWithChildren<Props<T>>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, onBlur, ...others },
        fieldState,
      }) => {
        return (
          <Dropdown
            {...props}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...others}
          >
            {children}
          </Dropdown>
        );
      }}
    />
  );
};

export default DropdownRHF;

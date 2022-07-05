import { HTMLProps } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import { InputBaseError } from "../BaseInputUtils/BaseInputs.types";

export type DropdownOptionProps = {} & HTMLProps<HTMLOptionElement>;

export type DropdownProps = {
  onChange?: (value: any) => void;
  sx?: SpaceProps & LayoutProps;
  // children: Array<React.FC<DropdownOptionProps>>;
} & Exclude<HTMLProps<HTMLDivElement>, "onChange"> &
  InputBaseError;

export interface DropdownComposition
  extends React.ForwardRefExoticComponent<
    DropdownProps & React.RefAttributes<HTMLSelectElement>
  > {
  Option: React.FC<DropdownOptionProps>;
}

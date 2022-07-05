import { HTMLProps } from "react";

export type DropdownOptionProps = {} & HTMLProps<HTMLOptionElement>;

export type DropdownProps = {
  onChange?: (value: any) => void;
  // children: Array<React.FC<DropdownOptionProps>>;
} & Exclude<HTMLProps<HTMLSelectElement>, "onChange">;

export interface DropdownComposition
  extends React.ForwardRefExoticComponent<
    DropdownProps & React.RefAttributes<HTMLSelectElement>
  > {
  Option: React.FC<DropdownOptionProps>;
}

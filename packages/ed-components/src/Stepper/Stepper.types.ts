import { Orientation } from "@eduact/student-theme";
import { HTMLProps, ReactElement, ReactNode } from "react";

export type StepperProps = {
  orientation?: Orientation;
  children: Array<ReactElement<StepperItemProps>>;
  selectedIndex?: number | string;
};

export type StepperItemUIProps = {
  isSelected?: boolean;
  finished?: boolean;
  index?: number;
  isLast?: boolean;
};

export type StepperItemProps = {
  tooltip?: string;
  icon?: React.ReactNode;
  // children: {
  // };
} & StepperItemUIProps &
  Pick<React.HTMLProps<HTMLDivElement>, "onClick">;

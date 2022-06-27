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
};

export type StepperItemProps = {
    isLast?: boolean;
    children: {
      icon?: React.ReactNode;
    };
  } & StepperItemUIProps &
    Pick<React.HTMLProps<HTMLDivElement>, "onClick">;
  
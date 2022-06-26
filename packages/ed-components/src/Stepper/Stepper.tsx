import { FlexLayout } from "@eduact/student-theme";
import React from "react";
import { Orientation } from "../../../ed-student-theme/src/Theme/theme";
import { StepLine, StepperItemBullet, StepWrapper } from "./Stepper.styled";

type StepperProps = {
  orientation?: Orientation;
  children: Array<React.ReactElement<StepperItemProps>>;
  selectedIndex?: number | string;
};
export interface StepperComposition {
  Item: React.FC<StepperItemProps>;
}
const Stepper: React.FC<StepperProps> & StepperComposition = ({
  orientation = "horizontal",
  children,
  selectedIndex,
}) => {
  return (
    <FlexLayout>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(
          child as React.ReactElement<StepperItemProps>,
          {
            ...child.props,
            isLast: React.Children.count(children) - 1 === index,
            isSelected: selectedIndex === index,
            finished: index < selectedIndex,
            index,
          }
        );
      })}
    </FlexLayout>
  );
};

export type StepperItemUIProps = {
  isSelected?: boolean;
  finished?: boolean;
  index?: number;
};
type StepperItemProps = {
  isLast?: boolean;
  children?: {
    icon?: JSX.Element;
  };
} & StepperItemUIProps;
const StepperItem: React.FC<StepperItemProps> = ({
  isLast,
  isSelected,
  index,
}) => {
  return (
    <StepWrapper isSelected={isSelected}>
      <FlexLayout alignItems={"center"}>
        <StepperItemBullet>{index + 1}</StepperItemBullet>
        {!isLast && <StepLine />}
      </FlexLayout>
    </StepWrapper>
  );
};

Stepper.Item = StepperItem;

export default Stepper;

import { FlexLayout } from "@eduact/ed-system";
import { Orientation } from "@eduact/student-theme";
import React, { useState } from "react";
import {
  BulletContent,
  StepLine,
  StepperItemBullet,
  StepWrapper,
} from "./Stepper.styled";
import {
  StepperItemProps,
  StepperItemUIProps,
  StepperProps,
} from "./Stepper.types";

export interface StepperComposition {
  Item: React.FC<StepperItemProps>;
}
const Stepper: React.FC<StepperProps> & StepperComposition = ({
  orientation = "horizontal",
  children,
  selectedIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex ?? 0);
  return (
    <FlexLayout>
      {React.Children.map(
        children as Array<React.ReactElement<StepperItemProps>>,
        (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              isLast: React.Children.count(children) - 1 === index,
              isSelected: currentIndex === index,
              finished: index < currentIndex,
              index,
              onClick: (e: React.MouseEvent<any>) => {
                // child.props.onClick?.(e);
                setCurrentIndex(index);
              },
            });
          }
        }
      )}
    </FlexLayout>
  );
};

const StepperItem: React.FC<StepperItemProps> = ({
  isLast,
  isSelected,
  index,
  children,
  finished,
  onClick,
}) => {
  return (
    <StepWrapper onClick={onClick} finished={finished} isSelected={isSelected}>
      <FlexLayout alignItems={"center"}>
        <StepperItemBullet>
          {isSelected ||
            (finished && (
              <BulletContent>
                {children?.icon ?? index ?? 0 + 1 }
              </BulletContent>
            ))}
        </StepperItemBullet>
        {!isLast && <StepLine />}
      </FlexLayout>
    </StepWrapper>
  );
};

Stepper.Item = StepperItem;

export default Stepper;

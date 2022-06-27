import { FlexLayout } from "@eduact/ed-system";
import { Orientation } from "@eduact/student-theme";
import React, { useState } from "react";
import {
  BulletContent,
  BulletTooltip,
  BulletWrapper,
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
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  return (
    <FlexLayout>
      {React.Children.map(
        children as Array<React.ReactElement<StepperItemProps>>,
        (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              isLast: React.Children.count(children) - 1 === index,
              isSelected: selectedIndex === index,
              finished: index < selectedIndex,
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
  icon,
  children,
  finished,
  tooltip,
  onClick,
}) => {
  return (
    <StepWrapper
      onClick={onClick}
      finished={finished}
      isLast={isLast}
      isSelected={isSelected}
    >
      <FlexLayout flex="1" alignItems={"center"}>
        <BulletWrapper>
          <StepperItemBullet>
            {(isSelected || finished) && (
              <BulletContent>{icon ?? index + 1}</BulletContent>
            )}
          </StepperItemBullet>
          {tooltip && <BulletTooltip>{tooltip}</BulletTooltip>}
        </BulletWrapper>
        {!isLast && <StepLine />}
      </FlexLayout>
    </StepWrapper>
  );
};

Stepper.Item = StepperItem;

export default Stepper;

import { RechargeMethod } from "@eduact/utils";

export type ButtonGridValue = {
  value?: any;
  args?: {
    method: RechargeMethod;
  };
};

export type ButtonGridProps = {
  value: ButtonGridValue;
  onClick?: (value: ButtonGridValue) => void;
  isSelected?: boolean;
  withBorder?: boolean;
};

export interface ButtonsGridComposition {
  Item: React.FC<ButtonGridProps>;
}

export type ButtonsGridProps = {
  onChange?: (value: ButtonGridValue | undefined) => void;
  value: ButtonGridValue;
  withBorder?: boolean;
};

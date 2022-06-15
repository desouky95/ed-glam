import { useMemo, useRef } from "react";
import {
  useController,
  UseControllerProps,
  UseControllerReturn,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type UseConditionalControllerProps<
  T extends FieldValues = FieldValues,
  Name extends FieldPath<T> = FieldPath<T>
> = {
  skip: boolean;
} & Partial<UseControllerProps<T, Name>>;
type UseConditionalControllerReturn<
  T extends FieldValues = FieldValues,
  Name extends FieldPath<T> = FieldPath<T>
> = UseControllerReturn<T, Name> & { registered: boolean };
export const useConditionalController = <
  T extends FieldValues = FieldValues,
  Name extends FieldPath<T> = FieldPath<T>
>({
  skip,
  name,
  control,
  ...props
}: UseConditionalControllerProps<T, Name>): UseConditionalControllerReturn<
  T,
  Name
> => {
  if (skip) {
    return {
      field: undefined,
      fieldState: undefined,
      formState: undefined,
      registered: false,
    };
  }

  const returnItems = useController({
    name,
    control,
    ...props,
  });

  

  return { ...returnItems, registered: true };
};

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
  let controllerProps = useRef<UseConditionalControllerReturn<T,Name>>();
  let _useController = useController;
  const returnProps = useMemo(() => {
    if (!skip && name && control) {
      const returnItems = _useController({
        name,
        control,
        ...props,
      });

      controllerProps.current = {
        registered: true,
        field: returnItems.field,
        fieldState: returnItems.fieldState,
        formState: returnItems.formState,
      };
    } else {
      controllerProps.current = {
        registered: false,
        field: undefined,
        fieldState: undefined,
        formState: undefined,
      };
    }
    return controllerProps.current;
  }, [skip]);

  return { ...returnProps };
};

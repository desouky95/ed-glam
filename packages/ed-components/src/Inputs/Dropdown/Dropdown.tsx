import { FlexLayout } from "@eduact/student-theme";
import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { HTMLProps } from "react";
import {
  AnimatedWrapper,
  DropdownIcon,
  DropdownOptions,
  DropdownWrapper,
  StyledDropdownOption,
} from "./Dropdown.styled";
import { ChevronMore, Icon } from "../../Icons/Icons";
import { Spring, animated, easings } from "react-spring";
import { useElementSize, useOutsideAlert } from "@eduact/utils";
import {
  DropdownComposition,
  DropdownOptionProps,
  DropdownProps,
} from "./Dropdown.types";
const DropdownOption: React.FC<DropdownOptionProps> = ({
  children,
  value,
  selected,
  ...props
}) => {
  return (
    <StyledDropdownOption
      onClick={props.onClick}
      value={value}
      selected={selected}
    >
      {children}
    </StyledDropdownOption>
  );
};

const Dropdown = forwardRef<
  HTMLSelectElement,
  PropsWithChildren<DropdownProps>
>(({ children, onChange, ...props }, ref) => {
  const [hasValue, setHasValue] = useState(false);
  const [innerValue, setInnerValue] = useState();
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setHasValue(props.value ? true : false);
    const _children = React.Children.toArray(children) as Array<
      React.ReactElement<DropdownOptionProps>
    >;
    const _selected = _children.find((_) => _.props.value === props.value);
    if (_selected) {
      setSelectedLabel(_selected.props.children as string);
    }
  }, [props.value]);

  const [wrapperRef, { height }] = useElementSize();
  const outsideRef = useRef(null);
  useOutsideAlert(outsideRef, () => {
    setOpened(false);
  });
  return (
    <div ref={outsideRef} style={{ position: "relative" }}>
      <select style={{ visibility: "hidden" }} ref={ref}>
        {children}
      </select>

      <DropdownWrapper
        onClick={(e: React.MouseEvent) => setOpened(!opened)}
        $hasValue={hasValue}
      >
        <span>{selectedLabel ?? props.placeholder}</span>
        <DropdownIcon $opened={opened} size={20}>
          <ChevronMore />
        </DropdownIcon>
      </DropdownWrapper>
      <Spring
        config={{ easing: easings.easeInOutCirc }}
        to={{
          maxHeight: opened ? `${height}px` : "0px",
        }}
      >
        {(sprintProps) => {
          return (
            <AnimatedWrapper style={{ ...sprintProps, overflow: "hidden" }}>
              <DropdownOptions ref={wrapperRef} $opened={opened}>
                {React.Children.map(
                  children as Array<React.ReactElement<DropdownOptionProps>>,
                  (child: React.ReactElement<DropdownOptionProps>, index) => {
                    return React.cloneElement(child, {
                      ...child.props,
                      selected: props.value === child.props.value,
                      onClick: (e: React.MouseEvent<HTMLOptionElement>) => {
                        child.props.onClick?.(e);
                        setInnerValue(child.props.value as any);
                        onChange?.(child.props.value);
                        setSelectedLabel(child.props.children as string);
                        setHasValue(true);
                        setOpened(false);
                      },
                    });
                  }
                )}
              </DropdownOptions>
            </AnimatedWrapper>
          );
        }}
      </Spring>
    </div>
  );
});

export default {
  ...Dropdown,
  Option: DropdownOption,
} as DropdownComposition;

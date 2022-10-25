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
} from 'react';
import { HTMLProps } from 'react';
import {
	AnimatedWrapper,
	DropdownIcon,
	DropdownOptions,
	DropdownWrapper,
	StyledDropdownOption,
} from './Dropdown.styled';
import { Icon, Icons } from '../../Icons/Icons';
import { Spring, easings } from 'react-spring';
import { useElementSize, useOutsideAlert } from '@eduact/utils';
import {
	DropdownComposition,
	DropdownOptionProps,
	DropdownProps,
} from './Dropdown.types';
import {
	InputBaseHelperText,
	RequiredMark,
} from '../BaseInputUtils/BaseInputUtils';
import { FlexLayout } from '@eduact/ed-system';
const DropdownOption: React.FC<DropdownOptionProps> = ({
	children,
	value,
	selected,
	...props
}) => {
	return (
		<StyledDropdownOption onClick={props.onClick} selected={selected}>
			{children}
		</StyledDropdownOption>
	);
};

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
	(
		{
			children,
			value,
			placeholder,
			required,
			onChange,
			withHelperText = true,
			...props
		},
		ref
	) => {
		const myRef = useRef<HTMLSelectElement | null>(null);

		const [hasValue, setHasValue] = useState(false);
		const [selectedLabel, setSelectedLabel] = useState<string | undefined>();
		const [opened, setOpened] = useState(false);

		useEffect(() => {
			const _children = React.Children.toArray(children) as Array<
				React.ReactElement<DropdownOptionProps>
			>;
			const _selected = _children.find(
				(_) =>
					_.props.value == value ||
					(value && myRef.current?.value == _.props.value)
			);
			if (_selected) {
				setSelectedLabel(_selected.props.children as string);
				setHasValue(true);
			} else {
				setSelectedLabel(undefined);
				setHasValue(false);
			}
		}, [value, myRef.current?.value]);

		const handleChange = (value: any, label: any) => {
			if (!myRef.current) return;
			setSelectedLabel(label as string);
			setHasValue(true);
			setOpened(false);
			myRef.current.value = value;
			onChange?.(value);
		};

		const [wrapperRef, { height }] = useElementSize();
		const outsideRef = useRef(null);
		useOutsideAlert(outsideRef, () => {
			setOpened(false);
		});
		return (
			<div ref={outsideRef} style={{ position: 'relative' }}>
				<select
					title="select"
					value={value}
					onChange={(e) => {
						onChange?.(e);
					}}
					style={{ visibility: 'hidden', display: 'none' }}
					ref={(node) => {
						myRef.current = node;
						if (typeof ref === 'function') {
							ref(node);
						} else if (ref) {
							ref.current = node;
						}
					}}
					name={props.name}
				>
					{children}
				</select>

				<DropdownWrapper
					tabIndex={0}
					onClick={(e: React.MouseEvent) => {
						// props?.onBlur?.(e as unknown as React.FocusEvent<HTMLDivElement>);
						setOpened(!opened);
					}}
					onBlur={(e) => {
						props.onBlur?.(e as unknown as React.FocusEvent<HTMLDivElement>);
					}}
					$hasValue={hasValue}
					error={props.error}
					disabled={props.disabled}
					{...props.sx}
				>
					<span>
						{selectedLabel !== undefined ? selectedLabel : placeholder}
					</span>
					<FlexLayout alignItems={'center'}>
						<DropdownIcon $opened={opened} size={20} scale={20}>
							<Icons.ChevronMore />
						</DropdownIcon>
						{required && <RequiredMark>*</RequiredMark>}
					</FlexLayout>
					<Spring
						config={{ easing: easings.easeInOutCirc }}
						to={{
							maxHeight: opened ? `${height}px` : '0px',
						}}
					>
						{(sprintProps: any) => {
							return (
								<AnimatedWrapper style={{ ...sprintProps, overflow: 'hidden' }}>
									<DropdownOptions ref={wrapperRef} $opened={opened}>
										{React.Children.map(
											children as Array<
												React.ReactElement<DropdownOptionProps>
											>,
											(
												child: React.ReactElement<DropdownOptionProps>,
												index
											) => {
												return React.cloneElement(child, {
													...child.props,
													selected: value === child.props.value,
													onClick: (e: React.MouseEvent<HTMLDivElement>) => {
														child.props.onClick?.(e);
														handleChange(
															child.props.value,
															child.props.children
														);
													},
												});
											}
										)}
									</DropdownOptions>
								</AnimatedWrapper>
							);
						}}
					</Spring>
				</DropdownWrapper>
				{withHelperText && (
					<InputBaseHelperText error={props.error}>
						{props.helperText}
					</InputBaseHelperText>
				)}
			</div>
		);
	}
);

export default {
	...Dropdown,
	Option: DropdownOption,
} as DropdownComposition;

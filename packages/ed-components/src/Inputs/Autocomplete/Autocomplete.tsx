import { FlexLayout } from '@eduact/ed-system';
import { useElementSize, useOutsideAlert } from '@eduact/utils';
import { primitives } from '@react-spring/web/dist/declarations/src/primitives';
import { Icons } from '../../Icons';
import React, { useState, useRef, forwardRef } from 'react';
import { easings, Spring } from 'react-spring';
import { useImmer } from 'use-immer';
import { RequiredMark } from '../BaseInputUtils';
import {
	AnimatedWrapper,
	DropdownIcon,
	DropdownOptions,
	DropdownWrapper,
	StyledDropdownOption,
} from '../Dropdown/Dropdown.styled';
import {
	InputBaseWrapper,
	InputWrapper,
	StyledInput,
} from '../TextInput/TextInput.styles';

// Types
type AutocompleteOptionObject = { id: number; label: string };
// type AutocompleteOptions = Array<string> | Array<AutocompleteOptionObject>;
type AutocompleteValue = string | AutocompleteOptionObject;

// Props

type GetOptionLabel<T> = (value: T) => string;

type FilterOptionsState<T> = {
	value: string;
	getOptionLabel: GetOptionLabel<T>;
};
export type AutocompleteProps<T extends AutocompleteValue> = {
	options: ReadonlyArray<T>;
	placeholder?: string;
	required?: boolean;
	onChange?: (value: any) => void;
	filterOptions?: (
		options: ReadonlyArray<T>,
		state: FilterOptionsState<T>
	) => T[];
	innerRef?:
		| React.MutableRefObject<HTMLInputElement>
		| React.RefCallback<HTMLInputElement>;
} & Exclude<React.HTMLProps<HTMLDivElement>, 'onChange'>;

// Guards
const isObject = (value: any): value is AutocompleteOptionObject =>
	typeof value === 'object' && 'label' in value;
// const isArrayOf = <T,>(
// 	value: ReadonlyArray<any>,
// 	checker?: (value: T) => value is T
// ): value is Array<T> =>
// 	Array.isArray(value) &&
// 	value.length > 0 &&
// 	((checker === undefined && value.every((_) => _ instanceof T)) ||
// 		(checker !== undefined && value.every((_) => checker(_))));

const isArrayOfObjects = (
	value: any
): value is Array<AutocompleteOptionObject> =>
	Array.isArray(value) && value.length > 0 && value.every((_) => isObject(_));

const Autocomplete = <T extends AutocompleteValue>({
	options,
	onChange,
	filterOptions,
	innerRef: ref,
	placeholder,
	required,
	...props
}: React.PropsWithChildren<AutocompleteProps<T>>) => {
	const innerInputRef = useRef<HTMLInputElement | null>(null);
	const [opened, setOpened] = useState(false);
	const [hasValue, setHasValue] = useState(false);
	const [selectedLabel, setSelectedLabel] = useState<string | undefined>('');

	const [wrapperRef, { height }] = useElementSize();
	const [filteredOptions, setFilteredOptions] = useImmer(options);

	const getOptionLabel = (option: T) => {
		if (typeof option === 'string') return option;
		return option.label;
	};

	const handleOnChange = (value: T) => {
		if (!innerInputRef.current) return;
		setSelectedLabel(getOptionLabel(value));
		let _value;
		if (isObject(value)) {
			_value = value.id;
		} else {
			_value = value;
		}
		const evt = document.createEvent('Event');
		evt.initEvent('input', true, false);
		innerInputRef.current.value = _value.toString();
		innerInputRef.current.dispatchEvent(evt);
		onChange?.(evt);
		setHasValue(true);
		setOpened(false);
	};

	const [search, setSearch] = useState<string | undefined>('');

	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSelectedLabel(undefined);
		setHasValue(false);
		setSearch(value);
		let _filters: any[] = [];

		if (filterOptions) {
			const filtered = filterOptions(options, {
				value: value,
				getOptionLabel: getOptionLabel,
			});
			setFilteredOptions(filtered as unknown as T[]);
		} else {
			if (isArrayOfObjects(options)) {
				_filters = options.filter(
					(_) => isObject(_) && _.label.includes(value)
				);
			} else {
				_filters = options.filter(
					(_) => typeof _ === 'string' && _.includes(value)
				);
			}
			setFilteredOptions(_filters as unknown as T[]);
		}
	};
	const outsideRef = useRef(null);
	useOutsideAlert(outsideRef, () => {
		setOpened(false);
	});
	return (
		// <InputBaseWrapper>
		<div ref={outsideRef}>
			<DropdownWrapper
				tabIndex={0}
				$hasValue={hasValue}
				onBlur={(e) => {
					props.onBlur?.(e as unknown as React.FocusEvent<HTMLDivElement>);
				}}
				disabled={props.disabled}
				// onBlur={() => setOpened(false)}
				// error={props.error}
				// {...props.sx}
			>
				<StyledInput
					ref={(node) => {
						innerInputRef.current = node;
						if (typeof ref === 'function') {
							ref(node);
						} else if (ref && node) {
							ref.current = node;
						}
					}}
					name={props.name}
					onChange={onSearchChange}
					value={selectedLabel ?? search}
					placeholder={placeholder ?? 'Placeholder'}
					onFocus={() => setOpened(true)}
				/>
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
									{filteredOptions.map((_, index) => {
										return (
											<StyledDropdownOption
												key={`${getOptionLabel(_)}-${index}`}
												onClick={(e) => handleOnChange(_)}
											>
												{getOptionLabel(_)}
											</StyledDropdownOption>
										);
									})}
								</DropdownOptions>
							</AnimatedWrapper>
						);
					}}
				</Spring>
			</DropdownWrapper>
		</div>
		// </InputBaseWrapper>
	);
};

export default Autocomplete;

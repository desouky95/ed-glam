import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { TextInput } from '../TextInput';
import { RaisedButton } from '../../Buttons';
import { GridLayout } from '@eduact/ed-system';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export default {
	title: 'Inputs/Dropdown',
	argTypes: {
		required: {
			type: 'boolean',
			defaultValue: false,
		},
		width: {
			type: 'number',
		},
	},
} as ComponentMeta<typeof Dropdown>;

export const DropdownDefault: ComponentStory<typeof Dropdown> = (args) => {
	const [value, setValue] = useState(1);
	return (
		<>
			<GridLayout gridTemplateColumns={'repeat(2,1fR)'}>
				<Dropdown
					placeholder="Test"
					value={value}
					onChange={(e) => {
						setValue(e);
					}}
					{...args}
				>
					<Dropdown.Option value={1}>Option 1</Dropdown.Option>
					<Dropdown.Option value={2}>Option 2</Dropdown.Option>
					<Dropdown.Option value={3}>Option 3</Dropdown.Option>
					<Dropdown.Option value={4}>Option 4</Dropdown.Option>
				</Dropdown>
				<TextInput />

				<Dropdown placeholder="Test">
					<Dropdown.Option value={1}>Option 1</Dropdown.Option>
					<Dropdown.Option value={2}>Option 2</Dropdown.Option>
					<Dropdown.Option value={3}>Option 3</Dropdown.Option>
					<Dropdown.Option value={4}>Option 4</Dropdown.Option>
				</Dropdown>
				<Dropdown
					placeholder="Test"
					value={value}
					onChange={(e) => {
						setValue(e);
					}}
				>
					<Dropdown.Option value={1}>Option 1</Dropdown.Option>
					<Dropdown.Option value={2}>Option 2</Dropdown.Option>
					<Dropdown.Option value={3}>Option 3</Dropdown.Option>
					<Dropdown.Option value={4}>Option 4</Dropdown.Option>
				</Dropdown>

				<Dropdown placeholder="Test">
					<Dropdown.Option value={1}>Option 1</Dropdown.Option>
					<Dropdown.Option value={2}>Option 2</Dropdown.Option>
					<Dropdown.Option value={3}>Option 3</Dropdown.Option>
					<Dropdown.Option value={4}>Option 4</Dropdown.Option>
				</Dropdown>
				<Dropdown
					placeholder="Test"
					value={value}
					onChange={(e) => {
						setValue(e);
					}}
				>
					<Dropdown.Option value={1}>Option 1</Dropdown.Option>
					<Dropdown.Option value={2}>Option 2</Dropdown.Option>
					<Dropdown.Option value={3}>Option 3</Dropdown.Option>
					<Dropdown.Option value={4}>Option 4</Dropdown.Option>
				</Dropdown>

				<Dropdown sx={{ px: '1rem', mx: '1rem' }} placeholder="Test">
					<Dropdown.Option value={1}>Option 1</Dropdown.Option>
					<Dropdown.Option value={2}>Option 2</Dropdown.Option>
					<Dropdown.Option value={3}>Option 3</Dropdown.Option>
					<Dropdown.Option value={4}>Option 4</Dropdown.Option>
				</Dropdown>
			</GridLayout>
		</>
	);
};

export const DropdownWithReactHookForm: ComponentStory<typeof Dropdown> = (
	args
) => {
	return <WithRHS />;
};

const schema = yup.object({
	type: yup.number().required('Field is required'),
});
const WithRHS = () => {
	const { register, control, setValue } = useForm<{
		name?: string;
		type: number;
		lang: number;
	}>({
		mode: 'all',
		defaultValues: { name: '' },
		resolver: yupResolver(schema),
	});

	const onReset = () => {
		setValue('name', undefined);
	};
	const { name, onChange, ref } = register('name');

	return (
		<GridLayout>
			<RaisedButton onClick={onReset}>Reset</RaisedButton>
			<DevTool control={control} />
			<Controller
				control={control}
				name="type"
				render={({
					field: { name, onChange, value, ref, onBlur },
					fieldState: { isDirty, error, isTouched },
				}) => {
					return (
						<Dropdown
							placeholder="ttttt"
							error={!!error}
							helperText={error?.message ?? ''}
							// onTouchEnd={onBlur}
							onBlur={onBlur}
							ref={ref}
							value={value}
							onChange={onChange}
							name={name}
						>
							<Dropdown.Option value={1}>Test 1</Dropdown.Option>
							<Dropdown.Option value={2}>Test 2</Dropdown.Option>
							<Dropdown.Option value={3}>Test 3</Dropdown.Option>
							<Dropdown.Option value={4}>Test 4</Dropdown.Option>
						</Dropdown>
					);
				}}
			/>
		</GridLayout>
	);
};

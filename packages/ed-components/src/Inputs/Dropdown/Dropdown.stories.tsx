import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { TextInput } from '../TextInput';
import { RaisedButton } from '../../Buttons';
import DropdownRHF from './DropdownRHF';
import { GridLayout } from '@eduact/ed-system';
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
						console.log(e);
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
						console.log(e);
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
						console.log(e);
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

const WithRHS = () => {
	const { register, control, setValue } = useForm<{
		name?: string;
		type: number;
		lang: number;
	}>({
		defaultValues: { name: '' },
	});

	const onReset = () => {
		setValue('name', undefined);
	};
	const { name, onChange, ref } = register('name');

	return (
		<GridLayout>
			<RaisedButton onClick={onReset}>Reset</RaisedButton>
			<DevTool control={control} />
			<DropdownRHF placeholder="Name" control={control} name="name">
				<Dropdown.Option value={'ismail'}>Ismail</Dropdown.Option>
				<Dropdown.Option value={'joe'}>Joe</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
				<Dropdown.Option value={'marv'}>Marwan</Dropdown.Option>
			</DropdownRHF>
			<DropdownRHF placeholder="Type" control={control} name="type">
				<Dropdown.Option value={1}>Type A</Dropdown.Option>
				<Dropdown.Option value={2}>Type B</Dropdown.Option>
				<Dropdown.Option value={3}>Type C</Dropdown.Option>
			</DropdownRHF>
			<DropdownRHF placeholder="Language" control={control} name="lang">
				<Dropdown.Option value={1}>EN</Dropdown.Option>
				<Dropdown.Option value={2}>AR</Dropdown.Option>
			</DropdownRHF>
		</GridLayout>
	);
};

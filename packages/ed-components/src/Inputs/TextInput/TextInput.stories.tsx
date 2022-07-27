import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import TextInput from './TextInput';
import { MdPassword } from 'react-icons/md';
import { useArgs } from '@storybook/client-api';
import { GridLayout } from '@eduact/ed-system';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { DateFormatter } from '@eduact/utils';
export default {
	title: 'Inputs/TextInput',
	component: TextInput,
	argTypes: {
		withToggle: {
			type: 'boolean',
		},
		value: {
			type: 'string',
		},
		type: {
			type: 'string',
		},
		required: {
			type: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof TextInput>;

export const TextInputDefault: ComponentStory<typeof TextInput> = (args) => {
	const [_args, updateArgs] = useArgs();
	//   const [value, setValue] = useState("Init Value");
	return (
		<GridLayout width={'20vw'} gridTemplateColumns={'repeat(2,1fr)'}>
			<TextInput
				required
				onChange={(e) => updateArgs({ ...args, value: e.currentTarget.value })}
				placeholder="City"
				{...args}
			/>
			<TextInput
				required
				onChange={(e) => updateArgs({ ...args, value: e.currentTarget.value })}
				placeholder="City"
				{...args}
			/>
			<TextInput
				required
				onChange={(e) => updateArgs({ ...args, value: e.currentTarget.value })}
				placeholder="City"
				{...args}
			/>
			<TextInput
				required
				onChange={(e) => updateArgs({ ...args, value: e.currentTarget.value })}
				placeholder="City"
				{...args}
			/>
		</GridLayout>
	);
};

export const TextInputWithError: ComponentStory<typeof TextInput> = (args) => {
	const [_args, updateArgs] = useArgs();
	//   const [value, setValue] = useState("Init Value");
	return (
		<GridLayout width={'40vw'} gridTemplateColumns={'repeat(2,1fr)'}>
			<TextInput
				helperText="ErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorError"
				required
				onChange={(e) => updateArgs({ ...args, value: e.currentTarget.value })}
				placeholder="City"
				{...args}
			/>
			<TextInput
				required
				onChange={(e) => updateArgs({ ...args, value: e.currentTarget.value })}
				placeholder="City"
				{...args}
			/>
		</GridLayout>
	);
};

export const TextInputWithReactHookForm: ComponentStory<typeof TextInput> = (
	args
) => {
	return <WithRHS />;
};

const WithRHS = () => {
	const { register, control } = useForm({
		defaultValues: {
			password: '',
			name: '',
		},
	});
	const date = new Date('2022-07-26T18:21:16.239+00:00');
	return (
		<GridLayout gridTemplateColumns={'repeat(2,1fr)'}>
			<DevTool control={control} />
			{DateFormatter(date)}
			<TextInput type="month" placeholder="Birthdate" {...register('name')} />
			<TextInput type="time" placeholder="Birthdate" {...register('name')} />
			<TextInput type="date" {...register('name')} />
			<TextInput
				type="datetime-local"
				placeholder="Birthdate"
				{...register('name')}
			/>

			<TextInput {...register('password')} type="password" />
		</GridLayout>
	);
};

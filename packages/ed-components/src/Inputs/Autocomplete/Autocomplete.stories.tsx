import { DevTool } from '@hookform/devtools';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Autocomplete from './Autocomplete';

export default {
	title: 'Inputs/Autocomplete',
	component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

export const AutocompleteDefault: ComponentStory<typeof Autocomplete> = (
	args
) => (
	<Autocomplete
		{...args}
		options={[
			{ id: 1, label: 'item1' },
			{ id: 2, label: 'item2' },
		]}
	/>
);

export const AutocompleteReactHookForm: ComponentStory<
	typeof Autocomplete
> = () => {
	const { register, watch, control } = useForm({
		defaultValues: {
			autocomplete: '',
		},
		mode: 'all',
	});
	const { ref, ...rhf } = register('autocomplete');
	console.log(watch('autocomplete'));
	return (
		<>
			<DevTool control={control} />
			<Autocomplete
				innerRef={ref}
				{...rhf}
				filterOptions={(options, state) => {
					console.log(state);
					return options.filter((_) => _.id <= 1);
				}}
				options={[
					{ id: 1, label: '2' },
					{ id: 2, label: '3' },
				]}
			/>
		</>
	);
};

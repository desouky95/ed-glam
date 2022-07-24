import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import OtpInput from './OtpInput';
import { FlexLayout } from '@eduact/student-theme';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
export default {
	title: 'Inputs/OtpInput',
	component: OtpInput,
	parameters: {
		controls: {
			include: ['value'],
		},
	},
	argTypes: {
		value: {
			defaultValue: '1234',
			type: 'string',
		},
		onChange: {
			action: 'changed',
		},
	},
} as ComponentMeta<typeof OtpInput>;

export const OtpInputTemplate: ComponentStory<typeof OtpInput> = ({
	inputsNum,
	separator,
	onChange,
	...props
}) => {
	const { control } = useForm({
		defaultValues: {
			otp: '',
		},
	});
	const [_args, setArgs] = useArgs();
	return (
		<>
			<DevTool control={control} />
			<input />
			<Controller
				control={control}
				name="otp"
				render={({ field }) => {
					return (
						<OtpInput
							onChange={field.onChange}
							// onChange={(val) => setArgs({ ..._args, value: val })}
							separator={
								<FlexLayout mx="2.5px" alignItems={'center'} height="100%">
									-
								</FlexLayout>
							}
							inputsNum={4}
							{...props}
						/>
					);
				}}
			/>
		</>
	);
};

OtpInputTemplate.storyName = 'Default OtpInput';
OtpInputTemplate.args = {};

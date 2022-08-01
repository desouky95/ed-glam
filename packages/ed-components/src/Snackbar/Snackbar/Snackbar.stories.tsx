import { RaisedButton } from '@src/Buttons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAddAPhoto } from 'react-icons/md';
import SnackbarProvider from '../SnackbarProvider/SnackbarProvider';
import useSnackbar from '../useSnackbar/useSnackbar';
import Snackbar from './Snackbar';

export default {
	title: 'Feedback/Snackbar',
	component: Snackbar,
	decorators: [
		(Story) => (
			<SnackbarProvider>
				<Story />
			</SnackbarProvider>
		),
	],
} as ComponentMeta<typeof Snackbar>;

export const SnackbarStory: ComponentStory<typeof Snackbar> = (args) => {
	const { openSnackbar } = useSnackbar();
	return (
		<RaisedButton
			onClick={() =>
				openSnackbar({
					text: args.text,
					horizontal: args.horizontal,
					vertical: args.vertical,
					variant: args.variant,
					icon: <MdAddAPhoto />,
				})
			}
		>
			Alert
		</RaisedButton>
	);
};

const Content = () => {
	const { openSnackbar } = useSnackbar();
	return (
		<div>
			<RaisedButton
				onClick={() =>
					openSnackbar({
						text: 'Alert',
						horizontal: 'right',
						vertical: 'bottom',
					})
				}
			>
				Alert
			</RaisedButton>
		</div>
	);
};

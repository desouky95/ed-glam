import { FlexLayout } from '@eduact/ed-system';
import { RaisedButton } from '../../Buttons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdAddAPhoto } from 'react-icons/md';
import styled from 'styled-components';
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
		<>
			<StyledHeader></StyledHeader>
			<FlexLayout height={'120vh'}></FlexLayout>
			<RaisedButton
				onClick={() =>
					openSnackbar({
						text: args.text,
						horizontal: args.horizontal,
						vertical: args.vertical,
						variant: args.variant,
						icon: <MdAddAPhoto />,
						timeout: 4000000000,
					})
				}
			>
				Alert
			</RaisedButton>
		</>
	);
};
const StyledHeader = styled.div`
	position: fixed;
	top: 0;
	z-index: 99;
	width: 100vw;
	padding: 2rem;
	background: red;
`;

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

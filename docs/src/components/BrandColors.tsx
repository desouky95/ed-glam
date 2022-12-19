import React, { useState } from 'react';
import { FlexLayout, Typography } from '@eduact/ed-system';
import {
	Card,
	Icon,
	Icons,
	Snackbar,
	SnackbarProvider,
	useSnackbar,
} from '@eduact/ed-components';
import styled from 'styled-components';
import { variant } from 'styled-system';
import * as utils from '@eduact/utils';
import { Popper } from '@site/../packages/ed-components/src';
import { Color } from '@eduact/student-theme';
import { useCopyClipboard } from '@eduact/utils';

export default function BrandColors() {
	return (
		<SnackbarProvider>
			<FlexLayout gridGap={'0.5rem'} flexWrap={'wrap'}>
				<ColorCard color="primary" hex="#5AC0FC" />
				<ColorCard color="light" hex="#FFFFFF" />
				<ColorCard color="dark" hex="#000000" />
				<ColorCard color="cultured" hex="#F9FAFC" />
				<ColorCard color="darkCultured" hex="#F3F3F3" />
				<ColorCard color="platinum" hex="#e6e6e6" />
				<ColorCard color="silver" hex="#c4c4c4" />
				<ColorCard color="darkSilver" hex="#757575" />
				<ColorCard color="spanishGray" hex="#979797" />
				<ColorCard color="purple" hex="#6C63FF" />
				<ColorCard color="maxBluePurple" hex="#B5B1FF" />
				<ColorCard color="lavender" hex="#F0EFFF" />
				<ColorCard color="independence" hex="#3f3d56" />
				<ColorCard color="purpleNavy" hex="#575A89" />
				<ColorCard color="orange" hex="#dc3545" />
				<ColorCard color="princetonOrange" hex="#FF8532" />
				<ColorCard color="red" hex="#dc3545" />
				<ColorCard color="lightRed" hex="#ff3100" />
				<ColorCard color="yellow" hex="#ffdd6d" />
				<ColorCard color="green" hex="#00d66b" />
			</FlexLayout>
		</SnackbarProvider>
	);
}

const ColorCard: React.FunctionComponent<{ color: Color; hex: string }> = ({
	color,
	hex,
}) => {
	const [value, copy] = useCopyClipboard();
	const { openSnackbar } = useSnackbar();
	return (
		<>
			<div
				onClick={() => {
					copy(hex);
					openSnackbar({
						text: `Copied ${hex}`,
						variant: color,
						timeout: 100,
						vertical: 'bottom',
						horizontal: 'center',
					});
				}}
			>
				<StyledCard p={'1rem'} py="2rem" variant={color}>
					<Typography fontSize={'0.75rem'}>{color}</Typography>
					<Typography fontSize={'0.75rem'}> {hex}</Typography>
				</StyledCard>
			</div>
		</>
	);
};
const StyledCard = styled(Card)`
	cursor: pointer;
	transition: all ease-in-out 200ms;
	min-width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${variant({ scale: 'buttonColors', prop: 'variant' })}
	:hover {
		transform: translateY(10%);
	}
`;

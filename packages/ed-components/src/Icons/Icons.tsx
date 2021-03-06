import { Color } from '@eduact/student-theme';
import { cloneElement, HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';
import React from 'react';
import { typography, TypographyProps, variant } from 'styled-system';

export type IconProps = {
	color?: Color;
	opticalSize?: number;
} & HTMLProps<HTMLOrSVGElement> &
	TypographyProps;

const StyledIconSpan = styled.span<IconProps>`
	${variant({ prop: 'color', scale: 'textButtonColors' })};
	${typography};
	fill: currentColor;
	cursor: pointer;
	--size: ${(props) => props.opticalSize};
`;
export const Icon: React.FC<IconProps> = ({
	children,
	color = 'spanishGray',
	size = 16,
	...props
}) => {
	return (
		<StyledIconSpan color={color}>
			{cloneElement(children as ReactElement, {
				...props,
				width: size,
				height: size,
				// viewBox: `0 0 48 48`,
				// viewBox: `0 0 ${size * 1.2} ${size *1.2}`,
			})}
		</StyledIconSpan>
	);
};

export const EyeIcon = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="48"
		width="48"
		{...props}
		viewBox="0 0 48 48"
	>
		<path d="M24 31.5q3.55 0 6.025-2.475Q32.5 26.55 32.5 23q0-3.55-2.475-6.025Q27.55 14.5 24 14.5q-3.55 0-6.025 2.475Q15.5 19.45 15.5 23q0 3.55 2.475 6.025Q20.45 31.5 24 31.5Zm0-2.9q-2.35 0-3.975-1.625T18.4 23q0-2.35 1.625-3.975T24 17.4q2.35 0 3.975 1.625T29.6 23q0 2.35-1.625 3.975T24 28.6Zm0 9.4q-7.3 0-13.2-4.15Q4.9 29.7 2 23q2.9-6.7 8.8-10.85Q16.7 8 24 8q7.3 0 13.2 4.15Q43.1 16.3 46 23q-2.9 6.7-8.8 10.85Q31.3 38 24 38Zm0-15Zm0 12q6.05 0 11.125-3.275T42.85 23q-2.65-5.45-7.725-8.725Q30.05 11 24 11t-11.125 3.275Q7.8 17.55 5.1 23q2.7 5.45 7.775 8.725Q17.95 35 24 35Z" />
	</svg>
);

export const EyeoffIcon = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="48"
		width="48"
		{...props}
		viewBox="0 0 48 48"
	>
		<path d="m31.45 27.05-2.2-2.2q1.3-3.55-1.35-5.9-2.65-2.35-5.75-1.2l-2.2-2.2q.85-.55 1.9-.8 1.05-.25 2.15-.25 3.55 0 6.025 2.475Q32.5 19.45 32.5 23q0 1.1-.275 2.175-.275 1.075-.775 1.875Zm6.45 6.45-2-2q2.45-1.8 4.275-4.025Q42 25.25 42.85 23q-2.5-5.55-7.5-8.775Q30.35 11 24.5 11q-2.1 0-4.3.4-2.2.4-3.45.95L14.45 10q1.75-.8 4.475-1.4Q21.65 8 24.25 8q7.15 0 13.075 4.075Q43.25 16.15 46 23q-1.3 3.2-3.35 5.85-2.05 2.65-4.75 4.65Zm2.9 11.3-8.4-8.25q-1.75.7-3.95 1.075T24 38q-7.3 0-13.25-4.075T2 23q1-2.6 2.775-5.075T9.1 13.2L2.8 6.9l2.1-2.15L42.75 42.6ZM11.15 15.3q-1.85 1.35-3.575 3.55Q5.85 21.05 5.1 23q2.55 5.55 7.675 8.775Q17.9 35 24.4 35q1.65 0 3.25-.2t2.4-.6l-3.2-3.2q-.55.25-1.35.375T24 31.5q-3.5 0-6-2.45T15.5 23q0-.75.125-1.5T16 20.15Zm15.25 7.1Zm-5.8 2.9Z" />
	</svg>
);

export const ChevronMore = (props: any) => (
	<svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 48 48">
		<path d="M20 26.167 9.458 15.625l2.5-2.5L20 21.208l8.083-8.083 2.459 2.542Z" />
	</svg>
);

const Bolt = (props: any) => (
	<svg width="13" height="20" {...props} xmlns="http://www.w3.org/2000/svg">
		<path d="M13 8.125H7.583V0L0 11.375h5.417V19.5L13 8.125z" />
		<path d="M7.583 8.125V0L6.5 1.625v16.25l6.5-9.75H7.583z" />
	</svg>
);

const Warning = (props: any) => (
	<svg width="6" height="20" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M3 .07c-.863 0-1.563.699-1.563 1.562v10.062a1.562 1.562 0 1 0 3.125 0V1.632C4.563.769 3.864.069 3 .069zM3 19.388a2.11 2.11 0 1 0 0-4.22 2.11 2.11 0 0 0 0 4.22z" />
	</svg>
);
const Check = (props: any) => (
	<svg width="24" height="18" {...props} xmlns="http://www.w3.org/2000/svg">
		<path d="M22.976.846a1.428 1.428 0 0 0-1.985 0L7.715 14.122 3.011 9.418a1.428 1.428 0 1 0-2.055 1.985l.035.035 5.715 5.714a1.429 1.429 0 0 0 2.02 0L23.011 2.867a1.43 1.43 0 0 0-.036-2.02z" />
	</svg>
);

const Icons = { EyeIcon, EyeoffIcon, ChevronMore, Bolt, Warning, Check };

export { Icons };

import { Color, ResponsiveVal } from '@eduact/student-theme';
import { cloneElement, HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';
import React from 'react';
import { typography, TypographyProps, variant } from 'styled-system';

export type IconProps = {
	color?: Color;
	opticalSize?: number;
	scale?: ResponsiveVal<number>;
	size?: string | number;
} & Omit<HTMLProps<HTMLOrSVGElement>, 'size'> &
	TypographyProps;

const StyledIconSpan = styled.span<IconProps>`
	${variant({ prop: 'color', scale: 'textButtonColors' })};
	${typography};
	display: grid;
	place-content: center;
	fill: currentColor;
	cursor: pointer;
	svg {
		fill: currentColor;
	}
	--size: ${(props) => props.opticalSize};
`;

export const Icon: React.FC<IconProps> = ({
	children,
	color = 'spanishGray',
	size = '1em',
	scale = 1,
	...props
}) => {
	return (
		<StyledIconSpan scale={scale} color={color}>
			{cloneElement(children as ReactElement, {
				...props,
				width: size,
				height: size,
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

const Check = (props: any) => (
	<svg width="24" height="18" {...props} xmlns="http://www.w3.org/2000/svg">
		<path d="M22.976.846a1.428 1.428 0 0 0-1.985 0L7.715 14.122 3.011 9.418a1.428 1.428 0 1 0-2.055 1.985l.035.035 5.715 5.714a1.429 1.429 0 0 0 2.02 0L23.011 2.867a1.43 1.43 0 0 0-.036-2.02z" />
	</svg>
);
const Close = (props: any) => (
	<svg
		width="32"
		height="29"
		viewBox="0 0 32 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M24.2778 8.19141L7.88124 21.694"
			stroke="#9E9F9E"
			stroke-width="3"
			stroke-linecap="round"
		/>
		<path
			d="M23.7247 22.1809L8.43457 7.70117"
			stroke="#9E9F9E"
			stroke-width="3"
			stroke-linecap="round"
		/>
	</svg>
);

const ChevronLeft = (props: any) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 96 96"
			{...props}
		>
			<path
				{...props}
				d="M68.61 10.077A7.045 7.045 0 0 0 63.618 8a7.046 7.046 0 0 0-4.992 2.077l-32.56 32.74A7.125 7.125 0 0 0 24 47.837c0 1.882.743 3.687 2.065 5.019l32.561 32.74a7.077 7.077 0 0 0 2.294 1.73 7.042 7.042 0 0 0 8.008-1.409 7.146 7.146 0 0 0-.319-10.359L41.087 47.81 68.61 20.134a7.19 7.19 0 0 0 2.048-5.029 7.19 7.19 0 0 0-2.048-5.028Z"
			/>
		</svg>
	);
};

const ChevronRight = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M27.3903 10.0766C28.7149 8.74686 30.5102 8 32.382 8C34.2537 8 36.049 8.74686 37.3737 10.0766L69.9348 42.8173C71.2572 44.1493 72 45.9545 72 47.8366C72 49.7187 71.2572 51.5238 69.9348 52.8558L37.3737 85.5965C36.7344 86.3242 35.9536 86.9126 35.0796 87.3254C34.2056 87.7381 33.2567 87.9666 32.2915 87.9966C31.3264 88.0266 30.3653 87.8576 29.4675 87.4999C28.5698 87.1423 27.7544 86.6036 27.0716 85.917C26.3888 85.2304 25.853 84.4105 25.4973 83.5078C25.1416 82.6051 24.9735 81.6388 25.0034 80.6682C25.0332 79.6977 25.2604 78.7437 25.6709 77.8648C26.0814 76.9859 26.6666 76.2009 27.3903 75.5581L54.9137 47.8095L27.3903 20.1343C26.0778 18.7932 25.3422 16.987 25.3422 15.1055C25.3422 13.2239 26.0778 11.4177 27.3903 10.0766V10.0766Z" />
	</svg>
);

const SwapVertically = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M51.9444 26.5117H65.1111L47.5556 9L30 26.5117H43.1667V70.4883H30L47.5556 88L65.1111 70.4883H51.9444V26.5117Z"
			{...props}
		/>
	</svg>
);

const Warning = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M48 8C50.1217 8 52.1566 8.84286 53.6569 10.3431C55.1571 11.8434 56 13.8783 56 16V48C56 50.1217 55.1571 52.1566 53.6569 53.6569C52.1566 55.1571 50.1217 56 48 56C45.8783 56 43.8434 55.1571 42.3431 53.6569C40.8429 52.1566 40 50.1217 40 48V16C40 13.8783 40.8429 11.8434 42.3431 10.3431C43.8434 8.84286 45.8783 8 48 8ZM56 88H40V72H56V88Z"
			{...props}
		/>
	</svg>
);
const DoubleArrowUp = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 96 96"
		{...props}
	>
		<path
			{...props}
			d="m72.978 48.508 7.717-7.708L47.847 8 15 40.8l7.717 7.708 25.13-25.037 25.13 25.037Z"
		/>
		<path
			{...props}
			fill-opacity=".5"
			d="m72.987 88 7.717-7.707-32.847-32.8-32.848 32.8L22.726 88l25.13-25.036L72.988 88Z"
		/>
	</svg>
);

const Icons = {
	EyeIcon,
	EyeoffIcon,
	ChevronMore,
	Bolt,
	Warning,
	Check,
	Close,
	ChevronLeft,
	ChevronRight,
	SwapVertically,
	DoubleArrowUp,
};

export { Icons };

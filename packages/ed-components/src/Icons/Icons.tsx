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

const RightArrow = (props: any) => (
	<svg
		{...props}
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M87.0492 45.6622L68.3573 27.014C67.891 26.5354 67.2919 26.2069 66.637 26.0706C65.9821 25.9343 65.3012 25.9963 64.682 26.2488C64.0627 26.5013 63.5331 26.9328 63.1614 27.4877C62.7898 28.0426 62.593 28.6957 62.5961 29.3631V41.3163H15.6992C13.9225 41.3163 12.2185 42.0204 10.9622 43.2738C9.70591 44.5271 9 46.2271 9 47.9996C9 49.7721 9.70591 51.472 10.9622 52.7254C12.2185 53.9787 13.9225 54.6829 15.6992 54.6829H62.5961V66.6478C62.5874 67.3099 62.778 67.9594 63.1432 68.5122C63.5085 69.0651 64.0313 69.4959 64.6446 69.7489C65.2579 70.0019 65.9334 70.0655 66.5833 69.9315C67.2333 69.7974 67.8282 69.4719 68.2907 68.997L86.9826 50.3487C87.2985 50.0471 87.5511 49.6859 87.7256 49.286C87.9002 48.8861 87.9935 48.4555 87.9997 48.0194C88.0059 47.5832 87.9252 47.1502 87.7621 46.7455C87.5989 46.3409 87.3564 45.9726 87.0492 45.6622Z"
			{...props}
		/>
	</svg>
);

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
const Dashboard = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M19.0878 8.01895H18.7801C17.5451 7.96226 16.3078 8.0472 15.0921 8.2721C13.4366 8.6687 11.9232 9.51577 10.7195 10.7195C9.51577 11.9232 8.6687 13.4366 8.2721 15.0921C8.0472 16.3078 7.96226 17.5451 8.01895 18.7801V34.1673C7.96226 35.4023 8.0472 36.6397 8.2721 37.8553C8.67113 39.5081 9.51927 41.0183 10.7228 42.2193C11.9264 43.4202 13.4385 44.265 15.0921 44.6604C16.3078 44.8853 17.5451 44.9702 18.7801 44.9136H34.1673C35.4023 44.9702 36.6397 44.8853 37.8553 44.6604C39.5074 44.2618 41.0173 43.4144 42.2181 42.2118C43.419 41.0092 44.2642 39.4981 44.6604 37.8454C44.8853 36.6298 44.9702 35.3924 44.9136 34.1574V18.7702C44.9702 17.5352 44.8853 16.2978 44.6604 15.0822C44.2626 13.4292 43.4156 11.9183 42.2129 10.7165C41.0102 9.51466 39.4987 8.66872 37.8454 8.2721C36.6298 8.0472 35.3924 7.96226 34.1574 8.01895H19.0878ZM16.5266 14.2533C17.3762 14.1494 18.2333 14.1212 19.0878 14.1689H33.8298C34.6844 14.1212 35.5415 14.1494 36.391 14.2533C36.943 14.3853 37.4475 14.6676 37.8488 15.0689C38.2501 15.4701 38.5324 15.9747 38.6644 16.5266C38.7681 17.3762 38.7964 18.2333 38.7488 19.0878V33.8298C38.7964 34.6844 38.7682 35.5415 38.6644 36.391C38.5324 36.943 38.2501 37.4475 37.8488 37.8488C37.4475 38.2501 36.943 38.5324 36.391 38.6644C35.5415 38.7682 34.6844 38.7964 33.8298 38.7488H19.0878C18.2333 38.7964 17.3762 38.7681 16.5266 38.6644C15.9747 38.5324 15.4701 38.2501 15.0689 37.8488C14.6676 37.4475 14.3853 36.943 14.2533 36.391C14.1494 35.5415 14.1212 34.6844 14.1689 33.8298V19.0878C14.1212 18.2333 14.1494 17.3762 14.2533 16.5266C14.3853 15.9747 14.6676 15.4701 15.0689 15.0689C15.4701 14.6676 15.9747 14.3853 16.5266 14.2533V14.2533ZM62.1225 8.01895H61.8247C60.5897 7.96226 59.3523 8.0472 58.1367 8.2721C56.4812 8.6687 54.9678 9.51577 53.7641 10.7195C52.5603 11.9232 51.7133 13.4366 51.3167 15.0921C51.0918 16.3078 51.0068 17.5451 51.0635 18.7801V34.1673C51.0068 35.4023 51.0918 36.6397 51.3167 37.8553C51.7169 39.5099 52.5673 41.0215 53.7736 42.2226C54.98 43.4237 56.4952 44.2675 58.1516 44.6604C59.3672 44.8853 60.6046 44.9702 61.8396 44.9136H77.2268C78.4618 44.9702 79.6991 44.8853 80.9148 44.6604C82.5685 44.2629 84.0801 43.4161 85.2828 42.2134C86.4854 41.0107 87.3323 39.4991 87.7298 37.8454C87.9547 36.6298 88.0396 35.3924 87.983 34.1574V18.7702C88.0396 17.5352 87.9547 16.2978 87.7298 15.0822C87.3328 13.4282 86.4861 11.9163 85.2834 10.7136C84.0807 9.51084 82.5687 8.66415 80.9148 8.26713C79.6908 8.04204 78.445 7.95877 77.202 8.01895H62.1225V8.01895ZM59.5613 14.2533C60.4108 14.1494 61.2679 14.1212 62.1225 14.1689H76.8793C77.7339 14.1212 78.591 14.1494 79.4406 14.2533C79.9922 14.3858 80.4965 14.6683 80.8977 15.0695C81.2989 15.4707 81.5814 15.9749 81.7139 16.5266C81.8175 17.3762 81.8458 18.2333 81.7983 19.0878V33.8298C81.8458 34.6844 81.8175 35.5415 81.7139 36.391C81.5814 36.9427 81.2989 37.447 80.8977 37.8482C80.4965 38.2494 79.9922 38.5318 79.4406 38.6644C78.591 38.7682 77.7339 38.7964 76.8793 38.7488H62.1225C61.2679 38.7964 60.4108 38.7681 59.5613 38.6644C59.0093 38.5324 58.5048 38.2501 58.1035 37.8488C57.7022 37.4475 57.4199 36.943 57.2879 36.391C57.1841 35.5415 57.1559 34.6844 57.2035 33.8298V19.0878C57.1559 18.2333 57.1841 17.3762 57.2879 16.5266C57.4207 15.9734 57.7045 15.468 58.1077 15.0666C58.5108 14.6653 59.0174 14.3837 59.5712 14.2533H59.5613ZM18.7801 51.0635H34.1673C35.4023 51.0068 36.6397 51.0918 37.8553 51.3167C39.5099 51.7169 41.0215 52.5673 42.2226 53.7736C43.4237 54.98 44.2675 56.4952 44.6604 58.1516C44.8853 59.3672 44.9702 60.6046 44.9136 61.8396V77.2268C44.9702 78.4618 44.8853 79.6991 44.6604 80.9148C44.2629 82.5685 43.4161 84.0801 42.2134 85.2828C41.0107 86.4854 39.4991 87.3323 37.8454 87.7298C36.6298 87.9547 35.3924 88.0396 34.1574 87.983H18.7702C17.5352 88.0396 16.2978 87.9547 15.0822 87.7298C13.4282 87.3328 11.9163 86.4861 10.7136 85.2834C9.51084 84.0807 8.66415 82.5687 8.26713 80.9148C8.04204 79.6908 7.95877 78.445 8.01895 77.202V61.8147C7.96226 60.5798 8.0472 59.3424 8.2721 58.1268C8.67032 56.4731 9.51811 54.9618 10.7217 53.7599C11.9253 52.5581 13.4379 51.7125 15.0921 51.3167C16.3078 51.0918 17.5451 51.0068 18.7801 51.0635V51.0635ZM19.0878 57.2135C18.2333 57.1658 17.3762 57.194 16.5266 57.2978C15.9747 57.4299 15.4701 57.7122 15.0689 58.1134C14.6676 58.5147 14.3853 59.0193 14.2533 59.5712C14.1494 60.4207 14.1212 61.2779 14.1689 62.1324V76.8893C14.1212 77.7438 14.1494 78.6009 14.2533 79.4505C14.3858 80.0022 14.6683 80.5065 15.0695 80.9076C15.4707 81.3088 15.9749 81.5913 16.5266 81.7238C17.3762 81.8275 18.2333 81.8557 19.0878 81.8082H33.8298C34.6844 81.8557 35.5415 81.8275 36.391 81.7238C36.9427 81.5913 37.447 81.3088 37.8482 80.9076C38.2494 80.5065 38.5318 80.0022 38.6644 79.4505C38.7682 78.6009 38.7964 77.7438 38.7488 76.8893V62.1225C38.7964 61.2679 38.7681 60.4108 38.6644 59.5613C38.5324 59.0093 38.2501 58.5048 37.8488 58.1035C37.4475 57.7022 36.943 57.4199 36.391 57.2879C35.5415 57.1841 34.6844 57.1559 33.8298 57.2035L19.0878 57.2135ZM62.1225 51.0635H61.8247C60.5897 51.0068 59.3523 51.0918 58.1367 51.3167C56.4793 51.7145 54.9646 52.5638 53.7607 53.7703C52.5568 54.9768 51.7108 56.4934 51.3167 58.1516C51.0918 59.3672 51.0068 60.6046 51.0635 61.8396V77.2268C51.0069 78.4618 51.0918 79.6991 51.3167 80.9148C51.7198 82.5664 52.5714 84.0746 53.7775 85.2728C54.9837 86.471 56.4973 87.3127 58.1516 87.705C59.3672 87.9299 60.6046 88.0148 61.8396 87.9582H77.2268C78.4618 88.0148 79.6991 87.9298 80.9148 87.705C82.5685 87.3075 84.0801 86.4606 85.2828 85.258C86.4854 84.0553 87.3323 82.5437 87.7298 80.89C87.9546 79.6743 88.0396 78.4369 87.983 77.202V61.8147C88.0396 60.5798 87.9547 59.3424 87.7298 58.1268C87.3323 56.4731 86.4854 54.9614 85.2828 53.7588C84.0801 52.5561 82.5685 51.7092 80.9148 51.3117C79.6991 51.0869 78.4618 51.0019 77.2268 51.0586H62.1225V51.0635ZM59.5613 57.2978C60.4108 57.194 61.2679 57.1658 62.1225 57.2135H76.8793C77.7339 57.1658 78.591 57.194 79.4406 57.2978C79.9922 57.4304 80.4965 57.7129 80.8977 58.114C81.2989 58.5152 81.5814 59.0195 81.7139 59.5712C81.8175 60.4208 81.8458 61.2779 81.7983 62.1324V76.8893C81.8458 77.7438 81.8176 78.6009 81.7139 79.4505C81.5814 80.0022 81.2989 80.5065 80.8977 80.9076C80.4965 81.3088 79.9922 81.5913 79.4406 81.7238C78.591 81.8275 77.7339 81.8557 76.8793 81.8082H62.1225C61.2679 81.8557 60.4108 81.8275 59.5613 81.7238C59.0096 81.5913 58.5053 81.3088 58.1041 80.9076C57.7029 80.5065 57.4205 80.0022 57.2879 79.4505C57.1841 78.6009 57.1558 77.7438 57.2035 76.8893V62.1225C57.1559 61.2679 57.1841 60.4108 57.2879 59.5613C57.4223 59.0099 57.7069 58.5066 58.1099 58.1071C58.5129 57.7076 59.0187 57.4275 59.5712 57.2978H59.5613Z"
			{...props}
		/>
	</svg>
);

const User = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M59.8354 47.0898C56.3359 49.4441 52.2178 50.7098 48.0001 50.7275C45.178 50.7447 42.3806 50.2015 39.77 49.1294C37.1594 48.0573 34.7876 46.4778 32.7921 44.4822C30.7966 42.4867 29.217 40.1149 28.1449 37.5043C27.0729 34.8937 26.5297 32.0963 26.5468 29.2742C26.5645 25.0565 27.8302 20.9384 30.1845 17.4389C32.5388 13.9394 35.8762 11.215 39.7763 9.60913C43.6763 8.00325 47.9645 7.58771 52.1003 8.41489C56.2361 9.24207 60.0346 11.2749 63.017 14.2573C65.9994 17.2397 68.0322 21.0382 68.8594 25.174C69.6866 29.3098 69.2711 33.598 67.6652 37.498C66.0593 41.3981 63.3349 44.7355 59.8354 47.0898ZM58.4163 18.9247C55.6437 16.1818 51.9002 14.6446 48.0001 14.6475V14.6425C44.0971 14.6345 40.3493 16.1705 37.5747 18.9154C34.8 21.6603 33.2236 25.3913 33.1895 29.2941C33.2605 33.1745 34.852 36.8719 37.6213 39.591C40.3906 42.3101 44.1166 43.8335 47.9976 43.8335C51.8787 43.8335 55.6046 42.3101 58.374 39.591C61.1433 36.8719 62.7347 33.1745 62.8057 29.2941C62.7664 25.3942 61.1889 21.6675 58.4163 18.9247ZM60.5231 52.7528C61.1574 52.5704 61.8308 52.5746 62.4629 52.7646C69.5451 54.6758 75.8367 58.7881 80.4295 64.5079C85.0223 70.2277 87.6786 77.259 88.015 84.5868C88.0124 85.4913 87.652 86.3579 87.0124 86.9975C86.3729 87.637 85.5062 87.9974 84.6018 88H11.4132C10.5088 87.9974 9.64215 87.637 9.00261 86.9975C8.36307 86.3579 8.00262 85.4913 8 84.5868C8 70.4618 18.041 57.877 33.5273 52.7646C34.1604 52.5896 34.8296 52.593 35.4609 52.7745C36.0922 52.956 36.661 53.3085 37.1045 53.7931L47.9951 66.2139L58.8857 53.7931C59.3203 53.2964 59.8888 52.9352 60.5231 52.7528ZM21.3785 68.0652C18.0836 71.8374 15.865 76.4271 14.9557 81.3524H81.1836C80.2234 76.4478 77.9866 71.8832 74.6989 68.1192C71.4112 64.3552 67.1889 61.525 62.4579 59.914L50.5339 73.5322C50.2322 73.8925 49.8552 74.1821 49.4294 74.3809C49.0037 74.5796 48.5395 74.6827 48.0696 74.6827C47.5997 74.6827 47.1356 74.5796 46.7098 74.3809C46.2841 74.1821 45.907 73.8925 45.6053 73.5322L33.6813 59.914C28.923 61.4774 24.6733 64.293 21.3785 68.0652Z"
			{...props}
		/>
	</svg>
);

const Activity = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M66.1529 37.3563C67.6364 38.5049 67.9078 40.6387 66.7592 42.1222L55.6028 56.5309C55.0486 57.2466 54.2318 57.7115 53.3335 57.8226C52.4352 57.9337 51.5298 57.6817 50.818 57.1225L40.503 49.0191L31.1856 61.1292C30.0414 62.6163 27.9085 62.8943 26.4215 61.7501C24.9345 60.606 24.6565 58.4731 25.8006 56.9861L37.2106 42.1562C37.7637 41.4374 38.5812 40.9695 39.4811 40.8569C40.381 40.7442 41.2886 40.996 42.0018 41.5563L52.325 49.6662L61.3869 37.9626C62.5356 36.4791 64.6694 36.2076 66.1529 37.3563Z"
			{...props}
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M77.0958 14.7944C74.9244 14.7944 73.1641 16.5547 73.1641 18.7261C73.1641 20.8975 74.9244 22.6578 77.0958 22.6578C79.2672 22.6578 81.0275 20.8975 81.0275 18.7261C81.0275 16.5547 79.2672 14.7944 77.0958 14.7944ZM66.3698 18.7261C66.3698 12.8022 71.172 8 77.0958 8C83.0197 8 87.8219 12.8022 87.8219 18.7261C87.8219 24.6499 83.0197 29.4522 77.0958 29.4522C71.172 29.4522 66.3698 24.6499 66.3698 18.7261Z"
			{...props}
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M30.1213 11.2115H57.7679C59.6441 11.2115 61.1651 12.7325 61.1651 14.6087C61.1651 16.4849 59.6441 18.0059 57.7679 18.0059H30.0649C30.0256 18.0059 29.9862 18.0052 29.9469 18.0039C27.8743 17.9319 25.8099 18.3009 23.8906 19.0866C21.9713 19.8723 20.2407 21.0568 18.8135 22.5615C17.3863 24.0662 16.295 25.8569 15.6118 27.8151C14.9286 29.7733 14.6691 31.8542 14.8505 33.9202C14.8592 34.019 14.8636 34.1181 14.8636 34.2173V65.0186C14.8636 70.0773 16.3948 74.0897 18.9032 76.8028C21.3817 79.4837 25.0852 81.1938 30.0649 81.1938H62.8637C62.8795 81.1938 62.8952 81.1939 62.911 81.1941C62.9363 81.1944 62.9615 81.1951 62.9868 81.196C65.057 81.2711 67.1195 80.9053 69.0376 80.1228C70.9557 79.3403 72.6856 78.1591 74.1126 76.6574C75.5396 75.1557 76.631 73.3678 77.3147 71.4123C77.9983 69.4568 78.2585 67.3783 78.0779 65.3147C78.0693 65.2162 78.065 65.1174 78.065 65.0186V38.1943C78.065 36.3181 79.586 34.7971 81.4622 34.7971C83.3384 34.7971 84.8594 36.3181 84.8594 38.1943V64.8767C85.0978 67.8489 84.7128 70.8388 83.7284 73.6545C82.727 76.519 81.1282 79.1379 79.0379 81.3377C76.9476 83.5374 74.4137 85.2677 71.604 86.4139C68.8141 87.552 65.8156 88.0883 62.8047 87.9882H30.0649C23.4261 87.9882 17.8304 85.651 13.9142 81.4152C10.0279 77.2117 8.06916 71.4379 8.06916 65.0186V34.3598C7.82973 31.3861 8.21352 28.3947 9.19664 25.5769C10.1968 22.7102 11.7945 20.0886 13.8839 17.8858C15.9733 15.6829 18.5067 13.949 21.3166 12.7987C24.1074 11.6562 27.1077 11.1155 30.1213 11.2115Z"
			{...props}
		/>
	</svg>
);

const Settings = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M56.6324 16.624C59.2402 17.3432 61.7476 18.3854 64.0969 19.7261L65.961 17.8766C66.5139 17.3226 67.171 16.883 67.8945 16.5833C68.6176 16.2834 69.3928 16.1291 70.176 16.1291C70.959 16.1291 71.7345 16.2834 72.4576 16.5833C73.1811 16.883 73.8379 17.3226 74.3911 17.8766L78.1458 21.6161C79.2607 22.7352 79.8868 24.2501 79.8868 25.8294C79.8868 27.4086 79.2607 28.9236 78.1458 30.0427L76.2686 31.9192C77.6168 34.264 78.6595 36.7715 79.372 39.3804H82.0355C83.6166 39.3829 85.1323 40.0117 86.2502 41.1293C87.3684 42.2468 87.9975 43.7618 88 45.3423V50.6487C88.0025 52.2315 87.3758 53.7505 86.2582 54.8717C85.1408 55.9931 83.6235 56.6249 82.0398 56.6285H79.3767C78.6571 59.2351 77.6143 61.7416 76.273 64.0897L78.1505 65.9662C79.2654 67.0853 79.8912 68.6003 79.8912 70.1795C79.8912 71.7588 79.2654 73.2738 78.1505 74.3928L74.3911 78.1504C73.8379 78.7043 73.1811 79.1438 72.4576 79.4437C71.7345 79.7435 70.959 79.8979 70.176 79.8979C69.3928 79.8979 68.6176 79.7435 67.8945 79.4437C67.171 79.1438 66.5139 78.7043 65.961 78.1504L64.0835 76.2739C61.7375 77.6213 59.2292 78.6639 56.6189 79.3759V82.0381C56.6165 83.6186 55.9873 85.1336 54.8692 86.2511C53.7512 87.3687 52.2356 87.9975 50.6544 88H45.3456C43.7644 87.9975 42.2487 87.3687 41.1306 86.2511C40.0127 85.1336 39.3835 83.6186 39.3811 82.0381V79.3759C36.7733 78.6568 34.2658 77.6146 31.9165 76.2739L30.039 78.1504C29.4858 78.7043 28.829 79.1438 28.1055 79.4437C27.3824 79.7435 26.6069 79.8979 25.824 79.8979C25.0408 79.8979 24.2655 79.7435 23.5424 79.4437C22.8189 79.1438 22.1618 78.7043 21.6089 78.1504L17.8495 74.3928C16.7346 73.2738 16.1088 71.7588 16.1088 70.1795C16.1088 68.6003 16.7346 67.0853 17.8495 65.9662L19.727 64.0718C18.3788 61.7269 17.3358 59.2195 16.6233 56.6105H13.9645C12.3833 56.6082 10.8677 55.9792 9.7495 54.8617C8.6316 53.7442 8.00247 52.2292 8 50.6487V45.3288C8.00247 43.7484 8.6316 42.2334 9.7495 41.1158C10.8677 39.9983 12.3833 39.3693 13.9645 39.367H16.6233C17.3429 36.7604 18.3854 34.2539 19.727 31.9058L17.8495 30.0292C17.2952 29.4763 16.8558 28.8195 16.5556 28.0965C16.2557 27.3736 16.1014 26.5987 16.1014 25.816C16.1014 25.0333 16.2557 24.2582 16.5556 23.5353C16.8558 22.8123 17.2952 22.1556 17.8495 21.6027L21.6089 17.8451C22.1618 17.2912 22.8189 16.8517 23.5424 16.5518C24.2655 16.252 25.0408 16.0976 25.824 16.0976C26.6069 16.0976 27.3824 16.252 28.1055 16.5518C28.829 16.8517 29.4858 17.2912 30.039 17.8451L31.9343 19.7216C34.2803 18.3742 36.7889 17.3316 39.3992 16.6196V13.9619C39.4014 12.3822 40.0299 10.8678 41.147 9.75036C42.2641 8.63296 43.7787 8.00356 45.359 8H50.6722C52.2526 8.00356 53.7671 8.63296 54.8842 9.75036C56.0013 10.8678 56.6299 12.3822 56.6324 13.9619V16.624ZM70.051 21.7183C70.0074 21.7374 69.968 21.7653 69.9356 21.8002L66.4728 25.2436C66.012 25.6996 65.4075 25.9827 64.762 26.0449C64.3837 26.0813 64.0048 26.0406 63.6474 25.9283C63.3946 25.8488 63.1525 25.7336 62.9291 25.5847C60.0006 23.6286 56.7146 22.2692 53.2595 21.5847C52.6257 21.4572 52.0558 21.1143 51.6462 20.6142C51.2369 20.1141 51.0135 19.4879 51.0138 18.8418V13.9619C51.0124 13.8669 50.9743 13.7762 50.9071 13.7092C50.84 13.6421 50.7492 13.6039 50.6544 13.6026H45.3275C45.2326 13.6039 45.1419 13.6421 45.0748 13.7092C45.0076 13.7762 44.9695 13.8669 44.9684 13.9619V18.8373C44.9687 19.4834 44.745 20.1096 44.3357 20.6097C43.9261 21.1097 43.3562 21.4527 42.7227 21.5802C39.2662 22.2604 35.9794 23.6201 33.0528 25.5802C32.5144 25.9434 31.8661 26.1079 31.2197 26.0456C30.573 25.9834 29.9683 25.6983 29.5091 25.239L26.0641 21.7957C26.0317 21.7608 25.9925 21.7328 25.949 21.7138C25.9054 21.6947 25.8582 21.6849 25.8105 21.6849C25.7776 21.6849 25.7453 21.6895 25.714 21.6986C25.6998 21.7027 25.6858 21.7078 25.6721 21.7138C25.6282 21.7328 25.589 21.7608 25.5567 21.7957L21.7975 25.5533C21.7649 25.5854 21.7391 25.624 21.7221 25.6665C21.7178 25.6774 21.7139 25.6887 21.7109 25.7001C21.7019 25.7325 21.6975 25.7662 21.6986 25.8002C21.6966 25.8495 21.7051 25.8986 21.7238 25.9443C21.7424 25.99 21.7707 26.0312 21.8063 26.065L25.2513 29.5083C25.7077 29.9692 25.9909 30.5733 26.0529 31.2187C26.1151 31.8641 25.9525 32.5111 25.5926 33.0504C23.6345 35.9805 22.2745 39.2683 21.5908 42.7249C21.4631 43.3585 21.1201 43.9281 20.6199 44.3373C20.1196 44.7466 19.4929 44.9699 18.8465 44.9696H13.9736C13.8784 44.9708 13.7877 45.0091 13.7208 45.0762C13.6885 45.1085 13.6627 45.1464 13.6446 45.1875C13.6252 45.2316 13.6147 45.2797 13.6142 45.3288V50.6487C13.6175 50.7405 13.6556 50.8276 13.7206 50.8926C13.7855 50.9575 13.8727 50.9956 13.9645 50.9989H18.878C19.5244 50.9986 20.1511 51.2221 20.6514 51.6313C21.1517 52.0404 21.4946 52.6102 21.6224 53.2435C22.3027 56.6985 23.663 59.9838 25.6241 62.909C25.9873 63.4473 26.1518 64.0951 26.0896 64.7414C26.0274 65.3877 25.742 65.9921 25.2828 66.4511L21.8378 69.8944C21.803 69.9269 21.775 69.9661 21.7559 70.0098C21.7369 70.0533 21.7271 70.1005 21.7271 70.1481C21.7271 70.1957 21.7369 70.2428 21.7559 70.2865C21.7701 70.3193 21.7893 70.3494 21.8129 70.3761C21.8208 70.385 21.8291 70.3937 21.8378 70.4017L25.6016 74.1818C25.6208 74.2026 25.6425 74.2209 25.6661 74.2363C25.6822 74.2469 25.6992 74.2561 25.7168 74.2637C25.7606 74.2828 25.8078 74.2926 25.8555 74.2926C25.9029 74.2926 25.9501 74.2828 25.9939 74.2637C26.0375 74.2447 26.0767 74.2167 26.109 74.1818L29.554 70.7385C29.6749 70.6178 29.8062 70.5087 29.9463 70.4126C30.1072 70.302 30.2797 70.2084 30.4609 70.1335C30.5946 70.0781 30.732 70.0335 30.8721 69.9996C31.087 69.9477 31.3079 69.9213 31.5302 69.9214C31.806 69.9226 32.0788 69.964 32.34 70.0431C32.6024 70.1225 32.8532 70.2399 33.0843 70.3928C36.0128 72.349 39.2988 73.7083 42.754 74.3928C43.3878 74.5203 43.9577 74.8633 44.3672 75.3633C44.7765 75.8634 44.9999 76.4896 44.9996 77.1357V82.0112C45.001 82.1061 45.0391 82.1968 45.1063 82.2639C45.1734 82.3309 45.2642 82.3692 45.359 82.3704H50.6769C50.7717 82.3692 50.8625 82.3309 50.9296 82.2639C50.9968 82.1968 51.0349 82.1061 51.036 82.0112V77.1268C51.0357 76.4807 51.2594 75.8544 51.6687 75.3543C52.0782 74.8544 52.6481 74.5114 53.2817 74.3838C56.7382 73.7037 60.0253 72.3439 62.9516 70.3838C63.4903 70.0207 64.1383 69.8562 64.7847 69.9184C65.4314 69.9807 66.0361 70.2658 66.4953 70.7249L69.9403 74.1684C70.0074 74.2355 70.0987 74.2732 70.1939 74.2732C70.2339 74.2732 70.2731 74.2666 70.3101 74.254C70.3614 74.2365 70.4085 74.2074 70.4477 74.1684L74.2071 70.4108C74.2419 70.3785 74.2699 70.3391 74.2888 70.2956C74.2957 70.2802 74.3012 70.2645 74.3055 70.2484C74.3138 70.2187 74.3179 70.188 74.3179 70.1571C74.3179 70.1095 74.308 70.0624 74.2888 70.0187C74.2822 70.0033 74.2743 69.9885 74.2655 69.9743C74.2493 69.9483 74.2296 69.9244 74.2071 69.9035L70.7621 66.4601C70.3027 66.001 70.0176 65.3966 69.9551 64.7503C69.8929 64.1041 70.0576 63.4563 70.4208 62.9181C72.3806 59.9922 73.7408 56.707 74.4226 53.2524C74.5503 52.6191 74.8933 52.0494 75.3936 51.6402C75.8938 51.231 76.5205 51.0075 77.1669 51.0078H82.0489C82.1437 51.0067 82.2345 50.9685 82.3016 50.9013C82.3688 50.8342 82.4069 50.7436 82.4083 50.6487V45.3198C82.4069 45.225 82.3688 45.1343 82.3016 45.0672C82.2345 45 82.1437 44.9618 82.0489 44.9607H77.1622C76.5159 44.961 75.8895 44.7375 75.3892 44.3283C74.8889 43.9192 74.5457 43.3494 74.4182 42.716C73.7403 39.2603 72.3798 35.9744 70.4162 33.0504C70.053 32.5123 69.8885 31.8645 69.9507 31.2181C70.0129 30.5719 70.2983 29.9674 70.7577 29.5083L74.2025 26.065C74.2376 26.0327 74.2652 25.9935 74.2844 25.9498C74.3036 25.9062 74.3135 25.8591 74.3135 25.8114C74.3135 25.7638 74.3036 25.7166 74.2844 25.6731C74.2652 25.6294 74.2376 25.5902 74.2025 25.5578L70.4433 21.8002C70.411 21.7653 70.3715 21.7374 70.3279 21.7183C70.2843 21.6993 70.2372 21.6894 70.1895 21.6894C70.1418 21.6894 70.0946 21.6993 70.051 21.7183ZM38.9685 34.4673C41.6446 32.6801 44.7905 31.7262 48.0088 31.7262C52.3228 31.732 56.458 33.4476 59.5085 36.4966C62.5588 39.5455 64.2751 43.6792 64.2809 47.991C64.2809 51.2079 63.3266 54.3526 61.5387 57.0273C59.7506 59.702 57.2094 61.7868 54.2359 63.0178C51.2627 64.2489 47.9907 64.571 44.8343 63.9434C41.6777 63.3158 38.7783 61.7667 36.5027 59.492C34.2269 57.2173 32.6772 54.3192 32.0495 51.1641C31.4214 48.009 31.7438 44.7388 32.9752 41.7667C34.2069 38.7947 36.2924 36.2545 38.9685 34.4673ZM42.0826 56.8652C43.8368 58.0369 45.8991 58.6622 48.0088 58.6622C50.8367 58.6586 53.5478 57.5341 55.5476 55.5353C57.5471 53.5366 58.6722 50.8267 58.6757 48C58.6757 45.8912 58.0502 43.8297 56.878 42.0764C55.7061 40.323 54.0399 38.9564 52.0908 38.1494C50.1418 37.3425 47.997 37.1314 45.9278 37.5426C43.8587 37.9541 41.9579 38.9695 40.4661 40.4607C38.9743 41.9518 37.9583 43.8517 37.5469 45.9199C37.1354 47.9882 37.3465 50.1319 38.1538 52.0802C38.9611 54.0284 40.3285 55.6937 42.0826 56.8652Z"
			{...props}
		/>
	</svg>
);

const ClassBookmark = (props: any) => (
	<svg
		viewBox="0 0 96 96"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M69.0001 8.00207C75.0752 8.00207 80 12.9272 80 19.0027V76.9993C80 83.0748 75.0752 88 69.0001 88H26.9999C20.9248 88 16 83.0748 16 76.9993V19.0027C16 13.9667 19.3838 9.72101 24.0017 8.41566L23.9985 15.0033C22.7849 15.9156 22 17.3675 22 19.0027V76.9993C22 79.7609 24.2385 81.9996 26.9999 81.9996H69.0001C71.7615 81.9996 74 79.7609 74 76.9993V19.0027C74 16.2412 71.7615 14.0024 69.0001 14.0024L59.9997 14.0004V8L69.0001 8.00207ZM56.0001 8V40.5575C56.0001 43.5463 52.8025 44.6684 50.8433 43.6154L50.5114 43.407L42.0075 38.2649L33.6951 43.2709C31.6963 44.7137 28.3736 43.8278 28.0294 41.0397L28.0003 40.5575V8H56.0001ZM50.0002 14.0004H34.0003V36.0948L40.2934 32.2983C41.3505 31.7456 42.6296 31.7351 43.5622 32.2029L50.0002 36.0976V14.0004Z"
			{...props}
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
	RightArrow,
	Dashboard,
	Activity,
	Settings,
	User,
	ClassBookmark,
};

export { Icons };

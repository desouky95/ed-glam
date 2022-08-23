import { ResponsiveVal } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
type HeaderUIProps = {
	variant?: ResponsiveVal<Color>;
};
type Props = React.HTMLAttributes<HTMLDivElement> & {
	dragging: boolean;
} & HeaderUIProps;
const Header = forwardRef<HTMLDivElement, Props>(
	({ children, ...props }, ref) => {
		return (
			<StyledHeader variant={props.variant} ref={ref} {...props}>
				{children}
			</StyledHeader>
		);
	}
);

export default Header;

const StyledHeader = styled.div<{ dragging: boolean } & HeaderUIProps>`
	--radius: 25px;
	--cursor: ${(props) => (props.dragging ? 'grabbing' : 'grab')};
	--color: ${(props) =>
		props.dragging ? 'rgba(0, 0, 0, 0.12)' : 'rgba(0, 0, 0, 0.05)'};

	position: relative;
	display: flex;
	flex-shrink: 0;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #eee;
	border-top-left-radius: var(--radius);
	border-top-right-radius: var(--radius);
	height: var(--header-height);
	font-size: 20px;
	color: #333;
	touch-action: none;
	cursor: var(--cursor);

	/* &:before {
		content: '';
		position: absolute;
		width: 50px;
		height: 3px;
		top: 10px;
		border-radius: 10px;
		background-color: var(--color);
		transition: background-color 0.2s ease;
	} */
	${variant({ prop: 'variant', scale: 'backgrounds' })}

	${({ theme }) => `${theme.mediaQueries.medium}{
		${variant({ prop: 'variant', scale: 'backgrounds' })}
	}`}
	${({ theme }) => `${theme.mediaQueries.large}{
		${variant({ prop: 'variant', scale: 'backgrounds' })}
	}`}
`;

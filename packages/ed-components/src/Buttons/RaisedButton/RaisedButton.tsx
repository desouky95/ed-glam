import {
	Color,
	MediaQuery,
	ResponsiveVal,
	Shapes,
} from '@eduact/student-theme';
import React, {
	FC,
	forwardRef,
	ForwardRefExoticComponent,
	ForwardRefRenderFunction,
	LegacyRef,
	MutableRefObject,
	useRef,
} from 'react';
import { RaisedButtonStyled } from './RaisedButton.styled';
import {
	TextAlignProps,
	LayoutProps,
	SpaceProps,
	FlexboxProps,
} from 'styled-system';
import { RefObject } from 'react';
import { Ripple } from '../..//Surface';

export type RaisedButtonProps = {
	variant?: Color;
	outlined?: boolean;
	btnSize?: ResponsiveVal<MediaQuery>;
	btnShape?: Shapes;
	bgFallback?: boolean;
	withRipple?: boolean;
} & React.ComponentProps<typeof RaisedButtonStyled> &
	LayoutProps &
	SpaceProps &
	TextAlignProps &
	FlexboxProps &
	Omit<React.HTMLProps<HTMLButtonElement>, 'ref'>;

export const RaisedButton: ForwardRefExoticComponent<RaisedButtonProps> =
	forwardRef<HTMLButtonElement, RaisedButtonProps>(
		(
			{
				children,
				outlined = false,
				variant = 'primary',
				justifyContent = 'center',
				withRipple = false,
				btnSize = 'large',
				btnShape = 'circle',
				...props
			},
			ref
		) => {
			const buttonRef = useRef<HTMLButtonElement | null>(null);
			return (
				<RaisedButtonStyled
					{...props}
					btnSize={btnSize}
					justifyContent={justifyContent}
					variant={variant}
					outlined={outlined}
					btnShape={btnShape}
					ref={(e: HTMLButtonElement) => {
						buttonRef.current = e;
						if (typeof ref === 'object' && ref) ref.current = e;
						else ref?.(e);
					}}
				>
					{children}
					{withRipple && (
						<Ripple
							color={outlined ? variant : 'light'}
							parentRef={buttonRef}
						/>
					)}
				</RaisedButtonStyled>
			);
		}
	);
export default RaisedButton;

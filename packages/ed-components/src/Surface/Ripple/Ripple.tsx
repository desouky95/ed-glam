import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { RippleWrapper, StyledRipple } from './Ripple.styled';
import { RippleProps } from './Ripple.types';

type RippleType = {
	x: number;
	y: number;
	show: boolean;
};

const Ripple: React.VoidFunctionComponent<RippleProps> = ({
	color = 'light',
	mixBlendMode = 'screen',
	parentRef,
}) => {
	const [ripples, setRipples] = useImmer<RippleType[]>([]);

	useEffect(() => {
		if (parentRef.current) {
			const { current } = parentRef;
			current.addEventListener('click', handleParentClick);
		}
		return () => {
			if (parentRef.current) {
				const { current } = parentRef;
				current.removeEventListener('click', handleParentClick);
			}
		};
	}, []);
	const handleParentClick = (e: MouseEvent) => {
		if (!parentRef.current) return;
		const el = parentRef.current;
		const pos = el.getBoundingClientRect();

		setRipples((old) => {
			old.push({ x: e.clientX - pos.left, y: e.clientY - pos.top, show: true });
		});
	};

	const onTransitionEnd = (index: number) => {
		setRipples((old) => {
			old[index].show = false;
		});
	};

	return (
		<RippleWrapper>
			{ripples.map((ripple, index) => {
				return (
					<>
						{ripple.show && (
							<StyledRipple
								mixBlendMode={mixBlendMode}
								color={color}
								key={`ripple-${index}-${ripple.x}-${ripple.y}`}
								onAnimationEnd={() => onTransitionEnd(index)}
								style={{ top: `${ripple.y}px`, left: `${ripple.x}px` }}
							/>
						)}
						{/*  */}
					</>
				);
			})}
		</RippleWrapper>
	);
};

export default Ripple;

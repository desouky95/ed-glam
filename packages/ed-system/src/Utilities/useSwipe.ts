import React, { MutableRefObject, useEffect, useState } from 'react';

type UseSwipeRef = MutableRefObject<HTMLElement | null>;
type UseSwipeArgs = {
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
};
const useSwipe = (ref: UseSwipeRef, config?: UseSwipeArgs) => {
	const [mouseMoved, setMouseMoved] = useState(false);
	const [initalX, setInitialX] = useState<number>(0);
	const [xOffset, setXOffset] = useState(0);
	const [currentX, setCurrentX] = useState<number>();
	const [translate, setElTranslate] = useState<string>();
	const [active, setActive] = useState(false);
	const unify = (e: TouchEvent | MouseEvent) => {
		if (e instanceof TouchEvent) {
			return e.touches[0];
		}
		return e;
	};
	const lock = (e: TouchEvent | MouseEvent) => {
		setActive(true);
		setInitialX(unify(e).clientX - xOffset);
	};

	const move = (e: TouchEvent | MouseEvent) => {
		if (active) {
			let currentX: number;
			let _currentX = unify(e).clientX - initalX;
			setCurrentX(_currentX);
			setXOffset(_currentX);
			setTranslate(_currentX);
		}
	};
	const dragEnd = (e: TouchEvent | MouseEvent) => {
		setActive(false);
		if (currentX) {
			setInitialX(currentX);
		}
	};
	const setTranslate = (xPos: number) => {
		setElTranslate(`translateX(${xPos}px`);
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener('mousedown', lock, false);
			ref.current.addEventListener('touchstart', lock, false);
			ref.current.addEventListener('mousemove', move, false);
			ref.current.addEventListener('touchmove', move, false);
			ref.current.addEventListener('touchend', dragEnd, false);
		}
	}, []);

	return { translate };
};

export default useSwipe;

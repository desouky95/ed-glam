import React, { useLayoutEffect, useRef } from 'react';
//

type ScrollPosition = {
	x: number;
	y: number;
};
type UseElementScrollArgs = {
	ref: React.MutableRefObject<HTMLElement | null>;
	useWindow?: boolean;
	onChange?: (scrollPosition: number) => void;
	onScrollToBottom?: () => void;
	deps?: Array<any>;
	wait?: number;
};

type GetScrollPositionArgs = {
	element?: React.MutableRefObject<HTMLElement | null>;
	useWindow?: boolean;
};
//
const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ({ element }: GetScrollPositionArgs) => {
	if (!isBrowser) return 0;
	const target = element?.current ? element.current : document.body;
	const position = target.scrollTop;

	return position;
};
const useElementScroll = ({
	ref,
	useWindow = true,
	onChange,
	onScrollToBottom,
	deps,
	wait,
}: UseElementScrollArgs) => {
	const position = useRef(getScrollPosition({ useWindow }));

	let throttleTimeout: any = null;

	const callback = () => {
		const currentPosition = getScrollPosition({ element: ref, useWindow });

		if (ref.current) {
			if (
				ref.current?.scrollHeight - ref.current?.scrollTop ===
				ref.current?.clientHeight
			)
				onScrollToBottom?.();
		}
		onChange?.(currentPosition);
		position.current = currentPosition;
		throttleTimeout = null;
	};

	useLayoutEffect(() => {
		const handleScroll = (e: Event) => {
			if (wait) {
				if (throttleTimeout === null) {
					throttleTimeout = setTimeout(callback, wait);
				}
			} else {
				callback();
			}
		};
		if (ref.current) {
			ref.current.addEventListener('scroll', handleScroll);
		} else {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('scroll', handleScroll);
			} else {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	}, deps);
};

export default useElementScroll;

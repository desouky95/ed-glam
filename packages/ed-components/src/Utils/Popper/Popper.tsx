import { Portal } from '@eduact/ed-system';
import React, {
	createRef,
	forwardRef,
	LegacyRef,
	useEffect,
	useRef,
	useState,
} from 'react';
import { usePopper, Popper as PopperJS } from 'react-popper';
import { createPopper, Placement } from '@popperjs/core';
import styled from 'styled-components';
export function setRef<T>(
	ref:
		| React.MutableRefObject<T | null>
		| ((instance: T | null) => void)
		| null
		| undefined,
	value: T | null
): void {
	if (typeof ref === 'function') {
		ref(value);
	} else if (ref) {
		ref.current = value;
	}
}

export function useForkRef<InstanceA, InstanceB>(
	refA: React.Ref<InstanceA> | null | undefined,
	refB: React.Ref<InstanceB> | null | undefined
): React.Ref<InstanceA & InstanceB> | null {
	return React.useMemo(() => {
		if (refA == null && refB == null) {
			return null;
		}
		return (refValue) => {
			setRef(refA, refValue);
			setRef(refB, refValue);
		};
	}, [refA, refB]);
}

export type PopperProps = {
	children: React.ReactElement;
	title?: string;
	placement?: Placement;
};
export const Popper = forwardRef<HTMLElement, PopperProps>(function Popper(
	{ placement = 'auto', ...props },
	ref
) {
	const referenceElement = useRef<HTMLElement | null>(null);
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
		null
	);

	const [open, setOpen] = useState(false);

	const childProps = {
		ref: referenceElement,
	};

	const getChildElement = () =>
		React.cloneElement(props.children, {
			...childProps,
			...props.children.props,
		});

	const { styles, attributes, state, update, forceUpdate } = usePopper(
		referenceElement.current,
		popperElement,
		{
			placement,
			modifiers: [
				{
					name: 'applyStyles',
					enabled: true,
				},
				{
					name: 'offset',
					options: {
						offset: [0, 5],
					},
				},
			],
		}
	);

	useEffect(() => {
		update?.();
		if (referenceElement.current) {
			referenceElement.current.onmousemove = () => {
				setOpen(true);
			};
			referenceElement.current.onmouseleave = () => {
				setOpen(false);
			};
			update?.();
		}
	}, []);

	return (
		<PopperWrapper {...props}>
			{getChildElement()}
			{open && (
				<div
					ref={(e) => setPopperElement(e)}
					style={{ ...styles.popper }}
					className="popper-element"
					{...attributes.popper}
				>
					{props.title}
				</div>
			)}
		</PopperWrapper>
	);
});

const PopperWrapper = styled.div`
	width: fit-content;
`;

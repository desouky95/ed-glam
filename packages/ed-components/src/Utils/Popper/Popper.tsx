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
import { createPopper } from '@popperjs/core';
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

type PopperProps = {
	children: React.ReactElement;
	title?: string;
};
export const Popper = forwardRef<HTMLElement, PopperProps>(function Popper(
	props,
	ref
) {
	const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
		null
	);
	const rreferenceElement = useRef<HTMLElement | null>(null);
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
		null
	);

	const [open, setOpen] = useState(false);

	const childProps = {
		ref: rreferenceElement,
	};

	const getChildElement = () => React.cloneElement(props.children, childProps);

	useEffect(() => {
		if (rreferenceElement.current) {
			rreferenceElement.current.onmousemove = () => setOpen(true);
			rreferenceElement.current.onmouseleave = () => setOpen(false);
		}
	}, []);

	const { styles, attributes, state } = usePopper(
		rreferenceElement.current,
		popperElement,
		{
			placement: 'top-start',
		}
	);
	return (
		<>
			{getChildElement()}
			{open && (
				<div
					ref={(e) => setPopperElement(e)}
					style={styles.popper}
					{...attributes.popper}
				>
					Popper element
				</div>
			)}
		</>
	);
});

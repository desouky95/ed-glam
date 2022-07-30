import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export type PortalProps = {
	parent?: React.RefObject<HTMLElement>;
};

const Portal: React.FC<PortalProps> = ({ children, parent }) => {
	let el = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		console.log(parent);
		const target = parent?.current ? parent.current : document.body;
		const classList = ['ed-portal-container'];
		target.appendChild(el);
		classList.forEach((_) => el.classList.add(_));
		el.style.zIndex = !parent?.current ? '999999' : '';

		return () => {
			target.removeChild(el);
		};
	}, [el, parent]);

	return <>{createPortal(<>{children}</>, el)}</>;
};

export default Portal;

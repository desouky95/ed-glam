import styled from 'styled-components';
import { position, PositionProps } from 'styled-system';

type Props = { open: boolean; withBackdrop: boolean; center: boolean };
export const Backdrop = styled.div<Props & PositionProps>`
	position: fixed;
	background: ${(props) => (props.withBackdrop ? 'rgba(0, 0, 0, 0.1)' : '')};
	backdrop-filter: ${(props) => (props.withBackdrop ? 'blur(10px)' : '')};
	display: flex;
	align-items: ${(props) => props.center && 'center'};
	justify-content: ${(props) => props.center && 'center'};
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99999;
	${({ open }) => `opacity : ${open ? '1' : '0'};`};
	transition: opacity ease-in-out 500ms;
	${position}
`;

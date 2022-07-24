import styled from 'styled-components';

export const Backdrop = styled.div<{ open: boolean }>`
	position: fixed;
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99999;
	${({ open }) => `opacity : ${open ? '1' : '0'};`};
	transition: opacity ease-in-out 500ms;
`;

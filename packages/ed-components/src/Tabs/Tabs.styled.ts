import { keyframes, css } from 'styled-components';

const SlideLeftKeyframes = keyframes`
from { transform : translateX(100%)}
to { transform : translateX(0)}
`;
export const SlideLeftAnimation = css`
	animation: ${SlideLeftKeyframes} 640ms cubic-bezier(0.65, 0.05, 0.36, 1)
		forwards;
`;
const SlideRightKeyframes = keyframes`
from { transform : translateX(-100%)}
to { transform : translateX(0)}
`;
export const SlideRightAnimation = css`
	animation: ${SlideRightKeyframes} 640ms cubic-bezier(0.65, 0.05, 0.36, 1);
`;

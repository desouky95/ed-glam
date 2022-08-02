import { Color } from '@eduact/student-theme';
import { MutableRefObject } from 'react';
import { Property } from 'csstype';
import { MixBlendModeProps } from '@eduact/ed-system';

export type RippleProps = {
	color?: Color;
	parentRef: MutableRefObject<HTMLElement | null>;
} & MixBlendModeProps;

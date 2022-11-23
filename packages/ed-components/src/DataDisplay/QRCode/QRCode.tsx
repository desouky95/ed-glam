import React, { useCallback, useEffect, useRef } from 'react';
import QRCodeGenerator, { QRCodeRenderersOptions } from 'qrcode';

export type QRCodeProps = {
	value: string;
	darkColor?: string;
	lightColor?: string;
} & Omit<QRCodeRenderersOptions, 'color'> &
	React.HTMLAttributes<HTMLCanvasElement>;
const QRCode: React.VoidFunctionComponent<QRCodeProps> = ({
	value,
	darkColor = '#000',
	lightColor = '#FFF',
	margin = 0,
	...props
}) => {
	const initRefHandler = useCallback(
		(node: HTMLCanvasElement) => {
			QRCodeGenerator.toCanvas(node, value, {
				...props,
				color: {
					dark: darkColor,
					light: lightColor,
				},
				margin,
			});
		},
		[value, margin, lightColor, darkColor, props]
	);
	return <canvas ref={initRefHandler} {...props}></canvas>;
};

export default QRCode;

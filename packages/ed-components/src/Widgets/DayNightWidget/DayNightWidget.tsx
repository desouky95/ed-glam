import React from 'react';
import { Widget, WidgetProps } from '../BaseWidget/BaseWidget';

const DayNightWidget: React.VoidFunctionComponent<WidgetProps<any>> = (
	props
) => {
	return (
		<div
			onClick={() => {
				DayNightWidget.prototype.title = 'dasad';
			}}
		>
			DayNightWidget
		</div>
	);
};

export default DayNightWidget;

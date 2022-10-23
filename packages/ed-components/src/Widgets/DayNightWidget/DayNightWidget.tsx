import { Dropdown, TextInput } from '@src/Inputs';
import React, { useEffect } from 'react';
import { useWidget } from '../BaseWidget';
import { Widget, WidgetProps } from '../BaseWidget/BaseWidget';

const DayNightWidget: React.VoidFunctionComponent<WidgetProps<any>> = (
	props
) => {
	const { setTitle, setAction } = useWidget();

	const DropdownList = () => {
		return <TextInput placeholder="Search" />;
	};
	useEffect(() => {
		console.log('TEST');
		setTitle('Testdfsdfsdf');
		setAction(DropdownList);
	}, []);
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

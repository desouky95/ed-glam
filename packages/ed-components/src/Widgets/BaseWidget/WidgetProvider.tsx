import React, { createContext, Dispatch, useContext, useState } from 'react';

type WidgetAction = () => JSX.Element;
type WidgetContextArgs = {
	title?: string;
	setTitle: Dispatch<string | undefined>;
	action?: WidgetAction;
	setAction: Dispatch<WidgetAction | undefined>;
};

const WidgetContext = createContext<WidgetContextArgs | null>(null);

export const WidgetProvider: React.FC = ({ children }) => {
	const [title, setTitle] = useState<string | undefined>();
	const [action, setAction] = useState<WidgetAction | undefined>();

	return (
		<WidgetContext.Provider value={{ action, setAction, setTitle, title }}>
			{children}
		</WidgetContext.Provider>
	);
};

export const useWidget = () => {
	const context = useContext(WidgetContext);
	if (!context) throw new Error('No  WidgetProvider found !!!');
	return context;
};

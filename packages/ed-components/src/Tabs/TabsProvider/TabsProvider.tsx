import React, { createContext, Context, useContext, useState } from 'react';

type TabsContextProp = {
	activeTab: string;
	activeTabIndex: number | undefined;
	setActiveTab: React.Dispatch<string>;
	setActiveTabIndex: React.Dispatch<number | undefined>;
	onChange?: (value: any) => void;
};

const TabsContext: Context<TabsContextProp | null> =
	createContext<TabsContextProp | null>(null);

type TabsProviderProps = {
	active: string;
	setActiveTab?: React.Dispatch<string>;
	index?: number;
	onChange?: (value: any) => void;
};

export const TabsProvider: React.FC<TabsProviderProps> = ({
	active,
	children,
	index,
	onChange,
}) => {
	const [activeTab, setActiveTab] = useState<string>(active);
	const [activeTabIndex, setActiveTabIndex] = useState<number | undefined>(
		index ?? 0
	);

	console.log({ active });

	return (
		<TabsContext.Provider
			value={{
				activeTab: active,
				setActiveTab,
				setActiveTabIndex,
				activeTabIndex,
				onChange,
			}}
		>
			{children}
		</TabsContext.Provider>
	);
};

export const useTabsContext = () => useContext(TabsContext);

import React, { createContext, Context, useContext, useState, useEffect } from 'react'

type TabsContextProp = {
	activeTab: string
	activeTabIndex: number | undefined
	setActiveTab: React.Dispatch<string>
	setActiveTabIndex: React.Dispatch<number | undefined>
	onChange?: (value: any) => void
}

export const TabsContext: Context<TabsContextProp | null> = createContext<TabsContextProp | null>(null)

type TabsProviderProps = {
	active: string
	index?: number
	onChange?: (value: any) => void
}

export const TabsProvider: React.FC<TabsProviderProps> = ({ active, children, index, onChange }) => {
	const [activeTab, setActiveTab] = useState<string>(active)
	const [activeTabIndex, setActiveTabIndex] = useState<number | undefined>(index ?? 0)
	// useEffect(() => {
	// 	setActiveTab(active)
	// }, [active])
	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab, setActiveTabIndex, activeTabIndex, onChange }}>{children}</TabsContext.Provider>
	)
}

export const useTabsContext = () => useContext(TabsContext)

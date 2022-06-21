import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useArgs, useStorybookState } from '@storybook/api'

import Tabs from './Tabs'
import { useState } from 'react'
import { RaisedButton } from '@Components/Buttons/RaisedButton'
import Spacer from '../Spacer'

export default {
	title: 'Utilities/Tabs',
	component: Tabs,
	argTypes: {
		width: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.1,
			},
			defaultValue: 1,
		},
	},
} as ComponentMeta<typeof Tabs>

export const TabsTemplate: ComponentStory<typeof Tabs> = ({ ...props }) => {
	const [avTabs, setTabs] = useState(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6', 'Tab 7'])
	const AddTab = () => {
		const toBePushed = avTabs
		toBePushed.push(`Tab ${avTabs.length + 1}`)
		setTabs(toBePushed.slice())
	}
	const Remove = () => {
		if (avTabs.length > 0) {
			const toBeRemoved = avTabs
			toBeRemoved.splice(avTabs.length - 1, 1)
			setTabs(toBeRemoved.slice())
		}
	}

	return (
		<>
			<div style={{ display: 'flex' }}>
				<RaisedButton onClick={AddTab}>Add Tab</RaisedButton>
				<Spacer marginX="2rem" />
				<RaisedButton onClick={Remove}>Remove Tab</RaisedButton>
			</div>
			<Tabs width={Number(props.width) / 100} {...props}>
				{avTabs.map((i, index) => {
					return <Tabs.Item label={`Tab ${index + 1}`}>Tab {index + 1}'s Content </Tabs.Item>
				})}
			</Tabs>
		</>
	)
}

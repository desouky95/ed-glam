import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
const InstallationTabs = () => {
	return (
		<Tabs>
			<TabItem value="npm" default label="npm">
				<CodeBlock> npm i --save @eduact/ed-components</CodeBlock>
			</TabItem>
			<TabItem value="yarn" label="yarn">
				<CodeBlock> yarn add @eduact/ed-components</CodeBlock>
			</TabItem>
		</Tabs>
	);
};

export default InstallationTabs;

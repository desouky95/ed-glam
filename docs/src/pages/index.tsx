import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { FlexLayout, Box } from '@eduact/ed-system';
import { RaisedButton } from '@eduact/ed-components';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
function HomepageHeader() {
	return (
		<FlexLayout>
			<RaisedButton>
				<Link to={'/GettingStarted/installation'}>Getting Started</Link>
			</RaisedButton>
			<RaisedButton outlined>Components</RaisedButton>
		</FlexLayout>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout>
			<HomepageHeader />
		</Layout>
	);
}

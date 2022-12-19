import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { FlexLayout, Box } from '@eduact/ed-system';
import { RaisedButton } from '@eduact/ed-components';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from 'styled-components';
function HomepageHeader() {
	return (
		<FlexLayout
			width={'100%'}
			minHeight={'50vh'}
			justifyContent="center"
			alignItems={'center'}
			gridGap={'1rem'}
		>
			<RaisedButton>
				<UnStyledLink to={'/GettingStarted/installation'}>
					Getting Started
				</UnStyledLink>
			</RaisedButton>
			<RaisedButton outlined>Components</RaisedButton>
		</FlexLayout>
	);
}
const UnStyledLink = styled(Link)`
	color: inherit;
	:active,
	:hover {
		color: inherit;
	}
`;

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout>
			<HomepageHeader />
		</Layout>
	);
}

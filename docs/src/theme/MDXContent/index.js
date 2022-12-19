import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
export default function MDXContent({ children }) {
	console.log({ children });
	return (
		<MDXProvider components={MDXComponents}>
			{/* <div>Test</div> */}
			{children}
		</MDXProvider>
	);
}

import styled, { css } from 'styled-components';
import useThemeScreenSize from './useThemeScreenSize';
import useScreenSize from './useScreenSize';
import useElementSize from './useElementSize';
import useSwipe from './useSwipe';
//
export * from './cursor';
export * from './mixBlendMode';
export * from './useThemeScreenSize';
export * from './Breakpoint';
export * from './getDynamicVariant';
export { useThemeScreenSize, useScreenSize, useElementSize, useSwipe };
//
export const PageWrapper = styled.div`
	padding: 1rem;
	width: 100%;
	@media (min-width: 1024px) {
		padding: 4.25rem 5.75rem;
	}
`;
export const PageTitle = styled.h2`
	font-size: 2rem;
	font-weight: 500;
	line-height: 1.2;
	margin: 1rem 0;
`;
export const FAQsTable = css`
	.table {
		width: 100%;
		margin-bottom: 1rem;
		color: #212529;
		table-layout: fixed;
		th,
		td {
			padding: 0.75rem;
			vertical-align: top;
			border-top: 1px solid #dee2e6;
			text-align: inherit;
		}
	}
`;

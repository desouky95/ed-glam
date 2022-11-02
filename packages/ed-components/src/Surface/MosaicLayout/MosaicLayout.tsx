import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	flexbox,
	FlexboxProps,
	flexDirection,
	FlexDirectionProps,
	gridGap,
	GridGapProps,
	layout,
	LayoutProps,
} from 'styled-system';
import React, { ReactNode } from 'react';
// Row
const StyledMosaicRow = styled.div<FlexboxProps & GridGapProps & LayoutProps>`
	display: flex;
	flex: 1;
	grid-gap: 1.563rem;
	${flexbox};
	${gridGap};
	${layout};
	flex-direction: column;
	width: 100%;
	min-width: 100%;
	${({ theme }) => `${theme.mediaQueries.medium}{
        flex-direction : row;
    }`}
`;
const MosaicRow: React.FC<FlexboxProps & GridGapProps & LayoutProps> = ({
	children,
	...props
}) => <StyledMosaicRow {...props}>{children}</StyledMosaicRow>;

// Column
const StyledMosaicCol = styled.div<FlexboxProps & GridGapProps & LayoutProps>`
	display: flex;
	flex-direction: column;

	grid-gap: 1.563rem;
	${flexbox};
	${gridGap};
	${layout}
	${({ theme }) => `${theme.mediaQueries.small}{
		flex: 1;
    }`}
`;
const MosaicCol: React.FC<FlexboxProps & GridGapProps & LayoutProps> = ({
	children,
	...props
}) => <StyledMosaicCol {...props}>{children}</StyledMosaicCol>;

const MosaicLayout = styled.div<
	GridGapProps & LayoutProps & FlexDirectionProps
>`
	display: flex;
	flex-wrap: wrap;
	grid-gap: 1.563rem;
	width: 100%;
	height: 100%;
	min-height: 100%;
	/* background: blueviolet; */
	flex-direction: column;
	${({ theme }) => `${theme.mediaQueries.medium}{
        flex-direction : row;
    }`}
	${gridGap};
	${StyledMosaicCol},${StyledMosaicRow} {
		${gridGap};
	}
	${layout};
	/* ${flexDirection}; */
`;

interface MosaicComposition {
	Row: React.FC<React.ComponentProps<typeof MosaicRow>>;
	Col: React.FC<React.ComponentProps<typeof MosaicCol>>;
}
type MosaicProps = GridGapProps &
	LayoutProps &
	FlexDirectionProps & {
		children: Array<React.ReactElement<React.ComponentProps<typeof MosaicCol>>>;
	};
export const Mosaic: React.FC<MosaicProps> & MosaicComposition = ({
	children,
	...props
}) => {
	return <MosaicLayout {...props}>{children}</MosaicLayout>;
};

Mosaic.Col = MosaicCol;
Mosaic.Row = MosaicRow;

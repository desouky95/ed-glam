import { FlexLayout, Typography } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import { Icon, Icons } from '../../Icons';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

// Types
export type AttachmentType =
	| 'pdf'
	| 'csv'
	| 'doc'
	| 'image'
	| 'ppt'
	| 'zip'
	| 'rar';
type AttachmentTypeColors = {
	[key in AttachmentType]: string;
};
type AttachmentTypeIcons = {
	[key in AttachmentType]: JSX.Element;
};

const attachmentsColors: AttachmentTypeColors = {
	doc: '#2b579a',
	csv: '#217346',
	ppt: '#d24726',
	pdf: '#FA0F00',
	rar: '#4F0000',
	zip: '#4F0000',
	image: 'transparent',
};
const attachmentsIcons: AttachmentTypeIcons = {
	doc: <Icons.DocFile />,
	csv: <Icons.CsvFile />,
	ppt: <Icons.PptFile />,
	pdf: <Icons.PdfFile />,
	rar: <Icons.RarFile />,
	zip: <Icons.ZipFile />,
	image: <></>,
};

type AttachmentUIProps = {
	bgColor?: Color | string;
	bgImage?: string;
};
export type AttachmentProps = AttachmentUIProps & {
	type: AttachmentType;
	onDelete?: () => void;
	url: string;
	folded?: boolean;
};

const Attachment: React.VoidFunctionComponent<AttachmentProps> = ({
	bgColor = 'primary',
	bgImage,
	type,
	onDelete,
	url,
	folded = true,
}) => {
	return (
		<AttachmentContainer flexDirection={'column'}>
			<StyledAttachment
				bgImage={type === 'image' ? bgImage : undefined}
				bgColor={attachmentsColors[type]}
			>
				{type !== 'image' && (
					<>
						<Icon color="light" size={'3rem'}>
							{attachmentsIcons[type]}
						</Icon>
						{folded && <AttachmentCorner />}
					</>
				)}
				<RemoveAttachment onClick={onDelete}>
					Remove
					<Icon>
						<Icons.WideClose />
					</Icon>
				</RemoveAttachment>
			</StyledAttachment>
			<AttachmentURL>{url}</AttachmentURL>
		</AttachmentContainer>
	);
};

export default Attachment;
const RemoveAttachment = styled.div`
	position: absolute;
	width: 100%;
	background: ${rgba('#000', 0.5)};
	display: flex;
	color: ${(props) => props.theme.colors.light};
	font-size: 0.625rem;
	transform: translateY(100%);
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0.5rem 0.2rem;
	cursor: pointer;
	transition: all ease-in-out 200ms;
`;

const AttachmentContainer = styled(FlexLayout)`
	max-width: 76px;
`;
const AttachmentURL = styled(Typography)`
	font-size: 0.75rem;
	max-width: inherit;
	/* word-break: break-all; */
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const StyledAttachment = styled.div<AttachmentUIProps>`
	position: relative;
	width: 76px;
	height: 76px;
	border-radius: 3px;
	${variant({ scale: 'backgrounds', prop: 'bgColor' })};
	background: ${(props) => props.bgImage ?? props.bgColor};
	overflow: hidden;
	display: grid;
	place-content: center;
	&:hover {
		${RemoveAttachment} {
			transform: translateY(0);
		}
	}
`;

const AttachmentCorner = styled.div`
	width: 1rem;
	height: 1rem;
	position: absolute;
	top: 0;
	right: 0;
	background-color: #e6e7e8;
	::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 1em 1em 0;
		border-color: transparent #fff transparent transparent;
	}
`;

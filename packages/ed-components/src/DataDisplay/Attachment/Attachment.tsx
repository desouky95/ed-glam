import { FlexLayout, Typography } from '@eduact/ed-system';
import { Color, useEdTheme } from '@eduact/student-theme';
import { Icon, Icons } from '../../Icons';
import { rgba } from 'polished';
import React, { useState } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Modal } from '@src/Feedback';
import { Popper } from '@src/Utils/Popper';
import { Tooltip } from '../Tooltip';

// Types
export type AttachmentType =
	| 'pdf'
	| 'csv'
	| 'doc'
	| 'image'
	| 'ppt'
	| 'zip'
	| 'rar'
	| 'png'
	| 'jpg';
const attachmentTypesEnum: Array<AttachmentType> = [
	'pdf',
	'csv',
	'doc',
	'image',
	'ppt',
	'zip',
	'rar',
	'png',
	'jpg',
];
const isAttachmentType = (value: any): value is AttachmentType =>
	value !== undefined && attachmentTypesEnum.includes(value);
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
	png: 'transparent',
	jpg: 'transparent',
};
const attachmentsIcons: AttachmentTypeIcons = {
	doc: <Icons.DocFile />,
	csv: <Icons.CsvFile />,
	ppt: <Icons.PptFile />,
	pdf: <Icons.PdfFile />,
	rar: <Icons.RarFile />,
	zip: <Icons.ZipFile />,
	jpg: <></>,
	png: <></>,
	image: <></>,
};

export const imageTypes: Array<AttachmentType> = ['image', 'png', 'jpg'];
export const compressedTypes: Array<AttachmentType> = ['zip', 'rar'];
export const docsTypes: Array<AttachmentType> = ['doc', 'pdf'];

type AttachmentUIProps = {
	bgColor?: Color | string;
	bgImage?: string;
};
export type AttachmentObject = { type: AttachmentType; url: string };
export type AttachmentOnClickCallback = (attachment: AttachmentObject) => void;
export type AttachmentOnDeleteCallback = (attachment: AttachmentObject) => void;
export type AttachmentProps = AttachmentUIProps & {
	type: AttachmentType;
	onDelete?: AttachmentOnDeleteCallback;
	onClick?: AttachmentOnClickCallback;
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
	onClick,
}) => {
	const theme = useEdTheme();
	return (
		<>
			<AttachmentContainer flexDirection={'column'}>
				<StyledAttachment
					onClick={() => onClick?.({ url, type })}
					bgImage={imageTypes.includes(type) ? url : undefined}
					bgColor={attachmentsColors[type] ?? theme.colors.primary}
				>
					{!imageTypes.includes(type) && (
						<>
							{isAttachmentType(type) && (
								<Icon color="light" size={'3rem'}>
									{attachmentsIcons[type]}
								</Icon>
							)}
							{!isAttachmentType(type) && (
								<Icon color="light" size={'3rem'}>
									<Icons.File />
								</Icon>
							)}
						</>
					)}
					{folded && <AttachmentCorner />}
					<RemoveAttachment
						onClick={(e) => {
							e.stopPropagation();
							onDelete?.({ type, url });
						}}
					>
						Remove
						<Icon color="light">
							<Icons.Trash />
						</Icon>
					</RemoveAttachment>
				</StyledAttachment>
				<Tooltip placement="bottom" title={url.split('/').pop()}>
					<AttachmentURL>{url.split('/').pop()}</AttachmentURL>
				</Tooltip>
			</AttachmentContainer>
		</>
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
	justify-content: space-between;
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
	display: block;
	font-size: 0.75rem;
	max-width: 76px;
	margin-top: 0.5rem;
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
	background: ${(props) =>
		props.bgImage ? `url(${props.bgImage})` : props.bgColor};
	overflow: hidden;
	display: grid;
	place-content: center;
	background-size: cover;
	background-repeat: no-repeat;
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

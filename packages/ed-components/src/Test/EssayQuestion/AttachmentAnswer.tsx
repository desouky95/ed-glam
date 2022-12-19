import { Color } from '@eduact/student-theme';
import { RaisedButton } from '../../Buttons';
// import { Icon, Icons } from '@src/Icons';
import { linearGradient, rgba } from 'polished';
import React, { useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { FlexLayout, Typography } from '@eduact/ed-system';
import { Attachment, AttachmentType } from '../../DataDisplay/Attachment';

type AttachmentData = {
	url: string;
	type: AttachmentType;
};
type AttachmentAnswerProps = {
	onFileChange?: (files: FileList | null) => void;
	value?: string[];
};
const AttachmentAnswer: React.VoidFunctionComponent<AttachmentAnswerProps> = ({
	onFileChange,
	value,
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const triggerInput = () => inputRef.current?.click();

	const filesChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		onFileChange?.(ev.target.files);
	};

	const attachments = useMemo<Array<AttachmentData>>(() => {
		if (!value) return [];
		return value.map((_) => ({
			type: _.split('.')[0] as AttachmentType,
			url: _,
		}));
	}, [value]);

	return (
		<FlexLayout gridGap={'2.875rem'} alignItems={'center'}>
			<FlexLayout gridGap={'1.5rem'}>
				{attachments.map((attachment) => (
					<Attachment url={attachment.url} type={attachment.type} />
				))}
			</FlexLayout>
			<input
				onChange={filesChange}
				ref={inputRef}
				type={'file'}
				multiple
				hidden
			/>
			<RaisedButton
				onClick={triggerInput}
				btnSize={'small'}
				p={{ sm: '6px 10px', lg: '6px 10px' }}
				outlined
				borderRadius={4}
				withRipple
				width={'fit-content'}
				minWidth={'unset'}
				variant="princetonOrange"
			>
				Add
			</RaisedButton>
		</FlexLayout>
	);
};

export default AttachmentAnswer;

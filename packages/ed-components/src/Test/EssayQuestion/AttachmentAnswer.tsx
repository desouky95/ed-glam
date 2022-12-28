import { Color } from '@eduact/student-theme';
import { RaisedButton } from '../../Buttons';
// import { Icon, Icons } from '../..Icons';
import { linearGradient, rgba } from 'polished';
import React, { useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box, FlexLayout, Typography } from '@eduact/ed-system';
import {
	Attachment,
	AttachmentObject,
	AttachmentType,
	docsTypes,
	imageTypes,
} from '../../DataDisplay/Attachment';
import { Dialog, Modal } from '../../Feedback';
import { Card } from '../../Cards';
import { useCsvTable } from '@eduact/utils';
import { Icon, Icons } from '../../Icons';

type AttachmentData = {
	url: string;
	type: AttachmentType;
};
type AttachmentAnswerProps = {
	onFileChange?: (files: FileList | null) => void;
	onDelete?: (data: string[]) => void;
	value?: string[];
} & Pick<React.HTMLProps<HTMLInputElement>, 'accept'>;
const AttachmentAnswer: React.VoidFunctionComponent<AttachmentAnswerProps> = ({
	onFileChange,
	value,
	accept,
	onDelete,
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const triggerInput = () => inputRef.current?.click();

	const filesChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		onFileChange?.(ev.target.files);
	};

	const attachments = useMemo<Array<AttachmentData>>(() => {
		if (!value || !Array.isArray(value)) return [];
		return value.map<AttachmentData>((_) => ({
			type: _.split('.').pop() as AttachmentType,
			url: _,
		}));
	}, [value]);

	const [modalOpen, setModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [toBeDeleted, setToBeDeleted] = useState(-1);

	const [selectedPreview, setSelectedPreview] =
		useState<AttachmentObject | null>(null);

	const onDeleteAttachment = () => {
		if (!value || toBeDeleted === -1) return;

		const _attachments = value;
		_attachments.splice(toBeDeleted, 1);
		setDeleteModalOpen(false);
		onDelete?.(_attachments);
	};
	const handleDeleteModal = (index: number) => {
		setToBeDeleted(index);
		setDeleteModalOpen(true);
	};
	const handleCloseDeleteModal = () => {
		setToBeDeleted(-1);
		setDeleteModalOpen(false);
	};
	return (
		<FlexLayout gridGap={'2.875rem'} alignItems={'center'}>
			<Modal
				withStyling
				center
				onClose={() => {
					console.log('CLOSE');
					setSelectedPreview(null);
					setModalOpen(false);
				}}
				open={modalOpen}
			>
				<Card
					p={'1rem'}
					variant={'light'}
					maxHeight={'90vh'}
					maxWidth={'90vw'}
					overflow={'auto'}
				>
					<FlexLayout
						width={'100%'}
						height={'100%'}
						justifyContent={'center'}
						alignItems={'center'}
						overflow={'auto'}
					>
						{selectedPreview && (
							<>
								{imageTypes.includes(selectedPreview.type) && (
									<object type="image" data={selectedPreview?.url}>
										<img src={selectedPreview.url} />
									</object>
								)}
								{selectedPreview.type === 'pdf' && (
									<object
										style={{ width: '90vw', height: '90vh' }}
										data={selectedPreview.url}
										datatype="application/pdf"
									>
										<iframe
											width={'100%'}
											height={'100%'}
											src={selectedPreview.url}
											title="Pdf"
										></iframe>
									</object>
								)}
							</>
						)}
					</FlexLayout>
				</Card>
			</Modal>
			<Dialog
				maxWidth={'90vw'}
				width={'fit-content'}
				height={'fit-content'}
				open={deleteModalOpen}
				onClose={handleCloseDeleteModal}
			>
				<FlexLayout gridGap={'2rem'} p={'2rem'} flexDirection="column">
					<Typography>Are you sure to delete attachment</Typography>
					<FlexLayout
						gridGap={{ sm: '0.5rem', lg: '2rem' }}
						flexWrap={'wrap'}
						justifyContent={'flex-end'}
					>
						<RaisedButton
							onClick={onDeleteAttachment}
							btnSize={'small'}
							variant="princetonOrange"
						>
							Delete
						</RaisedButton>
						<RaisedButton
							onClick={handleCloseDeleteModal}
							btnSize={'small'}
							outlined
						>
							Cancel
						</RaisedButton>
					</FlexLayout>
				</FlexLayout>
			</Dialog>
			<FlexLayout
				gridGap={'1.5rem'}
				width={'100%'}
				flexWrap={'wrap'}
				alignItems={'center'}
			>
				{attachments.map((attachment, index) => (
					<FlexLayout
						justifyContent={{ sm: 'space-between', lg: 'initial' }}
						alignItems={{ sm: 'center' }}
						width={{ sm: '100%', lg: 'fit-content' }}
						key={`${attachment.url}-${attachment.type}-${index}`}
					>
						<Attachment
							onClick={(attachment) => {
								if (
									!imageTypes.includes(attachment.type) &&
									attachment.type !== 'pdf'
								) {
									window.open(attachment.url, '_blank');
									return;
								}
								setSelectedPreview(attachment);
								setModalOpen(true);
							}}
							onDelete={(attachment) => handleDeleteModal(index)}
							url={attachment.url}
							type={attachment.type}
						/>
						<Box display={{ sm: 'block', lg: 'none' }}>
							<Icon onClick={() => handleDeleteModal(index)}>
								<Icons.Trash />
							</Icon>
						</Box>
					</FlexLayout>
				))}
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
				<Typography>Max size: 5MB</Typography>
			</FlexLayout>
			<input
				onChange={filesChange}
				onClick={(e: React.MouseEvent<HTMLInputElement>) => {
					e.currentTarget.value = '';
				}}
				ref={inputRef}
				type={'file'}
				accept={accept}
				multiple
				hidden
			/>
		</FlexLayout>
	);
};

export default AttachmentAnswer;

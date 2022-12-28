import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@eduact/student-theme';
import { FlexLayout } from '@eduact/ed-system';
import { Dialog } from '../../Feedback';
import {
	Attachment,
	AttachmentObject,
	AttachmentType,
	docsTypes,
	imageTypes,
} from '@eduact/ed-components';
import Spacer from '../../Spacer';

type Props = {
	answer: string;
};

const theme = createTheme({}) as any;

const AnswerAttachments: React.VoidFunctionComponent<Props> = ({ answer }) => {
	const attachments = useMemo(() => {
		const _answers = JSON.parse(answer) as string[];

		return _answers.map((_) => ({
			url: _,
			type: _.split('.').pop() as AttachmentType,
		}));
	}, [answer]);

	const [isOpen, setIsOpen] = useState(false);
	const [attachment, setAttachment] = useState<AttachmentObject | undefined>();
	const handleOpenAttachment = (attachment: AttachmentObject) => {
		setAttachment(attachment);
		setIsOpen(true);
	};
	const handleCloseAttachment = () => {
		setAttachment(undefined);
		setIsOpen(false);
	};

	return (
		<ThemeProvider theme={theme as any}>
			<Dialog onClose={handleCloseAttachment} maxWidth="xl" open={isOpen}>
				<>
					{attachment && (
						<div>
							{imageTypes.includes(attachment.type) && (
								<img src={attachment.url} alt="" />
							)}
							{docsTypes.includes(attachment.type) && (
								<object
									style={{ width: '90vw', height: '90vh' }}
									data={attachment.url}
									datatype="application/pdf"
								>
									<iframe
										width={'100%'}
										height={'100%'}
										src={attachment.url}
										title="Pdf"
									></iframe>
								</object>
							)}
						</div>
					)}
				</>
			</Dialog>
			<Spacer mb={{ sm: '6px', lg: '1.5rem' }} />
			<FlexLayout gridGap={'1rem'} marginTop={'1rem'} flexWrap="wrap">
				{attachments?.map((attachment) => {
					return (
						<Attachment
							onClick={handleOpenAttachment}
							type={attachment.type}
							url={attachment.url}
							withDelete={false}
						/>
					);
				})}
			</FlexLayout>
		</ThemeProvider>
	);
};

export default AnswerAttachments;

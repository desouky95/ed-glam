import { Box, FlexLayout, Typography } from '@eduact/ed-system';
import { RaisedButton, TextButton } from '../../Buttons';
import { Icon, Icons } from '../../Icons';
import Spacer from '../../Spacer';
import axios, { AxiosProgressEvent } from 'axios';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useImmer } from 'use-immer';
import { QuestionContentWrapper } from '../Question.styled';
import { EssayAnswerType, IEssayQuestion } from '../Question.types';
import AttachmentAnswer from './AttachmentAnswer';
import TextAnswer from './TextAnswer';

type EssayProps = {
	question: IEssayQuestion;
	onChange: (answer: string | FileList | null) => void;
	chooseTypeTitle?: string;
	orLabel?: string;
	onAttachmentsChange?: (files: FileList | null) => void;
	uploadURL?: string;
};
type UploadProgressArgs = { progress: AxiosProgressEvent; file: File | null };
const EssayQuestion: React.VoidFunctionComponent<EssayProps> = ({
	onChange,
	onAttachmentsChange,
	uploadURL,
	question,
	chooseTypeTitle = 'Choose your form of answer',
	orLabel = 'Or',
}) => {
	const [answerType, setAnswerType] = useState<EssayAnswerType | undefined>();
	const [uploadProgress, setUploadProgress] =
		useImmer<UploadProgressArgs | null>(null);
	const changeType = () => {
		if (answerType === 'attachment') {
			setAnswerType('text');
			return;
		}
		setAnswerType('attachment');
	};
	const otherOption = useMemo<EssayAnswerType>(() => {
		if (answerType === 'attachment') return 'text';
		return 'attachment';
	}, [answerType]);

	const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		onChange(e.target.value);
	const onAttachmentChange = async (files: FileList | null) => {
		if (!uploadURL) return;
		if (files) {
			for (let index = 0; index < files.length; index++) {
				const file = files.item(index);
				const formData = new FormData();
				formData.append('file', file as Blob);
				await axios.post(`${uploadURL}`, formData, {
					onUploadProgress: (progress) => {
						setUploadProgress({ progress, file });
					},
				});
				setUploadProgress(null);
			}
		}
	};
	// onAttachmentsChange?.(files);

	const value = useMemo(() => {
		if (!question.answer) return;
		if (question.answer.type === 'attachment') {
			return JSON.parse(question.answer.answer) as string[];
		}
		return question.answer.answer;
	}, []);

	return (
		<Spacer>
			<QuestionContentWrapper
				dangerouslySetInnerHTML={{ __html: question.content }}
			/>
			<Spacer mb={{ sm: '0.813rem', lg: '2.313rem' }} />
			<FlexLayout flexDirection="column">
				<Spacer mb={{ sm: '6px', lg: '1rem' }} />
				{!answerType && (
					<FlexLayout width={'100%'} justifyContent={'center'}>
						<Box width={'fit-content'}>
							<ChooseTypeTitle>{chooseTypeTitle}</ChooseTypeTitle>
							<FlexLayout justifyContent={'space-between'}>
								<AnswerOptionWrapper>
									<IconThumbnail
										onClick={() => setAnswerType('text')}
										as={'button'}
									>
										<Icon>
											<Icons.Text />
										</Icon>
									</IconThumbnail>
									<IconLabel>Text</IconLabel>
								</AnswerOptionWrapper>
								<OrLabel>{orLabel}</OrLabel>
								<AnswerOptionWrapper>
									<IconThumbnail
										onClick={() => setAnswerType('attachment')}
										as={'button'}
									>
										<Icon>
											<Icons.Attachment />
										</Icon>
									</IconThumbnail>
									<IconLabel>Attachment</IconLabel>
								</AnswerOptionWrapper>
							</FlexLayout>
						</Box>
					</FlexLayout>
				)}
				{answerType && (
					<SwitchButton onClick={changeType} mb={6} justifyContent={'flex-end'}>
						<SwitchTypeLabel>Switch to {otherOption}</SwitchTypeLabel>
						{answerType === 'text' && (
							<Icon size={'1.2rem'}>
								<Icons.Attachment />
							</Icon>
						)}
						{answerType === 'attachment' && (
							<Icon size={'1.2rem'}>
								<Icons.Text />
							</Icon>
						)}
					</SwitchButton>
				)}
				{answerType === 'text' && (
					<TextAnswer
						value={value}
						onChange={onTextChange}
						placeholder="Type something here"
					/>
				)}
				{answerType === 'attachment' && (
					<>
						{uploadProgress?.progress.progress !== undefined && (
							<>
								<progress
									value={uploadProgress.progress.progress * 100}
									min="0"
									max="100"
								></progress>
								<div>
									{uploadProgress.file.name}
									{uploadProgress.file.type}
								</div>
							</>
						)}
						<AttachmentAnswer
							value={value as string[]}
							onFileChange={onAttachmentChange}
						/>
					</>
				)}
			</FlexLayout>
		</Spacer>
	);
};

export default EssayQuestion;

const AnswersLabel = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
`;

const ChooseTypeTitle = styled.div`
	font-size: 1.375rem;
	font-family: 'Roboto';
	font-weight: normal;
	letter-spacing: 0px;
	margin-bottom: 1.438rem;
`;

const IconThumbnail = styled.div`
	width: 77.5px;
	height: 77.5px;
	border-radius: 5px;
	box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16);
	background: ${(props) => props.theme.colors.light};
	border: solid 1px #c4c4c4;
	font-size: 3.5rem;
	display: grid;
	place-content: center;
	margin-bottom: 0.75rem;
	cursor: pointer;
`;
const IconLabel = styled.span`
	font-size: 1.125rem;
	color: #707070;
	font-weight: 500;
	font-family: Montserrat;
`;

const AnswerOptionWrapper = styled(FlexLayout)`
	max-width: 77.5px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const OrLabel = styled.span`
	font-size: 1.25rem;
	color: #707070;
	margin: 0 2rem;
	margin-top: 2rem;
`;
const SwitchTypeLabel = styled.span`
	color: #adadad;
	text-decoration: underline;
	text-transform: capitalize;
`;

const SwitchButton = styled(FlexLayout)`
	cursor: pointer;
`;

import { Box, FlexLayout, Typography } from '@eduact/ed-system';
import { RaisedButton, TextButton } from '../../Buttons';
import { Icon, Icons } from '../../Icons';
import Spacer from '../../Spacer';
import axios, { AxiosProgressEvent } from 'axios';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useImmer } from 'use-immer';
import { QuestionContentWrapper } from '../Question.styled';
import {
	AttachmentAnswer as IAttachmentAnswer,
	EssayAnswerType,
	IEssayQuestion,
	UploadProgressArgs,
} from '../Question.types';
import AttachmentAnswer from './AttachmentAnswer';
import TextAnswer from './TextAnswer';
import { Progress } from '../../Feedback/Progress';
import { Dialog } from '../../Feedback';

type EssayProps = {
	question: IEssayQuestion;
	onChange: (answer: IAttachmentAnswer) => void;
	chooseTypeTitle?: string;
	orLabel?: string;
	onAttachmentsChange?: (files: FileList | null) => void;
	uploadProgress?: UploadProgressArgs;
} & Pick<React.HTMLProps<HTMLInputElement>, 'accept'>;

const EssayQuestion: React.VoidFunctionComponent<EssayProps> = ({
	onChange,
	onAttachmentsChange,
	uploadProgress,
	question,
	chooseTypeTitle = 'Choose your form of answer',
	orLabel = 'Or',
	accept,
}) => {
	const [answerType, setAnswerType] = useState<EssayAnswerType | undefined>(
		question.answer && question.answer.type
			? question.answer.type
			: question.answer_schema === '*'
			? undefined
			: (question.answer_schema as EssayAnswerType)
	);

	const otherOption = useMemo<EssayAnswerType>(() => {
		if (answerType === 'attachment') return 'text';
		return 'attachment';
	}, [answerType]);

	const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		onChange({ answer: e.target.value, type: 'text' });
	const onAttachmentChange = async (files: FileList | null) => {
		onAttachmentsChange?.(files);
	};

	const value = useMemo(() => {
		if (!question.answer) return;
		if (question.answer.type === 'attachment' && question.answer.answer) {
			return JSON.parse(question.answer.answer) as string[];
		}
		return question.answer.answer;
	}, [question.answer]);

	const [switchModalOpen, setSwitchModalOpen] = useState(false);

	const changeType = () => {
		setSwitchModalOpen(false);
		if (answerType === 'attachment') {
			setAnswerType('text');
			onChange({
				answer: null,
				type: 'text',
			});
			return;
		}
		setAnswerType('attachment');
		onChange({
			answer: null,
			type: 'attachment',
		});
	};
	const handleChangeType = () => {
		setSwitchModalOpen(true);
	};
	const handleCloseSwitchModal = () => {
		setSwitchModalOpen(false);
	};
	return (
		<Spacer>
			<QuestionContent dangerouslySetInnerHTML={{ __html: question.content }} />
			<AnswersLabel fontSize={{ sm: '0.5rem', lg: '1rem' }}>
				Answer
			</AnswersLabel>
			<Dialog
				maxWidth={'90vw'}
				width={'fit-content'}
				height={'fit-content'}
				onClose={handleCloseSwitchModal}
				open={switchModalOpen}
			>
				<FlexLayout p={'2rem'} flexDirection={'column'}>
					<FlexLayout p={'2rem'} flexDirection={'column'}>
						<Typography>Are you sure to switch answer type ?</Typography>
						<Typography>NB: Answer will be erased</Typography>
					</FlexLayout>
					<FlexLayout
						gridGap={{ sm: '0.5rem', lg: '2rem' }}
						flexWrap={{ sm: 'wrap' }}
						justifyContent={{ sm: 'flex-end', lg: 'initial' }}
					>
						<RaisedButton onClick={changeType} btnSize="small">
							Switch
						</RaisedButton>
						<RaisedButton
							onClick={handleCloseSwitchModal}
							variant="princetonOrange"
							btnSize="small"
							outlined
						>
							Cancel
						</RaisedButton>
					</FlexLayout>
				</FlexLayout>
			</Dialog>
			<Spacer mb={{ sm: '0.813rem', lg: '2.313rem' }} />
			<FlexLayout flexDirection="column">
				<Spacer mb={{ sm: '6px', lg: '1rem' }} />
				{!answerType && question.answer_schema === '*' && (
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
				{answerType && question.answer_schema == '*' && (
					<SwitchButton
						onClick={handleChangeType}
						mb={2}
						justifyContent={'flex-end'}
					>
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
						value={!value ? '' : (value as string)}
						onChange={onTextChange}
						placeholder="Type something here"
					/>
				)}
				{answerType === 'attachment' && (
					<>
						<FlexLayout gridGap={'0.5rem'} mb={4}>
							<Box visibility={uploadProgress ? 'visible' : 'hidden'}>
								<Progress
									value={Math.floor(
										(uploadProgress?.progress?.progress ?? 0) * 100
									)}
									min="0"
									max="100"
								>
									{Math.floor((uploadProgress?.progress.progress ?? 0) * 100)}%
								</Progress>
								<Typography
									display={'block'}
									overflow={'hidden'}
									maxWidth={{ sm: '20ch', lg: '40ch' }}
									textOverflow="ellipsis"
									fontSize={{ sm: '0.7rem' }}
									fontWeight={600}
									whiteSpace={'nowrap'}
								>
									{uploadProgress?.file?.name}
								</Typography>
							</Box>
						</FlexLayout>

						<AttachmentAnswer
							accept={accept}
							value={value as string[]}
							onFileChange={onAttachmentChange}
							onDelete={(data) => {
								onChange({
									type: 'attachment',
									answer: JSON.stringify(data),
								});
							}}
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
	font-size: 1rem;
	font-weight: 300;
	@media screen and (min-width: 769px) {
		margin-bottom: 0.75rem;
	}
`;
const QuestionContent = styled(QuestionContentWrapper)`
	margin-bottom: 1.5rem;
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

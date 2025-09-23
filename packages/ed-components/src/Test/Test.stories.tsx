import { useCountdown } from '@eduact/utils';
import { ComponentMeta } from '@storybook/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { GapQuestion } from './GapQuestion';
import { OrderingQuestion } from './OrderingQuestion';
import {
	IEssayQuestion,
	isEssayQuestion,
	ObjectPairAnswer,
	Question,
	UploadProgressArgs,
} from './Question.types';
import TestQuestion from './TestQuestion/TestQuestion';
import React from 'react';
import { EssayQuestion } from './EssayQuestion';
import { current } from 'immer';

export default {
	subcomponents: {
		gap: GapQuestion,
		ordering: OrderingQuestion,
		essay: EssayQuestion,
	},
} as ComponentMeta<any>;

export const Test = () => {
	const [questions, setQuestions] = useImmer<Array<Question>>([
		{
			id: 4715,
			test_id: 371,
			weight: 2,
			content: '<p>asasasas</p>',
			parsed_content: null,
			type: 'mrq',
			feedback: null,
			order: 2,
			created_at: '2025-09-22T23:22:39.866+00:00',
			updated_at: '2025-09-22T23:22:39.866+00:00',
			answer_schema: '*',
			options: ['a', 'b', 'd'],
			answer: ['a', 'b'],
		} as any,
	]);

	const [uploadProgress, setUploadProgress] = useImmer<
		UploadProgressArgs | undefined
	>(undefined);
	const onAttachmentsChange = async (
		files: FileList | null,
		question: Question
	) => {
		if (!files || files.length === 0) return;
		const _files: Array<string> = [];
		for (let index = 0; index < files.length; index++) {
			const file = files?.item(index);
			const formData = new FormData();
			formData.append('file', file as Blob);
			try {
				const response = await axios.post(
					'https://stag.api.eduact.me/api/upload/',
					formData,
					{
						headers: {
							Authorization:
								'Bearer MTgxMw.DAWJeisfmx3_V5_bgyMvjTLaYfF9Xgt0VewjGIfavIeeXUv0pc56WBYN4U0F',
						},
						onUploadProgress(progressEvent) {
							setUploadProgress({
								file,
								progress: progressEvent,
							});
						},
					}
				);
				// _files.push(response.data.data.uri);
				setUploadProgress(undefined);
				setQuestions((_) => {
					if (!isEssayQuestion(question)) return;
					const selectedQuestion = _.find(
						(_) => _.id === question.id
					) as IEssayQuestion;
					if (!selectedQuestion) return;
					if (!selectedQuestion.answer || !selectedQuestion.answer.answer) {
						selectedQuestion.answer = {
							type: 'attachment',
							answer: JSON.stringify([response.data.data.uri]),
						};
					} else {
						if (!selectedQuestion.answer.answer) return;
						const answerFiles = JSON.parse(
							selectedQuestion.answer.answer
						) as string[];
						answerFiles.push(response.data.data.uri);
						selectedQuestion.answer = {
							type: 'attachment',
							answer: JSON.stringify(answerFiles),
						};
					}
				});
			} catch (error) {
				setUploadProgress(undefined);
			}
		}
	};
	return (
		<div>
			{questions.map((question, index) => {
				return (
					<TestQuestion
						onChange={(val) => {
							setQuestions((draft) => {
								draft[index].answer = val;
							});
						}}
						key={`${question.id}-${question.type}`}
						index={index}
						withNavigation
						question={question}
						showPrev={index > 0}
						essayQuestionProps={{
							accept: 'application/pdf, .png, .jpg, .jpeg',
							onAttachmentsChange(files) {
								onAttachmentsChange(files, question);
							},
							uploadProgress,
							textChangeDelay: 15000,
						}}
					/>
				);
			})}
		</div>
	);
};

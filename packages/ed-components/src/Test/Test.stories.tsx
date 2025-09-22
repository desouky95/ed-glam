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
		// {
		// 	parsed_content:
		// 		'<p>&nbsp;</p>\n<p><span style="color: rgb(224, 62, 45);"><strong><img src="https://s3.eu-west-1.amazonaws.com/files.eduact.me/tinymc/d624e31348984971660571625196.jpg" alt="" width="188" height="239"></strong></span></p>\n<p>&nbsp;</p>\n<p><span style="color: rgb(224, 62, 45);"><strong>wewe $$1 &nbsp; dsdsd $$2 </strong></span></p>\n<p>&nbsp;</p>',
		// 	id: 4,
		// 	type: 'gap',
		// 	weight: 3,
		// 	feedback: '<p>2323</p>',
		// 	order: 2,
		// 	options: [
		// 		{
		// 			gap: 1,
		// 			choices: ['we', 'we', 'wewe'],
		// 		},
		// 		{
		// 			gap: 2,
		// 			choices: ['we', 'wewe', 'w'],
		// 		},
		// 	],
		// 	// answer: [{ answer: 'we', target: 1 }],
		// 	answer: null,
		// 	content: null,
		// 	test_id: 3,

		// 	correct: false,
		// 	score: 0,
		// },
		// {
		// 	answer: null,
		// 	content:
		// 		'<h2><strong>order the following</strong><img src="https://s3.eu-west-1.amazonaws.com/files.eduact.me/tinymc/Screenshot2022-08-25at181661468605860.png" alt="" width="2880" height="1800"></h2><p>the order is:</p>',
		// 	feedback: null,
		// 	id: 44,
		// 	options: ['Frankfurt', 'Liverpool', 'Bayern', 'Real Madrid', 'Man City'],
		// 	order: 2,
		// 	parsed_content: null,
		// 	test_id: 19,
		// 	type: 'ordering',
		// 	weight: 6,

		// 	correct: false,
		// 	score: 0,
		// },
		// {
		// 	id: 10,
		// 	test_id: 3,
		// 	weight: 5,
		// 	content: 'what is the best solution ?',
		// 	parsed_content: null,
		// 	type: 'mcq',
		// 	feedback: 'no',
		// 	order: 10,
		// 	options: ['first option', 'second option', 'third option'],
		// 	answer: null,
		// 	correct: false,
		// 	score: 0,
		// },
				{
			id: 10,
			test_id: 3,
			weight: 5,
			content: 'what is the best solution ?',
			parsed_content: null,
			type: 'mcq',
			feedback: 'no',
			order: 10,
			options: ['first option', 'second option', 'third option'],
			answer: null,
			correct: false,
			score: 0,
		},
		{
			id: 11,
			test_id: 3,
			weight: 5,
			content: 'what is the best solution ?',
			parsed_content: null,
			type: 'mrq',
			feedback: 'no',
			order: 10,
			options: ['first option', 'second option', 'third option'],
			answer: null,
			correct: false,
			score: 0,
		},
		{
			id: 3518,
			test_id: 304,
			weight: 5,
			content: 'this is the first essay question',
			parsed_content: null,
			type: 'essay',
			feedback: 'no',
			order: 5,
			answer: {
				answer: 'sadsad',
				type: 'text',
			},
			correct: false,
			options: [],
			score: 5,
			answer_schema: '*',
		},
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

import React from 'react';
import { IMcqQuestion } from '../Question.types';

type McqProps = {
	question: IMcqQuestion;
	onChange: (answer: any) => void;
};
const McqQuestion: React.VoidFunctionComponent<McqProps> = ({ question }) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: question.content }}></div>
			<div>
				{question.options.map((mcqItem, index) => {
					return (
						<>
							<input
								onChange={(e) => console.log(e.target.value)}
								type={'radio'}
								id={mcqItem}
								value={mcqItem}
								name="answer"
							/>
							<label htmlFor={mcqItem}>{mcqItem}</label>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default McqQuestion;

import { FlexLayout, Typography, DefaultBrowserCss } from '@eduact/ed-system';
import { NumberFormatter } from '@eduact/utils';
import { Icon, Icons } from '../../Icons';
import Spacer from '../../Spacer';
import React from 'react';
import styled from 'styled-components';
import GapQuestion from '../GapQuestion/GapQuestion';
import { McqQuestion } from '../McqQuestion';
import { OrderingQuestion } from '../OrderingQuestion';
import {
	isEssayQuestion,
	isGapQuestion,
	isMcqQuestion,
	isMrqQuestion,
	isOrderingQuestion,
	Question,
	UploadProgressArgs,
} from '../Question.types';
import { EssayQuestion } from '../EssayQuestion';
import { MrqQuestion } from '../MrqQuestion';
type Props = {
	question: Question;
	withNavigation?: boolean;
	index: number;
	onNext?: (order: number, index: number) => void;
	onPrev?: (order: number, index: number) => void;
	onChange: (answer: any) => void;
	showPrev?: boolean;
	showNext?: boolean;
	prevLabel?: string;
	nextLabel?: string;
	scoreLabel?: string;
	questionLabel?: string;
	onFocus?: React.FocusEventHandler<HTMLDivElement>;
	onBlur?: React.FocusEventHandler<HTMLDivElement>;
	essayQuestionProps?: {
		onAttachmentsChange?: (files: FileList | null) => void;
		uploadProgress?: UploadProgressArgs;
		textChangeDelay?: number;
	} & Pick<React.HTMLProps<HTMLInputElement>, 'accept'>;
};

const TestQuestion: React.VoidFunctionComponent<Props> = ({
	question,
	essayQuestionProps,
	withNavigation = false,
	onNext,
	onPrev,
	index,
	onChange,
	showNext = true,
	showPrev = true,
	nextLabel = 'Next',
	prevLabel = 'Previous',
	onBlur,
	onFocus,
	questionLabel,
	scoreLabel,
}) => {
	return (
		<QuestionContainer tabIndex={question.id} onFocus={onFocus} onBlur={onBlur}>
			<QuestionWrapper>
				<QuestionHeader>
					<QuestionOrder>{questionLabel ?? `Q${index + 1}.`} </QuestionOrder>
					<QuestionPoints>
						<Points>{scoreLabel ?? 'Points'} </Points>
						<Spacer mx={'0.5rem'} />
						<span>{NumberFormatter(question.weight)}</span>
					</QuestionPoints>
				</QuestionHeader>
				<Spacer mb={{ sm: '1rem', lg: '2rem' }} />

				<div>
					{isGapQuestion(question) && (
						<GapQuestion
							label={`Q${question.order}.`}
							onChange={onChange}
							question={question}
						/>
					)}
					{isOrderingQuestion(question) && (
						<OrderingQuestion
							onFocus={onFocus}
							onBlur={onBlur}
							question={question}
							onChange={onChange}
						/>
					)}
					{isMcqQuestion(question) && (
						<McqQuestion question={question} onChange={onChange} />
					)}
					{isMrqQuestion(question) && (
						<MrqQuestion question={question} onChange={onChange} />
					)}
					{isEssayQuestion(question) && (
						<EssayQuestion
							question={question}
							onChange={onChange}
							{...essayQuestionProps}
						/>
					)}
				</div>
			</QuestionWrapper>
			{withNavigation && (
				<FlexLayout alignItems={'center'} justifyContent={'space-between'}>
					{showPrev ? (
						<NavigationButton
							onClick={() => onPrev?.(question.order, index)}
							alignItems={'center'}
						>
							<Icon color="primary">
								<Icons.ChevronLeft />
							</Icon>
							<span>{prevLabel}</span>
						</NavigationButton>
					) : (
						<span></span>
					)}
					{showNext ? (
						<NavigationButton
							onClick={() => onNext?.(question.order, index)}
							alignItems={'center'}
						>
							<span>{nextLabel}</span>
							<Icon color="primary">
								<Icons.ChevronRight />
							</Icon>
						</NavigationButton>
					) : (
						<span></span>
					)}
				</FlexLayout>
			)}
		</QuestionContainer>
	);
};

export default TestQuestion;

const QuestionContainer = styled.div`
	${DefaultBrowserCss};
	img {
		display: block;
		height: auto;
	}
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	background: #fff;
	padding: 1rem;
	border-radius: 8px;
`;
const QuestionWrapper = styled.div`
	${({ theme }) => `${theme.mediaQueries.large}{
	padding : 0 8rem;
}`}
`;
const QuestionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #d3d3d3;
	padding-bottom: 8px;
	align-items: center;
	${({ theme }) => `${theme.mediaQueries.large}{
		padding-bottom : 2rem;
	}`}
`;
const QuestionOrder = styled.span`
	font-size: 10px;
	font-weight: bold;
	${({ theme }) => `${theme.mediaQueries.large}{
		font-size : 20px;
	}`}
`;

const QuestionPoints = styled.span`
	font-size: 8px;
	font-weight: bold;
	display: flex;
	align-items: center;
	${({ theme }) => `${theme.mediaQueries.large}{
		font-size : 16px;
	}`}
`;

const NavigationButton = styled(FlexLayout).attrs((p) => ({
	dir: document.documentElement.dir,
}))`
	color: ${(props) => props.theme.colors.primary};
	cursor: pointer;
	transition: opacity ease-in-out 300ms;
	&[dir='rtl'] {
		svg {
			transform: rotate(180deg);
		}
	}
	&:hover {
		opacity: 0.8;
	}
`;
const Points = styled(Typography)`
	color: ${(props) => props.theme.colors.silver};
`;

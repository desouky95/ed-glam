import * as React from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
type Props = Omit<React.HTMLProps<HTMLTextAreaElement>, 'ref' | 'as'> & {
	textChangeDelay?: number;
};
const TextAnswer: React.VoidFunctionComponent<Props> = ({
	value,
	onChange,
	textChangeDelay = 2000,
	...props
}) => {
	const [innerValue, setInnerValue] = React.useState(value);
	const [innerEvent, setInnerEvent] = React.useState<
		React.ChangeEvent<HTMLTextAreaElement> | undefined
	>();
	React.useEffect(() => {
		const debounced = debounce(handleOnChange, textChangeDelay);
		debounced();
		return () => {
			debounced.cancel();
		};
	}, [innerValue]);

	const handleOnChange = () => {
		console.log('DEBOUNCE');
		innerEvent && onChange?.(innerEvent);
	};
	const handleDebounceOnChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setInnerEvent(e);
		setInnerValue(e.target.value);
	};

	return (
		<TextArea onChange={handleDebounceOnChange} value={innerValue} {...props} />
	);
};

export default TextAnswer;

const TextArea = styled.textarea`
	/* border: 1px solid #d8d8df; */
	padding: 0.5rem;
	outline: none;
	position: relative;
	border-radius: 5px;
	box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16);
	border: solid 1px #c4c4c4;
	min-height: 8.438rem;
	resize: vertical;
	margin-bottom: 4.063rem;
	::-webkit-input-placeholder {
		font-style: italic;
		color: #adadad;
		font-size: 0.75rem;
	}
	&::before {
		box-sizing: border-box;
		content: '';
		display: block;
		position: absolute;
		pointer-events: none;
		inset: 0px;
		z-index: 1;
		border-radius: inherit;
	}
	&:focus {
		::before {
			background: red;
			box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.primary};
		}
	}
`;

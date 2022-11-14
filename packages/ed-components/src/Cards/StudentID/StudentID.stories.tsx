import { FlexLayout, Typography } from '@eduact/ed-system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import StudentID from './StudentID';
import StudentQRCode from './StudentQRCode';

export default {
	title: 'Cards/StudentID',
	component: StudentID,
	args: {
		title: 'Student ID',
		userInfo: {
			first_name: 'Mariam',
			last_name: 'Walid',
			username: 'يح580573',
			email: 'mariam.w@gmail.com',
			phone: '01156596754',
		},
		educationalInfo: {},
		scale: 1,
	},
	argTypes: {
		scale: {
			control: {
				type: 'number',
			},
		},
	},
} as ComponentMeta<typeof StudentID>;

export const StudentIDCard: ComponentStory<typeof StudentID> = (args) => {
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<Scene isFlipped={isFlipped}>
			<div className="scene">
				<div className="card">
					<div className="card__face" onClick={() => setIsFlipped(!isFlipped)}>
						<StudentID {...args} />
					</div>
					<div
						className="card__face card__face--back"
						onClick={() => setIsFlipped(!isFlipped)}
					>
						<StudentQRCode {...args} />
					</div>
				</div>
			</div>
		</Scene>
	);
};

const Scene = styled.div<{ isFlipped: boolean }>`
	.scene {
		width: 400px;
		/* height: 260px; */
		perspective: 600px;
	}
	.card {
		width: 100%;
		height: 100%;
		position: relative;
		transition: transform 1s;
		transform-style: preserve-3d;
		display: flex;
		transform: ${(props) => props.isFlipped && 'rotateY(180deg)'};
	}

	.card__face {
		position: absolute;
		height: 100%;
		width: 100%;
		backface-visibility: hidden;
	}
	.card__face--front {
		background: red;
	}

	.card__face--back {
		background: blue;
		transform: rotateY(180deg);
	}
	.card.is-flipped {
	}
`;

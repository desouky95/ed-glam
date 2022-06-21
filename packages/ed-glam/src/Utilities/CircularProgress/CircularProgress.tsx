import { Color,MediaQuery } from '@eduact/student-theme'
import { cssVar, stripUnit } from 'polished'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

type Props = {
	percent: number
	color?: Color
	label?: React.ReactNode
	size?: MediaQuery
}
const ProgressStatus: React.FC<Props> = ({ percent, color = 'primary', label, size = 'small' }) => {
	const [fillValue, setFillValue] = useState(0)

	useEffect(() => {
		let value = 0
		if (percent < 0) value = 0
		if (percent > 100) value = 100
		var pct = ((100 - Number(percent)) / 100) * 2 * Math.PI * 23
		setFillValue(pct)
	}, [])
	return (
		<ProgressStatusWrapper color={color} size={size}>
			<ProgressPercentWrapper>
				<svg
					id="svg"
					// width="46"
					// height="46"
					//   viewPort="0 0 100 100"
					viewTarget="0 0 100 100"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						// r="20"
						// cx="23"
						// cy="23"
						fill="transparent"
						stroke="#C4C4C4"
						strokeWidth="3px"
						strokeDasharray="144.44"
						strokeDashoffset="0"
					></circle>
					<circle
						id="progress-ind"
						// r=""
						// cx="20"
						// cy="20"
						fill="transparent"
						strokeDasharray="144.44"
						strokeDashoffset={fillValue}
						strokeWidth="3px"
					></circle>
				</svg>
				{<PercentLabel> {label ?? <>{percent}%</>}</PercentLabel>}
			</ProgressPercentWrapper>
			{/* <ProgressStatusName>{completion_status_formatted}</ProgressStatusName> */}
		</ProgressStatusWrapper>
	)
}

export default ProgressStatus

export const PercentLabel = styled.label`
	position: absolute;
	font-family: 'AvantGarde';
	width: fit-content;
	/* font-size: 0.75rem; */
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`
const ProgressStatusWrapper = styled.div<{ color?: Color; size: MediaQuery }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	--rValue: ${props => props.theme.circularProgressSizes[props.size]?.width ?? ''};
	circle#progress-ind {
		${variant({ prop: 'color', scale: 'circularProgressColors' })};
		transform-box: fill-box;
		transform-origin: center;
		transform: rotateZ(-95deg);
		/* stroke : #000; */
	}
	svg#svg {
		${variant({ prop: 'size', scale: 'circularProgressSizes' })}
	}
	circle {
		${variant({ prop: 'size', scale: 'circularProgressSizes' })}
		cx: calc(var(--rValue)/2);
		cy: calc(var(--rValue) / 2);
		/* r: 18; */
	}
	${PercentLabel} {
		${variant({ prop: 'size', scale: 'circularProgressSizes' })}
		width: fit-content;
		height: fit-content;
	}
`
const ProgressPercentWrapper = styled.div`
	position: relative;
	width: fit-content;
`

const ProgressStatusName = styled.label`
	font-size: 0.75rem;
	font-weight: 700;
`

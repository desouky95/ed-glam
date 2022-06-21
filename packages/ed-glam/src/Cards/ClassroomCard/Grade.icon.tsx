import React from 'react'

type Props = {
	fillColor?: string
}

const GradeIcon: React.FC<Props> = ({ fillColor }) => {
	return (
		<svg width="22" height="13" fill={fillColor ?? 'none'} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16.94.78C16.523.306 15.828 0 15.053 0L2.316.01C1.042.01 0 .835 0 1.856v9.286c0 1.021 1.042 1.848 2.316 1.848L15.053 13c.775 0 1.47-.306 1.887-.78L22 6.5 16.94.78z"
				fill={fillColor ?? '#65617D'}
			/>
		</svg>
	)
}

export default GradeIcon

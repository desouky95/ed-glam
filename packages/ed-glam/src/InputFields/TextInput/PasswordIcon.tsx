import React from 'react'
import styled, { css } from 'styled-components'
import { IoMdEyeOff, IoMdEye } from 'react-icons/io'

interface Props {
	show: boolean
	clickEvent: () => void
}

const ShowPasswordIcon: React.FC<Props> = ({ show = false, clickEvent }) => {
	return show ? <ShowEyeIcon onClick={clickEvent} /> : <HideEyeIcon onClick={clickEvent} />
}

const EyeIconCss = css`
	width: 16px;
	height: 16px;
	color: #cccccc;
	margin: 0 4px;

	:hover {
		cursor: pointer;
	}
`

const HideEyeIcon = styled(IoMdEyeOff)`
	${EyeIconCss}
`

const ShowEyeIcon = styled(IoMdEye)`
	${EyeIconCss}
`

export default ShowPasswordIcon

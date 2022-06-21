import { rgba } from 'polished'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { LayoutProps } from 'styled-system'
import { ModalToggleIcon } from './Assets/Icons'
import { StyledModalContent, ToggleWrapper, Wrapper } from './Modal.styled'

type ModalContentProps = {
	onClose: () => void
} & LayoutProps
const ModalContent: React.FC<ModalContentProps> = ({ children, onClose, ...props }) => {
	return (
		<StyledModalContent {...props}>
			<ToggleWrapper onClick={() => onClose && onClose()}>
				<ModalToggleIcon />
			</ToggleWrapper>
			{children}
		</StyledModalContent>
	)
}

interface ModalComposition {
	Content: React.FunctionComponent<ModalContentProps>
}

type Props = {
	modalOpen: boolean
	parent?: any
}
const Modal: React.FC<Props> & ModalComposition = ({ modalOpen, children, parent, ...props }) => {
	if (!modalOpen) {
		window.document.documentElement.style.overflow = ''
		return null
	}
	if (modalOpen && !parent) {
		window.document.documentElement.style.overflow = 'hidden'
	}
	return createPortal(
		<Wrapper hasParent={parent ? true : false}>
			<>{children}</>
		</Wrapper>,
		parent?.current ?? document.body
	)
}

Modal.Content = ModalContent
export default Modal

import styled from 'styled-components'
import { Color } from '@eduact/student-theme'
import { variant } from 'styled-system'
import SingleLineCssTrim from '@Styles/SingleLineCssTrim'

export const Invoice = styled.div`
	margin: 20px 13px;
	width: 345px;

	@media (max-width: 425px) {
		width: 80%;
	}

	@media (max-width: 395px) {
		min-width: 100%;
	}
`

export const ReferenceNumberLabel = styled.p`
	font-size: 14px;
	font-weight: normal;
	color: white;
`

export const ReferenceNumber = styled.p`
	margin-top: 10px;
	padding: 0 8px;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 0.14px;
	color: ${props => props.theme.colors.maxBluePurple};
	${SingleLineCssTrim};
`

export const InvoiceHeader = styled.div<{ variant: Color }>`
	${variant({ scale: 'buttonColors' })};
	color: white;
	height: 70px;
	border: none;
	border-radius: 60px 60px 0 0;
	text-align: center;
	padding-top: 16px;
`

export const InvoiceContent = styled.div`
	height: 190px;
	border-radius: 0 0 30px 30px;
	padding: 20px 10px 15px 30px;
	box-shadow: 1px 4px 16px #bdbcbc;

	@media (max-width: 380px) {
		height: auto;
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	height: 30%;

	@media (max-width: 380px) {
		flex-direction: column;
		align-items: center;
	}
`

export const Col = styled.div`
	width: 40%;

	@media (max-width: 380px) {
		margin: 10px 0;
		width: 100%;
	}
`

export const InvoiceLabel = styled.p`
	color: #979797;
	font-size: 12px;
	margin-bottom: 3px;

	@media (max-width: 380px) {
		font-size: 16px;
	}
`

export const InvoiceValue = styled.p<{ highlighted?: boolean }>`
	font-size: 12px;
	font-weight: normal;
	color: ${props => (props.highlighted ? '#2a9d8f' : 'black')};
	margin-top: 6px;

	@media (max-width: 380px) {
		font-size: 20px;
	}
`

import React from 'react'
import { Color } from '@eduact/student-theme'
import {
	Invoice,
	InvoiceHeader,
	ReferenceNumberLabel,
	ReferenceNumber,
	InvoiceContent,
	Container,
	Row,
	Col,
	InvoiceLabel,
	InvoiceValue,
} from './InvoiceCard.styled'
import { useTranslation } from 'react-i18next'

export type InvoiceCardProps = {
	invoiceReferenceNumber: string
	date: string
	amount: string
	type: string
	provider: string
	status: string
	providerReference: string
	headerColor?: Color
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({
	invoiceReferenceNumber,
	date,
	amount,
	type,
	provider,
	status,
	providerReference,
	headerColor = 'independence',
}) => {
	const [t] = useTranslation('dashboard')
	return (
		<Invoice>
			<InvoiceHeader variant={headerColor}>
				<ReferenceNumberLabel>{t('invoice_id')}</ReferenceNumberLabel>
				<ReferenceNumber>#{invoiceReferenceNumber}</ReferenceNumber>
			</InvoiceHeader>
			<InvoiceContent>
				<Container>
					<Row>
						<Col>
							<InvoiceLabel>{t('invoice_date')}</InvoiceLabel>
							<InvoiceValue>{date}</InvoiceValue>
						</Col>
						<Col>
							<InvoiceLabel>{t('amount')}</InvoiceLabel>
							<InvoiceValue>{amount} L.E</InvoiceValue>
						</Col>
					</Row>

					<Row>
						<Col>
							<InvoiceLabel>{t('type')}</InvoiceLabel>
							<InvoiceValue>{type}</InvoiceValue>
						</Col>
						<Col>
							<InvoiceLabel>{t('status')}</InvoiceLabel>
							<InvoiceValue highlighted>{status}</InvoiceValue>
						</Col>
					</Row>

					<Row>
						<Col>
							<InvoiceLabel>{t('method')}</InvoiceLabel>
							<InvoiceValue>{provider}</InvoiceValue>
						</Col>
						<Col>
							<InvoiceLabel>{t('reference_no')}</InvoiceLabel>
							<InvoiceValue>{providerReference}</InvoiceValue>
						</Col>
					</Row>
				</Container>
			</InvoiceContent>
		</Invoice>
	)
}

export default InvoiceCard

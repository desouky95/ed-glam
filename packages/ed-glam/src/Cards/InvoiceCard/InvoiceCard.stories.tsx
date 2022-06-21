import { Meta, Story } from '@storybook/react'
import InvoiceCard, { InvoiceCardProps } from '@Components/Cards/InvoiceCard/InvoiceCard'

const meta: Meta = {
	title: 'Cards/InvoiceCards',
	component: InvoiceCard,
}
export default meta

const Template: Story<InvoiceCardProps> = args => <InvoiceCard {...args} />

export const Default = Template.bind({})
Default.args = {
	invoiceReferenceNumber: '2343239293',
	date: '21-4-2021',
	amount: '500',
	type: 'Fawry',
	provider: 'Fawry pay',
	status: 'Fulfilled',
	providerReference: '#2282822',
}

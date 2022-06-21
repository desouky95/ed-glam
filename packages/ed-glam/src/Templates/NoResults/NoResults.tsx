import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { NoResultsImage } from './Assets/Images'

type Props = {
	querySearchKey: string
}
const NoResults: React.FC<Props> = ({ querySearchKey }) => {
	const [t] = useTranslation('search')
	const history = useNavigate()
	return (
		<NoResultsWrapper>
			<img alt="no results" src={NoResultsImage} />
			<NoResultsBody>
				<NoResultsTitle>
					{t('no_results_found')} {querySearchKey}
				</NoResultsTitle>
				<NoResultsFallback>
					<Trans i18nKey="combined" ns="search" components={{ strong: <ExploreLink onClick={() => history('/')} /> }} />
				</NoResultsFallback>
			</NoResultsBody>
		</NoResultsWrapper>
	)
}

export default NoResults

const NoResultsWrapper = styled.div`
	/* min-height: 85vh; */
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 26px;
`
const NoResultsBody = styled.div`
	display: grid;
`
const NoResultsTitle = styled.label`
	color: ${props => props.theme.colors.princetonOrange};
	margin-bottom: 1rem;
	font-size: 1rem;
`
const NoResultsFallback = styled.label`
	font-size: 1rem;
`
const ExploreLink = styled.a`
	text-decoration: underline;
	cursor: pointer;
	color: ${props => props.theme.colors.maxBluePurple};
`

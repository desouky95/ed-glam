import {
	Badge,
	StyledClassroomCard,
	StyledClassroomImage,
	CardBody,
	CardButton,
	InfoWrapper,
} from '@Components/Cards/ClassroomCard/ClassroomCard.styled'
import React from 'react'
import styled from 'styled-components'
import { SkeletonLoadingAnimation } from '../Skeleton.styled'
import SkeletonTitle from './SkeletonTitle'

const SkeletonCard: React.FC = ({ ...props }) => {
	return (
		<StyledClassroomCard {...props}>
			<StyledClassroomImageSkeleton />
			<CardBody>
				<SkeletonTitle marginBottom="0.5rem" height={'1rem'} width="5rem" />
				<SkeletonTitle height={'.5rem'} width="3rem" />
				<InfoWrapper>
					<SkeletonTitle height={'1rem'} width="4rem" />
				</InfoWrapper>
			</CardBody>
			<CardButton variant="cultured">
				<SkeletonTitle mx={'-6px'} height={'110%'} width="110%" maxWidth="unset" />
			</CardButton>
		</StyledClassroomCard>
	)
}

export default SkeletonCard

const StyledClassroomImageSkeleton = styled(StyledClassroomImage).attrs({
	as: 'div',
})`
    position : relative;
    overflow : hidden;
	background: ${({ theme: { colors } }) => colors.platinum}};
	::before {
		content: '';
		position: absolute;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
		width: 50%;
		height: 100%;
		top: 0;
		left: 0;
		animation: ${SkeletonLoadingAnimation} 2s infinite;
	}
`

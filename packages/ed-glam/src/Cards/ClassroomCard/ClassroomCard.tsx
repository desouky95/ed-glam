import React from 'react'
import GradeIcon from '@Components/Cards/ClassroomCard/Grade.icon'
import { Color } from '@eduact/student-theme'
import { SpaceProps } from 'styled-system'
import {
	StyledClassroomCard,
	StyledClassroomImage,
	Badge,
	CardBody,
	Title,
	Instructor,
	InfoWrapper,
	GradeWrapper,
	Grade,
	SubjectWrapper,
	SubjectImage,
	Subject,
	CardButton,
} from './ClassroomCard.styled'
import { LayoutProps } from 'styled-system'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export type ClassroomCardProps = {
	title: string
	instructor: string
	badgeLabel: string
	grade: string
	subject: string
	thumbnail: string | null
	subjectImage: string | null
	buttonBackgroundColor?: Color
	classroom: Classroom
	onClick?: React.MouseEventHandler
} & LayoutProps &
	SpaceProps

const ClassroomCard: React.FC<ClassroomCardProps> = ({
	buttonBackgroundColor,
	instructor,
	title,
	badgeLabel,
	grade,
	subject,
	thumbnail,
	subjectImage,
	classroom,
	onClick,
	...props
}) => {
	const history = useNavigate()
	const getActionButtonColor = (): Color => {
		if (classroom.status === 'open') {
			if (classroom.enrolled && classroom.enrolled.length > 0) return 'purple'
			return 'primary'
		} else if (classroom.status === 'closed') return 'silver'
		else return 'purpleNavy'
	}
	const [t] = useTranslation('educational_info')
	return (
		<StyledClassroomCard
			onClick={e => {
				if (!onClick) {
					e.stopPropagation()
					history(`/classroom/${classroom.label}`)
				} else {
					onClick(e)
				}
			}}
			{...props}
		>
			<StyledClassroomImage src={thumbnail ?? ''} />
			<Badge>{badgeLabel}</Badge>
			<CardBody>
				<Title>{title}</Title>
				<Instructor>{instructor}</Instructor>
				<InfoWrapper>
					<GradeWrapper>
						<GradeIcon />
						<Grade>{t(`academic_year.${grade}`)}</Grade>
					</GradeWrapper>
					<SubjectWrapper>
						<SubjectImage src={subjectImage ?? ''} />
						<Subject>{subject}</Subject>
					</SubjectWrapper>
				</InfoWrapper>
			</CardBody>
			<CardButton variant={buttonBackgroundColor ?? getActionButtonColor()}>View</CardButton>
		</StyledClassroomCard>
	)
}

export default ClassroomCard

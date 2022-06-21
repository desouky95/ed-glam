import styled from 'styled-components'
import { Color } from '@eduact/student-theme'
import { variant, space, SpaceProps, layout, LayoutProps } from 'styled-system'
import SingleLineCssTrim from '@Styles/SingleLineCssTrim'

export const StyledClassroomCard = styled.div<SpaceProps & LayoutProps>`
	${space};
	position: relative;
	width: 264px;
	height: 314px;
	background-color: ${props => props.theme.colors.light};
	overflow: hidden; // to hide extending image sharp borders
	border-radius: 24px 24px 60px 60px;
	box-shadow: 6px 6px 12px 0 #dcdcdc, -5px -5px 12px 0 #dcdcdc, inset 0 0 3px 0 #dcdcdc;
	cursor: pointer;

	@media (max-width: 425px) {
		width: 214px;
	}
	${layout}
	img {
		width: ${props => (props.width ? '100%' : '')};
	}
`

export const StyledClassroomImage = styled.img`
	text-align: left;
	width: 264px;
	height: 165px;
	object-fit: fill;
`

export const Badge = styled.p`
	position: absolute;
	right: 0;
	top: 20px;
	padding: 4px 8px 4px 13px;
	background-color: black;
	color: white;
	border-radius: 10px 0 0 10px;
	font-size: 15px;
	font-weight: bold;
`

export const CardBody = styled.div`
	position: relative;
	width: 100%;
	height: 108px;
	padding: 10px 8px 14px 16px;
`

export const Title = styled.p`
	font-size: 14px;
	height: 28px;
	font-weight: bold;
	letter-spacing: 0.14px;
	word-break: break-word;
	line-height: 18px;
	max-height: 26px;
	${SingleLineCssTrim};
`

export const Instructor = styled.p`
	font-size: 12px;
	letter-spacing: 0.14px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-height: 26px;
`

export const InfoWrapper = styled.div`
	position: absolute;
	bottom: 4px;
	display: flex;
	width: 90%;
	justify-content: space-between;
`

export const GradeWrapper = styled.div`
	display: flex;
`

export const Grade = styled.p`
	position: relative;
	font-size: 12px;
	font-weight: 600;
	color: #65617d;
	margin: 0 4px;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover {
		overflow: visible;
	}
`

export const SubjectWrapper = styled.div`
	position: relative;
	top: -8px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Subject = styled.p`
	font-size: 8px;
	letter-spacing: 0.14px;
	color: #65617d;
`

export const SubjectImage = styled.img`
	width: 16px;
	height: 16px;
	color: #65617d;
`

export const CardButton = styled.button<{ variant: Color }>`
	${variant({ scale: 'buttonColors' })};
	border: none;
	width: 100%;
	height: 50px;
	color: white;
	font-size: 14px;
	font-weight: bold;
	padding-bottom: 10px;
	cursor: pointer;
`

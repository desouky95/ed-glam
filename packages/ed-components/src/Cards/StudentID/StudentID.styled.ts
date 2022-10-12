import styled from 'styled-components';
import { MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import bgImage from './Assets/card_bg.jpg';
import { rgba } from 'polished';
import { layout, LayoutProps } from 'styled-system';
import { Avatar } from '@src/Avatar';
export const StyledOuterContainer = styled.div<
	{
		scale: number;
		withShadow: boolean;
	} & LayoutProps
>`
	font-size: ${(props) => `${props.scale}rem`};
	/* width: fit-content; */
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	position: relative;
	min-width: ${(props) => props.scale * 405}px;
	min-height: ${(props) => props.scale * 254}px;
	box-shadow: ${({ withShadow }) =>
		withShadow &&
		'rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px'};
	${({ theme }) => `${theme.mediaQueries.large}{
       //width: 25.125rem;
    //    height: 239px;
    }`}
	${layout}
`;
export const StyledEDCardIcon = styled.img`
	width: 20px;
	height: 25px;
	${({ theme }) => `${theme.mediaQueries.large}{
      width: 26.8px;
      height: 29px;
    }`}
`;
export const StyledCardHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #5ac0fc;
	color: #fff;
	padding: 0 1.25rem;
	position: relative;
	z-index: 2;
`;
export const StyledStudentIDText = styled.div`
	font-size: 1.125em;
	font-weight: 600;
	margin: 0.625rem 0;
	${({ theme }) => `${theme.mediaQueries.large}{
     font-size: 1.375rem;
     font-weight: bold;
    }`}
`;
export const StyledBodyOuterContainer = styled.div`
	position: relative;
	flex: 1;
	background: url(${bgImage}), ${rgba('#5AC0FC', 0.1)};
`;
export const StyledBodyInnerContainer = styled.div`
	padding: 0.5rem 1.125rem;
`;
export const StyledBodyContentContainer = styled.div`
	display: flex;
	gap: 1.5em;
	margin-bottom: 1em;
`;
export const StyledAvatar = styled(Avatar)`
	width: 6.25em;
	min-width: 6.25em;
	height: 6.25em;
	min-height: 6.25em;
`;
export const StyledBodyContentInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.375em 0;
	padding-inline-end: 4em;
`;
export const StyledProfilePhoto = styled.img`
	width: 94px;
	height: 107px;
	object-fit: contain;
	z-index: 9999;
	position: relative;
	${({ theme }) => `${theme.mediaQueries.large}{
      width: 114px;
      height: 113px;
    }`}
`;
export const StyledNameText = styled.div`
	font-weight: 500;
	font-size: 1em;
`;
export const StyledUserNameText = styled.div`
	font-size: 0.625em;
`;
export const StyledContactText = styled.div`
	font-size: 0.875em;
	color: #2196f3;
	a {
		text-decoration: none;
	}
	font-weight: 600;
`;
export const StyledPhoneText = styled(StyledContactText)``;
export const StyledPhoneIcon = styled(MdOutlinePhone)``;
export const StyledEmail = styled(StyledContactText)`
	text-decoration: underline;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const StyledEmailIcon = styled(MdOutlineMail)`
	position: relative;
`;
export const StyledUserContact = styled.div`
	grid-gap: 0.313rem;
	display: flex;
	svg {
		color: gray;
	}
`;
export const StyledFooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const StyledFooterInnerContainer = styled.div`
	display: grid;
	font-size: 0.625em;
	grid-row-gap: 5px;
`;
export const StyledDataFooterText = styled.div`
	font-weight: 500;
`;
export const StyledQRContainer = styled.div`
	background-color: white;
	z-index: 3;
`;

export const StyledBackgroundImage = styled.img`
	position: absolute;
	bottom: 48px;
	z-index: 1;
	width: 460px;
`;

export const StyledFooterInfo = styled.div`
	display: grid;
	/* grid-template-columns: 60px 130px; */
	grid-template-columns: repeat(2, 1fr);
`;

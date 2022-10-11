import styled from 'styled-components';
import { MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import bgImage from './Assets/card_bg.jpg';
import { rgba } from 'polished';
export const StyledOuterContainer = styled.div`
	width: 266px;
	/* height: 250px; */
	border-radius: 10px;
	/* margin-top: 20px; */
	overflow: hidden;
	position: relative;
	box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0 8px 16px -8px;
	${({ theme }) => `${theme.mediaQueries.large}{
       width: 402px;
    //    height: 239px;
    }`}
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
	padding: 0 20px;
	position: relative;
	z-index: 2;
`;
export const StyledStudentIDText = styled.div`
	font-size: 18px;
	font-weight: 600;
	margin: 10px 0;
	${({ theme }) => `${theme.mediaQueries.large}{
     font-size: 22px;
     font-weight: bold;
    }`}
`;
export const StyledBodyOuterContainer = styled.div`
	position: relative;
	background: url(${bgImage}), ${rgba('#5AC0FC', 0.1)};
	/* height: 280px; */
	/* width: 460px; */
`;
export const StyledBodyInnerContainer = styled.div`
	/* position: absolute; */
	padding: 0.5rem 1.125rem;
	/* padding: 10px 12.5px; */
	/* width: 90%; */
`;
export const StyledBodyContentContainer = styled.div`
	display: flex;
	gap: 1.5rem;
	margin-bottom: 1rem;
`;
export const StyledBodyContentInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 6px 0;
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
	/* margin-bottom: 3.5px; */
	/* margin-top: 4px; */
	font-weight: 500;
	/* font-size: 10px; */
`;
export const StyledUserNameText = styled.div`
	/* margin-bottom: 3.5px; */
	font-size: 0.625rem;
	/* font-size: 10px; */
`;
export const StyledContactText = styled.div`
	font-size: 0.875rem;
	color: #2196f3;
	a {
		text-decoration: none;
	}
	font-weight: 600;
`;
export const StyledPhoneText = styled(StyledContactText)``;
export const StyledPhoneIcon = styled(MdOutlinePhone)`
	/* color: gray; */
	/* position: relative; */
	/* margin-right: 2px; */
`;
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
	grid-gap: 5px;
	display: flex;
	svg {
		color: gray;
	}
`;
export const StyledFooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* padding: 16px 0; */
`;
export const StyledFooterInnerContainer = styled.div`
	display: grid;
	font-size: 10px;
	grid-row-gap: 5px;
	/* grid-template-rows: repeat(3, 1fr); */
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
	grid-template-columns: 60px 130px;
`;

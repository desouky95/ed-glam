import { FlexLayout, Typography } from '@eduact/ed-system';
import { Avatar } from '@src/Avatar';
import Spacer from '@src/Spacer';
import { userInfo } from 'os';
import { title } from 'process';
import React from 'react';
import { MdOutlinePhone, MdOutlineMail } from 'react-icons/md';
import QRCode from 'react-qr-code';
import {
	StyledOuterContainer,
	StyledCardHeaderContainer,
	StyledStudentIDText,
	StyledEDCardIcon,
	StyledBodyOuterContainer,
	StyledBodyInnerContainer,
	StyledBodyContentContainer,
	StyledBodyContentInnerContainer,
	StyledNameText,
	StyledUserNameText,
	StyledUserContact,
	StyledPhoneText,
	StyledEmail,
	StyledFooterContainer,
	StyledFooterInnerContainer,
	StyledFooterInfo,
	StyledDataFooterText,
	StyledQRContainer,
} from './StudentID.styled';
import { StudentCardProps } from './StudentID.types';
import EduactCardIcon from './Assets/eduact-card-icon.svg';
import { LayoutProps } from 'styled-system';

type StudentQRCodeProps = {
	title?: string;
	usernameTitle?: string;
	diplomaTitle?: string;
	yearTitle?: string;
	languageTitle?: string;
	sectionTitle?: string;
	userInfo?: {
		first_name?: string;
		last_name?: string;
		username?: string;
		phone?: string;
		email?: string;
	};
	educationalInfo?: {
		diploma?: string;
		year?: string;
		language?: string;
		section?: string;
	};
} & StudentCardProps;
const StudentQRCode: React.VoidFunctionComponent<StudentQRCodeProps> = ({
	withShadow = true,
	scale = 1,
	userInfo,
	title,
	...props
}) => {
	return (
		<StyledOuterContainer withShadow={withShadow} scale={scale} {...props}>
			{/*  student card header  */}
			<StyledCardHeaderContainer>
				<StyledStudentIDText>
					{title !== '' || title ? title : 'Student ID'}
				</StyledStudentIDText>

				<StyledEDCardIcon src={EduactCardIcon} alt="eduact icon" />
			</StyledCardHeaderContainer>

			{/* card body, wrapper for absolute bg and content  */}
			<StyledBodyOuterContainer>
				{/*  card body content  */}
				<StyledBodyInnerContainer>
					{/* card footer  */}
					<FlexLayout justifyContent={'center'}>
						{/*  qr code  */}
						{userInfo && userInfo.username && (
							<StyledQRContainer>
								<QRCode
									size={200 * scale}
									additive={'sum'}
									accentHeight={'30px'}
									bgColor={'transparent'}
									value={userInfo?.username}
								/>
							</StyledQRContainer>
						)}
					</FlexLayout>
				</StyledBodyInnerContainer>

				{/*  student card background image  */}
				{/* <StyledBackgroundImage src={EduactCardBg} alt="card-bg" style={{}} /> */}
			</StyledBodyOuterContainer>
		</StyledOuterContainer>
	);
};

export default StudentQRCode;

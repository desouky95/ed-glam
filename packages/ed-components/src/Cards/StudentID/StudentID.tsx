import React from 'react';
import {
	StyledBackgroundImage,
	StyledBodyContentContainer,
	StyledBodyContentInnerContainer,
	StyledBodyInnerContainer,
	StyledBodyOuterContainer,
	StyledCardHeaderContainer,
	StyledDataFooterText,
	StyledEDCardIcon,
	StyledEmail,
	StyledEmailIcon,
	StyledFooterContainer,
	StyledFooterInnerContainer,
	StyledNameText,
	StyledOuterContainer,
	StyledPhoneIcon,
	StyledPhoneText,
	StyledQRContainer,
	StyledStudentIDText,
	StyledUserContact,
	StyledUserNameText,
} from './StudentID.styled';
import EduactCardIcon from './Assets/eduact-card-icon.svg';
import EduactCardBg from './Assets/card_bg.jpg';
import QRCode from 'react-qr-code';
import { Avatar } from '@src/Avatar';
import { FlexLayout, Typography } from '@eduact/ed-system';
import Spacer from '@src/Spacer';
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';

export type StudentIDProps = {
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
};
const StudentID: React.VoidFunctionComponent<StudentIDProps> = ({
	educationalInfo,
	userInfo,
	title,
	diplomaTitle,
	languageTitle,
	sectionTitle,
	usernameTitle,
	yearTitle,
}) => {
	return (
		<StyledOuterContainer>
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
					<StyledBodyContentContainer>
						<Avatar shape="square" background="light" avatarSize={'xlarge'}>
							<FlexLayout
								alignItems={'center'}
								justifyContent={'center'}
								width={'100%'}
								height={'100%'}
							>
								<>
									{userInfo?.first_name?.[0]}
									{userInfo?.last_name?.[0]}
								</>
							</FlexLayout>
						</Avatar>
						<StyledBodyContentInnerContainer>
							<div>
								{userInfo?.first_name && (
									<>
										<StyledNameText>{`${userInfo?.first_name} ${userInfo?.last_name}`}</StyledNameText>
										<Spacer mb={2} />
									</>
								)}
								{userInfo?.username && (
									<StyledUserNameText>
										{usernameTitle ?? 'username'}:{' '}
										<Typography fontWeight={500}>
											{userInfo?.username}
										</Typography>
									</StyledUserNameText>
								)}
								<Spacer mb={'1.375rem'} />
							</div>

							<div>
								{userInfo?.phone && (
									<StyledUserContact>
										<MdOutlinePhone size={'1rem'} />
										<a href={`tel:${userInfo?.phone}`}>
											<StyledPhoneText>{userInfo?.phone}</StyledPhoneText>
										</a>
									</StyledUserContact>
								)}
								{userInfo?.email && (
									<StyledUserContact>
										<MdOutlineMail size={'1rem'} />
										<a href={`mailto: ${userInfo?.email}`}>
											<StyledEmail>{userInfo?.email}</StyledEmail>
										</a>
									</StyledUserContact>
								)}
							</div>
						</StyledBodyContentInnerContainer>
					</StyledBodyContentContainer>
					{/* card footer  */}
					<StyledFooterContainer>
						<StyledFooterInnerContainer>
							{educationalInfo?.diploma && (
								<>
									<div>{diplomaTitle ?? 'Diploma'} :</div>
									<StyledDataFooterText>
										{educationalInfo?.diploma}
									</StyledDataFooterText>
								</>
							)}
							{educationalInfo?.year && (
								<>
									<div> {yearTitle ?? 'Year'}:</div>
									<StyledDataFooterText>
										{educationalInfo?.year}
									</StyledDataFooterText>
								</>
							)}
							{educationalInfo?.year && (
								<>
									<div>{languageTitle ?? 'Language'}:</div>
									<StyledDataFooterText>
										{educationalInfo?.language}
									</StyledDataFooterText>
								</>
							)}
							{educationalInfo?.section && (
								<>
									<div>{sectionTitle ?? 'Branch'}:</div>
									<StyledDataFooterText>
										{educationalInfo?.section}
									</StyledDataFooterText>
								</>
							)}
						</StyledFooterInnerContainer>

						{/*  qr code  */}
						{userInfo && userInfo.username && (
							<StyledQRContainer>
								<QRCode
									size={72}
									bgColor={'transparent'}
									value={userInfo?.username}
								/>
							</StyledQRContainer>
						)}
					</StyledFooterContainer>
				</StyledBodyInnerContainer>

				{/*  student card background image  */}
				{/* <StyledBackgroundImage src={EduactCardBg} alt="card-bg" style={{}} /> */}
			</StyledBodyOuterContainer>
		</StyledOuterContainer>
	);
};

export default StudentID;

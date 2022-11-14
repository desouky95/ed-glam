import React from 'react';
import {
	StyledAvatar,
	StyledBodyContentContainer,
	StyledBodyContentInnerContainer,
	StyledBodyInnerContainer,
	StyledBodyOuterContainer,
	StyledCardHeaderContainer,
	StyledDataFooterText,
	StyledEDCardIcon,
	StyledEmail,
	StyledFooterContainer,
	StyledFooterInfo,
	StyledFooterInnerContainer,
	StyledNameText,
	StyledOuterContainer,
	StyledPhoneText,
	StyledQRContainer,
	StyledStudentIDText,
	StyledUserContact,
	StyledUserNameText,
} from './StudentID.styled';
import EduactCardIcon from './Assets/eduact-card-icon.svg';
import EduactCardBg from './Assets/card_bg.jpg';
// import QRCode from 'react-qr-code';
import {
	FlexLayout,
	Typography,
	useScreenSize,
	useThemeScreenSize,
} from '@eduact/ed-system';

import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md';
import { StudentCardProps } from './StudentID.types';
import Spacer from '../..//Spacer';
import QRCode from '@src/DataDisplay/QRCode';

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
	onQRCodeClick?: () => void;
} & StudentCardProps;
const StudentID: React.VoidFunctionComponent<StudentIDProps> = ({
	educationalInfo,
	userInfo,
	title,
	diplomaTitle,
	languageTitle,
	sectionTitle,
	usernameTitle,
	yearTitle,
	scale = 1,
	withShadow = true,
	onQRCodeClick,
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
					<StyledBodyContentContainer>
						<StyledAvatar
							shape="square"
							background="light"
							avatarSize={'xlarge'}
						>
							<FlexLayout
								alignItems={'center'}
								justifyContent={'center'}
								width={'100%'}
								height={'100%'}
							>
								<Typography fontSize={'1em'}>
									{userInfo?.first_name?.[0]}
									{userInfo?.last_name?.[0]}
								</Typography>
							</FlexLayout>
						</StyledAvatar>
						<StyledBodyContentInnerContainer>
							<div>
								<>
									<StyledNameText>{`${userInfo?.first_name} ${userInfo?.last_name}`}</StyledNameText>
									<Spacer mb={2} />
								</>
								<StyledUserNameText>
									{usernameTitle ?? 'username'}:{' '}
									{userInfo?.username && (
										<Typography fontWeight={500}>
											{userInfo?.username}
										</Typography>
									)}
								</StyledUserNameText>
								<Spacer mb={'1.375rem'} />
							</div>

							<div>
								<StyledUserContact>
									<MdOutlinePhone size={'1em'} />
									{userInfo?.phone && (
										<a href={`tel:${userInfo?.phone}`}>
											<StyledPhoneText>{userInfo?.phone}</StyledPhoneText>
										</a>
									)}
								</StyledUserContact>
								<StyledUserContact>
									<MdOutlineMail size={'1em'} />
									{userInfo?.email && (
										<a href={`mailto: ${userInfo?.email}`}>
											<StyledEmail>{userInfo?.email}</StyledEmail>
										</a>
									)}
								</StyledUserContact>
							</div>
						</StyledBodyContentInnerContainer>
					</StyledBodyContentContainer>
					{/* card footer  */}
					<StyledFooterContainer>
						<StyledFooterInnerContainer>
							<StyledFooterInfo>
								<div>{diplomaTitle ?? 'Diploma'} :</div>
								{educationalInfo?.diploma && (
									<StyledDataFooterText>
										{educationalInfo?.diploma}
									</StyledDataFooterText>
								)}
							</StyledFooterInfo>
							<StyledFooterInfo>
								<div> {yearTitle ?? 'Year'}:</div>
								{educationalInfo?.year && (
									<StyledDataFooterText>
										{educationalInfo?.year}
									</StyledDataFooterText>
								)}
							</StyledFooterInfo>
							<StyledFooterInfo>
								<div>{languageTitle ?? 'Language'}:</div>
								{educationalInfo?.year && (
									<StyledDataFooterText>
										{educationalInfo?.language}
									</StyledDataFooterText>
								)}
							</StyledFooterInfo>
							<StyledFooterInfo>
								<div>{sectionTitle ?? 'Branch'}:</div>
								{educationalInfo?.section && (
									<StyledDataFooterText>
										{educationalInfo?.section}
									</StyledDataFooterText>
								)}
							</StyledFooterInfo>
						</StyledFooterInnerContainer>

						{/*  qr code  */}
						{userInfo && userInfo.username && (
							<StyledQRContainer>
								<QRCode
									onClick={() => onQRCodeClick?.()}
									width={72 * scale}
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

import { FlexLayout } from '@eduact/ed-system';
import { useNightTime } from '@eduact/utils';
import { Dropdown, TextInput } from '@src/Inputs';
import { rgba } from 'polished';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWidget, WidgetProps } from '../BaseWidget';
import { Widget } from '../BaseWidget/BaseWidget';
import { DayNightIcons } from './assets/DayNightWidget.icons';

type DayNighWidgetProps = {
	username: string;
	welcomeTitle?: string;
	welcomeMessage?: string;
};

const DayNightWidget: React.VoidFunctionComponent<
	WidgetProps<DayNighWidgetProps>
> = ({ username, welcomeTitle, welcomeMessage }) => {
	const { setTitle, setAction } = useWidget();

	const DropdownList = () => {
		return <TextInput placeholder="Search" />;
	};
	useEffect(() => {
		console.log('TEST');
		setTitle('Testdfsdfsdf');
		// setAction(DropdownList);
	}, []);
	const isNight = useNightTime();
	return (
		<>
			{isNight !== null && (
				<WidgetContainer
					isNight={isNight}
					onClick={() => {
						DayNightWidget.prototype.title = 'dasad';
					}}
				>
					<WelcomeTitleContainer width={'100%'} justifyContent="space-between">
						<div>
							<WelcomeTitle>{welcomeTitle ?? 'Hi'},</WelcomeTitle>{' '}
							<UsernameTitle>{username}</UsernameTitle>
						</div>
						<IconWrapper>
							{isNight && <DayNightIcons.MoonIcon />}
							{!isNight && <DayNightIcons.SunIcon />}
						</IconWrapper>
					</WelcomeTitleContainer>
					<FlexLayout>
						<WelcomeMessageTitle>
							{welcomeMessage ?? 'Welcome to your dashboard'}
						</WelcomeMessageTitle>
					</FlexLayout>
				</WidgetContainer>
			)}
		</>
	);
};

export default DayNightWidget;

const WidgetContainer = styled.div<{ isNight: boolean }>`
	background: ${(props) => (props.isNight ? '#3F3D56' : rgba('#6C63FF', 0.3))};
	width: 100%;
	min-height: inherit;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #f9fafc;
	align-items: flex-start;
	padding: 1rem 1.313rem 0.5rem;
	${({ theme }) => `${theme.mediaQueries.large}{
		padding: 1.875rem 0 2.813rem;
		align-items: center;
	}`}
`;

const WelcomeTitleContainer = styled(FlexLayout)`
	/* padding-inline-start: 1.313rem; */
	/* padding-inline-end: 1.063rem; */
	margin-bottom: 0.75rem;
	align-items: center;
	${({ theme }) => `${theme.mediaQueries.large}{
		align-items: baseline;
		padding-inline-start: 2.875rem;
		padding-inline-end: 4.188rem;
	}`}
`;
const WelcomeTitle = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
	font-style: italic;
	font-family: 'Montserrat';

	${({ theme }) => `${theme.mediaQueries.large}{
		font-size: 3.125rem;
	}`}
`;

const UsernameTitle = styled.span`
	font-size: 0.875rem;
	font-weight: 500;
	font-style: italic;
	font-family: 'Montserrat';
	${({ theme }) => `${theme.mediaQueries.large}{
		font-size: 2rem;
	}`}
`;

const WelcomeMessageTitle = styled.span`
	font-size: 0.813rem;
	font-weight: 500;
	font-style: italic;
	font-family: 'Montserrat';
	padding-inline-start: 0.313rem;
	${({ theme }) => `${theme.mediaQueries.large}{
		padding:0;
		font-size: 1.563rem;
	}`}
`;

const IconWrapper = styled.div`
	${({ theme }) => `${theme.mediaQueries.large}{
		margin-bottom: 1.563rem;
	}`}
`;

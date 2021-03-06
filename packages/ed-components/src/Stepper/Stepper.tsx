import { FlexLayout } from '@eduact/ed-system';
import { Orientation } from '@eduact/student-theme';
import React, { useState } from 'react';
import { useMemo } from 'react';
import {
	BulletContent,
	StepLine,
	StepperBulletWrapper,
	StepperItemBullet,
	StepTooltip,
	StepWrapper,
} from './Stepper.styled';
import {
	StepperItemProps,
	StepperItemUIProps,
	StepperProps,
} from './Stepper.types';

export interface StepperComposition {
	Item: React.FC<StepperItemProps>;
}
const Stepper: React.FC<StepperProps> & StepperComposition = ({
	children,
	initStep,
	onChange,
	clickable,
	finishedIcon,
}) => {
	const [currentIndex, setCurrentIndex] = useState(initStep ?? 0);

	const validCurrentIndex = useMemo(() => {
		return clickable ? currentIndex : initStep ?? 0;
	}, [currentIndex, initStep, clickable]);
	return (
		<FlexLayout mb={{ sm: '', lg: '2rem' }}>
			{React.Children.map(
				children as Array<React.ReactElement<StepperItemProps>>,
				(child, index) => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, {
							...child.props,
							isLast: React.Children.count(children) - 1 === index,
							isSelected: validCurrentIndex === index,
							finished: index < validCurrentIndex,
							index,
							finishedIcon,
							onClick: (e: React.MouseEvent<any>) => {
								child.props.onClick?.(e);
								if (clickable) {
									setCurrentIndex(index);
									onChange && onChange(index);
								}
							},
						});
					}
				}
			)}
		</FlexLayout>
	);
};

const StepperItem: React.FC<StepperItemProps> = ({
	isLast,
	isSelected,
	index = 0,
	finished,
	onClick,
	icon,
	tooltip,
	disabled,
	finishedIcon,
}) => {
	const toBeShown = useMemo(() => {
		if (!isSelected && !finished) return;
		const _ = icon ?? index + 1;
		if (finished) return finishedIcon ?? _;
		return _;
	}, [finished, icon, isSelected]);
	return (
		<StepWrapper
			onClick={(e) => !disabled && onClick && onClick(e)}
			finished={finished}
			isSelected={isSelected}
			isLast={isLast}
		>
			<FlexLayout mb={{ lg: '.75rem' }} width={'100%'} alignItems={'center'}>
				<StepperBulletWrapper>
					<StepperItemBullet>
						{toBeShown && <BulletContent>{toBeShown}</BulletContent>}
					</StepperItemBullet>
					{tooltip && isSelected && <StepTooltip>{tooltip}</StepTooltip>}
				</StepperBulletWrapper>
				{!isLast && <StepLine />}
			</FlexLayout>
		</StepWrapper>
	);
};

Stepper.Item = StepperItem;

export default Stepper;

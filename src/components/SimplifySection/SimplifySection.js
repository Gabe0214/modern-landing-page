import React from 'react';
import './SimplifySection.scss';
import { PrimaryButton } from '../Button/PrimaryButton';
import mobileSimplifyPatter from '../../images/bg-simplify-section-mobile.svg';
export const SimplifySection = () => {
	return (
		<div className='simplify-section'>
			<div className='inner-simplify-section'>
				<p>Simplify how your team works today.</p>
				<PrimaryButton placeholder={'Get Started'} />
				<img src={mobileSimplifyPatter} alt='mobile-pattern' />
			</div>
		</div>
	);
};

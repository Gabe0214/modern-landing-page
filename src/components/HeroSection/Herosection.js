import React from 'react';
import { SectionLayout } from '../SectionLayout/SectionLayout';
import metric from '../../images/illustration-intro.svg';
import './HeroSection.scss';

export const Herosection = () => {
	const HeroText = () => {
		return (
			<React.Fragment>
				<h1>Bring everyone together to build better products.</h1>
				<span>
					Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
					view.
				</span>
			</React.Fragment>
		);
	};

	const MetricGraphs = () => {
		return <img src={metric} alt='hero-img' />;
	};

	return (
		<SectionLayout
			contentOne={<MetricGraphs />}
			contentTwo={<HeroText />}
			sectionClass={'hero-section'}
			contentOneClass={'metric-img-container'}
			contentTwoClass={'text-container'}
		/>
	);
};

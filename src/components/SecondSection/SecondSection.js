import React from 'react';
import { SectionLayout } from '../SectionLayout/SectionLayout';
import './SecondSection.scss';

export const SecondSection = () => {
	const steps = [
		{
			num: '01',
			title: 'Track company-wide progress',
			text:
				'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again,'
		},
		{
			num: '02',
			title: 'Advanced built-in reports',
			text:
				'Set internal delivery estimates and trach progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
		},
		{
			num: '03',
			title: 'Everything you need in one place',
			text:
				'Stop jumping from obe service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
		}
	];
	const SubText = () => {
		return (
			<React.Fragment>
				<h2>
					What's different <br />about Manage?
				</h2>
				<span>
					Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for
					modern digital product teams.
				</span>
			</React.Fragment>
		);
	};

	const StepSection = () => {
		return (
			<React.Fragment>
				{steps.map((step) => (
					<div className='step'>
						<h3>
							<span>{step.num}</span>
							{step.title}
						</h3>
						<p>{step.text}</p>
					</div>
				))}
			</React.Fragment>
		);
	};

	return (
		<SectionLayout
			contentOne={<SubText />}
			contentTwo={<StepSection />}
			contentOneClass={'sub-heading'}
			contentTwoClass={'steps-container'}
			sectionClass={'section-two'}
		/>
	);
};

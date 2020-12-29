import React from 'react';

export const SectionLayout = ({ children, contentOne, contentTwo, sectionClass, contentOneClass, contentTwoClass }) => {
	return (
		<div className={sectionClass}>
			<div className={contentOneClass}>{contentOne}</div>
			<div className={contentTwoClass}>{contentTwo}</div>
		</div>
	);
};

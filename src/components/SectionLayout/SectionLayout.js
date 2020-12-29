import React from 'react';

export const SectionLayout = ({ children, contentOne, contentTwo }) => {
	return (
		<div className='section'>
			<div>{contentOne}</div>
			<div>{contentTwo}</div>
		</div>
	);
};

import React from 'react';

export const PrimaryButton = ({ placeholder }) => {
	return (
		<div className='btn-container'>
			<a href='#' className='get-started-btn'>
				{placeholder}
			</a>
		</div>
	);
};

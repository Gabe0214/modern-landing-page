import React from 'react';
import './MobileModal.scss';

function MobileModal({ setClose }) {
	const links = [ 'Pricing', 'Products', 'About Us', 'Careers', 'Community' ];
	return (
		<div className='outer-list-container'>
			<ul>{links.map((link) => <li onClick={() => setClose((prevState) => !prevState)}>{link}</li>)}</ul>
		</div>
	);
}

export default MobileModal;

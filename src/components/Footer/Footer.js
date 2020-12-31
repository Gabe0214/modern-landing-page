import React from 'react';
import './Footer.scss';
import { PrimaryButton } from '../Button/PrimaryButton';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faPinterest, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
	{
		name: faFacebookSquare,
		site: 'https://facebook.com'
	},
	{
		name: faYoutube,
		site: 'https://youtube.com'
	},
	{
		name: faTwitter,
		site: 'https://twitter.com'
	},
	{
		name: faPinterest,
		site: 'https://pinterest.com'
	},
	{
		name: faInstagram,
		site: 'https://instagram.com'
	}
];
export const Footer = () => {
	return (
		<div className='footer-section'>
			<div className='input-btn-container'>
				<input type='email' name='email' placeholder='Updates in your inbox...' />
				<PrimaryButton placeholder='Go' />
			</div>
			<div className='nav-links-container'>
				<div className='first-half'>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
						<li>
							<a href='#'>Products</a>
						</li>
						<li>
							<a href='#'>About Us</a>
						</li>
					</ul>
				</div>
				<div className='second-half'>
					<ul>
						<li>
							<a href='#'>Careers</a>
						</li>
						<li>
							{' '}
							<a href='#'>Community</a>
						</li>
						<li>
							<a href='#'>Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='social-links-logo-container'>
				<div className='social-links'>
					{socialLinks.map((link) => {
						return (
							<a href={link.site}>
								<FontAwesomeIcon icon={link.name} size='2x' />
							</a>
						);
					})}
				</div>
				<Logo className='logo' />
			</div>
			<div className='copyright-container'>
				<p>Copyright 2020.All Rights Reserved</p>
			</div>
		</div>
	);
};

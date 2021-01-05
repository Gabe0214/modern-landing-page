import React from 'react';
import Logo from '../../images/logo.svg';
import { HamburgerSpin } from 'react-animated-burgers';
import PatternBg from '../../images/bg-tablet-pattern.svg';
import './Navbar.scss';
import MobileModal from './MobileModal/MobileModal';
import { PrimaryButton } from '../Button/PrimaryButton';
export const Navbar = ({ active, setActive }) => {
	const toggle = () => {
		setActive((prevState) => !prevState);
	};

	return (
		<nav>
			<div className='inner-nav-container'>
				<div className='logo-container'>
					<img src={Logo} alt='company-logo' />
				</div>

				<HamburgerSpin
					isActive={active}
					toggleButton={toggle}
					barColor='#242D52'
					buttonWidth={30}
					buttonStyle={{ padding: 0, position: 'relative', zIndex: '20000' }}
				/>
				<ul className='desktop-links'>
					<li>
						<a href='#'>Pricing</a>
					</li>
					<li>
						<a href='#'>Products</a>
					</li>
					<li>
						<a href='#'>About Us</a>
					</li>
					<li>
						<a href='#'>Careers</a>
					</li>
					<li>
						<a href='#'>Community</a>
					</li>
				</ul>
				<PrimaryButton placeholder='Get Started' />
			</div>
			<div className='pattern-bg'>
				<img src={PatternBg} alt='bg-icon' />
			</div>
			{active ? <MobileModal setClose={setActive} active={active} /> : null}
		</nav>
	);
};

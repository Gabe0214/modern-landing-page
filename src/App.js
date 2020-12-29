import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import './App.scss';
import { Herosection } from './components/HeroSection/Herosection';
import { SecondSection } from './components/SecondSection/SecondSection';

function App() {
	const [ menu, setMenu ] = useState(false);

	return (
		<div>
			<Navbar active={menu} setActive={setMenu} />
			<Herosection />
			<SecondSection />
		</div>
	);
}

export default App;

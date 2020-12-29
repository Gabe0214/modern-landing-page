import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';
import { Herosection } from './components/HeroSection/Herosection';

function App() {
	const [ menu, setMenu ] = useState(false);

	return (
		<div>
			<Navbar active={menu} setActive={setMenu} />
			<Herosection />
		</div>
	);
}

export default App;

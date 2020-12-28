import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

function App() {
	const [ menu, setMenu ] = useState(false);

	return (
		<div>
			<Navbar active={menu} setActive={setMenu} />
			<h1>hi</h1>
		</div>
	);
}

export default App;

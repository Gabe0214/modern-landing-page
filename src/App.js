import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

function App() {
	const [ menu, setMenu ] = useState(false);

	return (
		<div>
			<Navbar active={menu} setActive={setMenu} />
		</div>
	);
}

export default App;

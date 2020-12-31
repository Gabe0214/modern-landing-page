import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import './App.scss';
import { Herosection } from './components/HeroSection/Herosection';
import { SecondSection } from './components/SecondSection/SecondSection';
import { CarouselMobile } from './components/Carousel/CarouselMobile';
import { SimplifySection } from './components/SimplifySection/SimplifySection';
import { Footer } from './components/Footer/Footer';

function App() {
	const [ menu, setMenu ] = useState(false);

	return (
		<div>
			<Navbar active={menu} setActive={setMenu} />
			<Herosection />
			<SecondSection />
			<CarouselMobile />
			<SimplifySection />
			<Footer />
		</div>
	);
}

export default App;

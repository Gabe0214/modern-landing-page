import React, { useState } from 'react';
import Ali from '../../images/avatar-ali.png';
import './Carousel.scss';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
export const CarouselMobile = () => {
	const [ carousel, setCarousel ] = useState({
		value: 0,
		slides: [
			<div className='person-container'>
				<img src={Ali} alt='person' />
				<h4>Ali Bravo</h4>
				<p>
					"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-chanel
					confusion and everyone is much more focused."
				</p>
			</div>,
			<div className='person-container'>
				<img src={Ali} alt='person' />
				<h4>Ali Bravo</h4>
				<p>
					"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-chanel
					confusion and everyone is much more focused."
				</p>
			</div>,
			<div className='person-container'>
				<img src={Ali} alt='person' />
				<h4>Ali Bravo</h4>
				<p>
					"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-chanel
					confusion and everyone is much more focused."
				</p>
			</div>
		]
	});

	const onChange = (value) => {
		setCarousel({ ...carousel, value: value });
	};
	return (
		<div className='carousel-section'>
			<h2>What they've said</h2>
			<div>
				<Carousel value={carousel.value} slides={carousel.slides} onChange={onChange} />
				<Dots value={carousel.value} onChange={onChange} number={carousel.slides.length} />
			</div>
		</div>
	);
};

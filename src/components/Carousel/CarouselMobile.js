import React, { useState } from 'react';
import Ali from '../../images/avatar-ali.png';
import Anisha from '../../images/avatar-anisha.png';
import Richard from '../../images/avatar-richard.png';
import Shanai from '../../images/avatar-shanai.png';
import './Carousel.scss';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { PrimaryButton } from '../Button/PrimaryButton';
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
				<img src={Anisha} alt='person' />
				<h4>Anisha Li</h4>
				<p>
					"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestoned at all
					times keeps everyone motivated."
				</p>
			</div>,
			<div className='person-container'>
				<img src={Richard} alt='person' />
				<h4>Richard Watts</h4>
				<p>
					"Manage allows us to provide structure and process. It keeps us organized and focused. I cant't stop
					recommending them to everyone I talk to!"
				</p>
			</div>,
			<div className='person-container'>
				<img src={Shanai} alt='person' />
				<h4>Shanai Gough</h4>
				<p>
					"Their software allows us to track, manage and collaborate on our project from anywhere. It keeps the whole
					team in-sync without being instrusive."
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
				<Carousel value={carousel.value} slides={carousel.slides} onChange={onChange} plugins={[ 'fastSwipe' ]} />
				<Dots value={carousel.value} onChange={onChange} number={carousel.slides.length} />
			</div>
			<PrimaryButton placeholder='Get Started' />
		</div>
	);
};

//import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div
			// style={{ backgroundImage: `url(require("img/bg.jpg"))` }}
			style={{
				background: `url(img/bg.jpg)`,
			}}
			//	style={{ backgroundImage: 'img/tesla-logo.png' }}
			className='wrapper'
		>
			<img src='img/tesla-logo.png' alt='Tesla Logo' />
			{/* <section className='description'>
				<h1 className='description__title'>Tesla Model S</h1>
				<p className='description__text'>
					Model S is designed from the ground up to be the safest, most
					exhilarating sedan on the road. With unparalleled performance
					delivered through Tesla's unique, all-electric powertrain, Model S
					accelerates from 0 to 60 mph in as little as 2.5 seconds. Model S
					comes with Autopilot capabilities designed to make your highway
					driving not only safer, but stress free.
				</p>
				<a href='https://www.tesla.com/models' className='description__button'>
					Conoce más
				</a>
			</section> */}
		</div>
	);
}

export default App;

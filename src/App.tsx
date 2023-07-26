import { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import { useHero } from './hooks/useHero';
import { v4 as uuid } from 'uuid';
import './App.css';
import { TripCard } from './components/tripCard';
import { TestimonalCard } from './components/testimonalCard';

function App() {
	const [trips, setTrips] = useState(0);
	const [nav, setNav] = useState<string[]>([]);
	const [boughtIt, setBoughtIt] = useState(false);
	const { data, isLoading, error } = useFetch();
	const { heroics, waitAMo, fail } = useHero();

	useEffect(() => {
		setNav(() => {
			return ['trending', 'your orders', 'community'];
		});
		if (heroics) if (data) setTrips(data.length);
	}, [data, heroics]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setBoughtIt(true);
		if (e.currentTarget.value) {
			const stuff = e.currentTarget.value.split('/');
			const experience = stuff[0];
			const cost = parseInt(stuff[1]);
			alert(`Okie dokie, so you've bought the '${experience}' excursion, at a cost of ${cost && cost.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}\rNice one 🚀`);
		}
	};

	return (
		<>
			<header className='site-header'>
				<div className='site-identity'>
					<a>
						<img className='eefe-logo' src='/icons8-space-64.png' alt='eefe spaceship logo' />
					</a>
					<h1>Extraterrestrial Excursions for Earthlings</h1>
				</div>
				<ul className='go-somewhere'>
					{nav.map((place) => {
						return (
							<li key={place}>
								<a>{place}</a>
							</li>
						);
					})}
				</ul>
			</header>

			{waitAMo && <p>...getting heroics...</p>}
			{heroics && (
				<div
					className='hero-section'
					style={{
						background: `linear-gradient(0deg, rgba(10 10 10 / 90%), rgba(25 119 25 / 60%)), url(${heroics.image})`,
						backgroundSize: 'cover',
						backgroundPosition: '50% 20%',
					}}
				>
					<h3>We've been helping humanity traverse the universe for aeons.</h3>
					<p>Now it's your turn to marvel at the wonders of the universe! But don't just take our word for it; check out these smashing reviews from customers just like you!</p>
					<ul className='testimonials'>
						{heroics.testimonials.map((testimonial) => {
							return <TestimonalCard review={testimonial} />;
						})}
					</ul>
				</div>
			)}

			{isLoading && <h2>Loading...</h2>}
			{data && (
				<div className='trips'>
					<h3>We found {trips} trips for you!</h3>{' '}
					<ul className='trip-list'>
						{data.map((trip) => {
							return <TripCard trip={trip} handleClick={handleClick} />;
						})}
					</ul>
				</div>
			)}
		</>
	);
}

export default App;

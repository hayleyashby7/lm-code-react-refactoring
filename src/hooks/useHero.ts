import { useEffect, useState } from 'react';
import { Testimonial } from '../types.ts';

export const useHero = () => {
	const [heroics, setHeroics] = useState<HeroDeets | null>(null);
	const [waitAMo, setWaitAMo] = useState<boolean>(false);
	const [fail] = useState(null);

	useEffect(() => {
		setWaitAMo(true);
		setTimeout(() => {
			setHeroics(pureHeroism);
			setWaitAMo(false);
		}, 400);
	}, []);

	return { heroics, waitAMo, fail };
};

interface HeroDeets {
	image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
	testimonials: Array<Testimonial>;
}

const pureHeroism: HeroDeets = {
	image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
	testimonials: [
		{
			name: 'Jules Beobattini',
			rating: 5,
			spiel: 'Best company ever... Exquisite service and a life-changing trip.',
			social: 'vicariouslives.io/joojoobattini',
		},
		{
			name: 'Ries Ollogantor',
			rating: 5,
			spiel: 'Just go for it. EEfE has got your back',
			social: 'vicariouslives.io/rollogantosaurus',
		},
		{
			name: 'Miranda Morliera',
			rating: 5,
			spiel: 'Brill. Just brill. Worth every penny and EEfE were perfect!',
			social: 'vicariouslives.io/morlierorless',
		},
	],
};

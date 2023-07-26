import { Testimonial } from '../types.ts';
import { v4 as uuid } from 'uuid';

interface TestimonalCardProps {
	review: Testimonial;
}

export const TestimonalCard: React.FC<TestimonalCardProps> = ({ review }) => {
	return (
		<li key={uuid()} className='test-card'>
			<h4>{review.name}</h4>
			<a>{review.social}</a>
			<p>{review.spiel}</p>
			<p>Score / 5: {'🪐'.repeat(review.rating)}</p>
		</li>
	);
};

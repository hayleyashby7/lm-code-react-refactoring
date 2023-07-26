import { TripDatum } from '../types.ts';
import { TripButton } from './tripButton';

interface TripCardProps {
	trip: TripDatum;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TripCard: React.FC<TripCardProps> = ({ trip, handleClick }) => {
	return (
		<li key={trip.id} className='trip-card'>
			<h3 className='trip-name grid-col-span-2'>{trip.name}</h3>
			<p className='trip-description grid-col-span-2'>{trip.description}</p>
			<img className='trip-thumbnail' src={trip.imageUrl} alt={`representation of ${trip.name}`} />
			<p className='trip-duration'>
				Duration: {trip.lengthInDays} day
				{trip.lengthInDays > 1 && 's'}
			</p>
			<p className='trip-price'>
				Price:{' '}
				{trip.cost.toLocaleString('en-GB', {
					style: 'currency',
					currency: 'GBP',
				})}
			</p>
			<TripButton isBookable={trip.isBookable} cost={trip.cost} handleClick={handleClick} name={trip.name} />
		</li>
	);
};

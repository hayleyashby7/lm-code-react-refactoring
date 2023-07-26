interface TripButtonProps {
	name: string;
	cost: number;
	isBookable: boolean;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TripButton: React.FC<TripButtonProps> = ({ isBookable, handleClick, name, cost }) => {
	return (
		<button className='grid-col-span-2 trip-book-button' disabled={!isBookable} onClick={handleClick} value={`${name}/${cost}`}>
			{isBookable ? 'book now' : 'fully booked'}
		</button>
	);
};

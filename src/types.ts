export interface TripDatum {
	id: string;
	name: string;
	description: string;
	cost: number;
	lengthInDays: number;
	imageUrl: string;
	isBookable: boolean;
}

export interface Testimonial {
	name: string;
	rating: number;
	spiel: string;
	social: string;
}

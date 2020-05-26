import { MovieGenre } from './movie.service';

export interface Movie {
	id: number;
	key: string;
	name: string;
	description: string;
	rate: string;
	length: string;
	img: string;
	genres: Array<MovieGenre>;
}

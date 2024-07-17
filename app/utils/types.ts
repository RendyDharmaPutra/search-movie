interface searchMovies {
	Search: movie[];
	totalResults: string;
	Response: string;
}

interface movie {
	Title: string;
	Year: String;
	imdbID: string;
	Type: string;
	Poster: string;
}

interface rating {
	Source: string;
	Value: string;
}

interface movieDetail extends movie {
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Ratings: rating[];
	Metascore: string;
	imdbRating: string;
	imdbVotes: string;
	BoxOffice: string;
}

interface error extends searchMovies {
	Error: string;
}

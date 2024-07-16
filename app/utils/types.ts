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

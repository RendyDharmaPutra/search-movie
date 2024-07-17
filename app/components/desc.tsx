export default function Desc({ movie }: { movie: movieDetail }): JSX.Element {
	return (
		<div className="p-layout flex flex-col gap-5 sm:gap-6 overflow-hidden rounded-xl bg-white">
			<div className="flex flex-col gap-2">
				<div className="flex flex-row gap-2 w-full">
					<h3 className="tag">{movie.Rated}</h3>
					<h3 className="tag">{movie.Language}</h3>
				</div>
				<h1 className="font-bold text-gray-900 text-2xl sm:text-3xl">
					{movie.Title} ({movie.Year})
				</h1>
			</div>
			<h4>
				Disutradarai oleh <span>{movie.Writer}</span>
			</h4>
			<div className="py-1 flex flex-col gap-3">
				<h4>
					Pemeran - <span>{movie.Actors}</span>
				</h4>
				<h4>
					Genre - <span>{movie.Genre}</span>
				</h4>
				<h4>
					Tanggal Rilis - <span>{movie.Released}</span> | Durasi{" "}
					<span>{movie.Runtime}</span>
				</h4>
			</div>
		</div>
	);
}

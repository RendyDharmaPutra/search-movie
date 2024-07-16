import { Link } from "@remix-run/react";

export default function Card({ movie }: { movie: movie }): JSX.Element {
	return (
		<div
			className="relative group flex flex-col justify-end w-[20rem] h-[26rem] sm:w-[18rem] sm:h-[24rem] overflow-hidden rounded-xl bg-no-repeat bg-cover brightness-75 hover:brightness-100 duration-200"
			style={{ backgroundImage: `url(${movie.Poster})` }}
		>
			<div className="px-4 py-2 flex flex-col gap-2 w-full min-h-[8rem] opacity-0 group-hover:opacity-100 bg-white/80 backdrop-blur-xl  duration-200">
				<Link
					to={`/${movie.imdbID}`}
					className=" text-xl font-semibold text-gray-800 hover:text-primary duration-200"
				>
					{movie.Title} ({movie.Year})
				</Link>
				<div className="px-2 py-1 text-center w-[4rem] rounded-lg bg-primary">
					<h3 className="text-lg text-gray-200">{movie.Type}</h3>
				</div>
			</div>
		</div>
	);
}

import { Link } from "@remix-run/react";

export default function Card({
	movie,
	body,
}: {
	movie: movie;
	body: boolean;
}): JSX.Element {
	return (
		<div className="relative group w-[20rem] h-[26rem] sm:w-[18rem] overflow-hidden rounded-xl">
			<img
				src={movie.Poster}
				alt="Poster Film"
				loading="lazy"
				className="w-full h-full bg-no-repeat bg-cover brightness-75 group-hover:brightness-100 duration-200"
			/>
			<div
				className={`${
					body ? "absolute bottom-0" : "hidden"
				}absolute bottom-0 px-4 py-2 flex flex-col gap-2 w-full min-h-[8rem] opacity-0 group-hover:opacity-100 bg-white duration-200`}
			>
				<Link
					prefetch="viewport"
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

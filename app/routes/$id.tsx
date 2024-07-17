import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Accordion from "~/components/accordion";
import Card from "~/components/card";
import Desc from "~/components/desc";
import List from "~/components/list";
import Plot from "~/components/plot";
import Ratings from "~/components/ratings";
import Revenue from "~/components/revenue";

export async function loader({
	params,
}: LoaderFunctionArgs): Promise<movieDetail> {
	const response: Response = await fetch(
		`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${params.id}&plot=full`,
	);
	const movie: movieDetail = await response.json();

	return movie;
}

export default function Page(): JSX.Element {
	const movie = useLoaderData<typeof loader>();

	return (
		<>
			<div className="p-layout bg-white">
				<button
					onClick={() => history.back()}
					className="flex flex-row items-center justify-center btn-primary"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						fill="white"
						className="w-4 h-4 rotate-90"
					>
						<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
					</svg>
					Kembali
				</button>
			</div>
			<div className="p-layout row-section justify-center items-center sm:items-start gap-8">
				<Card body={false} movie={movie} />
				<section className="flex-1 flex flex-col gap-3">
					<Desc movie={movie} />
					<Plot Plot={movie.Plot} />
					<Ratings Ratings={movie.Ratings} />
					<Revenue
						Country={movie.Country}
						Awards={movie.Awards}
						BoxOffice={movie.BoxOffice}
					/>
				</section>
			</div>
		</>
	);
}

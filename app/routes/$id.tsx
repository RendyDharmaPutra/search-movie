import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Accordion from "~/components/accordion";
import Back from "~/components/back";
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
				<Back />
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

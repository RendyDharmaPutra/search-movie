import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Back from "~/components/back";
import ErrorCard from "~/components/boundary/errorCard";
import Card from "~/components/container/card";
import Desc from "~/components/container/desc";
import Plot from "~/components/container/plot";
import Ratings from "~/components/container/ratings";
import Revenue from "~/components/container/revenue";

export async function loader({
	params,
}: LoaderFunctionArgs): Promise<movieDetail> {
	const response: Response = await fetch(
		`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${params.id}&plot=full`,
	);
	const movie: movieDetail = await response.json();

	return movie;
}

export function ErrorBoundary({ error }: { error: Error }) {
	return <ErrorCard errorText={true} />;
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

import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/card";
import Headline from "~/components/headline";
import Search from "~/components/search";

export async function loader({
	request,
}: LoaderFunctionArgs): Promise<searchMovies> {
	let url: URL = new URL(request.url);
	let query: string = url.searchParams.get("query") || "Marvel";
	const response: Response = await fetch(
		`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`,
	);
	const data: searchMovies = await response.json();

	return data;
}

export default function Component(): JSX.Element {
	let data: searchMovies = useLoaderData<typeof loader>();

	return (
		<div>
			<section className="p-layout flex flex-col gap-6 bg-white">
				<Headline />
				<Search />
			</section>
			<section className="p-layout row-section flex-wrap gap-10 justify-center items-center">
				{/* <h3>Query : {JSON.stringify(data.Search)}</h3> */}
				{data.Search.map((movie) => {
					return <Card key={movie.imdbID} movie={movie} />;
				})}
			</section>
		</div>
	);
}

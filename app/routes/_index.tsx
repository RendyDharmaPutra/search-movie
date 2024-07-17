import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/card";
import ErrorCard from "~/components/errorCard";
import Headline from "~/components/headline";
import Search from "~/components/search";

export async function loader({
	request,
}: LoaderFunctionArgs): Promise<searchMovies | error> {
	let url: URL = new URL(request.url);
	let query: string = url.searchParams.get("query") || "Marvel";
	const response: Response = await fetch(
		`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`,
	);
	const data: searchMovies | error = await response.json();

	return data;
}

export function ErrorBoundary() {
	return (
		<div className="flex flex-col w-full min-h-screen justify-center items-center">
			<ErrorCard errorText={true} />
		</div>
	);
}

export default function Component(): JSX.Element {
	const data: searchMovies | error = useLoaderData<typeof loader>();

	return (
		<div>
			<section className="p-layout flex flex-col gap-6 bg-white">
				<Headline />
				<Search />
			</section>
			<section className="p-layout row-section flex-wrap gap-10 justify-center items-center">
				{data.Response === "True" ? (
					<>
						{data.Search.map((movie: movie) => {
							return <Card key={movie.imdbID} body={true} movie={movie} />;
						})}
					</>
				) : (
					<ErrorCard errorText={false} />
				)}
			</section>
		</div>
	);
}

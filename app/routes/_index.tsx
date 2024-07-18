import { LoaderFunctionArgs, TypedDeferredData } from "@remix-run/node";
import { Await, defer, useLoaderData } from "@remix-run/react";
import Card from "~/container/card";
import ErrorCard from "~/components/boundary/errorCard";
import Headline from "~/components/headline";
import Search from "~/container/search";
import { Suspense } from "react";
import Loading from "~/components/boundary/loading";

export async function loader({ request }: LoaderFunctionArgs): Promise<
	TypedDeferredData<{
		movies: Promise<searchMovies | error>;
	}>
> {
	let url: URL = new URL(request.url);
	let query: string = url.searchParams.get("query") || "Marvel";

	const movies: () => Promise<searchMovies | error> = async () => {
		const response: Response = await fetch(
			`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`,
		);
		return await response.json();
	};

	return defer({ movies: movies() });
}

export function ErrorBoundary() {
	return <ErrorCard errorText={true} />;
}

export default function Component(): JSX.Element {
	const data = useLoaderData<typeof loader>();

	return (
		<div>
			<section className="p-layout flex flex-col gap-6 bg-white">
				<Headline />
				<Search />
			</section>
			<section className="p-layout row-section flex-wrap gap-10 justify-center items-center">
				<Suspense fallback={<Loading />}>
					<Await resolve={data.movies}>
						{(movies) =>
							movies.Response === "True" ? (
								<>
									{movies.Search.map((movie: movie) => {
										return (
											<Card key={movie.imdbID} body={true} movie={movie} />
										);
									})}
								</>
							) : (
								<ErrorCard errorText={false} />
							)
						}
					</Await>
				</Suspense>
			</section>
		</div>
	);
}

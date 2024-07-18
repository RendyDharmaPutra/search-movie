import { LoaderFunctionArgs, TypedDeferredData } from "@remix-run/node";
import { Await, defer, useLoaderData } from "@remix-run/react";
import Card from "~/container/card";
import ErrorCard from "~/components/error/errorCard";
import Headline from "~/components/headline";
import Search from "~/container/search";
import { Suspense } from "react";

// export async function loader({ request }: LoaderFunctionArgs): Promise<
// 	TypedDeferredData<{
// 		data: Promise<searchMovies | error>;
// 	}>
// > {
// 	let url: URL = new URL(request.url);
// 	let query: string = url.searchParams.get("query") || "Marvel";
// 	const response: Response = await fetch(
// 		`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${query}`,
// 	);
// 	const data: Promise<searchMovies | error> = response.json();

// 	return defer({ data });
// }

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
	return (
		<div className="flex flex-col w-full min-h-screen justify-center items-center">
			<ErrorCard errorText={true} />
		</div>
	);
}

function Loading() {
	return (
		<div>
			<h1 className="text-4xl">Loading...</h1>
		</div>
	);
}

export default function Component(): JSX.Element {
	// const { data }: { data: Promise<searchMovies | error> } =
	// 	useLoaderData<typeof loader>();
	const data = useLoaderData<typeof loader>();

	return (
		<div>
			<section className="p-layout flex flex-col gap-6 bg-white">
				<Headline />
				<Search />
			</section>
			<section className="p-layout row-section flex-wrap gap-10 justify-center items-center">
				{/* {data.Response === "True" ? (
					<>
						{data.Search.map((movie: movie) => {
							return <Card key={movie.imdbID} body={true} movie={movie} />;
						})}
					</>
				) : (
					<ErrorCard errorText={false} />
				)} */}
				{/* <Suspense fallback={<Loading />}>
					<Await resolve={data}>
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
				</Suspense> */}
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

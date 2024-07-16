import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
	const response = await fetch(
		`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${params.id}&plot=full`,
	);
	const data = await response.json();

	return data;
}

export default function Page() {
	const data = useLoaderData<typeof loader>();

	return (
		<>
			<h1>{JSON.stringify(data)}</h1>
			<button onClick={() => history.back()}>Back</button>
		</>
	);
}

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

// export async function loader({request}) {

// }

export default function Index() {
	return (
		<div>
			<h1>Hello</h1>
			<li>
				<Link to={"/about"}>About</Link>
			</li>
		</div>
	);
}

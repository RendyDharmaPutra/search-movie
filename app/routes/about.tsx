import { Link } from "@remix-run/react";

export default function Page() {
	return (
		<>
			<h1>Hello</h1>
			<Link to={"/"}>Back</Link>
		</>
	);
}

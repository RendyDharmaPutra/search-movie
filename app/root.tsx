import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import "./tailwind.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export const meta: MetaFunction = () => {
	return [
		{ title: "Search Movie" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="flex flex-col min-h-screen bg-gradient-to-b from-page2 via-secondary to-page2">
				<Header />
				<div className="flex-grow">{children}</div>
				<Footer />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

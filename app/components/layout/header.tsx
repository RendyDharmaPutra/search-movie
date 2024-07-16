export default function Header(): JSX.Element {
	return (
		<div className="sticky top-0 z-[99] p-layout flex flex-row gap-2 w-full bg-white/80 backdrop-blur-xl">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="#00BFFF"
				className="w-8 h-8"
				viewBox="0 0 16 16"
			>
				{" "}
				<path
					fillRule="evenodd"
					d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
				/>{" "}
			</svg>
			<h1 className="font-bold text-xl lg:text-2xl text-primary">
				Search Movie
			</h1>
		</div>
	);
}

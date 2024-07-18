export default function Loading(): JSX.Element {
	return (
		<div className="p-layout flex flex-col justify-center items-center gap-1 text-center w-full sm:w-[20rem] rounded-xl bg-white">
			<div className="w-[2rem] h-[2rem] border-2 rounded-full border-primary border-b-gray-200 animate-spin"></div>
			<h1 className="headline">Memuat data...</h1>
		</div>
	);
}

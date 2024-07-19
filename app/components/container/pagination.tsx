import { useSearchParams } from "@remix-run/react";

export default function Pagination(): JSX.Element {
	let [searchParams, setSearchParams] = useSearchParams();
	const currentPage: number = Number(searchParams.get("page") || "1");

	function setPage(next: boolean): void {
		let params: URLSearchParams = new URLSearchParams(searchParams);

		const Newpage: string = next
			? String(currentPage + 1)
			: String(currentPage - 1);
		params.set("page", Newpage);

		setSearchParams(params);
	}

	return (
		<section className="p-layout flex flex-row justify-between items-center w-full rounded-2xl bg-white">
			<h5 className="text-sm sm:text-base text-gray-700">
				Halaman ke {currentPage}
			</h5>
			<div className="flex flex-row gap-1 sm:gap-4">
				<button
					disabled={currentPage === 1}
					onClick={() => setPage(false)}
					className={`${
						currentPage === 1
							? "btn text-gray-800 bg-gray-200"
							: "btn-secondary"
					}`}
				>
					Sebelumnya
				</button>
				<button onClick={() => setPage(true)} className="btn-secondary">
					Selanjutnya
				</button>
			</div>
		</section>
	);
}

import { Link } from "@remix-run/react";

export default function ErrorCard({
	errorText,
}: {
	errorText: boolean;
}): JSX.Element {
	return (
		<div className="flex flex-col w-full min-h-screen justify-center items-center">
			<div className="p-layout flex flex-col justify-center items-center gap-1 text-center w-[22rem] sm:w-[26rem] rounded-xl bg-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="w-12 h-12 mb-2"
					viewBox="0 0 16 16"
				>
					{" "}
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
					<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />{" "}
				</svg>
				<h1 className="headline">
					{errorText ? "Error" : "Film tidak ditemukan!"}
				</h1>
				<h4>
					{errorText
						? "Terjadi kesalahan tidak diketahui, silahkan periksa jaringan anda"
						: "Silahkan masukkan kembali Judul Film yang kamu cari"}
				</h4>
				<Link
					to={"/"}
					className="mt-2 text-base sm:text-lg text-primary hover:brightness-75 duration-200"
				>
					Kembali ke halaman awal
				</Link>
			</div>
		</div>
	);
}

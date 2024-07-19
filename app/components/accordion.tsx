import { ReactNode, useState } from "react";

export default function Accordion({
	children,
	title,
}: {
	children: ReactNode;
	title: string;
}): JSX.Element {
	const [show, setShow] = useState<boolean>(false);

	return (
		<div
			className={`overflow-hidden rounded-xl ${
				show && "bg-gray-50"
			} duration-200`}
		>
			<section
				onClick={() => setShow(!show)}
				className="p-layout flex flex-row justify-between w-full rounded-xl bg-white hover:bg-gray-200 active:bg-white duration-200 cursor-pointer"
			>
				<h4 className="font-medium">{title}</h4>
				<div
					className={`flex flex-col justify-center items-center ${
						show && "rotate-180"
					} duration-200`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						fill="#00BFFF"
						className="w-6 h-6"
					>
						<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
					</svg>
				</div>
			</section>
			{show && (
				<section
					className={`p-layout ${
						show ? "scale-100 opacity-100" : "scale-0 opacity-0"
					} origin-top w-full min-h-[6rem] bg-gray-50 duration-200`}
				>
					{children}
				</section>
			)}
		</div>
	);
}

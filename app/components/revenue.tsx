import Accordion from "./accordion";
import List from "./list";

export default function Revenue({
	Country,
	Awards,
	BoxOffice,
}: {
	Country: string;
	Awards: string;
	BoxOffice: string;
}): JSX.Element {
	return (
		<Accordion title="Pendapatan">
			<div className="flex flex-col gap-4">
				<List properties="Negara" value={Country} />
				<List properties="Penghargaan" value={Awards} />
				<List properties="Box Office" value={BoxOffice} />
			</div>
		</Accordion>
	);
}

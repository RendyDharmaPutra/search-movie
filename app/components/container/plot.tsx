import Accordion from "../accordion";

export default function Plot({ Plot }: { Plot: string }): JSX.Element {
	return (
		<Accordion title="Plot">
			<p className="text-sm sm:text-base text-gray-600">{Plot}</p>
		</Accordion>
	);
}

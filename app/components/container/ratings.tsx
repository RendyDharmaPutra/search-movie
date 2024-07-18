import Accordion from "../accordion";
import List from "../list";

export default function Ratings({
	Ratings,
}: {
	Ratings: rating[];
}): JSX.Element {
	return (
		<Accordion title="Penilaian">
			<div className="flex flex-col gap-4">
				{Ratings.map((rating: rating) => {
					return (
						<List
							key={rating.Source}
							properties={rating.Source}
							value={rating.Value}
						/>
					);
				})}
			</div>
		</Accordion>
	);
}

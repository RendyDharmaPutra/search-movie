export default function List({
	properties,
	value,
}: {
	properties: string;
	value: string;
}): JSX.Element {
	return (
		<div>
			<h4 className="font-semibold">{properties}</h4>
			<p className="text-sm sm:text-base text-gray-700">{value}</p>
		</div>
	);
}

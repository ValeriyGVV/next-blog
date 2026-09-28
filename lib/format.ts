


export function excerpt(content: string) {
	let compact = content.replace(/\s+/g, " ").trim();
	if (compact.length > 160) {
		compact = compact.slice(0, 160).trimEnd() + "...";
	}
	return compact;
}

function parseDateOnly(value: string) {
	console.log("value", value);
	const date = new Date(`${value}T00:00:00.000Z`);
console.log("date:",date);
	if (
		Number.isNaN(date.getTime()) || 
		date.toISOString().slice(0, 10) !== value
	) {
		throw new TypeError(`Некоректна дата: ${value}`);
	}
	return date;
}

export function formatDate(value:string, locale="ru-RU") {
	const date = parseDateOnly(value)
	const formatter =  new Intl.DateTimeFormat(locale,{
		day: "numeric",
		month:"long",
		year: "numeric",
		timeZone:"UTC",
});
  const formattedDate = formatter.format(date);
	return formattedDate;
}

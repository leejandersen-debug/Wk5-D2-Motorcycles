export const motorcycles = [
	{
		brand: 'Honda',
		model: 'CRF110F',
		ageGroup: 'Kids (6–9 yrs)',
		size: '110cc',
		stroke: '4-stroke',
		options: 'Semi-automatic clutch, electric start, adjustable seat height',
	},
	{
		brand: 'Kawasaki',
		model: 'KX65',
		ageGroup: 'Youth (10–13 yrs)',
		size: '65cc',
		stroke: '2-stroke',
		options: 'Manual clutch, kick start, liquid-cooled engine',
	},
	{
		brand: 'Yamaha',
		model: 'YZ85',
		ageGroup: 'Youth (12–15 yrs)',
		size: '85cc',
		stroke: '2-stroke',
		options: '6-speed gearbox, manual clutch, adjustable suspension',
	},
	{
		brand: 'Suzuki',
		model: 'RM-Z250',
		ageGroup: 'Teen/Adult (15+ yrs)',
		size: '250cc',
		stroke: '4-stroke',
		options: '5-speed gearbox, electric start, Showa suspension',
	},
	{
		brand: 'KTM',
		model: '50 SX',
		ageGroup: 'Kids (4–6 yrs)',
		size: '50cc',
		stroke: '2-stroke',
		options: 'Automatic clutch, adjustable power valve, disc brakes',
	},
	{
		brand: 'Husqvarna',
		model: 'TC 65',
		ageGroup: 'Youth (10–13 yrs)',
		size: '65cc',
		stroke: '2-stroke',
		options: 'Manual clutch, WP suspension, kick start',
	},
	{
		brand: 'GasGas',
		model: 'MC 85',
		ageGroup: 'Youth (12–15 yrs)',
		size: '85cc',
		stroke: '2-stroke',
		options: '6-speed gearbox, aluminum frame, manual clutch',
	},
	{
		brand: 'Triumph',
		model: 'TF 250-X',
		ageGroup: 'Teen/Adult (15+ yrs)',
		size: '250cc',
		stroke: '4-stroke',
		options: '5-speed gearbox, electric start, Showa suspension',
	},
	{
		brand: 'Beta',
		model: 'RR 125',
		ageGroup: 'Teen/Adult (14+ yrs)',
		size: '125cc',
		stroke: '2-stroke',
		options: '6-speed gearbox, enduro-ready lighting kit',
	},
	{
		brand: 'Ducati',
		model: 'Desmo450 MX',
		ageGroup: 'Adult / Pro',
		size: '450cc',
		stroke: '4-stroke',
		options: 'Desmodromic valve train, electric start, Öhlins suspension',
	},
	{
		brand: 'Cobra Moto',
		model: 'CX50',
		ageGroup: 'Kids (4–7 yrs)',
		size: '50cc',
		stroke: '4-stroke',
		options: 'Automatic clutch, adjustable seat height, training-wheel compatible',
	},
];

/** Numeric engine size in cc, for sorting. */
export function sizeInCc(bike) {
	return parseInt(bike.size, 10);
}

/** Age group with the specific year range stripped off, e.g. "Youth (10–13 yrs)" -> "Youth". */
export function ageCategory(bike) {
	const match = bike.ageGroup.match(/^([^(]+)/);
	return match ? match[1].trim() : bike.ageGroup;
}

/** URL-safe slug for an age category, e.g. "Teen/Adult" -> "teen-adult". */
export function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

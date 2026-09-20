/** Short badge text for a brand, e.g. "Honda" -> "HO", "KTM" -> "KTM", "Cobra Moto" -> "CM". */
export function brandInitials(brand) {
	const words = brand.trim().split(/\s+/);
	if (words.length === 1) {
		const word = words[0];
		return word === word.toUpperCase() && word.length <= 4
			? word
			: word.slice(0, 2).toUpperCase();
	}
	return words
		.slice(0, 2)
		.map((word) => word[0].toUpperCase())
		.join('');
}

/** Deterministic hue (0-359) derived from a brand name, so each brand gets a stable color. */
export function brandHue(brand) {
	let hash = 0;
	for (let i = 0; i < brand.length; i++) {
		hash = brand.charCodeAt(i) + ((hash << 5) - hash);
	}
	return Math.abs(hash) % 360;
}

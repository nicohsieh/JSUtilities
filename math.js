export function clamp(val, min, max) {
	return val > max ? max : val < min ? min : val
}

export function map(val, start1, end1, start2, end2) {
	const perc = (val - start1) / (end1 - start1)
	return perc * (end2 - start2) + start2
}

export function inRange(val, start, end) {
	return val >= start && val <= end
}

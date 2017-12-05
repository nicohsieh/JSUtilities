/*
	
	Get the right prefix when setting CSS in JS

*/

const prefixes = ['', 'webkit', 'Moz', 'ms']
const emptyStyle = document.createElement('div').style

export function prefixPropName(key) {
	const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1)
	for (let i = 0; i < prefixes.length; i++) {
		const prefix = prefixes[i]
		const name = prefix === '' ? key : prefix + capitalizedKey

		if (name in emptyStyle) {
			return name
		}
	}

	return key
}

/*
	add CSS property names that need to be supported
*/
const DICT = {
	transform: prefixPropName('transform')
}

/*
	prefixCssObject

	@ param { object }
		an object containing CSS style
	@return { object }
		an object that has prefixed style according to the DICT
*/
export function prefixCssObject(obj) {
	for (const key in DICT) {
		if (obj.hasOwnProperty(key)) {
			const prefixedKey = DICT[key]
			obj[prefixedKey] = obj[key]
		}
	}

	return obj
}

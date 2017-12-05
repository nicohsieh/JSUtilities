export function parseQueryString() {
	const query = {}
	const string = window.location.search
	if (string.length > 0) {
		const array = (string[0] === '?' ? string.substr(1) : string).split('&')
		for (let i = 0; i < array.length; i++) {
			const pair = array[i].split('=')
			query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
		}
	}

	return query
}

export function getValueFromQueryString(name) {
	const obj = parseQueryString()
	if (typeof obj[name] !== 'undefined') {
		return obj[name]
	}
	return null
}

export function constructQueryString(obj) {
	const currentQueryObj = parseQueryString()
	const newQueryObj = Object.assign(currentQueryObj, obj)
	let string = '?'
	Object.keys(newQueryObj).forEach(name => {
		const val = newQueryObj[name]
		string += `${name}=${val}&`
	})
	string = string.substring(0, string.length - 1)
	return string
}

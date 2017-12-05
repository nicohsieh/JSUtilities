export function getCookie(name) {
	const re = new RegExp(`${name}=([^;]+)`)
	const results = document.cookie.match(re)
	if (results) {
		return results[1]
	}
	return null
}

export function setCookie(name, val, lifespan = 86400000 * 7) {
	// lifesapn defaults to a week
	const exp = new Date(Date.now() + lifespan)
	document.cookie = `${name}=${val}; expires=${exp}; path=/;`
}

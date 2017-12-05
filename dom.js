export function injectStylesheet(href, target = document.head) {
	const tag = document.createElement('link')
	tag.rel = 'stylesheet'
	tag.href = href

	target.appendChild(tag)
}

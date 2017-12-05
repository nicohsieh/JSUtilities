/*

Available qualities:
	'maxresdefault'
	'hqdefault'
	'mqdefault'
	'sddefault'
	'default'
	
	*Note: `maxresdefault` is not always available, Youtube only generates it for high quality videos
*/

export function getDefaultThumbnailUrl(videoId, quality = 'hqdefault') {
	return `//img.youtube.com/vi/${videoId}/${quality}.jpg`
}

export function getIdFromUrl(url) {
	const splits = url.split('?v=')
	// assume YT Url
	if (splits.length > 1) {
		return splits[1].split('&')[0]
	}
	// assume YT id
	return url
}

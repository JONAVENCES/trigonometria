module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,js,eot,svg,ttf,woff,woff2,jpg,gif,JPG,png,json,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
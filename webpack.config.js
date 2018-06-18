module.exports = {
	entry: {
		'demo/dist/js/app.js' : './demo/src/js/app.js'
	},
	output: {
		path: require('path').resolve('.'),
		filename: '[name]',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			loader: 'babel-loader'
		}]
	}
}

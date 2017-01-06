module.exports = {
	entry: {
		'demo/dist/js/demo.js' : './demo/src/js/demo.js'
	},
	output: {
		path: '.',
		filename: '[name]',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			loader: 'babel-loader'
		}]
	}
}

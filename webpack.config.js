var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index.tsx'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [{
			test: /\.tsx?$/,
			loaders: ['babel', 'ts'],
			include: path.join(__dirname, 'src')
		}]
	},
	resolve: {
		root: [path.resolve('./src')],
		extensions: ['', '.jsx', '.js', '.tsx', '.ts']
	}
};

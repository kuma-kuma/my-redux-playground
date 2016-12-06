const config = {
	entry:{
		app: './src/index.js'
	},
	output: {
		path: './build',
		filename: '[name]-bundle.js'
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			}
		]
	}
};

module.exports = config;


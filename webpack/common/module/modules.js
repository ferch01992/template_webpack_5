module.exports = {
	rules : [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
			  loader: 'babel-loader'
			},
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}
	]
}
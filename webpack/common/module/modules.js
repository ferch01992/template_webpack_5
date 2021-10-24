module.exports = {
	rules : [
		{
			test: /\.(js|jsx)$/,
			use: {
			  loader: 'babel-loader'
			}
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}
	]
}
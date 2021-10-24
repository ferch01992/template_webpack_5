const path              = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = VERSION_APP => [
	new HtmlWebpackPlugin( {
		title    : 'My Profile',
		filename : 'index.html',
		//favicon  : 'PENDIENTE',
		template : path.resolve( __dirname, './../../../src/index.ejs' ),
		cache    : true,
		version  : VERSION_APP
	} )
]
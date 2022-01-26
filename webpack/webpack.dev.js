const { merge }  = require( 'webpack-merge' );
const common     = require( './webpack.common.js' );
const DEV_SERVER = require( './development/server/server.js' );

module.exports = merge( common, {
	mode         : 'development',

	devtool      : 'inline-source-map',

	watchOptions : { ignored : /node_modules/ },

	devServer    : DEV_SERVER
} );


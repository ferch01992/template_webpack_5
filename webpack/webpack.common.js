const path = require( 'path' );

const DATE        = new Date();
const TIME        = DATE.getTime();
const VERSION_APP = process.env.VERSION

const MODULE     = require('./common/module/modules.js');
const ALIAS      = require('./common/resolve/alias.js');
const EXTENSIONS = require('./common/resolve/extensions.js');
const PLUGINS    = require('./common/plugins/plugins.js');


module.exports = {
	entry   : {
		profile : {
			import   : path.resolve(__dirname, './../src/index.js'),
			filename : `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
		}
	},

	output  : {
		chunkFilename    : `js/[id].${VERSION_APP}.${TIME}.[contenthash].js`,
		chunkLoadTimeout : 30000,
		clean            : true,
		filename         : `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
		path             : path.resolve( __dirname, 'public' ),
		pathinfo         : true,
		uniqueName       : 'my-package-profile',
	},

	module : MODULE,

	resolve : { extensions : EXTENSIONS, alias : ALIAS },

	plugins : PLUGINS( VERSION_APP )
}
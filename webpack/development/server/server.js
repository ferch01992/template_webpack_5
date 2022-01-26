const path = require('path');

module.exports = {
	host         : '127.0.0.1',
	hot          : true,
	port         : 8080,
	compress     : true,
	static       : { directory : path.resolve( __dirname, 'public' ) },
	allowedHosts : 'all',
	client       : { overlay : true, progress : true },
	watchFiles   : [ 'src/**/*' ],
	open         : true
};


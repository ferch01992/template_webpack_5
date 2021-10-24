const path = require( 'path' );

module.exports = {
        host     : '127.0.0.1',
        port     : 8080,
        open     : true,
        compress : false,
        static : { directory : path.resolve( __dirname, 'public' ) }
};


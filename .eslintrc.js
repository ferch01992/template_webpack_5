module.exports = {
	'env' : {
		'browser' : true,
		'es2021'  : true,
		'node'    : true
	},
	'extends' : [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions' : {
		'ecmaFeatures' : {
			'jsx' : true
		},
		'ecmaVersion' : 'latest',
		'sourceType'  : 'module'
	},
	'plugins' : [ 'react' ],
	'globals': {
		'window'       : true,
		'document'     : true,
		'localStorage' : true,
		'FormData'     : true,
		'FileReader'   : true,
		'Blob'         : true,
		'navigator'    : true
	},
	'rules' : {
		'indent' : [
			'error',
			'tab'
		],
		'linebreak-style' : [
			'error',
			'unix'
		],
		'quotes' : [
			'error',
			'single'
		],
		'semi' : [
			'error',
			'always'
		]
	}
};

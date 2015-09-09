// Set configuration
seajs.config({
	base: "../sea-modules/",
	alias: {
	  "jquery": "jquery.js",
	  "IScroll": "IScroll.js",
	  "TouchSlide": "TouchSlide.js",
	  "sweetalert": "sweetalert.js",
	  "icheck": "icheck.js",
	  "tappy": "tappy"
	},
	preload: ['jquery'],
	charset: 'utf-8'
});
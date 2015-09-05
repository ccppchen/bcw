// Set configuration
seajs.config({
	base: "../sea-modules/",
	alias: {
	  "jquery": "jquery.min.js",
	  "iscroll": "iscroll.min.js",
	  "TouchSlide": "TouchSlide.1.1.js",
	  "sweetalert": "sweetalert.min.js",
	  "icheck": "icheck.min.js",
	  "tappy": "tappy"
	},
	preload: ['jquery'],
	charset: 'utf-8'
});
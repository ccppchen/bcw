define(function(require, exports, module) {
	var iscroll = require('iscroll');
	var main = require('./main');

	myScroll = new IScroll('#wrapper2', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false, click: true, tap: true });

});
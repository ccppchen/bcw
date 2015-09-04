define(function(require, exports, module) {
	var main = require('./main');
	var iscroll = require('iscroll');
	
	myScroll = new IScroll('#wrapper2', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false, click: true, tap: true });
});

define(function(require, exports, module) {

  	// var jquery = require('jquery');
	var touchSlide = require('TouchSlide');
	// var iscroll = require('iscroll');

	TouchSlide({ 
		slideCell:"#slideBox1",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		autoPage:true, //自动分页
		switchLoad:"_src"
	});
	TouchSlide({ 
		slideCell:"#scrollBox2",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		effect:"leftLoop", 
		autoPage:true, //自动分页
		switchLoad:"_src" //切换加载，真实图片路径为"_src" 
	});
	// var myscroll1=new IScroll("#wrapper",{hScrollbar:false, vScrollbar:false, click: true, tap: true});


});



define(function(require, exports, module) {

  	var jquery = require('jquery');
	var touchSlide = require('TouchSlide');
	var iscroll = require('iscroll');

	TouchSlide({ 
		slideCell:"#slideBox1",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		autoPage:true, //自动分页
		cancelable:true
		// switchLoad:"data-original"
	});
	TouchSlide({ 
		slideCell:"#scrollBox2",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		effect:"leftLoop", 
		autoPage:true, //自动分页
		cancelable:true
		// switchLoad:"data-original" //切换加载，真实图片路径为"data-original" 
	});
	TouchSlide({ 
		slideCell:"#scrollBox3",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		effect:"leftLoop", 
		autoPage:true, //自动分页
		cancelable:true
		// switchLoad:"data-original" //切换加载，真实图片路径为"data-original" 
	});
	// var myscroll1=new IScroll("#wrapper",{hScrollbar:false, vScrollbar:false, click: true, tap: true});
	myScroll = new IScroll('#wrapper2', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false, click: true, tap: true });


  	/*tab选项卡*/
	jQuery.Huitab =function(tabBar,tabCon,class_name,tabEvent,i){
	  	var $tab_menu=$(tabBar);
		// 初始化操作
		$tab_menu.removeClass(class_name);
		$(tabBar).eq(i).addClass(class_name);
		$(tabCon).hide();
		$(tabCon).eq(i).show();
		
		$tab_menu.on(tabEvent,function(){
			$tab_menu.removeClass(class_name);
			$(this).addClass(class_name);
			var index=$tab_menu.index(this);
			$(tabCon).hide();
			$(tabCon).eq(index).show();
		});
	}
	$.Huitab(".tabBar li",".barContent .cp-scroll-box","current","tap","0");
	//javascript Document gotop
	function chinaz(){
		this.init();
	}
	chinaz.prototype = {
		constructor: chinaz,
		init: function(){		
			this._initBackTop();
		},	
		_initBackTop: function(){
			var $backTop = this.$backTop = $('<div class="cp-gotop">顶部</div>');
			$('body').append($backTop);
			
			$backTop.on('click', function(){
				$("html, body").animate({
					scrollTop: 0
				}, 300);
			})

			var timmer = null;
			$(window).bind("scroll",function() {
	            var d = $(document).scrollTop(),
	            e = $(window).height();
	            e < d ? $backTop.css("bottom", "100px") : $backTop.css("bottom", "-100px");
				clearTimeout(timmer);
				timmer = setTimeout(function() {
	                clearTimeout(timmer)
	            },100);
		   });
		}
		
	}
	var chinaz = new chinaz();
});



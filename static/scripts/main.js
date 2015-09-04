define(function(require, exports, module) {
  	var jquery = require('jquery');

	// searchInput
	function backSearch(){
		var clientHeight = $('.item-input-wrapper').width();
		var right = (clientHeight - 15);  
		$('.icon-search.cp-icon-search').css({'left': right + 'px' });
		$('.searchInput').css('padding-left', '5px');
	}
	$('.searchInput').on('blur', function(){
		$('.icon-search.cp-icon-search').css({'left': '5px'});
		$(this).css('padding-left', '34px');
	});
	$('.searchInput').on('focus', function(){
		backSearch();
	});
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



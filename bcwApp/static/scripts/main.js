define(function(require, exports, module) {
  	require('jquery');
  	require('tappy');
  	require('echo');
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
	function Huitab(tabBar,tabCon,class_name,tabEvent,i){
	  	var $tab_menu=$(tabBar);
		// 初始化操作
		$tab_menu.removeClass(class_name);
		$(tabBar).eq(i).addClass(class_name);
		$(tabCon).hide();
		$(tabCon).eq(i).show();
		
		$tab_menu.on(tabEvent,function(){
			echo.init();
			$tab_menu.removeClass(class_name);
			$(this).addClass(class_name);
			var index=$tab_menu.index(this);
			$(tabCon).hide();
			$(tabCon).eq(index).show();
		});
	};
	exports.Huitab = Huitab;

	// index
	Huitab(".tabBar li",".barContent .cp-scroll-box","current","tap","0");

	// user-my-dd
	Huitab(".cp-user-dingdan-hd li",".cp-user-dingdan-bd .con","on","tap","0");

	// classify.html
	
	// 折叠
	function Huifold(obj,obj_c,speed,obj_type,Event){
		if(obj_type == 2){
			// $(obj+":first").find("b").html("-");
			$(obj_c+":first").show();
		}
		$(obj).bind(Event,function(){

			$(this).find('.icon-icon-arrow-right').toggleClass('curr');
			$(this).find('.icon-icon-arrow-bottom').toggleClass('curr');

			if($(this).next().is(":visible")){
				if(obj_type == 2){
					return false;
				}
				else{
					$(this).next().slideUp(speed).end();
					$(this).find("b").html("+");
				}
			}
			else{
				if(obj_type == 3){
					$(this).next().slideDown(speed).end();
					$(this).find("b").html("-");
				}else{
					$(obj_c).slideUp(speed);
					$(obj).removeClass("selected");
					$(obj).find("b").html("+");
					$(this).next().slideDown(speed).end();
					$(this).find("b").html("-");
				}
			}
		});
	};

	exports.Huifold = Huifold;
	// detale.html
	Huifold("#Huifold1 .cp-help-list .item","#Huifold1 .cp-help-list .item-hide","fast",3,"tap"); /*5个参数顺序不可打乱，分别是：相应区,隐藏显示的内容,速度,类型,事件*/
	// user-my-dd.html
	Huifold(".cp-user-dd-con .list > .item",".cp-user-dd-con .list .item-hide","fast",3,"tap");

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
			
			$backTop.on('tap', function(){
				$("html, body").animate({
					scrollTop: 0
				}, 300);
			})

			var timmer = null;
			$(window).bind("scroll scrollEnd",function() {
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
	
	// password-chang 输入数据后按钮去掉不可点击
	$('.cp-password-change .item-input > input').on('keyup', function(){
		var thisInputLenght = $(this).val().length;
		var thisSiblingsLength = $(this).parent('.item-input').siblings().children('input').val().length;
		if ((thisInputLenght <= 5 || thisInputLenght >= 17) && (thisSiblingsLength <= 5 || thisSiblingsLength >=17)) {
			$('.cp-button-disabled').removeClass('button-assertive').addClass('button-disabled');
		}else{
			$('.cp-button-disabled').removeClass('button-disabled').addClass('button-assertive');
		}
	});
	// alert
	$('.icon-icon-heat').on('tap', function(){
		// 点击心型 变红色
		$(this).toggleClass('curr');
	});


	require('./user');
	
	
	
});



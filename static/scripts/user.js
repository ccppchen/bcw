define(function(require) {
	var jquery = require('jquery');
	var tappy = require('tappy');
	var sweetalert = require('sweetalert');

	$(function(){
		$('#custom').on('tap', function(){
			swal({
				title: "0571-56588825",
				text: "客服热线每天 09:00 -24:00",
	  			showCancelButton: true,
	  			confirmButtonColor: "#DD6B55",
	  			cancelButtonText: "取消",
	  			confirmButtonText: "呼叫"
			}, function(){
				// alert(1);点击呼叫后的回调
			});
		});

		// user-my-dd  确认收货弹出层
		$('.confirmThing').on('tap', function(){
			swal({
				title: "确认收货",
				text: "请输入支付密码",
				type: "input",
				inputType: "password",
				showCancelButton: true,
				closeOnConfirm: false,
				animation: "slide-from-bottom",
				inputPlaceholder: "",
				cancelButtonText: "取消",
				confirmButtonText: "确定"
			}, function(inputValue){
				if (inputValue === false) return false;
				if (inputValue === "") {
					swal.showInputError("支付密码不能为空");
					return false;
				}
				if (inputValue.length < 6 || inputValue.length > 18) {
					swal.showInputError("支付密码长度不对");
					return false;
				}
				swal({
					title: "确认收货成功!",
					text: "",
					type: "success",
					animation: "none",
				});
			});
		});
	});
});
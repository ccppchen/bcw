define(function(require, exports, module) {
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
		})
	});
});
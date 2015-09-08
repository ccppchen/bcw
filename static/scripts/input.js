define(function(require){
	require('jquery');

	require('icheck');

	require('tappy');

	// radio checkbox
	$('.cp-radio input:radio').iCheck({ 
	  labelHover : false, 
	  cursor : true, 
	  checkboxClass : 'icheckbox_minimal-red', 
	  radioClass : 'iradio_minimal-red', 
	  increaseArea : '20%' 
	});

	// radio checkbox
	$('.address-list input').iCheck({ 
	  labelHover : false, 
	  cursor : true, 
	  checkboxClass : 'icheckbox_square-red', 
	  radioClass : 'iradio_square-red', 
	  increaseArea : '20%' 
	});

	// $('.address-list .item input').on('tap', function(){
	// 	$(this).iCheck('check');
	// });
});
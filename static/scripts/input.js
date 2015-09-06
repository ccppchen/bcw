define(function(require){
	require('jquery');

	require('icheck');

	// radio checkbox
	$('input').iCheck({ 
	  labelHover : false, 
	  cursor : true, 
	  checkboxClass : 'icheckbox_minimal-red', 
	  radioClass : 'iradio_minimal-red', 
	  increaseArea : '20%' 
	});

});
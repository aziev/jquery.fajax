$(document).ready(function(argument) {
	
	$('form').fajax({
		beforeSend: function(){
			$('.form').addClass('loading');
			$('.message,.form').removeClass('error success');
			$('.message').removeClass('hidden');
		},
	    complete: function(){
	        $('.form').removeClass('loading');
	    },
	    success: function(data){
	    	console.log(data);
	    	$('.message,.form').addClass('success');
	    	$('.message .header').text('Form Completed!');
	    	$('.message p').text('Your form successfully sent!');
	    },
	    error: function(data){
	    	console.log(data);
	    	$('.message,.form').addClass('error');
	    	$('.message .header').text('Action Forbidden!');
	    	$('.message p').text('When sending a request, the server generated an error :(');
	    }
	});

	$('.ui.checkbox').checkbox();

});
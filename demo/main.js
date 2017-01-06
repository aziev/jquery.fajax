$(document).ready(function() {
	
	$('form').fajax({
		beforeSend: function(){
			$('.form').addClass('loading');
			$('.message,.form').removeClass('error success');
			$('.message').removeClass('hidden');
		},
	    complete: function(data){
	    	console.log(data);
	        $('.form').removeClass('loading');
	    },
	    success: function(){
	    	$('.message,.form').addClass('success');
	    	$('.message .header').text('Form Completed!');
	    	$('.message p').text('Your form successfully sent!');
	    },
	    error: function(){
	    	$('.message,.form').addClass('error');
	    	$('.message .header').text('Action Forbidden!');
	    	$('.message p').text('When sending a request, the server generated an error :(');
	    }
	});

	$('.ui.checkbox').checkbox();

});

$(document).ready(function(){
	var step = 10;
	$(document).keydown(function(event){
		event.preventDefault();
		var right_pos = parseInt($('.player').css('right'));
		var bottom_pos = parseInt($('.player').css('bottom'));

		//left
		if ( event.which == 37 ) {
			console.log('left');
		if(right_pos + step < 490)
		    $('.player').css('right', (right_pos + step) + 'px');
		}
		//right
		if ( event.which == 39 ) {
			console.log('right');
		 if(right_pos - step > -10)
		    $('.player').css('right', (right_pos - step) + 'px');
		}
		//top
		if ( event.which == 38 ) {
			console.log('top');
			if(bottom_pos + step < 490)
		    $('.player').css('bottom', (bottom_pos + step) + 'px');
	        }
		//bottom
		if ( event.which == 40 ) {
			console.log('bottom');
			if(bottom_pos - step > -10)
		    $('.player').css('bottom', (bottom_pos - step) + 'px');
		}
		
	});
})

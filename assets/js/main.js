$(document).ready(function(){
	var step = 10;
	$(document).keydown(function(event){
		event.preventDefault();
		var right_pos = parseInt($('.player').css('right'));
		var bottom_pos = parseInt($('.player').css('bottom'));
		//left
		if ( event.which == 37 ) {
			console.log('left');
		    $('.player').css('right', (right_pos + step) + 'px');
		}
		//right
		if ( event.which == 39 ) {
			console.log('right');
		    $('.player').css('right', (right_pos - step) + 'px');
		}
		//top
		if ( event.which == 38 ) {
			console.log('top');
		    $('.player').css('bottom', (bottom_pos + step) + 'px');
	        }
		//bottom
		if ( event.which == 40 ) {
			console.log('bottom');
		    $('.player').css('bottom', (bottom_pos - step) + 'px');
		}
	});
})

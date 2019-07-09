$(document).ready(function(){
	var step = 10;
	$(document).keydown(function(event){
		event.preventDefault();
		var right_pos = parseInt($('.player').css('right'));

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
	});
})
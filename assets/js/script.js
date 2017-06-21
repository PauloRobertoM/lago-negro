(function($, window) {
	$('.parallax-window2').parallax({imageSrc: 'assets/images/slide4.jpg'});

	$('.nav a').on('click', function(){
	    $('.btn-navbar').click(); //bootstrap 2.x
	    $('.navbar-toggle').click() //bootstrap 3.x by Richard
	});

	var clock = $('.clock').FlipClock(3600 * 24 * 33, {
		clockFace: 'DailyCounter',
		countdown: true
	});
})(jQuery, window);
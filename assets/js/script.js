(function($, window) {
	$('.parallax-window2').parallax({imageSrc: 'assets/images/slide4.jpg'});

	$('.nav a').on('click', function(){
	    $('.btn-navbar').click(); //bootstrap 2.x
	    $('.navbar-toggle').click() //bootstrap 3.x by Richard
	});

	$(function () {
            //change the date formate
            var seconds = getCountDownTime('7/23/2017 07:00');

            //alert(seconds);  //add an alert to check the time span

            $('.clock').FlipClock( seconds, {
                clockFace: 'DailyCounter',
                countdown: true,
                language:'pt-br'
            });
        });

        function getCountDownTime(eventDate) {
            var date = new Date(eventDate);
            var now = new Date();
            var diff = (date - now) / 1000;
            return diff;
        }
})(jQuery, window);
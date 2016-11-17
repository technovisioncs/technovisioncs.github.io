;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
			$('a[href^="#"]').on('click',function (e) {
			    e.preventDefault();

			    var target = this.hash,
			    $target = $(target);

			    $('html, body').stop().animate({
			        'scrollTop': $target.offset().top
			    }, 900, 'swing', function () {
			        window.location.hash = target;});
			});

			// code for lan.html
			$('.closebtn').on('click', function(e) {
				$('.sr-overlay').css('width','0');
			});
			$('#mm').on('click', function(e){
				$('#mm-panel').css('width','100%');
			});
			$('#cs').on('click', function(e){
				$('#cs-panel').css('width','100%');
			});
			$('#fifa').on('click', function(e){
				$('#fifa-panel').css('width','100%');
			});

})(jQuery)

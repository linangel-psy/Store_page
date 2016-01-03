;$( document ).ready( function() {
	(function($) {
		$('.accordion__title').click(function(event) {
			if ($(this).hasClass('accordion__title_open')) {
				event.preventDefault();
				$(this).nextAll().slideUp('slow');
				$(this).removeClass('accordion__title_open').addClass('accordion__title_closed');
			} else if ($(this).hasClass('accordion__title_closed')) {
				event.preventDefault();
				$(this).nextAll().slideDown('slow');
				$(this).removeClass('accordion__title_closed').addClass('accordion__title_open');
			}
		});

	})(jQuery);
});
;$( document ).ready( function() {
	$('.accordion-section__color').click(function(event) {
		event.preventDefault();
		$('.accordion-section__color').removeClass('accordion-section__color_active');
		$(this).addClass('accordion-section__color_active');
	});
	$('.asaide-section__link').click(function(event) {
		event.preventDefault();
		$('.asaide-section__link').removeClass('asaide-section__link_active')
		$(this).addClass('asaide-section__link_active')
	});
});
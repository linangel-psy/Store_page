;$( document ).ready( function() {
	$('.accordion-section__clear').click(function(event) {
		event.preventDefault();
		$(this).parent().find('input[type="checkbox"]').prop('checked', false);
	});
});


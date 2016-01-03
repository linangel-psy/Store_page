;$( document ).ready( function() {
	var classes = {
		'sort__link_list-block': 'products_list-block',
		'sort__link_list': 'products_list',
		'sort__link_block': 'products_block'
	};
	$('.sort__link').click(function(event){
		event.preventDefault();
		$('.sort__type_active').removeClass('sort__type_active');
		$(this).parent().addClass('sort__type_active');
		for ( var key in classes) {
			$('.products').removeClass(classes[key])
			if ($(this).hasClass(key)) {
				$('.products').addClass(classes[key])
			}
		};
	});
});
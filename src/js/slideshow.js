;$( document ).ready( function() {
	$('.product__img-box_mini > img').click(function(){
		var src = $(this).attr('src')
		$(this).parentsUntil($('.product__box')).find($('.product__img-box_big > img')).attr('src', src)
	})
});
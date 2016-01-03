;$( document ).ready( function() {
	var check = true;
	var changeClass = function(){
		$('.sort__item_list-label').toggleClass('sort__item_list-label_closed sort__item_list-label_open');
		check = !check;
	};
	var open = function(){
		$('.sort__item_list').show();
		changeClass();
	};
	var close = function(){
		$('.sort__item_list').hide();
		changeClass();
	};
	$('.sort__item_list-label').click(function(){
		if (check){
			open();
		}
		else {
			close();
		}
	});
	$('.sort__choice').click(function(){
		$('.sort__item_list-label').text($(this).text());
		close();
	});
});

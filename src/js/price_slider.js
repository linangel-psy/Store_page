;$( document ).ready( function() {
	$(function() {
		$('#slider-range').slider({
			range: true,
			min: 0,
			max: 27000,
			values: [1000, 13000],
			slide: function(event, ui) {
				$('#price-min').val(ui.values[0])
				$('#price-max').val(ui.values[1]);
			}
		});
		$('#price-min').val($('#slider-range').slider('values', 0));
		$('#price-max').val($('#slider-range').slider('values', 1));
	});
});
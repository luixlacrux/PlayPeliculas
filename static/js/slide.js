var indicador = 0;
var slide_width = $(".form_container").width();

$(document).on('ready',function(){
	$('.left').on('click', function(e){
		e.preventDefault;
		moveSlider('left');
	});
	$('.right').on('click', function(e){
		e.preventDefault;
		moveSlider('right');
	});
	//defineSizes();
	$( window ).resize(function() {
		slide_width = $(".form_container").width();
	});
});

function moveSlider(direccion){
	var limite = $('.slide a').length;
	speed= new Array(173,346,519)
	repeat = new Array(2,3,4) 

	if (slide_width > 800){
		velocidad = speed[1]
		veces = repeat[0]
	}
	if (direccion=='right'){
		indicador++

		if (indicador > veces) {
			indicador = 0
		}
	}else if(direccion == "left"){	
		indicador--

		if (indicador < 0) {
			indicador = limite - limite + veces; 
		};
	} 
	$('.form_container .slideContainer').animate({
		'margin-left': -(indicador * velocidad)+'px'
	});
	
	/*indicador = (direccion == 'right') ? indicador + 1 : indicador - 1;
	indicador = (indicador >= limite) ? 0 : indicador;
	indicador = (indicador < 0) ? limite - 1 : indicador;
*/
	
}
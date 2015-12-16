$(function() {
    //seleccionamos el div que contiene el texto y los botones
    var $contenedor =  $('.form_container');

    //código que se va a ejecutar al presionar el botón btnAbajo
    $('.right').click(
      function (e) {
      	var porn = $contenedor.scrollLeft();

      	$contenedor.animate({scrollLeft: $contenedor.width()}, 800);

      		//el método animate crea una animación mediante
      		//las propiedades otorgadas como primer parámetro
      		//y la velocidad indicada como segundo
      	      	
      	console.log($contenedor.width())      	
      });

    //código que se va a ejecutar al presionar el botón btnArriba
    $('.left').click(
      function (e) {
 
        $contenedor.animate({scrollLeft: "0px"}, 800);

      	console.log($contenedor.width())
        
      }
    );
});

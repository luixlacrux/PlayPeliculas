$(document).ready(main);


function main () {
	// Mostrar y Ocultar Opacidad
	function opacityOn(ocultar){
		$(".u-bodyOpacity").fadeIn();
		$(".u-bodyOpacity").click(ocultar);
	}

	function opacityOff(){
		$(".u-bodyOpacity").fadeOut();
	}
	
	// Mostrar y Ocultar Ligthbox
	$(".Pelicula-item").click(mostrarligthbox);
	$(".Cartelera-items").click(mostrarligthbox);
	$(".minDescrip-link").click(mostrarligthbox);
	$(".Descripcion-btCerrar").click(ocultarligthbox);

	function mostrarligthbox(ev){
	    ev.preventDefault();
	    opacityOn(ocultarligthbox);
	    $(".Descripcion").fadeIn();
	              
	}

	function ocultarligthbox(ev){
	    ev.preventDefault();
	    opacityOff();
	    $(".Descripcion").fadeOut();
	              
	}

	//Mostrar y Ocultar Menu Mobile
	
		var $buttonShowMenu = $("#show-menu");
		var $buttonHideMenu = $("#hide-menu");
		var $menu = $(".Menu");

		if (window.matchMedia("(max-width : 700px)").matches){

			var $body = document.querySelector('body')
			var body = new Hammer($body);

			body.on('panright', showMenu)
			body.on('panleft', hideMenu)

		}

		function showMenu(){
			$buttonShowMenu.removeClass('is-active')
			$buttonHideMenu.addClass('is-active')
			$menu.addClass('is-active'); 
		}

		function hideMenu(){
			$buttonShowMenu.addClass('is-active')
			$buttonHideMenu.removeClass('is-active')
			$menu.removeClass('is-active');
		}

		$buttonShowMenu.on("click", showMenu);
		$buttonHideMenu.on("click", hideMenu);
		


	//BarraBuscar Mobile
	$(".botonBuscar").on('click',function(ev){
		ev.preventDefault();
		var contenido=$(this).next(".accordion-content");
      
	   if(contenido.css("display")=="none"){ //open   
	   	contenido.slideDown(250);   

	   	$(this).addClass("icon-cross");
	   	$(this).removeClass("icon-search");

	   }else{ //close    
	   	contenido.slideUp(250);
	 
	   	$(this).addClass("icon-search");
	   	$(this).removeClass("icon-cross");
	   }
	});

}

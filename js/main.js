
/*acciones galeria/proyectos.html*/

$(document).ready(function(){
	$('.enlaces').click(function(){
		var valor = $(this).data('nombre'); /*cambió acá*/
		if(valor == 'todos'){
			$('.filtro').show('1000');
		}else{
			$('.filtro').not('.' + valor).hide('1000');
			$('.filtro').filter('.' + valor).show('1000');
		}
		$('ul .enlaces').click(function(){
			$('ul .enlaces').removeClass('activo');
			$(this).addClass('activo');
		});
	});
});

/*acciones servicios.html*/

$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);

		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});

$(document).ready(function(){
	var ancho = $(window).width();

	if (ancho <= 1350){
		$('body').css({
			'background-size': 'initial'
		});
	}

});

$(document).ready(function(){


	//setTimeout("alert('hello')",500);
	setTimeout(function(){
			$(".back-to-top").toggle(700)
	},1000);


	//setTimeout(function(){
			
	//},4000);


	//setTimeout(function(){
	//		$(".back-to-top").hide();
	//},3000);
    //Cambiar color menu al scrollear
    $(window).scroll(function() {
    	if ($("#barra-superior").offset().top > 812) {
            $("#barra-superior").addClass("barraColor");
        } else {
            $("#barra-superior").removeClass("barraColor");
        }
    });


    //Aplicar easing.js para automatizar scroll
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeOutQuint');
		event.preventDefault();
	});

	
})


function closeVentanaEmergente(){
	$(".back-to-top").toggle(700);
}
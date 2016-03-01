$(document).ready(function() {
	
	var sections = [];
	var id = false;
	var scroll_id;
	var $navbar = $('.menu-navbar');
	var $navbara = $('a', $navbar);
	
	$navbara.click(function(e){
		$('html, body').animate({
			scrollTop : 
			$($(this).attr('href')).offset().top - $navbar.height()
		}, 1000)
		e.preventDefault();
	});
	
	$('a', $navbar).each(function(){
		sections.push($($(this).attr('href')));
	});
	
	$(window).scroll(function(){
		var scrolltop = $(this).scrollTop() + ($(window).height()/2);
		
		for(var i in sections){
			var section = sections[i];
			if(scrolltop > section.offset().top){
				scroll_id = section.attr('id');
			}
		}
		
		if(scroll_id !== id){
			id= scroll_id;
			
		$('a', $navbar).removeClass('is-active');
		$('a[href="#'+ id +'"]', $navbar).addClass('is-active');
		}
		
		 if ($(window).scrollTop() > 100) {
			$('.menu-navbar').addClass('menu-fixed');
			$('.header-logo').addClass('header-logobar');
		}
		if ($(window).scrollTop() < 100) {
		  	$('.menu-navbar').removeClass('menu-fixed');
			$('.header-logo').removeClass('header-logobar');
		}
	});
	
});


hash = function(h){
	if(history.pushState){
		history.pushState(null,null,h);
	}else{
		location.hash = h;
	}
}
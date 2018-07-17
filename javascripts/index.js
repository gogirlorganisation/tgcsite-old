$('.show-submenu').on('mouseenter', function() {
	$('.submenu').addClass('visible');
});

var stay = false;

$('.show-submenu').on('mouseleave', function() {
	setTimeout(function() {
		if(!stay)
			$('.submenu').removeClass('visible');
	});
});

$('.submenu').on('mouseenter', function() {
	stay = true;
});

$('.submenu').on('mouseleave', function() {
	stay = false;
	$(this).removeClass('visible');
});

$('.hamburger-container').on('click', function() {
	$(this).toggleClass('close');
	$('header > div nav').toggleClass('active');
});

$('header nav').on('click', function() {
	if($(window).width() < 1024) {
		$('.hamburger-container').click();
	}
});

$('header nav a').on('click', function(e) {
	if($(window).width() < 1024) {
		e.stopPropagation();
	}
});
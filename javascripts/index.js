$('.show-submenu').on('mouseenter', function () {
	$('.submenu').addClass('visible');
});

var stay = false;

// This is nonsense, pls ignore.
// 
// Wow I just commented a blank line, I'm so cool.
// Wow, I type pretty quickly, I should take a typing test.
// I've already taken many, my fastest typing speed is 82 WPM.
// Not thaaaat fast, but decent.
// 
// function changeOpacity {
// 	for (var i = 0; i < 10; ++i) {
// 		element.style.opacity = i / 10;
// 	}
// }
// 
// End of nonsense, you can stop ignoring now

$('.show-submenu').on('mouseleave', function () {
	setTimeout(function () {
		if (!stay)
			$('.submenu').removeClass('visible');
	});
});

$('.submenu').on('mouseenter', function () {
	stay = true;
});

$('.submenu').on('mouseleave', function () {
	stay = false;
	$(this).removeClass('visible');
});

$('.hamburger-container').on('click', function () {
	$(this).toggleClass('close');
	$('header > div nav').toggleClass('active');
});

$('header nav').on('click', function () {
	if ($(window).width() < 1024) {
		$('.hamburger-container').click();
	}
});

$('header nav a').on('click', function (e) {
	if ($(window).width() < 1024) {
		e.stopPropagation();
	}
});
(function ($) {

	"use strict";

	//Update Header Style and Scroll to Top
	function headerStyle() {
		var windowpos = $(window).scrollTop();
		var siteHeader = $('.mainHeader');
		var scrollLink = $('.scroll-to-top');
		var logoImg = $('#headerLogo');
		if (windowpos >= 200) {
			logoImg.attr('src', "/static/index/images/logo-1.png");
			siteHeader.addClass('fixed-nav');
			siteHeader.addClass('header-scoll');
			scrollLink.fadeIn(300);
		} else {
			logoImg.attr('src', "/static/index/images/logo-2.png");
			siteHeader.removeClass('header-scoll');
			siteHeader.removeClass('fixed-nav');
			scrollLink.fadeOut(300);
		}
	}

	headerStyle();
	// Scroll to a Specific Div
	$(".scroll-to-target").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1500);

	});

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}

	// get the current year 
    var date=new Date;
    var _year = date.getFullYear();  
    $('#year').text(_year);

	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});


})(window.jQuery);
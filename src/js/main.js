'use strict';

const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: true,
	// navigation: {
	// 	nextEl: '.arrow-right',
	// 	prevEl: '.arrow-left',
	// },
	pagination: {
		el: '.swiper-pagination',
	},
});

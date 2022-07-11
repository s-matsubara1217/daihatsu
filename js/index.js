
/*-------------------------------
	メインイメージ
-------------------------------*/
const mainVisual_swiper = new Swiper('.mainVisual__img', {
	slidesPerView: 1,
	spaceBetween: 40,
	loop: true,
	loopAdditionalSlides: 5,
	speed: 500,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	breakpoints: {
		834: {
			spaceBetween: 10
		}
	}
});

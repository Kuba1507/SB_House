var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 15,
	autoplay: {
		delay: 1500,
	},
});

var horizontalSwiper = new Swiper(".horizontalSwiper", {
	slidesPerView: "auto",
	centeredSlides: true,
	direction: "vertical",
	spaceBetween: 15,
	autoplay: {
		delay: 1500,
	},
});

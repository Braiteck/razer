$(() => {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: true,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onTranslate: (event) => {
			$(event.target).trigger('stop.owl.autoplay')
		},
		onTranslated: (event) => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})


	// Сертификаты
	$('.certs .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			480: {
				items: 2,
				margin: 20
			},
			768: {
				items: 3,
				margin: 20
			},
			1024: {
				items: 4,
				margin: 20
			},
			1180: {
				items: 4,
				margin: 43
			}
		}
	})
})
$(document).ready(function() {

	
	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');

		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	
});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */

	$(document).ready(function() {
		var counta = 0; // Variable global para controlar la animación
	
		$(window).scroll(function() {
			$('.single-count').each(function() {
				var $this = $(this);
				if (!$this.hasClass('counted')) { // Verifica si ya se contó este elemento
					var oTop = $this.offset().top - window.innerHeight;
					if ($(window).scrollTop() > oTop) {
						$('.count', $this).each(function() {
							var $thisCount = $(this),
								countTo = $thisCount.attr('data-count');
							$({
								countNum: $thisCount.text()
							}).animate({
								countNum: countTo
							}, {
								duration: 2000,
								easing: 'swing',
								step: function() {
									$thisCount.text(Math.floor(this.countNum));
								},
								complete: function() {
									$thisCount.text(this.countNum);
								}
							});
						});
						$this.addClass('counted'); // Marca este elemento como contado
					}
				}
			});
		});
	});

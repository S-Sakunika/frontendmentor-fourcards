$(document).ready(function() {

	// Customize svg circles
	var svgHeight = $('.card').outerHeight();
	var svgWidth = $('.card').outerWidth();

	$('.circle-overlay').attr('width', svgWidth);
	$('.circle-overlay').attr('height', svgHeight);

	$('.circle-overlay .circle1').attr('r', svgWidth/1.8);
	$('.circle-overlay .circle1').attr('cx', 80);
	$('.circle-overlay .circle1').attr('cy', -20);

	$('.circle-overlay .circle2').attr('r', svgWidth/2.5);
	$('.circle-overlay .circle2').attr('cx', svgWidth);
	$('.circle-overlay .circle2').attr('cy', -20);

	$('.circle-overlay').css({'transform': 'translateY(-'+svgWidth+'px)'})
	
	// Hover animation for cards
	$('.card').mouseenter(function() {
		var cardSelecter = '#' + $(this).attr('id') + ' .circle-overlay';
		anime({
		  targets: [cardSelecter],
		  translateY: 0,
		  duration: 500,
		  easing: 'easeOutCubic',
		  delay: anime.stagger(100)
		});
	});

	$('.card').mouseleave(function() {
		var cardSelecter = '#' + $(this).attr('id') + ' .circle-overlay';
		anime({
		  targets: [cardSelecter],
		  translateY: -svgWidth,
		  duration: 500,
		  easing: 'easeOutCubic',
		  delay: anime.stagger(100)
		});
	});
	
});
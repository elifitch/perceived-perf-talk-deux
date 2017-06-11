const bounceTL = new TimelineLite();
bounceTL.pause();
// bounceTL.staggerFrom('.js-anim-bounce span', 2, {
// 	delay: 1, 
// 	y: "-40%", 
// 	opacity: 0, 
// 	ease: Elastic.easeOut.config(1, 0.2)
// }, 0.05);
bounceTL.staggerFrom('.js-anim-bounce span', 1.5, {
	delay: 0, 
	y: "-50%", 
	opacity: 0, 
	ease: Elastic.easeOut.config(1, 0.3)
}, 0.05);

Reveal.addEventListener('fragmentshown', function(event) {
	if (event.fragment.classList.contains('js-anim-bounce')) {
		bounceTL.play();
	}
})
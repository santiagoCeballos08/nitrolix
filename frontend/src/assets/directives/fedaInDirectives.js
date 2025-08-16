import gsap from 'gsap';

export default {
	mounted(el) {
		gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' });
	},
};

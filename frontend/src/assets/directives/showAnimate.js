import gsap from 'gsap';

export default {
	mounted(el, binding) {
		if (!binding.value) {
			el.style.display = 'none';
		}
	},
	updated(el, binding) {
		if (binding.value && el.style.display === 'none') {
			// Mostrar con animación
			el.style.display = 'block';
			gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
		} else if (!binding.value && el.style.display !== 'none') {
			// Ocultar con animación
			gsap.to(el, {
				opacity: 0,
				duration: 0.5,
				ease: 'power2.in',
				onComplete: () => {
					el.style.display = 'none';
				},
			});
		}
	},
};

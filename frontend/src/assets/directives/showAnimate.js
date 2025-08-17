import gsap from 'gsap';

export default {
	mounted(el, binding) {
		if (!binding.value) {
			el.style.display = 'none';
		}
	},
	updated(el, binding) {
		if (binding.value && el.style.display === 'none') {
			// Mostrar con slide in
			el.style.display = 'block';
			gsap.fromTo(
				el,
				{ y: -50, opacity: 0 }, // empieza desplazado hacia arriba
				{ y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }, // baja rápido
			);
		} else if (!binding.value && el.style.display !== 'none') {
			// Ocultar con slide out
			gsap.to(el, {
				y: -50,
				opacity: 0,
				duration: 0.25,
				ease: 'power2.in',
				onComplete: () => {
					el.style.display = 'none';
				},
			});
		}
	},
};

import gsap from 'gsap';

export default {
	mounted(el) {
		// Estado inicial oculto
		gsap.set(el, { opacity: 0, y: 50 });

		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						gsap.to(el, {
							opacity: 1,
							y: 0,
							duration: 0.8,
							ease: 'power2.out',
						});
						obs.unobserve(el); // Solo una vez (puedes quitarlo si quieres que se repita)
					}
				});
			},
			{ threshold: 0.2 }, // 20% visible para activar
		);

		observer.observe(el);
	},
};

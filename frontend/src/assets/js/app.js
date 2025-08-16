/* naveacion head */
let contenedorLinks = document.querySelector('.contenedor__navegacion_links');
let btn_menu__toggle = document.querySelector('.btn_menu__toggle');

document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			const targetId = link.getAttribute('href');
			const target = document.querySelector(targetId);

			if (target) {
				e.preventDefault();
				const top = target.getBoundingClientRect().top + window.scrollY - 50; // offset de 50px

				window.scrollTo({
					top,
					behavior: 'smooth',
				});
			}
		});
	});
});

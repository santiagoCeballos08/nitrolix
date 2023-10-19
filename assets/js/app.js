// creacion de año dinamico para la pagina web
let year = document.querySelector('#year');
let año = new Date().getFullYear();
year.textContent = año;

/* naveacion head */
let contenedorLinks = document.querySelector('.contenedor__navegacion_links');
let btn_menu__toggle = document.querySelector('.btn_menu__toggle');

document.addEventListener('DOMContentLoaded', () => {
	eventos();
	function eventos() {
		btn_menu__toggle.addEventListener('click', () => {
			if (contenedorLinks.classList.contains('hidden')) {
				contenedorLinks.classList.remove('hidden');
				return;
			}

			contenedorLinks.classList.add('hidden');
		});
	}
});

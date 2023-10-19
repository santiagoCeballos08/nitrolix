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

/*---------------------------------------------------------------------------------
									splash
----------------------------------------------------------------------------------*/

window.onload = splashOut;

function splashOut() {
	let Splashcontent = document.querySelector('.content__splash__hero');
	let imSplash = document.querySelector('#img_splash');

	setTimeout(() => {
		imSplash.classList = 'animate__animated animate__bounceOutUp';
		setTimeout(() => {
			Splashcontent.style.display = 'none';
		}, 1000);
	}, 2000);
}

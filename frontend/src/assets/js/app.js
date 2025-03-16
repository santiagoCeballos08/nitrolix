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
slider de catalogo
----------------------------------------------------------------------------------*/
new Swiper('.catalogo', {
	slidesPerView: 1, // Valor predeterminado para pantallas más pequeñas
	spaceBetween: 10, // Espacio opcional entre sliders, ajusta según necesites
	// Configuraciones de breakpoints para diferentes tamaños de pantalla
	breakpoints: {
		// cuando la anchura de la ventana es >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// cuando la anchura de la ventana es >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		// cuando la anchura de la ventana es >= 640px
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

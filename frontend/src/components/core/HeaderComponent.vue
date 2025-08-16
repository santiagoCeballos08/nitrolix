<template>
	<!-- Header -->
	<header class="header sticky top-0 z-50" id="home">
		<nav class="hero__contenedor__navegacion__principal flex justify-center p-5 bg-secundario-50 text-white">
			<div class="contendor__navegacion-grande flex flex-col lg:flex-row gap-x-8">
				<div class="navegacion__icono flex items-center lg:mb-0">
					<picture>
						<source srcset="../../../public/image/logo_principal.png" class="icono__img" type="image/png" />
						<img loading="lazy" src="../../../public/image/logo_principal.png" alt="logo de litrolix" class="icono__img" />
					</picture>

					<a class="lg:hidden btn_menu__toggle"><span class="material-symbols-outlined btn_menu" @click="visible = !visible"> menu </span></a>
				</div>

				<div :class="hidden" class="lg:!block mt-7 md:mt-0 contenedor__navegacion_links" v-fade-animate-show="visible">
					<div class="navegacion__rels__links flex lg:gap-x-8 gap-y-8 items-center lg:flex-row flex-col text-base">
						<router-link class="" to="/">Inicio</router-link>
						<router-link class="" to="/about">Nosotros</router-link>
						<a href="#sobre_producto" class="">Producto</a>
						<a href="#contenedorCaracteristicas" class="">Característica</a>
						<a href="#contacto" class="">Contacto</a>
						<a href="https://wa.me/3026465782?text=Quiero mas informacion" target="_blank" class="navegacion__boton__compra__mini lg:ml-10 font-bold">
							Comprar ahora
						</a>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
	import { ref } from 'vue';
	let hidden = ref('hidden');
	const visible = ref(false);

	// const bottoMenu = () => {
	// 	if (hidden.value == 'hidden') {
	// 		hidden.value = 'block';
	// 	} else {
	// 		hidden.value = 'hidden';
	// 	}
	// };
</script>

<style scoped></style>

<template>
	<!-- Header -->
	<header class="header sticky top-0 z-50" id="home">
		<nav class="hero__contenedor__navegacion__principal flex justify-center p-5 bg-principal text-white">
			<div class="contendor__navegacion-grande flex flex-col lg:flex-row gap-x-8">
				<div class="navegacion__icono flex items-center lg:mb-0">
					<picture>
						<source srcset="../../../public/image/logo_principal.png" class="icono__img" type="image/png" />
						<img loading="lazy" src="../../../public/image/logo_principal.png" alt="logo de litrolix" class="icono__img" />
					</picture>

					<a class="lg:hidden btn_menu__toggle"><span class="material-symbols-outlined btn_menu" @click="toggleModal"> menu </span></a>
				</div>

				<div :class="hidden" class="lg:!block mt-7 md:mt-0 contenedor__navegacion_links" v-fade-animate-show="visible">
					<div class="navegacion__rels__links flex lg:gap-x-8 gap-y-8 items-center lg:flex-row flex-col text-base">
						<router-link class="p-4 rounded-sm hover:bg-secundario" to="/" @click="closeMenu">Inicio</router-link>
						<router-link class="p-4 rounded-sm hover:bg-secundario" to="/about" @click="closeMenu">Nosotros</router-link>
						<a class="p-4 rounded-sm hover:bg-secundario" href="#servicios" @click="closeMenu">Serivicos</a>
						<a class="p-4 rounded-sm hover:bg-secundario" href="#aplicaciones" @click="closeMenu">aplicaciones</a>
						<a class="p-4 rounded-sm hover:bg-secundario" href="#contacto" @click="closeMenu">Contacto</a>
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

	// abrir modal
	const toggleModal = () => {
		visible.value = !visible.value;
	};

	// cerramos menu para movil
	const closeMenu = () => {
		if (window.matchMedia('(max-width: 1024px)').matches) {
			visible.value = false;
		}
	};
</script>

<style scoped></style>

<template>
	<div>
		<header-component />
		<!-- FIN DEL HEADER -->
		<!-- COMIENZO DE BANNER -->
		<banner-home />
		<!-- FIN DE BANNER -->

		<!-- calidad de producto -->
		<calidad-producto-home />

		<!-- Caracteristicas -->
		<caracteristica-home />
		<!-- catalogo -->
		<!-- <catalogo-home /> -->

		<!-- email -->
		<!-- <email-home /> -->

		<!-- footer -->
		<footer-componet />
	</div>
</template>

<script setup>
	import HeaderComponent from './components/core/HeaderComponent.vue';
	import FooterComponet from './components/core/FooterComponent.vue';
	import EmailHome from './components/Home/EmailHome.vue';
	import CatalogoHome from './components/Home/CatalogoHome.vue';
	import CaracteristicaHome from './components/Home/CaracteristicaHome.vue';
	import CalidadProductoHome from './components/Home/CalidadProductoHome.vue';
	import BannerHome from './components/Home/BannerHome.vue';
	import { onMounted, ref } from 'vue';
</script>

<style lang="scss" scoped></style>

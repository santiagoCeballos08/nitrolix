<template>
	<div>
		<!-- COMIENZO DE BANNER -->
		<banner-home />
		<!-- FIN DE BANNER -->

		<!-- calidad de producto -->
		<calidad-producto-home />

		<!-- Caracteristicas -->
		<caracteristica-home />
		<!-- catalogo -->
		<!-- <catalogo-home /> -->
	</div>
</template>

<script setup>
	import CaracteristicaHome from '../../components/Home/CaracteristicaHome.vue';
	import CalidadProductoHome from '../../components/Home/CalidadProductoHome.vue';
	import BannerHome from '../../components/Home/BannerHome.vue';
	import EmailHome from '../../components/Home/EmailHome.vue';
	import CatalogoHome from '../../components/Home/CatalogoHome.vue';
	import { onMounted, ref } from 'vue';
</script>

<style lang="scss" scoped></style>

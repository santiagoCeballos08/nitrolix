<template>
	<section class="hero__contenedor__banner flex" id="banner">
		<div class="contenedor__banner p-4 grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
			<div class="banner__seccion__text flex flex-col justify-center">
				<h1 class="banner__titulo text-7xl font-semibold mb-11 text-center lg:text-left text-animate">Nitrolix Análisis & Evolución</h1>
				<p class="banner__informacion text-center lg:text-left text-animate">
					Comprendemos las nuevas tendencias de desarrollo en los diferentes sectores y brindamos el apoyo basado en la seguridad y confianza; somos ese puente en la
					evolución e industria sumandonos a las diferentes ramas tales cómo: Metalmecanica, Dermatología, Centros de investigación, Botánica, etc...
				</p>
				<div class="banner__boton__contenedor flex justify-center lg:justify-start">
					<a href="#contenedorCaracteristicas" class="boton__compra font-semibold">conocer mas <span class="material-symbols-outlined"> arrow_forward </span></a>
				</div>
			</div>
			<div class="banner__seccion__image flex justify-center"></div>
		</div>
	</section>
</template>

<script setup>
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMounted } from 'vue';

	gsap.registerPlugin(SplitText);

	onMounted(() => {
		let splitText = new SplitText('.text-animate', {
			type: 'lines',
		});

		gsap.from(splitText.lines, {
			duration: 1,
			y: 10,
			stagger: 0.1,
			autoAlpha: 0,
			filter: 'blur(10px)',
		});
	});
	// separamos el texto
</script>

<style lang="scss" scoped></style>

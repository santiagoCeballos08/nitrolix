<template>
	<section class="hero__contenedor__banner flex justify-center py-20" id="banner">
		<div class="contenedor__banner p-4 grid grid-cols-1 md:grid-cols-2 max-w-[140rem]">
			<div class="banner__seccion__text flex flex-col justify-center">
				<span class="px-4 bg-ternario max-w-fit text-[12px] rounded-full font-bold mb-8">Distribución personalizada</span>
				<h1 class="banner__titulo text-7xl font-semibold mb-11 text-center lg:text-left text-animate uppercase">
					Nitrolix - LA EVOLUCION DEL <span class="text-ternario">NITROGENO</span>
				</h1>
				<p class="banner__informacion text-center lg:text-left text-animate font-4xl container text-muted-foreground leading-relaxed">
					En Nitrolix sabemos que la continuidad de tus procesos no puede detenerse. Por eso, llevamos nitrógeno líquido y termos criogénicos justo donde los necesitas, a
					tiempo y sin complicaciones. <br />
					Con nosotros, tienes un aliado que entiende tus tiempos, cuida tus procesos y respalda cada entrega
				</p>
				<div class="banner__boton__contenedor flex flex-col md:flex-row justify-center lg:justify-start gap-8 mt-16">
					<a href="tel:+573026465782" class="boton__compra bg-ternario font-semibold capitalize"><phone-icon class="size-8 mr-4" /> contactar ahora </a>
					<a href="#sobreNosotros" class="boton__compra border border-white !text-white">conoce más <arrow-right-icon class="size-8 ml-4" /> </a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMounted } from 'vue';
	import { PhoneIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';

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

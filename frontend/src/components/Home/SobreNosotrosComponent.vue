<template>
	<section class="bg-principal flex justify-center py-20" id="sobreNosotros">
		<article class="p-4 grid grid-cols-1 md:grid-cols-2 w-home gap-20">
			<article class="banner__seccion__text flex flex-col justify-center" v-fade-scroll>
				<span class="px-4 bg-ternario max-w-fit text-[12px] rounded-full font-bold mb-8">Sobre Nosotros</span>
				<h1 class="text-7xl font-semibold mb-11 text-center lg:text-left text-animate Capitalize">Más sobre nosotro</h1>
				<p class="text-center lg:text-left text-animate font-4xl container text-muted-foreground leading-relaxed">
					Somos una empresa especializada en la distribución de nitrógeno líquido y servicios criogénicos en Medellín y el área metropolitana. Nuestro compromiso es
					brindar soluciones confiables y oportunas para todas las necesidades de nuestros clientes.
				</p>
				<div class="banner__boton__contenedor flex flex-col md:flex-row justify-center lg:justify-start gap-8 mt-16">
					<div class="iformacion__stast">
						<div class="stats__icon">
							<shield-check-icon class="size-10" />
						</div>
						<div class="stats__info">
							<p class="">Calidad Garantizada <br /><span class="opacity-50"> Productos certificados</span></p>
						</div>
					</div>
					<div class="iformacion__stast">
						<div class="stats__icon bg-secundario">
							<truck-icon class="size-10" />
						</div>
						<div class="stats__info">
							<p class="">Entrega Rápida <br /><span class="opacity-50"> Servicio 24/7</span></p>
						</div>
					</div>
				</div>
			</article>
			<div class="banner__sobre__nosotros" v-fade-scroll>
				<div class="bg-ternario/10 min-h-[30vh] p-10 rounded-2xl">
					<figure class="bg-ternario/20 text-white flex flex-col text-center p-20 rounded-2xl">
						<div class="icon__sobre__nosotros">
							<certificate-icon-component class="h-80 mx-auto" :color="'#fabb5b'" />
						</div>
						<div class="font-semibold capitalize text-4xl mb-4">experiencia profesional</div>
						<div class="opacity-70">Años de experiencia en el manejo seguro y distribución de nitrógeno líquido</div>
					</figure>
				</div>
			</div>
		</article>
	</section>
</template>

<script setup>
	import { TruckIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';
	import CertificateIconComponent from '@/assets/css/icons/CertificateIconComponent.vue';
	// separamos el texto
</script>

<style lang="scss" scoped></style>

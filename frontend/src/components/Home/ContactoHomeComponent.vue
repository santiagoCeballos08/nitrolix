<template>
	<!-- sobre el producto -->
	<section class="hero__contenedor__calidad p-12 bg-gray-100 py-30">
		<p class="title__mini__seccion__calidad text-center rounded-full px-4 text-[12px] !text-black bg-gray-200 max-w-fit mx-auto" id="contacto">contacto</p>
		<div class="title__seccion__calidad mt-6">
			<h2 class="titulo__calidad text-center text-6xl font-semibold">Contáctanos</h2>
			<p class="info__calidad text-center mt-5 lg:max-w-6xl lg:pt-4">Estamos listos para atender tus necesidades de nitrógeno líquido</p>
		</div>
		<div class="contenedor__calidad__cualidades mx-auto container-home" v-fade-scroll>
			<div class="contenedor__card py-10 w-full card__1">
				<div class="icon__card h-[4.7rem]">
					<font-awesome-icon :icon="['fab', 'whatsapp']" class="text-[2.3rem]" />
				</div>
				<div class="titulo__card font-bold text-4xl my-3 text-center">Whatsapp</div>
				<div class="info__card leading-9">
					<p class="text-center mb-6 font-bold text-principal/80">Nuestra linea oficial</p>
					<p class="text-center opacity-60">Chatea con nosotros en cualquier momento</p>
				</div>
				<div class="card__buttons">
					<a href="https://wa.link/8cz7dn" class="capitalize button__contact bg-principal text-white py-2 rounded-2xl w-fit px-4 mx-auto block">chatear ahora</a>
				</div>
			</div>
			<div class="contenedor__card py-10 w-full card__2">
				<div class="icon__card"><envelope-icon class="size-10" /></div>
				<div class="titulo__card font-bold text-4xl my-3 capitalize text-center">email</div>
				<div class="info__card leading-9">
					<p class="text-center mb-6">
						<a href="mailto:nitrolix01@gmail.com" class="text-principal/80 hover:underline underline-offset-4">Nitrolix01@gmail.com</a>
					</p>
					<p class="opacity-60 text-center">Respuesta en menos de 24 horas</p>
				</div>
				<div class="card__buttons">
					<a href="mailto:Nitrolix01@gmail.com" class="capitalize button__contact bg-secundario text-white py-2 rounded-2xl w-fit px-4 mx-auto block">enviar email</a>
				</div>
			</div>
			<div class="contenedor__card py-10 w-full card__3">
				<div class="icon__card bg-amber-100 text-ternario"><phone-icon class="size-10" /></div>
				<div class="titulo__card font-bold text-4xl my-3 text-center">Teléfono</div>
				<div class="info__card">
					<p class="text-center mb-6 font-bold text-principal/80">+57 302-6465782</p>
					<p class="opacity-60 text-center">Disponible 24/7 para emergencias</p>
				</div>
				<div class="card__buttons">
					<a href=""></a>
					<a href="tel:+573026465782" class="capitalize button__contact bg-ternario text-white py-2 rounded-2xl w-fit px-4 mx-auto block">cotizar servicio</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped></style>

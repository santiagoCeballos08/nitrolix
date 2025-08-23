<template>
	<!-- sobre el producto -->
	<section class="hero__contenedor__calidad p-12 bg-gray-100 py-30">
		<p class="title__mini__seccion__calidad text-center rounded-full px-4 text-[12px] !text-white bg-principal max-w-fit mx-auto" id="servicios">Nuestros Servicios</p>
		<div class="title__seccion__calidad mt-6">
			<h2 class="titulo__calidad text-center text-6xl font-semibold">Serivicos Especializados</h2>
			<p class="info__calidad text-center mt-5 lg:max-w-6xl lg:pt-4">Ofrecemos soluciones integrales en nitrogeno liquido con la más alta calidad y confiabilidad</p>
		</div>
		<div class="contenedor__calidad__cualidades mx-auto container-home" v-fade-scroll>
			<div class="contenedor__card card__1">
				<div class="icon__card"><truck-icon class="size-10" /></div>
				<div class="titulo__card font-bold text-4xl my-3 text-center">Distribucion de Nitrógeno Liquido</div>
				<div class="info__card">
					<p class="text-center mb-6">Entrega rápida, segura y sin complicaciones en Medellín y área metropolitana.</p>
					<ul class="list-disc text-gray-700">
						<li>de lunes a sábado, de 6:00 a.m. a 5:00 p.m.</li>
						<li>Atención personalizada y respaldo técnico</li>
					</ul>
				</div>
				<div class="card__buttons">
					<a href="https://wa.link/cjhdqi" class="capitalize button__contact bg-principal text-white">cotizar servicio</a>
				</div>
			</div>
			<div class="contenedor__card card__2">
				<div class="icon__card"><users-icon class="size-10" /></div>
				<div class="titulo__card font-bold text-4xl my-3 capitalize text-center">capacitación especializada</div>
				<div class="info__card">
					<p class="text-center mb-6">
						Aprende a usar el nitrógeno con seguridad y confianza, formamos a tu equipo en el uso correcto de nitrógeno líquido y termos criogénicos.
					</p>
					<ul class="list-disc text-gray-700">
						<li>Sesiones adaptadas al tipo de cliente</li>
						<li>Buenas prácticas de manipulación</li>
						<li>Acompañamiento post capacitación</li>
					</ul>
				</div>
				<div class="card__buttons">
					<a href="https://wa.link/y5w7bs" class="capitalize button__contact bg-secundario text-white">cotizar capacitación</a>
				</div>
			</div>
			<div class="contenedor__card card__3">
				<div class="icon__card bg-amber-100 text-ternario"><shield-check-icon class="size-10" /></div>
				<div class="titulo__card font-bold text-4xl my-3 text-center">Revisión de Termos</div>
				<div class="info__card">
					<p class="text-center mb-6">Mantenimiento preventivo y visual para prolongar la vida útil de tus termos criogénicos.</p>
					<ul class="list-disc text-gray-700">
						<li>Limpieza exterior</li>
						<li>Aplicación de pintura anticorrosiva</li>
						<li>Ajustes menores y revisión de tapas o ruedas</li>
					</ul>
				</div>
				<div class="card__buttons">
					<a href="https://wa.link/vl0mmj" class="capitalize button__contact bg-ternario text-white">programar revision</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { TruckIcon, UsersIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped></style>

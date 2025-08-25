<template>
	<section class="contenedor__caracteristicas py-50">
		<div class="title__mini__seccion__calidad text-center rounded-full px-4 text-[12px] !text-black bg-gray-100 max-w-fit mx-auto" id="aplicaciones">Caracteristicas</div>
		<div class="title__seccion__calidad mt-6">
			<!--  -->
			<h2 class="titulo__calidad text-center font-bold text-6xl text-ternario" v-fade-scroll>Usos del Nitrógeno</h2>
			<p class="info__calidad text-center mt-5 text-gray-600">Descubre las multiples aplicaciones del nitrógeno liquido en diferentes industrias</p>
		</div>
		<!-- seccion cards -->
		<div class="contenedor__cards__seccion flex justify-center mt-6" v-fade-scroll>
			<div class="contenedor__cards__hero lg:flex lg:justify-center w-home">
				<!-- seccion de contenedor aplicaicones de uso -->
				<div class="contenedor_cards justify-center flex flex-col md:flex-row flex-wrap items-center gap-y-5">
					<!-- card -->
					<div class="card__aplicacion flex flex-col card-1 items-center">
						<div class="card__head mb-6 gap-4 items-center text-4xl">
							<div class="card__icon flex flex-col items-center bg-red-200 rounded-full w-fit mx-auto">
								<utensils-icon-component class="icon" :color="'#dc2626'" />
							</div>
							<h3 class="card__titulo">Gastronomía</h3>
						</div>
						<div class="card__body">
							<div class="card__info">Técnicas culinarias avanzadas, congelación rápida y presentaciones espectaculares en alta cocina</div>
						</div>
					</div>
					<!-- fin card -->
					<!-- card -->
					<div class="card__aplicacion flex flex-col card-1 items-center">
						<div class="card__head mb-6 gap-4 items-center text-4xl">
							<div class="card__icon flex flex-col items-center bg-gray-200 rounded-full w-fit mx-auto">
								<wrench-icon-component class="icon" :color="'#495361'" />
							</div>
							<h3 class="card__titulo">Metalmecánica</h3>
						</div>
						<div class="card__body">
							<div class="card__info">Tratamientos térmicos, soldadura especializada y procesos de manufactura de precisión</div>
						</div>
					</div>
					<!-- fin card -->
					<!-- card -->
					<div class="card__aplicacion flex flex-col card-1 items-center">
						<div class="card__head mb-6 gap-4 items-center text-4xl">
							<div class="card__icon flex flex-col items-center bg-pink-200 rounded-full w-fit mx-auto">
								<heart-icon-component class="icon" :color="'#de3e86'" />
							</div>
							<h3 class="card__titulo">Dermatología</h3>
						</div>
						<div class="card__body">
							<div class="card__info">Crioterapia, tratamientos estéticos y procedimientos médicos especializados</div>
						</div>
					</div>
					<!-- fin card -->
					<!-- card -->
					<div class="card__aplicacion flex flex-col card-1 items-center">
						<div class="card__head mb-6 gap-4 items-center text-4xl">
							<div class="card__icon flex flex-col items-center bg-blue-200 rounded-full w-fit mx-auto">
								<microscope-icon-component class="icon" :color="'#5587f0'" />
							</div>
							<h3 class="card__titulo">Laboratorio</h3>
						</div>
						<div class="card__body">
							<div class="card__info">Conservación de muestras, investigación científica y procesos de análisis especializados</div>
						</div>
					</div>
					<!-- fin card -->
				</div>
			</div>
			<!-- fin de contenedor de la informacion -->
		</div>
		<!-- fin de contendor padre hero -->
	</section>
</template>

<script setup>
	import { WrenchIcon } from '@heroicons/vue/24/outline';
	import UtensilsIconComponent from '@/assets/css/icons/UtensilsIconComponent.vue';
	import WrenchIconComponent from '@/assets/css/icons/WrenchIconComponent.vue';
	import HeartIconComponent from '@/assets/css/icons/HeartIconComponent.vue';
	import MicroscopeIconComponent from '@/assets/css/icons/MicroscopeIconComponent.vue';
</script>

<style scoped></style>

<template>
	<main class="container mx-auto min-h-[80dvh] mt-20 mb-20">
		<h1 class="text-title text-center font-bold mb-20 text-principal">SOBRE NOSOTROS</h1>
		<p class="text-center"></p>

		<section class="contenedor__infomracion grid grid-cols-1 lg:grid-cols-2 gap-5" v-fade-in>
			<article
				class="mision__informacion card__informacion shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div class="title__iformacion">
					<div class="p-4 rounded-xl bg-principal">
						<flag-icon class="w-15 h-15 text-white font-bold" />
					</div>
					<h2 class="font-bold text-5xl uppercase">Misión</h2>
				</div>
				<p class="informacion text-muted-foreground leading-relaxed text-base">
					Aportar al desarrollo y crecimiento de nuestros aliados comerciales mediante la distribución
					eficiente de soluciones criogénicas, transformando cada entrega en una experiencia de confianza,
					cercanía y precisión técnica. Como empresa nacida de la unión familiar y la visión de un joven
					emprendedor que a sus 20 años inició con tenacidad en Antioquia, donde consolidamos nuestras
					primeras ferias y bases estratégicas. Hoy, garantizamos la continuidad de los procesos de nuestros
					usuarios con agilidad, rigor profesional y calidez humana.
				</p>
			</article>
			<article
				class="vision__informacion card__informacion shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
				<div class="title__iformacion">
					<div class="p-4 rounded-xl bg-principal">
						<eye-icon class="w-15 h-15 text-white font-bold" />
					</div>
					<h2 class="font-bold text-5xl uppercase">visión</h2>
				</div>
				<p class="informacion text-muted-foreground leading-relaxed text-base">
					Ser líderes en la distribución de productos criogénicos en Antioquia, reconocidos por nuestro
					compromiso con la excelencia, la innovación y la atención
					personalizada. Aspiramos a transformar la forma en que sectores especializados acceden y utilizan el
					nitrógeno líquido, creando una red sólida de confianza y
					respaldo técnico.
				</p>
			</article>
		</section>

		<!-- valores -->
		<div class="mt-16 text-center" v-fade-in>
			<h3 class="text-6xl font-bold text-foreground mb-8 text-gray-700">Nuestros Valores</h3>
			<div class="grid md:grid-cols-3 gap-6">
				<div
					class="bg-card border border-border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
					<i class="fas fa-handshake text-5xl text-ternario mb-4"></i>
					<h4 class="font-semibold text-card-foreground text-4xl mb-2">Integridad</h4>
					<p class="text-base text-muted-foreground">Actuamos con Integridad y transparencia con todos
						nuestros clientes.</p>
				</div>
				<div
					class="bg-card border border-border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
					<i class="fas fa-lightbulb text-5xl text-ternario mb-4"></i>
					<h4 class="font-semibold text-card-foreground text-4xl mb-2">Innovación</h4>
					<p class="text-base text-muted-foreground">Buscamos constantemente nuevas formas de mejorar y
						evolucionar nuestro servicio.</p>
				</div>
				<div
					class="bg-card border border-border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
					<i class="fas fa-heart text-5xl text-ternario mb-4"></i>
					<h4 class="font-semibold text-card-foreground text-4xl mb-2">Compromiso</h4>
					<p class="text-muted-foreground text-base">Nos dedicamos como complemento al éxito de nuestros
						usuarios
						y colaboradores.</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { FlagIcon, EyeIcon, UsersIcon, TrophyIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
.title__iformacion {
	display: flex;
	align-items: center;
	gap: 3rem;
	margin-bottom: 3rem;
}

.card__informacion {
	border: solid 1px #f4f4f4;
	border-radius: 1rem;
	padding-block: 2rem;
	padding-inline: 4rem;
}
</style>

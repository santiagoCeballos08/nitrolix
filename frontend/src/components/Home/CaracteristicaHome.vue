<template>
	<section class="contenedor__caracteristicas" id="contenedorCaracteristicas">
		<div class="title__mini__seccion__caracteristicas text-center font-bold pt-5 !text-blanco">Caracteristicas</div>
		<div class="title__seccion__calidad mt-6">
			<!--  -->
			<h2 class="titulo__calidad text-center font-bold text-6xl text-ternario">Aplicaciones en los diferentes campos</h2>
			<!-- <p class="info__calidad text-center mt-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum fugiat suscipit sunt laboriosam. Suscipit
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum fugiat suscipit sunt laboriosam. Suscipit
					ex nam dicta officiis, eveniet culpa aliquam enim exercitationem magnam voluptate beatae perspiciatis dolorum
					accusantium?
				</p> -->
		</div>
		<!-- seccion cards -->
		<div class="contenedor__cards__seccion flex justify-center mt-6">
			<div class="contenedor__cards__hero lg:flex lg:justify-center">
				<div class="contenedor_cards justify-center flex flex-col items-center gap-y-5">
					<div class="card flex flex-col card-1 items-center">
						<div class="card__head flex mb-6 gap-4 items-center text-4xl">
							<div class="card__icon">
								<span class="material-symbols-outlined text-center"> engineering </span>
							</div>
							<span class="card__titulo font-black">Metalmecanica</span>
						</div>
						<div class="card__body">
							<div class="card__info">
								El nitrógeno se utiliza en la cementación para acelerar la absorción de carbono en el metal tratado durante el proceso de carburación (combinación
								del carbono y el hierro para producir el acero) para dar más dureza al material.
							</div>
						</div>
					</div>
					<div class="card flex flex-col card-1 items-center">
						<div class="card__head flex mb-6 gap-4 items-center text-4xl">
							<div class="card__icon">
								<span class="material-symbols-outlined text-center"> compost </span>
							</div>
							<span class="card__titulo font-black">Botánica</span>
						</div>
						<div class="card__body">
							<div class="card__info">
								Tanto en las plantas como en los seres humanos, el nitrógeno se usa para producir aminoácidos, que producen las proteínas que construyen las
								células, y es uno de los componentes básicos del ADN.
							</div>
						</div>
					</div>
				</div>
				<div class="contenedor__cards__image">
					<picture class="contenedor_image">
						<source srcset="/image/nitrogeno.png" />
						<img loading="lazy" class="animation-jump" src="/image/nitrogeno.png" alt="imagen de nitrolix" />
					</picture>
				</div>
				<div class="contenedor_cards flex flex-col items-center gap-y-5">
					<div class="card flex flex-col card-1 items-center">
						<div class="card__head flex items-center mb-6 gap-4 text-4xl">
							<div class="card__icon">
								<span class="material-symbols-outlined text-center"> Vaccines </span>
							</div>
							<span class="card__titulo font-black">Medicina</span>
						</div>
						<div class="card__body">
							<div class="card__info">
								Las aplicaciones de nitrógeno medicinal en el entorno sanitario son las siguientes: En la criopreservación (Biobancos) para la conservación a largo
								plazo de líneas celulares, muestras de tejido, células madre, sangre, componentes sanguíneos, otras células y otros fluidos corporales.
							</div>
						</div>
					</div>
					<div class="card flex flex-col card-1 items-center">
						<div class="card__head flex items-center mb-6 gap-4 text-4xl">
							<div class="card__icon">
								<span class="material-symbols-outlined text-center"> Dermatology </span>
							</div>
							<span class="card__titulo font-black">Dermatología</span>
						</div>
						<div class="card__body">
							<div class="card__info">
								Lo usamos para eliminar diferentes lesiones cutáneas como: queratosis actínicas, acrocordones, verrugas, etc. El objetivo del tratamiento es
								congelar y eliminar las lesiones tratadas.
							</div>
						</div>
					</div>
				</div>
				<!-- fin de cards -->
			</div>
			<!-- fin de contenedor de la informacion -->
		</div>
		<!-- fin de contendor padre hero -->
	</section>
</template>

<script setup></script>

<style scoped></style>

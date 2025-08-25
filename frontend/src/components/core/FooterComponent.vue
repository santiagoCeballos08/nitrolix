<template>
	<footer class="contenedor__footer flex justify-center">
		<div class="contenedor__footer__slider flex flex-col lg:flex-row justify-around lg:gap-x-2 gap-y-5">
			<div class="flex flex-col items-center lg:items-start informacion__footer">
				<div class="footer__icon">
					<a href="/" aria-label="volver al inicio">
						<img src="/image/logo_principal.png" alt="" loading="lazy" width="200px" class="logo__footer" />
					</a>
					<ul class="mt-8 text-center lg:text-start">
						<li>
							<router-link class="hover:underline" to="/policies">Nuestras políticas</router-link>
						</li>
					</ul>
				</div>
				<p class="text-center lg:text-start"></p>
			</div>
			<div class="contenedor__contacto__footer">
				<div class="contenedor__links__footer">
					<p class="mb-4">Suscribete para conocer nuevas noticias</p>
					<div class="subs-cliente">
						<input type="email" placeholder="ingresa el correo" class="text__subs bg-white" id="subsText" />
						<button class="boton__subs">Suscribete</button>
					</div>
					<div class="redes__sociales mt-3">
						<p class="font-bold text-center lg:text-start">Siguenos en</p>
						<div class="lista__redes__footer flex justify-center items-center lg:justify-start">
							<ul class="flex gap-x-12">
								<li>
									<a
										href="https://www.instagram.com/nitrolix_co?igsh=MW5oOGRwMTNmZXc1ag%3D%3D&utm_source=qr "
										target="_blank"
										aria-label="redes sociales de instagram">
										<span class="icon__footer__redes"><i class="fa-brands fa-instagram redes"></i></span>
									</a>
								</li>
								<li>
									<a href="https://www.facebook.com/profile.php?id=61552800174349&mibextid=9R9pXO" target="_blank" aria-label="redes sociales de facebook">
										<span class="icon__footer__redes"><i class="fa-brands fa-facebook redes"></i></span>
									</a>
								</li>
								<li>
									<a href="https://wa.me/3026465782?text=Quiero mas informacion" target="_blank" aria-label="redes sociales de whatsapp">
										<span class="icon__footer__redes"><i class="fa-brands fa-whatsapp redes"></i></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- TODO: arreglar div para que no este afuera del footer -->
	<div class="contenedor__copi">
		<div class="copy__text">
			<p class="text-center">
				&copy; <span> {{ year }}</span> Nitrolix. Todos los derechos reservados por Nitrolix
				 <!-- desarrollado por
				<a href="https://github.com/THEGLUM">santiago ceballos</a> -->
			</p>
		</div>
	</div>
</template>

<script setup>
	import { format } from '@formkit/tempo';
	import { onMounted, ref } from 'vue';

	const year = ref(0);
	const data = ref(new Date());
	onMounted(() => {
		year.value = format(data.value, 'YYYY', 'en');
	});
</script>

<style lang="scss" scoped></style>

<template>
	<!-- ------------------------------------------- SECCION ---------------------------------------------
													seccion footer
			----------------------------------------------------------------------------------------- -->

	<footer class="contenedor__footer flex justify-center">
		<div class="contenedor__footer__slider flex flex-col lg:flex-row justify-around lg:gap-x-2 gap-y-5">
			<div class="flex flex-col items-center lg:items-start informacion__footer">
				<div class="footer__icon">
					<a href="./index.html">
						<img
							src="./public/image/logo_principal.png"
							alt=""
							loading="lazy"
							width="200px"
							class="logo__footer" />
					</a>
				</div>
				<p class="text-center lg:text-start"></p>
			</div>
			<div class="contenedor__contacto__footer">
				<div class="contenedor__links__footer">
					<p class="mb-4">Suscribete para conocer nuevas noticias</p>
					<div class="subs-cliente">
						<input type="email" placeholder="ingresa el correo" class="text__subs" id="subsText" />
						<button class="boton__subs">Suscribete</button>
					</div>
					<div class="redes__sociales mt-3">
						<p class="font-bold text-center lg:text-start">Siguenos en</p>
						<div class="lista__redes__footer flex justify-center items-center lg:justify-start">
							<ul class="flex gap-x-12">
								<li>
									<a href=" https://instagram.com/nitrolix01?igshid=YTQwZjQ0NmI0OA==" target="_blank">
										<span class="icon__footer__redes"
											><i class="fa-brands fa-instagram redes"></i
										></span>
									</a>
								</li>
								<li>
									<a
										href="https://www.facebook.com/profile.php?id=61552800174349&mibextid=9R9pXO"
										target="_blank">
										<span class="icon__footer__redes"
											><i class="fa-brands fa-facebook redes"></i
										></span>
									</a>
								</li>
								<li>
									<a href="https://wa.me/3026465782?text=Quiero mas informacion" target="_blank">
										<span class="icon__footer__redes"
											><i class="fa-brands fa-whatsapp redes"></i
										></span>
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
				&copy; <span id="year"></span> Nitrolix. Todos los derechos reservados por Nitrolix - desarrollado por
				<a href="https://github.com/THEGLUM">santiago ceballos</a>
			</p>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>

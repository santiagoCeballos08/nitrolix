<template>
	<!-- ------------------------------------------- SECCION ---------------------------------------------
													envio de correo electronico
			----------------------------------------------------------------------------------------- -->
	<section class="contenido__email__hero flex justify-center">
		<div class="contenedor__formulario w-11/12 lg:w-3/6">
			<div class="informacion">
				<h6 class="font-bold title__mini__seccion__calidad" id="contacto">contacto</h6>
				<h2 class="font-bold title text-5xl mb-11">Comunicate con nosotros</h2>
				<p class="informaicon-text-comicacion">
					¿Tienes alguna pregunta o comentario? <br />
					¿Quieres saber más sobre nuestros productos o servicios?, ¿Tienes alguna duda sobre tu pedido?
					¿Quieres compartir tu opinión con nosotros? No dudes en contactarnos. <br />
					Estamos aquí para ayudarte. <br />
					Nuestro equipo de atención al cliente está disponible para responder a tus preguntas y comentarios.
				</p>
			</div>
			<div class="seccion__envio__informacion mt-7 flex-col lg:flex-row flex gap-x-12 justify-center">
				<form class="formulario__principal" id="formularioPrincipal">
					<div class="contenedor__informacion">
						<!-- nombre del cliente -->
						<div class="contenedor__nombre content__formu mb-4">
							<div>
								<label for="nombre" class="flex items-center mb-3 gap-x-2 font-bold"
									><span class="material-symbols-outlined">person</span>Nombre *</label
								>
							</div>
							<input type="text" placeholder="jhon doe" name="nombre" id="nombre" required />
						</div>
						<!-- correo del cliente -->
						<div class="contenedor__correo content__formu mb-4">
							<div>
								<label for="correo_cliente " class="flex items-center mb-3 gap-x-2 font-bold"
									><span class="material-symbols-outlined">email</span>Correo*
								</label>
							</div>
							<input
								type="email"
								placeholder="jhon@gmail.com"
								name="correo__cliente"
								id="correoCliente"
								required />
						</div>
						<div class="contenedor__mensaje content__formu">
							<div>
								<label for="mensaje_cliente" class="flex items-center font-bold gap-x-2 mb-3"
									><span class="material-symbols-outlined">inbox</span>Mensaje *</label
								>
							</div>
							<textarea
								required
								name="mensaje__cliente"
								id="mensaje_cliente"
								rows="10"
								placeholder="enviame un mensaje :D"></textarea>
						</div>
					</div>
					<div>
						<input type="submit" class="btn-enviar_form font-bold" value="enviar mensaje" />
					</div>
				</form>
				<div class="contact__hero">
					<!-- direccion email -->
					<div class="contenedor__email mb-3">
						<div class="head__email flex gap-x-3">
							<span class="material-symbols-outlined">mail</span>
							<p class="font-bold">Dirección email</p>
						</div>
						<div class="dir">
							<p>nitrolix01@gmail.com</p>
						</div>
					</div>
					<!-- telefono celular -->
					<div class="contenedor__email mb-3">
						<div class="head__email flex gap-x-3">
							<span class="material-symbols-outlined">call</span>
							<p class="font-bold">Número telefoníco</p>
						</div>
						<a href="https://wa.me/3026465782?text=Quiero mas informacion">302-646-57-82</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

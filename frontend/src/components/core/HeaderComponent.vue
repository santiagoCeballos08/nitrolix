<template>
	<!-- Header -->
	<header class="header" id="home" data-elemento="hola">
		<!-- INICIO DE CONTACTOS -->
		<div class="header__informacion bg-black text-white p-4 w-full flex justify-center content-center">
			<div class="contenedor__header lg:flex lg:gap-x-8 lg:justify-around">
				<div class="contenedor__infro flex flex-col lg:flex-row lg:justify-center lg:gap-x-8">
					<div class="informacion__tel flex justify-center pt-6 gap-x-2 lg:pt-2 text-lg">
						<span><span class="font-bold color__contact"> Llamanos:</span> +57 302-6465782</span>
					</div>
					<div class="informacion__email flex justify-center pt-2 lg:pt-2 gap-x-2 text-lg">
						<span><span class="font-bold color__contact">Email:</span> Nitrolix01@gmail.com</span>
					</div>
				</div>
				<div class="informacion__redes flex justify-center mt-5 lg:mt-0 lg:pt-0 gap-x-3 lg:items-center">
					<a
						href="https://instagram.com/nitrolix01?igshid=YTQwZjQ0NmI0OA=="
						target="_blanc"
						class="contenedor__redes red-ig p-2 redes flex justify-center"
						aria-label="redes sociales de instagram">
						<i class="fa-brands fa-instagram redes"></i>
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=61552800174349&mibextid=9R9pXO"
						target="_blanc"
						class="contenedor__redes red-fb p-2 redes flex justify-center justify-items-center"
						aria-label="redes sociales de facebook">
						<i class="fa-brands fa-facebook redes"></i>
					</a>
					<a
						href="https://wa.me/3026465782?text=Quiero mas informacion"
						class="contenedor__redes p-2 red-wpp redes flex justify-center"
						aria-label="redes sociales de whatsapp">
						<i class="fa-brands fa-whatsapp redes"></i>
					</a>
				</div>
			</div>
		</div>
		<!-- FIN DE CONTACTOS -->
		<nav class="hero__contenedor__navegacion__principal flex justify-center p-3">
			<div class="contendor__navegacion-grande flex flex-col lg:flex-row gap-x-8">
				<div class="navegacion__icono flex items-center lg:mb-0">
					<picture>
						<source srcset="../../../public/image/logo_principal.png" class="icono__img" type="image/png" />
						<img loading="lazy" src="../../../public/image/logo_principal.png" alt="logo de litrolix" class="icono__img" />
					</picture>

					<a class="lg:hidden btn_menu__toggle"><span class="material-symbols-outlined btn_menu"> menu </span></a>
				</div>

				<div class="hidden lg:block mt-7 md:mt-0 contenedor__navegacion_links animate__animated animate__fadeIn">
					<div class="navegacion__rels__links flex lg:gap-x-8 gap-y-8 items-center lg:flex-row flex-col">
						<a href="#banner" class="font-semibold">Inicio</a>
						<a href="#sobre_producto" class="font-semibold">Producto</a>
						<a href="#contenedorCaracteristicas" class="font-semibold">Característica</a>
						<a href="#contacto" class="font-semibold">Contacto</a>
						<a href="https://wa.me/3026465782?text=Quiero mas informacion" target="_blank" class="navegacion__boton__compra__mini lg:ml-10 font-bold">
							Comprar ahora
						</a>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup></script>

<style scoped></style>

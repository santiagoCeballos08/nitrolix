/* NOTA: con este archivo js, vamos a tomar todos los datos de contactanos para enviar el mensaje a nitrolix del cliente */
/*---------------------------------------------------------------------------------
							variables globales
----------------------------------------------------------------------------------*/
const formularioContactanos = document.querySelector('#formularioPrincipal');
const URL_PRINCIPAL = './backend/envio_mensaje_email.php';
/*---------------------------------------------------------------------------------
								funciones globales
----------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
	eventos();
	function eventos() {
		formularioContactanos.addEventListener('submit', enviarMensajeContacto);
	}
});

async function enviarMensajeContacto(formulario) {
	formulario.preventDefault();
	let formularioPrincipal = formulario.target;

	/* datos para enviar el fetch */
	let peticion = '';
	let respuesta = '';
	let datos = new FormData(formularioPrincipal);

	//validamos los datos que no esten vacios
	if (formularioPrincipal.nombre.value === '') {
		return;
	}
	if (formularioPrincipal.correo__cliente.value === '') {
		return;
	}

	if (formularioPrincipal.mensaje__cliente.value === '') {
		return;
	}

	datos.append('indicativo', 'mensajeWeb');

	try {
		peticion = await fetch(URL_PRINCIPAL, {
			method: 'POST',
			body: datos,
		});
	} catch (error) {
		console.log(error);
	}

	respuesta = await peticion.json();
	console.log(respuesta);
}

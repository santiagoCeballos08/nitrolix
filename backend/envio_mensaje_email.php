<?php

/* NOTA: esta es la parte del backend de la pagina web para enviar mensajes por correo electronico
sea de clientes o sea de la misma empresa nitrolix */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../lib/PHPMailer/src/Exception.php';
require '../lib/PHPMailer/src/PHPMailer.php';
require '../lib/PHPMailer/src/SMTP.php';

/*---------------------------------------------------------------------------------
								variables globales
----------------------------------------------------------------------------------*/
$indicativo = trim($_POST['indicativo']);
$respuesta = '';

/*---------------------------------------------------------------------------------
								Funciones globales
----------------------------------------------------------------------------------*/
function guardarCliente()
{
	include '../database/config/conexion.php';
	// datos de mensaje del cliente
	$mensaje = trim($_POST['mensaje__cliente']);
	$nombre = trim($_POST['nombre']);
	$email = trim($_POST['correo__cliente']);

	$SQLsave = "INSERT INTO prospectos_web (nombre,correo,mensaje) VALUE (:nombre, :correo, :mensaje)";

	try {
		$insertCli = $nitrolixBD->prepare($SQLsave);
		$insertCli->bindValue(':nombre', $nombre);
		$insertCli->bindValue(':correo', $email);
		$insertCli->bindValue(':mensaje', $mensaje);

		if (!$insertCli->execute()) {
			return ['status' => 'error', 'msg' => 'error en el insert', 'data' => 0];
		}
	} catch (PDOException $e) {
		return ['status' => 'error', 'msg' => $e->getMessage(), 'data' => 0];
	}


	return ['status' => 'success', 'msg' => 'se envio mensaje', 'data' => 1];
}

/*---------------------------------------------------------------------------------
								indicativos
----------------------------------------------------------------------------------*/
if (isset($indicativo) && $indicativo === 'mensajeWeb') {
	$respuesta = guardarCliente();
}


/*---------------------------------------------------------------------------------
							respuesta app
----------------------------------------------------------------------------------*/
if ($respuesta == '' || $respuesta == null) {
	echo json_encode(['status' => 'error', 'msg' => 'no entro a ninun indicativo', 'indicativo' => $indicativo]);
} else {
	echo json_encode($respuesta);
}

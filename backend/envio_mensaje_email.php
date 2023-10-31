<?php

/* NOTA: esta es la parte del backend de la pagina web para enviar mensajes por correo electronico
sea de clientes o sea de la misma empresa nitrolix */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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

	$data_email = envioEmail($mensaje, $nombre, $email);
	return ['status' => 'success', 'msg' => 'se envio mensaje', 'data' => 1];
}

function envioEmail($mensaje = '', $nombre = '', $email = '')
{
	//importamos los archivos para el envio del correo
	require "../lib/PHPMailer/src/Exception.php";
	require "../lib/PHPMailer/src/PHPMailer.php";
	require "../lib/PHPMailer/src/SMTP.php";

	// preparamos el envio de mensaje mensaje de correo
	//credenciales del correo electronico
	$hostname = 'smtp.gmail.com';
	$username = 'almacensantiago.24@gmail.com';
	$password = 'sgqr appg lmao jqhr';
	$mail = new PHPMailer();
	try {

		$mail->SMTPDebug = 0;
		$mail->isSMTP();
		$mail->Host = $hostname;
		$mail->SMTPAuth = true;
		$mail->Username = $username;
		$mail->Password = $password;
		$mail->SMTPSecure = 'tls';
		$mail->Port = 587;

		$mail->setFrom($username, 'mensaje de contacto web');
		$mail->addAddress("nitrolix01@gmail.com", "Nitrolix");
		$mail->isHTML(true);
		$mail->CharSet = 'UTF-8';
		$mail->Subject = "Contacto Nitrolix canal web";
		$mail->Body = "<p>
		Hola me llamo $nombre, mi correo es $email
		mensaje: $mensaje
		</p>";


		if ($mail->send()) {
			return ["status" => "success", "msg" => 'correo enviado'];
		} else {
			return ["status" => "error", "msg" => $mail->ErrorInfo];
		}
	} catch (Exception $error) {
		return 'error en el envio del correo: ' . $error->getMessage();
	}
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

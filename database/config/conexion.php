<?php
/* NOTA: conexion a la base de datos de nitrolix porfavor tener mucho cuidado con este archivo */
require '../lib/vairables_entorno.php';
$envPass = getenv('pass');
$envUser = getenv('user');
$envDB = getenv('bd');

/* variables principales y credeciales */
$user = $envUser; // <- usuario
$pass = $envPass; // <- contraseña
$bd = $envDB; // <- base de datos
$host = "localhost"; // <- host de la pagina web
$dns_nitrolix = "mysql:host=$host;dbname=$bd";

// creamos la conexion de la base de datos
try {
	$nitrolixBD = new PDO($dns_nitrolix, $user, $pass);
} catch (Exception $e) {
	echo "<h4 style='font-family:Segoe UI'>error en la conexion en la base de datos porfavor revisa la conexion  error: <span style='color:red'>" . $e->getMessage() . "</span style='color:red'> codigo de error: " . $e->getCode() . "</h4>";
}

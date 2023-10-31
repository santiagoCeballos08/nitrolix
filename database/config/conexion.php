<?php
/* NOTA: conexion a la base de datos de nitrolix porfavor tener mucho cuidado con este archivo */


/* variables principales y credeciales */
$user = "u863260840_nitrolix"; // <- usuario
$pass = "5aj66,y&9,,BRU#zhY!"; // <- contraseña
// $user = "root"; // <- usuario
// $pass = ""; // <- contraseña
$bd = "u863260840_nitrolix_bd"; // <- base de datos
$host = "localhost"; // <- host de la pagina web
$dns_nitrolix = "mysql:host=$host;dbname=$bd";

// creamos la conexion de la base de datos
try {
	$nitrolixBD = new PDO($dns_nitrolix, $user, $pass);
} catch (Exception $e) {
	echo "<h4 style='font-family:Segoe UI'>error en la conexion en la base de datos porfavor revisa la conexion  error: <span style='color:red'>" . $e->getMessage() . "</span style='color:red'> codigo de error: " . $e->getCode() . "</h4>";
}

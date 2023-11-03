<?php
$destino = "consultoria_sap@gspconsultores.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;
mail($destino, $asunto, $contenido);
header("Location:gracias.html")

?>
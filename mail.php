<?php
isset($_POST['nombre'])
$nombre = $_POST[‘name’];
$asunto = $_POST[‘subject’];
$mensaje = $_POST['comments'];
var_dump($nombre)
mail('jc6381878@gmail.com', "Mensaje web: $asunto", $mensaje)
<?php
unset($_SESSION["s_usuario"]);
session_destroy();
header("Location: http://".$_SERVER['HTTP_HOST'].'/consultas.credimujer.pe/index.html'); 
?>
<?php
unset($_SESSION["s_usuario"]);
session_destroy();
header("Location: http://consultas.credimujer.pe");
?>
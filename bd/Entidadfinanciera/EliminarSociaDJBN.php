<?php
	require_once('../coneccion.php'); //se realiza la coneccion
	// $_JsonData = $_POST['post'];
	$cnn =new Modelador();
	$dbh = $cnn->conexion();
	$sql_vars = array();
	$sql_vars['a1'] = $_POST['DNI'];
	$sql_vars['a2'] = $_POST['APELLIDOSNOMBRE']; 
 	$sql_vars['a3'] = $_POST['TIPOCREDITO']; 
    $sql_vars['a4'] = $_POST['MTODESEMBOLSO'];   
	$sql_vars['a5'] = $_POST['USUARIO'];   
	$statement = $dbh->prepare($cnn->Eliminar_DJ_BANCO_NACION($sql_vars));
 	 if ( $statement->execute())
 	 {	
 		$rt = ["1"];
	 	print_r(json_encode($rt)) ;
 	}else{
 		$rt = ["2"];
 		print_r($statement->errorInfo());
 	}
<?php
	require_once('../coneccion.php'); //se realiza la coneccion
	// $_JsonData = $_POST['post'];
	$cnn =new Modelador();
	$dbh = $cnn->conexion();
	$sql_vars = array(); 
	$sql_vars['a1'] = $_POST['ID']; 
 	$sql_vars['a2'] = $_POST['Estado'];   
	$statement = $dbh->prepare($cnn->_editarCuentaAbono($sql_vars));
 	if ( $statement->execute())
 	{	
 		$rt = ["1"];
	 print_r(json_encode($rt)) ;
 	}else{
 		$rt = ["2"];
 		print_r($statement->errorInfo());
 	}
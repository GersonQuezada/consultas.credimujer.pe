<?php
	require_once('../coneccion.php'); //se realiza la coneccion
	// $_JsonData = $_POST['post'];
	$cnn =new Modelador();
	$dbh = $cnn->conexion();
	$sql_vars = array(); 
	$sql_vars['a1'] = $_POST['ID'];   
	$statement = $dbh->prepare($cnn->_EliminarCuentaAbono($sql_vars));
 	 if ( $statement->execute())
 	 {	
 $rt = ["1"];
	 print_r(json_encode($rt)) ;
 	}else{
 		$rt = ["2"];
 		print_r($statement->errorInfo());
 	}
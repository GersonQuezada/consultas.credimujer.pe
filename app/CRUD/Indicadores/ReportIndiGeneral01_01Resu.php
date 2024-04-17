<?php
	require_once('../coneccion.php'); //se realiza la coneccion
 	$cnn =new Modelador();
	$dbh = $cnn->conexion();
	$sql_vars = array();
	$sql_vars['a1'] = $cnn->Dateformat($_POST['fechaInicio']);
	$sql_vars['a2'] = $cnn->Dateformat($_POST['fechafinal']);
	$sql_vars['a3'] = $_POST['region'];
	// $sql_vars['a1'] = '01-04-2021';
	// $sql_vars['a2'] = '01-05-2021';
	// $sql_vars['a3'] = '%%';
	$statement = $dbh->prepare($cnn->IND_CREC_Y_ALC_01_RES($sql_vars));
 	 if ( $statement->execute())
 	 {	
 		 $rt['data'] = $statement->fetchall(PDO::FETCH_ASSOC);    
	   echo(json_encode($rt)) ;
 
 	}else{
 		print_r($statement->errorInfo());
 	}
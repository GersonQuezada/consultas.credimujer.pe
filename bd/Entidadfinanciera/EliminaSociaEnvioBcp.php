<?php
	require_once('../coneccion.php'); //se realiza la coneccion
	// $_JsonData = $_POST['post'];
	$cnn =new Modelador();
	$dbh = $cnn->conexion();
	$sql_vars = array();
	$sql_vars['a'] = $_POST['id'];   
	$statement = $dbh->prepare($cnn->_Cont_Elimina_Socia_envio_bcp($sql_vars));
	if ( $statement->execute()){	
		$rt = ["1"];
		print_r(json_encode($rt)) ;
	}else{
		print_r($statement->errorInfo());
	}

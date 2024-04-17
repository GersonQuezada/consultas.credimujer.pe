<?php 
	require_once('../coneccion.php'); //se realiza la coneccion
 
	$cnn =new Modelador();
	$dbh = $cnn->conexion();
 
	$sql_vars = array();
	$sql_vars['a1'] = $cnn->Dateformat($_POST['fechaProceso']);
	$sql_vars['a2'] = $_POST['ComboBoxRegion'];
	$sql_vars['a3'] = $_POST['TipoDesembolso']; 
	$stm = $dbh->prepare($cnn->_Cont_sql_proc_Genera_Txt($sql_vars));
 	if ( $stm->execute()){	
		$rt['data'] = $stm->fetchall(PDO::FETCH_ASSOC);
        echo json_encode($rt); 
	}else{
		print json_encode($stm->errorInfo());
	}

 ?>



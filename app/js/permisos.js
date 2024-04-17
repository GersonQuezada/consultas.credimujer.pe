 $(function(){
  var grupo = $("[name='grupo']").val();
  //Deshabilita el LI 
	var MODULOSCREDIMUJERCONTABILIDAD = document.getElementById('MODULOSCREDIMUJERCONTABILIDAD');  
	var PROCESOBIM = document.getElementById('PROCESOBIM');  
	var ENTIDADBANCARIABN = document.getElementById('ENTIDADBANCARIABN');  
	var REPORTESCONTABILIDAD = document.getElementById('REPORTESCONTABILIDAD');  
	var REPORTESOPERACIONES = document.getElementById('REPORTESOPERACIONES');  
	var REPORTESRRHH = document.getElementById('REPORTESRRHH');  
	var REPORTESRIESGOS = document.getElementById('REPORTESRIESGOS');  
	var REPORTESENTIDADESFINANCIERAS = document.getElementById('REPORTESENTIDADESFINANCIERAS');  
	var REPORTESCONTRATOS = document.getElementById('REPORTESCONTRATOS');  
	var OPCIONDEVOLUCIONDEAHORROS = document.getElementById('OPCIONDEVOLUCIONDEAHORROS'); 
	var REPORTESINDICADORES = document.getElementById('REPORTESINDICADORES');
	var REPORTESSINFONED = document.getElementById('REPORTESSINFONED');
	var REPORTESCREDITOSPARALELOS = document.getElementById('REPORTESCREDITOSPARALELOS');
	var MODULOSOLICITUD = document.getElementById('ModuloSolicitudes');
	var OPCIONDECLARACIONJURADA = document.getElementById('OPCIONDJ');
	// var MODULOEDUCATIVO = document.getElementById('MODULOEDUCATIVO');
	var MODULOORDEN = document.getElementById('ModuloOrdenPagos');
//Validaciones de los permisos del usuario
  if(grupo == 'ADMINISTRADOR'){
	  MODULOSCREDIMUJERCONTABILIDAD.style.display = 'block';
	  PROCESOBIM.style.display = 'block';
	  ENTIDADBANCARIABN.style.display = 'block';	
	  REPORTESCONTABILIDAD.style.display = 'block';
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESRRHH.style.display = 'block';
	  REPORTESRIESGOS.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';
	  REPORTESCONTRATOS.style.display = 'block';
	  OPCIONDEVOLUCIONDEAHORROS.style.display = 'block'; 
	  REPORTESINDICADORES.style.display = 'block'; 
	  REPORTESSINFONED.style.display = 'block'; 
	  REPORTESCREDITOSPARALELOS.style.display = 'block'; 
	  MODULOSOLICITUD.style.display = 'block'; 
	  OPCIONDECLARACIONJURADA.style.display = 'block';
	//   MODULOEDUCATIVO.style.display = 'block';
	  MODULOORDEN.style.display = 'block';
  }else   if(grupo == 'OP'){ 
  	MODULOSOLICITUD.style.display = 'block';
  	PROCESOBIM.style.display = 'block'; 
	  ENTIDADBANCARIABN.style.display = 'block';
	  REPORTESCONTABILIDAD.style.display = 'block';
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESRRHH.style.display = 'block';
	  REPORTESRIESGOS.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';
	  REPORTESCONTRATOS.style.display = 'block';
	  OPCIONDEVOLUCIONDEAHORROS.style.display = 'block';
	  REPORTESINDICADORES.style.display = 'block'; 
	  REPORTESSINFONED.style.display = 'block'; 
	  REPORTESCREDITOSPARALELOS.style.display = 'block'; 
	  OPCIONDECLARACIONJURADA.style.display = 'block';
	  MODULOORDEN.style.display = 'block';
  }else   if(grupo == 'CF'){
	  MODULOSCREDIMUJERCONTABILIDAD.style.display = 'block';	  
	  REPORTESCONTABILIDAD.style.display = 'block';
	  REPORTESOPERACIONES.style.display = 'block';	   
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';	
	  MODULOSOLICITUD.style.display = 'block';  
  }else   if(grupo == 'AU'){
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESRIESGOS.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block'; 
	  REPORTESINDICADORES.style.display = 'block';
	  MODULOORDEN.style.display = 'block';
  }else   if(grupo == 'DI'){	  
	  REPORTESOPERACIONES.style.display = 'block';	   
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';
	  REPORTESCONTRATOS.style.display = 'block';
	  MODULOSOLICITUD.style.display = 'block'; 
  }else   if(grupo == 'PR'){
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESRIESGOS.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';	
  }else if(grupo == 'JR'){
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESRRHH.style.display = 'block';
	  REPORTESRIESGOS.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';
	  REPORTESCONTRATOS.style.display = 'block';
	  MODULOSOLICITUD.style.display = 'block'; 
	  MODULOORDEN.style.display = 'block';
  }else if(grupo == 'CR'){
	  MODULOSCREDIMUJERCONTABILIDAD.style.display = 'block';
	  REPORTESCONTABILIDAD.style.display = 'block';
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';	
	  OPCIONDEVOLUCIONDEAHORROS.style.display = 'block'; 
	  MODULOSOLICITUD.style.display = 'block';  	  
	  MODULOORDEN.style.display = 'block';
  }else if(grupo == 'ER'){
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';
	//   MODULOEDUCATIVO.style.display = 'block';
  }else if(grupo == 'ED'){
	//   MODULOEDUCATIVO.style.display = 'block';
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';
  }else if(grupo == 'AX'){
	  REPORTESOPERACIONES.style.display = 'block';
	  REPORTESENTIDADESFINANCIERAS.style.display = 'block';
	  REPORTESCONTRATOS.style.display = 'block';
  }
 	 
 });


//  MODULOS : 
// MODULOSCREDIMUJERCONTABILIDAD
// PROCESOBIM
// ENTIDADBANCARIABN
// REPORTESCONTABILIDAD
// REPORTESOPERACIONES
// REPORTESRRHH
// REPORTESRIESGOS
// REPORTESENTIDADESFINANCIERAS
// REPORTESCONTRATOS
// Grupos :
// OP	PERSONAL OPERATIVO		
// CF	CONTABILIDAD Y FINANZAS		
// AU	AUDITORIA Y RIESGOS		
// DI	DIGITADORAS OPERATIVAS REGIONES		
// PR	PERSONAL OFICIAL DE CREDITOS		
// JR	JEFAS Y/O RESPONSABLES REGIONALES		
// CR	CONTABILIDAD REGIONES		
// ER	DIGITADORAS EDUCATIVAS REGIONES		
// ED	JEFA EDUCATIVA		
// AX	AUXILIARES		

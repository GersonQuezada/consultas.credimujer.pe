<?php
session_start();

if($_SESSION["s_usuario"] === null){
    header("Location: index.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>CredimujerSystem | Manuela Ramos</title>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../../dist/css/adminlte.min.css">
      <link rel="stylesheet" href="../../dist/css/main.css">  
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <!-- Navbar -->

  <!-- /.navbar -->

  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../Menu.php" class="brand-link">
      <img src="../../dist/img/credito.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">CredimujerSystem</span>
    </a>
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../dist/img/usuario.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block"><?php echo $_SESSION["s_usuario"]; ?></a>
          <input id="grupo" name="grupo" type="hidden" value="<?php echo $_SESSION['grupo']; ?>">
        </div>
      </div>
 
      <!-- Sidebar Menu --> 
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
      <!-- Entidad Financiera -->
      <li class="nav-item has-treeview ">
            <a href="#" class="nav-link">
               <i class="fas fa-hand-holding-usd"></i>
              <p>
                 Entidad Financiera
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li id = "MODULOSCREDIMUJERCONTABILIDAD" class="nav-item has-treeview" style="display: none;">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    Banco de Credito
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                  <ul class="nav nav-treeview">
                  <li class="nav-item ">
                    <a href="../../Modulo/Contabilidad/ChequeGerencia.php" class="nav-link ">
                      <i class="far fa-dot-circle nav-icon "></i>
                      <p>Transferencia a Cuentas de Ahorros Socia - BCP</p>
                    </a>
                  </li>                  
              </ul> 
              <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="../../Modulo/Contabilidad/Regist_Cuent_Abono_socia.php" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Generación cuentas de ahorro</p>
                    </a>
                  </li>                  
                </ul>
              </li>
              <li id = "PROCESOBIM" class="nav-item has-treeview"  style="display: none;">
              <a href="#" class="nav-link">
              <i class="far fa-circle nav-icon"></i>
              <p>Proceso BIM
              <i class="right fas fa-angle-left"></i>
              </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                <a href="../../Modulo/Operaciones/ProcesoBim.php" class="nav-link  ">
                <i class="far fa-dot-circle nav-icon"></i>
                <p>DJ de BIM</p>
                </a>
                </li>     
              </ul>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                <a href="../../Modulo/Operaciones/ProcesoFinalBim.php" class="nav-link  ">
                <i class="far fa-dot-circle nav-icon"></i>
                <p>Envio de BIM</p>
                </a>
                </li>
              </ul>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                <a href="../../Modulo/Operaciones/DevolucionBim.php" class="nav-link">
                <i class="far fa-dot-circle nav-icon"></i>
                <p>Devolucion de Ahorros - BIM </p>
                </a>
                </li>
              </ul>
              </li>
              <li id = "ModuloSolicitudes" class="nav-item has-treeview" style="display: none;" >
                <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Modulo Solicitudes
                <i class="right fas fa-angle-left"></i>
                </p>
                </a>               
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                  <a href="../../Modulo/Solicitudes/CuadroGeneralDiario.php" class="nav-link">
                  <i class="far fa-dot-circle nav-icon"></i>
                  <p>Cuadro General Diario</p>
                  </a>
                  </li>
                </ul>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                  <a href="../../vistas/Solicitudes/ReporteSolicitudes.php" class="nav-link">
                  <i class="far fa-dot-circle nav-icon"></i>
                  <p>Reportes Solicitudes Desembolsos</p>
                  </a>
                  </li>
                </ul>
              </li>
              <li id = "ModuloOrdenPagos" class="nav-item has-treeview" style="" >
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Modulo Orden Pagos
                  <i class="right fas fa-angle-left"></i>
                </p>
                </a>               
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                  <a href="../../Modulo/OrdenPago/OrdenesPagos.php" class="nav-link">
                  <i class="far fa-dot-circle nav-icon"></i>
                  <p>Registro Orden Pago</p>
                  </a>
                  </li>
                </ul>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                  <a href="../../vistas/OrdenPago/ReportesOrdenPago.php" class="nav-link">
                  <i class="far fa-dot-circle nav-icon"></i>
                  <p>Reportes Orden Pago</p>
                  </a>
                  </li>
                </ul>
              </li>
             <li id="ENTIDADBANCARIABN" class="nav-item has-treeview"  style="display: none;">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Banco Nacion-Desemb.
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
     
                  <li class="nav-item has-treeview  ">
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Generar creditos de Socias
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="../../Modulo/Operaciones/InsertManualBD.php" class="nav-link  ">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Insertar Socia a BD</p>
                        </a>
                      </li>
     
                    </ul>
                    <ul class="nav nav-treeview">
                      <li id = "OPCIONDEVOLUCIONDEAHORROS" class="nav-item" style="display: none;">
                        <a href="../../Modulo/Operaciones/DevolucionAhorros.php" class="nav-link  ">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Devolucion de Ahorros</p>
                        </a>
                      </li>     
                    </ul>
                    <ul class="nav nav-treeview">
                      <li id = "OPCIONDJ" class="nav-item" style="display: none;">
                        <a href="../../Modulo/Operaciones/DjBancoNacion.php" class="nav-link  ">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Declaraciones Juradas</p>
                        </a>
                      </li>     
                    </ul>
                  </li>
                  <li class="nav-item has-treeview  ">
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Creditos Anulados
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul  class="nav nav-treeview">
                      <li id = "InsertCreditosAnulados" class="nav-item">
                        <a href="../../Modulo/Operaciones/InsertAnulados.php" class="nav-link  ">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Insert Creditos Anulados</p>
                        </a>
                      </li>
     
                    </ul>
 
                  </li>  
                </ul>

              </li>
             </ul>
      </li>
      <!-- Reporte Varios           -->
      <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link">
              <i class="fas fa-chalkboard-teacher"></i>
              <p>
                 Reportes Varios
                <i class="right fas fa-angle-left"></i>
              </p>
            </a> 
            <ul class="nav nav-treeview">
              <li id = "REPORTESINDICADORES" style="display: none;" class="nav-item has-treeview"   >
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Reportes Indicadores
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
     
                  <li class="nav-item has-treeview  ">
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Generales
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="../../vistas/Indicadores/Generales-Crecimiento.php" class="nav-link  ">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>De crecimiento y alcance</p>
                        </a>
                      </li>     
                    </ul>
                    <ul class="nav nav-treeview">
                      <li class="nav-item" >
                        <a href="../../vistas/Indicadores/Generales-Eficiencia.php" class="nav-link  ">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>De eficiencia y productividad</p>
                        </a>
                      </li>     
                    </ul>
                    <ul class="nav nav-treeview">
                      <li class="nav-item" >
                        <a href="../../vistas/Indicadores/Generales-SocioEconomico.php" class="nav-link  ">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Socio economico</p>
                        </a>
                      </li>     
                    </ul>
                  </li>
                  
                  <li class="nav-item">
                    <a href="../../vistas/Indicadores/Consolidado.php" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Consolidado</p>                      
                    </a>
                  </li>                  
                 
                </ul>

              </li>


            <li id = "REPORTESCONTABILIDAD"  class="nav-item has-treeview"  style="display: none;">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    Reportes Contabilidad
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="../../vistas/Contabilidad_reportes/RecuperacionesVsBoletaVentas.php" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Recuperaciones vs </p>
                      <br><p> Boletas de Ventas</p>
                    </a>
                  </li>                  
                </ul>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="../../vistas/Contabilidad_reportes/RecuperacionesTotal.php" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Recuperaciones Total</p>                      
                    </a>
                  </li>                  
                </ul>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="../../vistas/Contabilidad_reportes/ReportesMigrados.php" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Reportes Migrados</p>                      
                    </a>
                  </li>                  
                </ul>
            </li>
            </li>
              <li class="nav-item has-treeview" style="display: none;" id = "REPORTESSINFONED">
                <a href="../../vistas/SINFONED/ReporteSinfoned.php" class="nav-link ">
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    Reportes Sinfoned
                  </p>
                </a>

            </li>
                <li class="nav-item has-treeview" style="display: none;"  id = "REPORTESCREDITOSPARALELOS" >
                      <a href="../../vistas/Creditos_Paralelos/ReporteCreditosParalelos.php" class="nav-link ">
                        <i class="far fa-circle nav-icon active"></i>
                        <p>
                          Reportes Creditos Paralelos
                        </p>
                      </a>
                    </li>
                 <li id = "REPORTESOPERACIONES" class="nav-item has-treeview"  style="display: none;"  >
                          <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                              Reportes Operaciones
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="../../vistas/operaciones/CarteraActivaSemanal.php" class="nav-link">
                                <i class="far fa-dot-circle nav-icon"></i>
                                <p>Cartera Activa Actual</p>                      
                              </a>
                            </li>                  
                          </ul>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="../../vistas/operaciones/Recuperaciones.php" class="nav-link">
                                <i class="far fa-dot-circle nav-icon"></i>
                                <p>Reporte Recuperaciones</p>                      
                              </a>
                            </li>                  
                          </ul>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="../../vistas/operaciones/ReportesMigrados.php" class="nav-link">
                                <i class="far fa-dot-circle nav-icon"></i>
                                <p>Reportes Migrados</p>                      
                              </a>
                            </li>                  
                          </ul>
                  </li>
                  <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESCONTRATOS">
                    <a href="../../vistas/Contratos/ReportesContratos.php" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                       <p>
                          Reportes Contratos
                          <!-- <i class="right fas fa-angle-left"></i> -->
                      </p>
                    </a>
                  </li> 
                  <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESENTIDADESFINANCIERAS">
                      <a href="../../vistas/EntidadFinanciera/ReportesEntidadesFinancieros.php" class="nav-link active">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                          Reportes Entidad Financiera
                          <!-- <i class="right fas fa-angle-left"></i> -->
                        </p>
                      </a>
                  </li>

                  <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESRRHH">
                      <a href="../../vistas/RecursosHumanos/ReportesRRHH.php" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                          Reportes RRHH
                          <!-- <i class="right fas fa-angle-left"></i> -->
                        </p>
                      </a>
                  </li>

                  <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESRIESGOS">
                      <a href="../../vistas/Riesgos/ReporteRIESGOS.php" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                          Reportes Riesgos
                          <!-- <i class="right fas fa-angle-left"></i> -->
                        </p>
                      </a>

                  </li>
                   
       
                    
                </ul>
      </li>
      <!-- Modulo Educatio    -->
      <li class="nav-item has-treeview" style="display: none;" id = "MODULOEDUCATIVO">
            <a href="#" class="nav-link">
              <i class="fas fa-user-graduate"></i>
              <p>
                 Modulo Educativo
                <i class="right fas fa-angle-left"></i>
              </p>
            </a> 
           <ul class="nav nav-treeview">
              <li id = "AsitenciaTaller"  class="nav-item has-treeview"   >
                <a href="../../Modulo/Educativo/ModuloEducativo.php" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Asistencia Taller
                   
                  </p>
                </a>
              </li>
            </ul>
            <ul class="nav nav-treeview">
              <li id = "AsitenciaTaller"  class="nav-item has-treeview"   >
                <a href="../../vistas/Educativo/ReportesEducativo.php" class="nav-link">
                  <i class="nav-icon fas fa-circle"></i>
                  <p>
                    Reporte Educativo
                    
                  </p>
                </a>
              </li>
            </ul>  
      </li>           
        <li id= "Salida" class="nav-item has-treeview ">
            <a href="../../bd/logout.php" class="nav-link ">
             <i class="fas fa-sign-out-alt"></i>
              <p>
                 Salir                
            </p></a>
        </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Reportes Entidades Financieras</h1>
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content" >
      <form >
        <input id="usuario" name="usuario" type="hidden" value="<?php echo $_SESSION['login']; ?>">
        <label for="fechaInicio" style=" font-family:Arial; color:black">Fecha de Inicio : </label>
        <input type="date" id="fechaInicio" name="fechaInicio"  value="<?php echo date("Y-n-j"); ?>" 
       min="2019-01-01">    
       <label for="fechafin" style="   font-family:Arial; color:black ">Fecha Final : </label>
        <input type="date" id="fechafin" name="fechafin"  value="<?php echo date("Y-n-j"); ?>" 
              min="2019-01-01">     
                         <label for="fechaMes" style="  font-family:Arial; color:black">Mes: </label>    
                <input type="month" id="MESAÑO" name="MESAÑO">  <br>
                <label>Reportes :</label>
                       <SELECT name="tiporeporte" id= "ComboBox">
          <OPTION value="0">Seleccionar</OPTION>
          <OPTION value="1">CUADRO - NO COBRADOS DESEMBOLSOS BNACION</OPTION>
          <OPTION value="2">REPORTE - COBRANZA DESEMBOLSOS BNACION</OPTION>
          <OPTION value="3">REPORTE - COBRANZA DEVOLUCIÓN AHORROS BNACION</OPTION>
          <OPTION value="4">REPORTE - ENVÍO DESEMBOLSOS BNACION</OPTION>
          <OPTION value="5">REPORTE - ENVÍO DEVOLUCIÓN AHORROS BNACION</OPTION>
          <OPTION value="6">REPORTE - RESUMEN TOTAL COBRADO X DIA (MES) BNP</OPTION>
          <OPTION value="7">REPORTE - CUADRO DE RECUPERACIONES DE RESGUARDO</OPTION>
          <OPTION value="8">REPORTE - ENVIOS BIM</OPTION>
          <OPTION value="9">REPORTE - ENVIOS BCP</OPTION>
          <OPTION value="10">REPORTE - Nro Cuentas de Abono</OPTION>
          <OPTION value="11">REPORTE - Envios Caja Trujillo</OPTION>
          <OPTION value="12">REPORTE - Envios Caja Piura</OPTION>
          </SELECT>
          <label>Region :</label>
          <SELECT name="ComboBoxRegion" id= "ComboBoxRegion">
          <OPTION value="0">Seleccionar</OPTION>
          <OPTION value='%%'>Todos</OPTION>
          <OPTION value='007'>AMAZONAS</OPTION>
          <OPTION value='005'>LA LIBERTAD</OPTION>
          <OPTION value='011'>LAMBAYEQUE</OPTION>
          <OPTION value='004'>PUNO</OPTION>
          <OPTION value='003'>SAN MARTIN</OPTION>
          <OPTION value='002'>UCAYALI</OPTION>
          </SELECT>   
 
          <button type="button" id = "Btn_Ejecutar_ReportesRiesgo" >Ejecutar</button><p>
          <div>                         
             <!--  <div class="container"> -->
              <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report01" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">  
                          <th>Editar</th>           
                          <th>CODREGION</th>
                          <th>FECHAENVIO</th>
                          <th>NROCRE_BN</th>
                          <th>NRODNI</th>
                          <th>APELLIDOSNOMBRES</th>
                          <th>FECHACREDITO</th>
                          <th>FECHACADUCIDAD</th>
                          <th>MONTOENVIADO</th>
                          <th>DESASOCIACION</th>
                          <th>FLAGINSERT</th>
                          <th>TIPOREG</th>
                         </thead>
                      </table>                  
                     </div>
                   </div>
                 </div> 
              <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report02" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">                                     
                        <th>FECHACOBRANZA</th>   
                        <th>CODREGION</th>   
                        <th>CODASOCIACION</th>   
                        <th>DESASOCIACION</th>   
                        <th>CODSOCIA</th>    
                        <th>NRODNI</th>    
                        <th>APELLIDOS_Y_NOMBRES</th>   
                        <th>MONTOCOBRADO</th>    
                        <th>FECHAENVIO</th>    
                        <th>FECHAVENCIMIENTO</th>    
                        <th>FECHADESEMBOLSO</th>   
                        <th>COMISION</th>    
                        <th>TIPOCOBRO</th>                
                         </thead>
                      </table>                  
                     </div>
                   </div>
                 </div>  
                 <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report03" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                        <th>FECHACOBRANZA</th>   
                        <th>CODREGION</th>   
                        <th>CODASOCIACION</th>   
                        <th>DESASOCIACION</th>   
                        <th>CODSOCIA</th>    
                        <th>NRODNI</th>    
                        <th>APELLIDOS_Y_NOMBRES</th>   
                        <th>MONTOCOBRADO</th>    
                        <th>FECHAENVIO</th>    
                        <th>FECHAVENCIMIENTO</th>    
                        <th>FECHADESEMBOLSO</th>   
                        <th>COMISION</th>    
                        <th>TIPOCOBRO</th> 
                         </thead>
                      </table>                  
                     </div>
                   </div>
                 </div>  
                                  <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report04" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                          <th>FECHAENVIO</th>  
                          <th>CODREGION</th> 
                          <th>CODASOCIACION</th> 
                          <th>DESASOCIACION</th> 
                          <th>CODSOCIA</th>  
                          <th>NRODNI</th>  
                          <th>APELLIDOS_Y_NOMBRES</th> 
                          <th>MONTO_A_COBRAR</th>  
                          <th>FECHADESEMBOLSO</th> 
                          <th>FECHAVENCIMIENTO</th>  
                          <th>TIPOCOBRO</th>               
                         </thead>
                      </table>                  
                     </div>
                   </div>
                 </div>  
                <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report05" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                          <th>FECHAENVIO</th>  
                          <th>CODREGION</th> 
                          <th>CODASOCIACION</th> 
                          <th>DESASOCIACION</th> 
                          <th>CODSOCIA</th>  
                          <th>NRODNI</th>  
                          <th>APELLIDOS_Y_NOMBRES</th> 
                          <th>MONTO_A_COBRAR</th>  
                          <th>FECHADESEMBOLSO</th> 
                          <th>FECHAVENCIMIENTO</th>  
                          <th>TIPOCOBRO</th>                
                         </thead>
                      </table>                  
                     </div>
                   </div>
                 </div>
                <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report06" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                          <th>nombredia</th>  
                          <th>fechacobranza</th> 
                          <th>cantidad</th> 
                          <th>montocobrado</th>                
                         </thead>
<!--                         <tfoot>   <th></th><th></th><th></th><th></th>    
                         </tfoot> -->
                      </table>                  
                     </div>
                   </div>
                 </div>   
                <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report07" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                          <th>FECHACOBRANZA</th>
                          <th>CODREGION</th>
                          <th>NOMBREREGION</th>
                          <th>CODASOCIACION</th>
                          <th>TIPOASOCIACION</th>
                          <th>DESASOCIACION</th>
                          <th>CODIGORESGUARDO</th>
                          <th>MONTODEPOSITO</th>
                          <th>NUMREGISTRO</th>
                          <th>DESCRIPCIONCUENTA_BCP</th>
                         </thead >
                         <tfoot>      
                         </tfoot>
                      </table>                  
                     </div>
                   </div>
                 </div>
                 <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report08" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                          <th>REGION</th> 
                          <th>DESASOCIACION</th> 
                          <th>APELLIDOSNOMBRES</th> 
                          <th>NRODNI</th>
                          <th>CELULAR</th>
                          <th>MTOADICIONAL</th> 
                          <th>FECHADESEMBOLSO</th>
                          <th>FECHAPROCESOBIM</th>
                          <th>TIPOCOBRO</th>
                         </thead >
                         <tfoot>      
                         </tfoot>
                      </table>                  
                     </div>
                   </div>
                 </div>

                  <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report09" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                          <th>REGION</th> 
                          <th>DESASOCIACION</th> 
                          <th>PRODUCTO</th> 
                          <th>CODSOCIA</th>
                          <th>APELLIDOSNOMBRES</th>
                          <th>NRODNI</th> 
                          <th>NROCTAAHORROSOCIA</th>
                          <th>MTODESEMBOLSADO</th>
                          <th>MTOADICIONAL</th>
                          <th>FECHAPROCESO</th>
                          <th>FECHADESEMBOLSO</th>
                          <th>TIPOCOBRO</th>
                         </thead >
                         <tfoot>      
                         </tfoot>
                      </table>                  
                     </div>
                   </div>
                 </div> 

                  <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report10" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                         <th>Nombre completo de Socia</th>
                          <th>Nro de Cuenta</th>
                          <th>Entidad Bancaria</th>
                          <th>Siuacion</th>                          
                          <th>Fecha Registro</th> 
                         </thead >
                         <tfoot>      
                         </tfoot>
                      </table>                  
                     </div>
                   </div>
                 </div>    
                 <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report11" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                         <th>Region</th>
                          <th>Nombre del Banco</th>
                          <th>Nombre Socia</th>
                          <th>DNI</th>                          
                          <th>Cuenta Ahorro</th> 
                          <th>Monto Desembolsado</th> 
                          <th>Fecha Desembolso</th> 
                          <th>FECHAPROCESOCMP</th> 
                          <th>TIPOCOBRO</th>   
                         </thead >
                         <tfoot>      
                         </tfoot>
                      </table>                  
                     </div>
                   </div>
                 </div> 
                 <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="report12" class="table table-striped table-bordered" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                         <th>Region</th>
                          <th>Nombre del Banco</th>
                          <th>Nombre Socia</th>
                          <th>DNI</th>                          
                          <th>Cuenta Ahorro</th> 
                          <th>Monto Desembolsado</th> 
                          <th>Fecha Desembolso</th> 
                          <th>FECHAPROCESOCMP</th> 
                          <th>TIPOCOBRO</th>   
                         </thead >
                         <tfoot>      
                         </tfoot>
                      </table>                  
                     </div>
                   </div>
                 </div>               
          <!--</div>-->           

          </div>

      </form>  
     
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="../../plugins/jquery/jquery.min.js"></script>
     <script src="../../plugins/sweetalert2/sweetalert2.all.min.js"></script>  
 
<!-- Bootstrap 4 -->
<script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../../dist/js/adminlte.min.js"></script>
<!-- <script src="../../dist/js/main.js"></script> -->

<script src="../../dist/js/jsint/ReporteEntidadFinanciera.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>

    <!-- datatables JS -->
<script type="text/javascript" src="../../plugins/datatables/datatables.min.js"></script>  
    <!-- para usar botones en datatables JS -->  
    <script src="../../plugins/datatables/Buttons-1.5.6/js/dataTables.buttons.min.js"></script>  
    <script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>  
        <script src="//cdn.datatables.net/plug-ins/1.10.21/api/sum().js"></script>
    <script src="../../plugins/datatables/JSZip-2.5.0/jszip.min.js"></script>    
    <script src="../../plugins/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>    
    <script src="../../plugins/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
    <script src="../../plugins/datatables/Buttons-1.5.6/js/buttons.html5.min.js"></script>
                                <!-- Validar Usuarios -->
<script src="../../dist/js/main.js"></script>
</body>
</html>

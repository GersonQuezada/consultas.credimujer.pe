<?php
session_start();
if(!isset($_SESSION["s_usuario"])){
  header("Location: http://".$_SERVER['HTTP_HOST'].'/consultas.credimujer.pe/index.html'); 
}
?>
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="es">
<head>
<?php include 'ModalRestriccion.php' ?> 
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SystemCredi | Manuela Ramos </title>
  <link rel="icon" href="../../../../dist/img/credito.png">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../../../../build/loading/css/styles.css">
  <link rel="stylesheet" href="../../../../plugins/fontawesome-free/css/all.min.css">
  <link rel="stylesheet" href="../../../../plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
  <link rel="stylesheet" href="../../../../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="../../../../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <!-- Select2 -->
  <link rel="stylesheet" href="../../../../plugins/select2/css/select2.min.css">
  <link rel="stylesheet" href="../../../../plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../../../../dist/css/adminlte.min.css">
  

</head>
<body class="hold-transition  sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>      
    </ul>

    <!-- Right navbar links -->

  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../../../Menu.php" class="brand-link">
      <img src="../../../../dist/img/credito.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">CredimujerSystem</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../../../dist/img/usuario.png" class="img-circle elevation-2" alt="User Image">
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
               <li class="nav-item has-treeview menu-open">
                <a href="#" class="nav-link">
                   <i class="fas fa-hand-holding-usd"></i>
                  <p>
                     Entidad Financiera
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li id = "MODULOSCREDIMUJERCONTABILIDAD" class="nav-item has-treeview " style="display: none;">
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Banco de Credito
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                      <ul class="nav nav-treeview">
                      <li class="nav-item ">
                        <a href="../../../../app/View/formulario/Contabilidad/ChequeGerencia.php" class="nav-link">
                          <i class="far fa-dot-circle nav-icon "></i>
                          <p style="font-size: 14px;" >Transferencia a Cuentas de Ahorros Socia - BCP</p>
                        </a>
                      </li>                  
                  </ul> 
                  <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="../../../../app/View/formulario/Contabilidad/Regist_Cuent_Abono_socia.php" class="nav-link">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p style="font-size: 14px;" >Generación cuentas de ahorro</p>
                        </a>
                      </li>                  
                    </ul>
                  </li>
                  <li id = "PROCESOBIM" class="nav-item has-treeview "  style="display: none;">
                  <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Proceso BIM
                  <i class="right fas fa-angle-left"></i>
                  </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                    <a href="../../../../app/View/formulario/Operaciones/ProcesoBim.php" class="nav-link">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p>DJ de BIM</p>
                    </a>
                    </li>     
                  </ul>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                    <a href="../../../../app/View/formulario/Operaciones/ProcesoFinalBim.php" class="nav-link  ">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p>Envio de BIM</p>
                    </a>
                    </li>
                  </ul>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                    <a href="../../../../app/View/formulario/Operaciones/DevolucionBim.php" class="nav-link">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p sstyle="font-size: 14px;" >Devolucion de Ahorros - BIM </p>
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
                      <a href="../../../../app/View/formulario/Solicitudes/CuadroGeneralDiario.php" class="nav-link ">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Cuadro General Diario</p>
                      </a>
                      </li>
                    </ul>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                      <a href="../../../../app/View/reportes/Solicitudes/ReporteSolicitudes.php" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Reportes Solicitudes Desembolsos</p>
                      </a>
                      </li>
                    </ul>
                  </li>
                  <li id = "ModuloOrdenPagos" class="nav-item has-treeview  menu-open" style="display: none;" >
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Modulo Orden Pagos
                      <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>               
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                      <a href="../../../../app/View/formulario/OrdenPago/OrdenesPagos.php" class="nav-link active">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Registro Orden Pago</p>
                      </a>
                      </li>
                    </ul>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                      <a href="../../../../app/View/reportes/OrdenPago/ReportesOrdenPago.php" class="nav-link">
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
                          <p style="font-size: 14px;" >
                            Generar creditos de Socias
                            <i class="right fas fa-angle-left"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <a href="../../../../app/View/formulario/Operaciones/InsertManualBD.php" class="nav-link  ">
                              <i class="far fa-dot-circle nav-icon"></i>
                              <p>Insertar Socia a BD</p>
                            </a>
                          </li>
         
                        </ul>
                        <ul class="nav nav-treeview">
                          <li id = "OPCIONDEVOLUCIONDEAHORROS" class="nav-item" style="display: none;">
                            <a href="../../../../app/View/formulario/Operaciones/DevolucionAhorros.php" class="nav-link  ">
                              <i class="far fa-dot-circle nav-icon"></i>
                              <p>Devolucion de Ahorros</p>
                            </a>
                          </li>     
                        </ul>
                        <ul class="nav nav-treeview">
                          <li id = "OPCIONDJ" class="nav-item" style="display: none;">
                            <a href="../../../../app/View/formulario/Operaciones/DjBancoNacion.php" class="nav-link  ">
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
                            <a href="../../../../app/View/formulario/Operaciones/InsertAnulados.php" class="nav-link  ">
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
          <li class="nav-item has-treeview ">
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
                            <a href="../../../../app/View/reportes/Indicadores/Generales-Crecimiento.php" class="nav-link  ">
                              <i class="far fa-dot-circle nav-icon"></i>
                              <p>De crecimiento y alcance</p>
                            </a>
                          </li>     
                        </ul>
                        <ul class="nav nav-treeview">
                          <li class="nav-item" >
                            <a href="../../../../app/View/reportes/Indicadores/Generales-Eficiencia.php" class="nav-link  ">
                              <i class="far fa-dot-circle nav-icon"></i>
                              <p>De eficiencia y productividad</p>
                            </a>
                          </li>     
                        </ul>
                        <ul class="nav nav-treeview">
                          <li class="nav-item" >
                            <a href="../../../../app/View/reportes/Indicadores/Generales-SocioEconomico.php" class="nav-link  ">
                              <i class="far fa-dot-circle nav-icon"></i>
                              <p>Socio economico</p>
                            </a>
                          </li>     
                        </ul>
                      </li>
                      
                      <li class="nav-item">
                        <a href="../../../../app/View/reportes/Indicadores/Consolidado.php" class="nav-link">
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
                        <a href="../../../../app/View/reportes/Contabilidad_reportes/RecuperacionesVsBoletaVentas.php" class="nav-link">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p style="font-size: 14px;" >Recuperaciones vs </p>
                          <!-- <br><p> -->
                             Boletas de Ventas</p>
                        </a>
                      </li>                  
                    </ul>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="../../../../app/View/reportes/Contabilidad_reportes/RecuperacionesTotal.php" class="nav-link">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Recuperaciones Total</p>                      
                        </a>
                      </li>                  
                    </ul>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="../../../../app/View/reportes/Contabilidad_reportes/ReportesMigrados.php" class="nav-link">
                          <i class="far fa-dot-circle nav-icon"></i>
                          <p>Reportes Migrados</p>                      
                        </a>
                      </li>                  
                    </ul>
                </li>
                </li>
                  <li class="nav-item has-treeview" style="display: none;" id = "REPORTESSINFONED">
                    <a href="../../../../app/View/reportes/SINFONED/ReporteSinfoned.php" class="nav-link ">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Reportes Sinfoned
                      </p>
                    </a>
    
                </li>
                    <li class="nav-item has-treeview" style="display: none;"  id = "REPORTESCREDITOSPARALELOS" >
                          <a href="../../../../app/View/reportes/Creditos_Paralelos/ReporteCreditosParalelos.php" class="nav-link ">
                            <i class="far fa-circle nav-icon active"></i>
                            <p style="font-size: 14px;">
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
                                  <a href="../../../../app/View/reportes/operaciones/CarteraActivaSemanal.php" class="nav-link">
                                    <i class="far fa-dot-circle nav-icon"></i>
                                    <p>Cartera Activa Actual</p>                      
                                  </a>
                                </li>                  
                              </ul>
                              <ul class="nav nav-treeview">
                                <li class="nav-item">
                                  <a href="../../../../app/View/reportes/operaciones/Recuperaciones.php" class="nav-link">
                                    <i class="far fa-dot-circle nav-icon"></i>
                                    <p>Reporte Recuperaciones</p>                      
                                  </a>
                                </li>                  
                              </ul>
                              <ul class="nav nav-treeview">
                                <li class="nav-item">
                                  <a href="../../../../app/View/reportes/operaciones/ReportesMigrados.php" class="nav-link">
                                    <i class="far fa-dot-circle nav-icon"></i>
                                    <p>Reportes Migrados</p>                      
                                  </a>
                                </li>                  
                              </ul>
                      </li>
                      <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESCONTRATOS">
                        <a href="../../../../app/View/reportes/Contratos/ReportesContratos.php" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                           <p>
                              Reportes Contratos
                              <!-- <i class="right fas fa-angle-left"></i> -->
                          </p>
                        </a>
                      </li> 
                      <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESENTIDADESFINANCIERAS">
                          <a href="../../../../app/View/reportes/EntidadFinanciera/ReportesEntidadesFinancieros.php" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p style="font-size: 14px;">
                              Reportes Entidad Financiera
                              <!-- <i class="right fas fa-angle-left"></i> -->
                            </p>
                          </a>
                      </li>
    
                      <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESRRHH">
                          <a href="../../../../app/View/reportes/RecursosHumanos/ReportesRRHH.php" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                              Reportes RRHH
                              <!-- <i class="right fas fa-angle-left"></i> -->
                            </p>
                          </a>
                      </li>
    
                      <li class="nav-item has-treeview"  style="display: none;" id = "REPORTESRIESGOS">
                          <a href="../../../../app/View/reportes/Riesgos/ReporteRIESGOS.php" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                              Reportes Riesgos
                              <!-- <i class="right fas fa-angle-left"></i> -->
                            </p>
                          </a>
    
                      </li>
                       
           
                        
                    </ul>
          </li>
          <li id= "Salida" class="nav-item has-treeview ">
                <a href="../../../../app/CRUD/logout.php" class="nav-link ">
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
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Modulo Ordenes de Pagos</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="../../../../Menu.php">Home</a></li>
              <li class="breadcrumb-item active">Modulo Ordenes de Pagos</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
      <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-info">
              <div class="card-header">
                <!-- <h3 class="card-title"></h3> -->
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <div class="card-body">
                <!-- Date -->
                <div class="form-group">
                  <form  class="form" action="" method="post">
                  <div class="row">
                    <input type="hidden" id="FechaActual" name="FechaActual"  value="<?php echo date("d-m-Y"); ?>" >                    
                    <input id="user" name="user" type="hidden" value="<?php echo $_SESSION['s_usuario']; ?>">
                    <label style= "color: black; font-weight: bold; display: block;">Region: </label>
                    <SELECT name="ComboBoxRegion" id= "ComboBoxRegion" class="custom-select form-control-border col-sm-1" style = "margin-left:  15px; ">
                      <OPTION value="0">Seleccionar</OPTION>
                      <OPTION value="007">AMAZONAS</OPTION>
                      <OPTION value="005">LA LIBERTAD</OPTION>
                      <OPTION value="011">LAMBAYEQUE</OPTION>
                      <OPTION value="004">PUNO</OPTION>
                      <OPTION value="003">SAN MARTIN</OPTION>
                      <OPTION value="002">UCAYALI</OPTION>
                    </SELECT>   
                    <label   style= "margin-left:  15px;  color: black; font-weight: bold; display: block;" lang="es">Banco Comunal:</label>
                    <SELECT name="BancoComunal" style= "margin-left:  15px;" id= "BancoComunal_name" class="form-control select2bs4 col-md-3" >  
                      <OPTION value="0">Seleccionar</OPTION>
                    </SELECT>
                    <label   style= "margin-left:  15px;  color: black; font-weight: bold; display: block;">Anillo Grupal:</label>
                    <SELECT name="Anillogrupal"  style= "margin-left:  15px; " id= "Anillogrupal_name"  class="form-control select2bs4 col-md-3">  
                      <OPTION value="0">Seleccionar</OPTION>
                    </SELECT>
                    <label  id = "labelfechabus" style="margin-left:  15px;   font-family:Arial; color:black">Fecha Proceso: </label>
                    <input  type="date" class = "btn btn-default float-right" style= "margin-left:  15px;"  name="fechaproceso" id="fechaproceso" >
                  </div>  
 
                  
                  <button type="button"  class="btn btn-info" id = "ConsultarBancoComunal" onClick = "BuscarBanco();" style="margin-top: 10px" >Consultar</button>
                  <button type="button"  class="btn btn-info" id = "insertar" onClick = "Insertar();" style="margin-top: 10px" >Insertar</button>
                  <button type="button"  class="btn btn-danger" id = "Desactivar" onClick = "DesactivarModal();" style="margin-top: 10px" >Desactivar Modulo</button>
                  <button type="button"  class="btn btn-info" id = "Activar" onClick = "ActivarModal();" style="margin-top: 10px" >Activar Modulo</button>   
                   
                  </form>
                </div> 
              </div>
            </div>
            <div class ="row">
              <div class = "col-md-6">
                <div class="card card-info">
                <div class="card-header">
                  <!-- <h3 class="card-title"></h3> -->
                </div>
                <div class="card-body" >
                      <div class="row" >
                        <div class = "col-md-3">
                          <label>Banco Comunal</label>
                        </div>                  
                        <div class = "col-md-3">
                        <label>Anillo Grupal</label>
                        </div>
                        <div class = "col-md-2">
                          <label>Saldo</label>
                        </div>
                        <div class = "col-md-3">
                          <label>Oficial de Credito</label>
                        </div>
                      </div>
                      <div id="content" >
                      </div>
                      <div class="row" >
                        <div class = "col-md-3">
                          <span id = 'span_BancoComunal'></span>
                        </div>                  
                        <div class = "col-md-3">
                          <span id = 'span_AnilloComunal'></span>
                        </div>
                        <div class = "col-md-2">
                          <span id = 'span_Saldo' name = 'span_Saldo' ></span>
                        </div>
                        <div class = "col-md-3">
                          <span id = 'span_OficialCredito'></span>
                        </div>
                      </div>
                       
                </div> 
              </div> 
              </div>

            </div>

            <!-- /.card -->
          </div> 
          <div>                         
             <!--  <div class="container"> -->
            <div class = "card">
              <div class="card-body">
                 
              <div id= "div-content-data--1" class="table-responsive" style="margin-top: 20px">        
                        <table id="OrdenesPagos" class="table table-striped table-bordered table-hover"  cellspacing="0">                          
                         <thead class="text-white bg-info text-center align-middle">
                         <th>Accion</th> 
                          <th>Codigo Region</th>
                          <th>Nombre Region</th>   
                          <th>Codigo BC</th>
                          <th>Nombre BC</th>          
                          <th>Codigo AG</th>
                          <th>Nombre AG</th>
                          <th>Tipo Operacion</th>
                          <th>Tipo de Credito</th>
                          <th>Nombre Socia</th>
                          <th>Entidad Bancaria</th>
                          <th>Importe Total</th>
                          <th>Nro Cuenta</th>
                          <th>Nro Celular</th>
                          <th>Fecha Operacion</th>
                          <th>Fecha Creacion</th>
                          <th>Item</th>
                          </thead>
                          <tbody></tbody>
                       </table>                 
                     </div>
                    
                 </div>
            </div>  
          <!--       </div>    --> 
            

          </div>
 
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
 
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <!-- <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    Default to the left
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved. -->
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->
<script src="../../../../app/js/jsOperativa/ComportamientoOrdenPago.js"></script> 
<!-- jQuery -->
<script src="../../../../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../../../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../../../../dist/js/adminlte.min.js"></script>
<script src="../../../../app/js/permisos.js"></script>   
<!-- Select2 -->
<script src="../../../../plugins/select2/js/select2.full.min.js"></script>
    <!-- datatables JS -->
<script type="text/javascript" src="../../../../plugins/datatables/datatables.min.js"></script>  
<script src="../../../../plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../../../../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>

<!-- <script src="../../../../plugins/ThreeDots/js/jquery.ThreeDots.min.js"></script> -->

<script src="../../../../plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="../../../../plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
   <!-- para usar botones en datatables JS -->  
<script src="../../../../plugins/datatables/Buttons-1.5.6/js/dataTables.buttons.min.js"></script>  
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>  
<script src="../../../../plugins/datatables/JSZip-2.5.0/jszip.min.js"></script>    
<script src="../../../../plugins/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>    
<script src="../../../../plugins/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
<script src="../../../../plugins/datatables/Buttons-1.5.6/js/buttons.html5.min.js"></script>
<script src="../../../../plugins/sweetalert2/sweetalert2.min.js"></script>
<script src="../../../../plugins/sweetalert2/es.js"></script>
<script>
  $(document).ready(
    Restriccion()
  
  );
  function Restriccion(){ 
    var fecha = document.getElementById('FechaActual').value;
    $.ajax({url:"../../../CRUD/OrdenPagos/Restriccion.php",
            type:"POST",
            dataType: "json",
            data:{fecha : fecha }, 
            success:function(data){  
              if(data == 1 ){
                $("#modal-default-1").modal({backdrop: 'static', keyboard: false});                  
                var user = document.getElementById('user').value;
                var botoncerrar = document.getElementById('botoncerrar');
                var desactivar = document.getElementById('Desactivar');
                var activar = document.getElementById('Activar');
                if ( user == 'CDIAZ' || user == 'ana.hostiliano' || user == 'gerson' || user == 'cdelacruz') {
                  botoncerrar.style.display = 'inline'; 
                  desactivar.style.display = 'none';
                  activar.style.display = 'inline';
                }else{          
                  botoncerrar.style.display = 'none';
                  desactivar.style.display = 'none';
                  activar.style.display = 'none';
                }
              }else{
                var user = document.getElementById('user').value;                            
                var desactivar = document.getElementById('Desactivar');
                var activar = document.getElementById('Activar');
                if ( user == 'CDIAZ' || user == 'ana.hostiliano' || user == 'gerson' || user == 'cdelacruz') {
                  activar.style.display = 'none'; 
                  desactivar.style.display = 'inline';
                }else{          
                  desactivar.style.display = 'none';
                  activar.style.display = 'none';
                } 
              }
            }    
    });  
    Cargar();
  }
  function Cargar(){ 	 
    $("#BancoComunal_name").prop("disabled", true);
    $("#Anillogrupal_name").prop("disabled", true);
    $("#fechaProceso").prop("disabled", true);
    $("#insertar").prop("disabled", true);   

    document.getElementById('fechaproceso').valueAsDate  = new Date();
    document.getElementById('insertar').style.display = 'none';  
    // document.getElementById('Activar').style.display = 'none'; 
    document.getElementById("BancoComunal_name").value = '0';
    document.getElementById("Anillogrupal_name").value = '0';
    document.getElementById('span_Saldo').innerText = '';
    document.getElementById('span_OficialCredito').innerText = '';
    document.getElementById('span_BancoComunal').innerText = '';
    document.getElementById('span_AnilloComunal').innerText = '';
    Enlistar();
  }
  function Enlistar(){
    var controller = "../../../CRUD/OrdenPagos/ListarOrdenesPagos.php";// URL   
    var Usuario = $("#user").val();
    $("#OrdenesPagos").DataTable({
        dom: "<''row<''f><''i><B>>rtp",
        paging:true,
        bLengthChange: false,
        destroy: true,
        bFilter: true,
        bInfo: true,buttons:[],
        order: [[16, 'desc']],
        language : {"url": "../../../js/Spanish.js",},
        ajax : {"cache": false,
          "method":"POST",                            
          "url":controller,
          "data" : {Usuario : Usuario},
          "dataType": "json",
          "deferRender": true,},
        columns:[
          {"data" : "Accion",
              render: function ( data, type, row) {
                            var botonEliminar = '<button type="button"  class="btn btn-danger col" onclick = "EliminarOrdenesPagos(\''+row.CODSUCURSAL+'_'+row.NroRegistro+'_'+row.FECHA_CREACION+'\');" id = "BotonEliminar"><i class="fas fa-user-slash"></i></button>'+
                            '<br><button type="button"   class="btn btn-info col" onclick = "HabilitarItems(\''+row.CODSUCURSAL+'_'+row.NroRegistro+'_'+row.FECHA_CREACION+'_'+row.CODASOCIACION+'_'+row.CODASOCIACION_anillo+'\');" id = "BotonEditar_'+row.CODSUCURSAL+'_'+row.NroRegistro+'_'+row.FECHA_CREACION+'"><i class="fas fa-pencil-alt"></i></button>'+
                            '<button type="button" style = "display : none;"   class="btn btn-success col" onclick = "GuardarOrdenesPagos(\''+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.CODASOCIACION+'_'+row.CODASOCIACION_anillo+'_'+row.FECHA_OPERACION+'\');" id = "BotonAgregar_'+row.CODSUCURSAL+'_'+row.NroRegistro+'_'+row.FECHA_OPERACION+'"><i class="fas fa-save"></i></button>';
                            return botonEliminar;     
              }
          },
          {"data" : "CODSUCURSAL"},
          {"data" : "NOMSUCURSAL"},
          {"data" : "CODASOCIACION"},    
          {"data" : "DESASOCIACION"},              
          {"data" : "CODASOCIACION_anillo"}, 
          {"data" : "DESASOCIACION_anillo"},              
          {"data" : "TIPO_OPERACION",
              render: function(data,type,row){
                  let campoTipoOperacion = '<select class="form-control select2bs4 col" onchange = TipoOperacion(\''+row.CODSUCURSAL+'_'+row.NroRegistro+'_'+row.FECHA_CREACION+'_'+row.CODASOCIACION+'_'+row.CODASOCIACION_anillo+'\') id = "CampoOpera_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'" name = "CAMPOOPERACION" style = "min-width : 150px; display:none;" >'+
                                          '<OPTION value="0">Seleccionar</OPTION>'+
                                          '<OPTION value="TRANF">Transf por mora</OPTION>'+
                                          '<OPTION value="DEVOL">Dev de Ahorros</OPTION>'+
                                          '<OPTION value="PREST">Prestamo Interno</OPTION></select>'+
                                          '<span id="textOpera_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+row.TIPO_OPERACION+'<span>';
                  return campoTipoOperacion;
              }
          },
          {"data" : "TIPOCREDITO",
              render: function(data,type,row){
                  let campoTipoCredito = '<select class="form-control select2bs4 col" id = "CampoCredi_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'" style = "min-width : 150px; display:none;"></select> '+                                                  
                                          '<span id="textCredi_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+row.TIPOCREDITO+'<span>';
                  return campoTipoCredito;
              }
          },
          {"data" : "NOMSOCIA",
              render: function(data,type,row){
                  let CampoNombreSocia = '<select class="form-control select2bs4 col-md-6" onchange = "CambioSocia(\''+row.CODSUCURSAL+'_'+row.NroRegistro+'_'+row.FECHA_CREACION+'\')" id = "CampoSocia_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_OPERACION+'" style = "min-width : 300px; display:none;"> '+
                                          '<OPTION value="0">Seleccionar</OPTION> </select>'+ 
                                          '<span id="textSocia_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+row.NOMSOCIA+'<span>';
                  return CampoNombreSocia;
              }
          },
          {"data" : "ENTIDADBANCARIA",
              render: function(data,type,row){
                  let campoEntidadBancaria = '<select class="form-control select2bs4 col" onchange = "CambioSocia(\''+row.CODSUCURSAL+'_'+row.NroRegistro+'_'+row.FECHA_CREACION+'\')"  id = "CampoEnti_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_OPERACION+'" style = "min-width : 150px; display:none;" >'+
                                          '<OPTION value="0">Seleccionar</OPTION>'+
                                          '<OPTION value="BN">Banco Nacion</OPTION>'+
                                          '<OPTION value="BCP">BCP</OPTION>'+
                                          '<OPTION value="BIM">BIM</OPTION>'+
                                          '<OPTION value="CP">Caja Piura</OPTION>'+
                                          '<OPTION value="CT">Caja Trujillo</OPTION>'+
                                          '<OPTION value="CSM">Cooperativa San Martin</OPTION></select>'+
                                          '<span id="textEnti_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+row.ENTIDADBANCARIA+'<span>';
              return campoEntidadBancaria;
              }
          },
          {"data" : "ImporteTotal",
              render: function(data,type,row){
                  let to = (row.ImporteTotal).split('.'); 
                  let tot = 0;
                  if(to[0] == ""){
                      tot = 0+row.ImporteTotal; 
                  }else{
                      tot = row.ImporteTotal;
                  } 
                  let campoImporteTotal = '<input class="form-control col" type = "number" value = "'+tot+'" style = "min-width : 150px; display:none;" id="CampoImpor_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'"> '+ 
                                          '<span id="textImpor_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+tot+'<span>';
                  return campoImporteTotal;
              }
          },
          {"data" : "NROCUENTA",
              render: function(data,type,row){
                  let campoNroCuenta = '<select class="form-control select2bs4 col" id = "CampoCuenta_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'" style = "min-width : 150px; display:none;"> '+
                                          '<OPTION value="0">Seleccionar</OPTION> </select>'+ 
                                          '<span id="textCuenta_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+row.NROCUENTA+'<span>';
                  return campoNroCuenta;
              }
          },
          {"data" : "NROCELULAR",
              render: function(data,type,row){
                  let camponrocelular = '<input type = "number"  maxlength="9" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" id = "CampoCelular_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'" style = "min-width : 150px; display:none;"> '+ 
                                          '<span id="textCelular_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+row.NROCELULAR+'<span>';
                  return camponrocelular;
              }
          },
          {"data" : "FECHA_OPERACION",
            render: function(data,type,row){
              let campoFechaproceso = '<input type="date" class = "btn btn-default float-right"  id = "CampoFechaproceso_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'" style = "min-width : 150px; display:none;">'+ 
                                      '<span id="textFechaproceso_'+row.NroRegistro+'_'+row.CODSUCURSAL+'_'+row.FECHA_CREACION+'">'+row.FECHA_OPERACION+'<span>';
              return campoFechaproceso;
            }
          
          },
          {"data" : "FECHA_CREACION"},
          {"data" : "NroRegistro"}
        ],
        pagingType: "simple" 
    });
  }
  $("#ComboBoxRegion").change( function() {
    var region = document.getElementById('ComboBoxRegion').value;	    
    if( region == 0){
        Cargar();
        document.getElementById("Anillogrupal_name").value = '0';
        document.getElementById("Anillogrupal_name").value = '0';
    }else{
        document.getElementById("BancoComunal_name").value = '0';
        document.getElementById("Anillogrupal_name").value = '0';
        // Select2 Banco
        $("#BancoComunal_name").prop("disabled", false);   

        // Select2Items(vari,url,cod);     
        $("#BancoComunal_name").select2();
        $("#BancoComunal_name").select2({ 
            placeholder: 'Seleccione un banco comunal',
                ajax: {
                    url: '../../../CRUD/OrdenPagos/BusquedaBancoComunal.php',
                    dataType: 'json',
                    type:'POST',
                    delay: 250,
                    data: function (data) {
                        return {
                            name: data.term// search term ,  
                            ,region : region                    
                        };
                    },
                    processResults: function (response) {
                        return {
                            results:response
                        };
                    },
                        cache: true
                }
        }); 
    }
		    
  })

  $("#BancoComunal_name").change( function() {
    $("#Anillogrupal_name").prop("disabled", false);
    var cod = document.getElementById('BancoComunal_name').value;   
    $("#Anillogrupal_name").select2();
      $("#Anillogrupal_name").select2({ 
          placeholder: 'Seleccione un Anillo Comunal',
            ajax: {
                url: '../../../CRUD/OrdenPagos/BusquedaBancoComunal_anillo.php',
                dataType: 'json',
                type:'POST',
                delay: 250,
                data: function (data) {
                    return {
                        name: data.term// search term ,  
                        ,cod : cod                    
                    };
                },
                processResults: function (response) {
                    return {
                        results:response
                    };
                },
                    cache: true
            }
      }); 	   
  })


</script> 


</script>
</body>
</html>

 
 
 
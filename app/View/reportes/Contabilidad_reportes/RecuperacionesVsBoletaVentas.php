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
  <?php include '../ModalCargaReportes.php' ?>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SystemCredi | Manuela Ramos </title>
  <link rel="icon" href="../../../../dist/img/credito.png">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Toastr -->
  <link rel="stylesheet" href="../../../../plugins/toastr/toastr.min.css">
  <!-- Font Awesome Icons -->
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
               <li class="nav-item has-treeview">
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
                  <li id = "ModuloSolicitudes" class="nav-item has-treeview " style="display: none;" >
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
                  <li id = "ModuloOrdenPagos" class="nav-item has-treeview" style="display: none;" >
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Modulo Orden Pagos
                      <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>               
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                      <a href="../../../../app/View/formulario/OrdenPago/OrdenesPagos.php" class="nav-link">
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
          <li class="nav-item has-treeview menu-open">
                <a href="#" class="nav-link">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <p>
                     Reportes Varios
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a> 
                <ul class="nav nav-treeview">
                  <li id = "REPORTESINDICADORES" style="display: none;" class="nav-item has-treeview "   >
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-circle"></i>
                      <p>
                        Reportes Indicadores
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
         
                      <li class="nav-item has-treeview  menu-open">
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
                            <a href="../../../../app/View/reportes/Indicadores/Generales-Eficiencia.php" class="nav-link   ">
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
    
    
                <li id = "REPORTESCONTABILIDAD"  class="nav-item has-treeview menu-open"  style="display: none;">
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>
                        Reportes Contabilidad
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="../../../../app/View/reportes/Contabilidad_reportes/RecuperacionesVsBoletaVentas.php" class="nav-link active"> 
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
            <h1>Reportes de Recuperaciones vs Boletas de Ventas</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="../../../../Menu.php">Home</a></li>
              <li class="breadcrumb-item active">Reportes de Recuperaciones vs Boletas de Ventas</li>
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
              <label for="fechaInicio" style="font-family:Arial; color:black">Fecha de Inicio : </label>
        <input type="date" id="fechaInicio" name="fechaInicio" class = "btn btn-default float"  value="<?php echo date("Y-n-j"); ?>" 
       min="2019-01-01">
        <label for="fechafinal" style="font-family:Arial; color:black">Fecha de Final : </label>
        <input type="date" id="fechafinal" name="fechafinal"  class = "btn btn-default float"   value="<?php echo date("Y-n-j"); ?>" 
       min="2019-01-01">
       <label style="font-family:Arial; color:black">Reportes : </label>
       <SELECT name="tiporeporte" id= "ComboBox"  class="custom-select form-control-border col-sm-3">
          <OPTION value="0">Seleccionar</OPTION>
          <OPTION value="1">Recuperaciones vs Boletas de Ventas</OPTION>
          <OPTION value="2">Boleta de Ventas sin Recuperaciones</OPTION>
          <OPTION value="3">Recuperaciones sin Boletas de Ventas</OPTION>
       </SELECT>
       <br>
       <label for="NroCredito" style="font-family:Arial; color:black">Numero de Credito : </label>
       <input type="number" maxlength="14" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" class="form-control form-control-sm col-2" name="NroCredito" id = 'NroCredito'>      

          <button class = "btn btn-info col-sm-1" style = "margin-top : 15px;" type="button" onClick = "Btn_Ejecutar();" >Ejecutar</button>
              </div> 
              </form>
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
                        <table id="example" class="table table-striped table-bordered table-hover" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                         <th>RC_AGENCIA</th>
                          <th>RC_PRODUCTO</th>
                          <th>RC_NRO_CREDITO</th>
                          <th>RC_CODIGO_BANCO</th>
                          <th>RC_BANCO_COMUNAL</th>
                          <th>RC_CODIGO_SOCIA</th>
                          <th>RC_NOMBRE_CLIENTE</th>
                          <th>SRECU_CAPITAL</th>
                          <th>RV_AGENCIA</th>
                          <th>RV_PRODUCTO</th>
                          <th>RV_NRO_CREDITO</th>
                          <th>RV_CODIGO_BANCO</th>
                          <th>RV_BANCO_COMUNAL</th>
                          <th>RV_CODIGO_SOCIA</th>
                          <th>RV_NOMBRE_CLIENTE</th>
                          <th>RECU_CAPITAL</th>
                          <th>RECU_IGV</th>
                          <th>RECU_INTERES</th>
                          <th>RECU_M_TOTAL</th>
                          <th>REGV_CAPITAL</th>
                          <th>REGV_IGV</th>
                          <th>REGV_INTERES</th>
                          <th>REGV_M_TOTAL</th>
                          <th>DIF_DE_INTERES</th>
                          <th>DIF_DE_IGV</th>              
                         </thead>
                        </table>   

                      <table id="example2" class="table table-striped table-bordered table-hover" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                          <th>COD_SUCURSAL</th>
                          <th>AGENCIA</th>
                          <th>NRO_SERIE</th>
                          <th>NRO_CORRELATIVO</th>
                          <th>PRODUCTO</th>
                          <th>FECHA_VENCIMIENTO</th>
                          <th>NUMERO_CREDITO</th>
                          <th>CODIGO_DE_BANCO</th>
                          <th>NOMBRE_BANCO_COMUNAL</th>
                          <th>COD_CLIENTE</th>
                          <th>NOMBRE_CLIENTE</th>
                          <th>COD_CLIENTE_PRESIDENTE</th>
                          <th>NOMBRE_CLIENTE_PRESIDENTE</th>
                          <th>CAPITAL</th>
                          <th>INTERES</th>
                          <th>IGV</th>
                          <th>MONTO_TOTAL</th>
                          <th>TIPO_PAGO</th>
                          <th>FECHA_VENCIMIENTO_CRONOGRAMA</th>               
                         </thead>
                      </table>     

                      <table id="example3" class="table table-striped table-bordered table-hover" cellspacing="0" style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">             
                         <th>AGENCIA</th>
                          <th>ENTIDAD_BANCARIA</th>
                          <th>PRODUCTO</th>
                          <th>FECHA_DE_RECUP</th>
                          <th>NUMERO_CREDITO</th>
                          <th>CICLO</th>
                          <th>CODIGO_DE_BANCO</th>
                          <th>NOMBRE_BANCO_COMUNAL</th>
                          <th>DNI_CLIENTE</th>
                          <th>CODSOCIA</th>
                          <th>NOMBRE_CLIENTE</th>
                          <th>CAPITAL</th>
                          <th>INTERES</th>
                          <th>IGV</th>
                          <th>SEGURO</th>
                          <th>COMISION</th>
                          <th>MONTO_TOTAL</th>
                          <th>NRO_CUOTA</th>                 
                         </thead>
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

<script src="../../../../app/js/jsReporte/reporteria.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
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
<!-- Toastr -->
<script src="../../../../plugins/toastr/toastr.min.js"></script>
<script src="../../../../plugins/sum.js"  ></script>

<script>
$(document).ready(
  Cargar()
);


$("#ComboBox").change( function() {
        if ($(this).val() === "1") {
            $("#NroCredito").prop("disabled", true);
            document.getElementById("NroCredito").value = "";
            $('#example').show();
            $('#example2').hide();
            destruir('#example2');
            $('#example3').hide();
            destruir('#example3');
        } else if ($(this).val() === "2") {
            $("#NroCredito").prop("disabled", false);
            $('#example2').show();
            $('#example').hide();
            destruir('#example');
            $('#example3').hide();
            destruir('#example3');        
        }else if($(this).val() === "3"){
          $("#NroCredito").prop("disabled", false);
            $('#example3').show();
            $('#example2').hide();
            destruir('#example2');
            $('#example').hide();
            destruir('#example');
        }else{
          $('#example').hide(); 
          destruir('#example');
          $('#example2').hide();
          destruir('#example2');
          $('#example3').hide();
          destruir('#example3');
        }
    });


</script>


</body>
</html>
 
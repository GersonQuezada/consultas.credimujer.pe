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
  <title>CredimujerSystem | Manuela Ramos</title>
  <link rel="icon" href="../../dist/img/credito.png">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../../build/loading/css/styles.css">
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css">
  <link rel="stylesheet" href="../../plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
  <link rel="stylesheet" href="../../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="../../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <!-- Select2 -->
  <link rel="stylesheet" href="../../plugins/select2/css/select2.min.css">
  <link rel="stylesheet" href="../../plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../../dist/css/adminlte.min.css">
  
</head>
<?php include '../ModalCargaReportes.php' ?>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>      
    </ul> 
  </nav>
  <!-- /.navbar -->

  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../Menu.php" class="brand-link">
      <img src="../../dist/img/credito.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">CredimujerSystem</span>
    </a>
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../dist/img/usuario.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block"><?php echo $_SESSION["s_usuario"]; ?></a>
          <a href="#" style="font-family: Helvetica, Verdana, sans-serif; font-size: 75%" class="d-block" id ="GrupoUsuario"><?php echo $_SESSION['grupo']; ?></a>
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
              <li id = "ModuloOrdenPagos" class="nav-item has-treeview" style="display: none;" >
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
              <li id = "REPORTESINDICADORES" style="display: none;" class="nav-item has-treeview "   >
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
                    <a href="../../vistas/Contabilidad_reportes/RecuperacionesVsBoletaVentas.php" class="nav-link">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Recuperaciones vs </p>
                      <br><p> Boletas de Ventas</p>
                    </a>
                  </li>                  
                </ul>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="../../vistas/Contabilidad_reportes/RecuperacionesTotal.php" class="nav-link ">
                      <i class="far fa-dot-circle nav-icon"></i>
                      <p>Recuperaciones Total</p>                      
                    </a>
                  </li>                  
                </ul>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="../../vistas/Contabilidad_reportes/ReportesMigrados.php" class="nav-link active">
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
                      <a href="../../vistas/EntidadFinanciera/ReportesEntidadesFinancieros.php" class="nav-link">
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
            <h1 class="m-0 text-dark">Reportes Migrados</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="../../../../Menu.php">Home</a></li>
              <li class="breadcrumb-item active">Reportes Migrados</li>
            </ol>
          </div>
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content" >
    <div class="card card-info">
        <div class="card-header">
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="fechaInicioMigra"  class="col-form-label">Fecha de Inicio : </label>
              <input type="date" class="btn btn-default float col-sm-2"  id="fechaInicioMigra" name="fechaInicioMigra"  value="<?php echo date("Y-n-j"); ?>" min="2019-01-01">    
            <label for="fechafinMigra"  class="col-form-label">Fecha Final : </label>
              <input type="date"  class="btn btn-default float col-sm-2" id="fechafinMigra" name="fechafinMigra"  value="<?php echo date("Y-n-j"); ?>" min="2019-01-01">     
            <label for="fechaMes" class="col-form-label">Mes: </label>    
              <input type="month"  class="btn btn-default float col-sm-2"  id="MESAÑO" name="MESAÑO">
            <label for="TipoCambio"  class="col-form-label">Tipo de Cambio: </label>    
              <input type="number"  min="0" max="4" step="0.01" value= '2.80' id="TipoCambio" name="TipoCambio">
              <br>
              <label  class="col-form-label">Reportes :</label>
              <SELECT name="tiporeporte" class="custom-select col-3 "  id= "ComboBoxMigra">
              <OPTION value="0">Seleccionar</OPTION>
              <OPTION value="1">REGISTRO DE VENTAS</OPTION>
              <OPTION value="2">REGISTRO DE VENTAS - SUNAT</OPTION> 
              <OPTION value="3">PROYECCION DE RECUPERACIONES (BC Y GMT)</OPTION> 
              <OPTION value="4">PROYECCION GENERAL DE RECUPERACIONES</OPTION> 
              </SELECT>
            <label class="col-form-label">Region :</label>
              <SELECT name="ComboBoxRegion" class="custom-select col-2 " id= "ComboBoxRegion">
              <OPTION value="0">Seleccionar</OPTION>
              <OPTION value='%%'>TODOS</OPTION>
              <OPTION value='007'>AMAZONAS</OPTION>
              <OPTION value='005'>LA LIBERTAD</OPTION>
              <OPTION value='011'>LAMBAYEQUE</OPTION>
              <OPTION value='004'>PUNO</OPTION>
              <OPTION value='003'>SAN MARTIN</OPTION>
              <OPTION value='002'>UCAYALI</OPTION>
              </SELECT>       
            <button type="button" class="btn btn-info" id = "Btn_Ejecutar_ReporteConta_Migrado" >Ejecutar</button>
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Reportes :</h3>
              </div>                         
                <!--  <div class="container"> -->
                <div class="card-body" id="report01_Contenido" style="display: none;">
                  <div class="row">
                    <div class="col-lg-12">
                        <div id= "div-content-data--1" class="table-responsive" >        
                          <table id="report01_tabla" class="table table-striped table-bordered" cellspacing="0" >
                            <thead class="text-white bg-info text-center align-middle">             
                              <th style="text-align: center">Sucursal</th>
                              <th style="text-align: center">TIPO</th>
                              <th style="text-align: center">Ingreso Capital BCP</th>
                              <th style="text-align: center">Ingreso Interes BCP</th>
                              <th style="text-align: center">Ingreso IGV BCP</th>
                              <th style="text-align: center">Ingreso Otros BCP</th>
                              <th style="text-align: center">Ingreso Total BCP</th>
                              <th style="text-align: center">Ingreso Capital BNP</th>
                              <th style="text-align: center">Ingreso Interes BNP</th>
                              <th style="text-align: center">Ingreso IGV BNP</th>
                              <th style="text-align: center">Ingreso Otros BNP</th>
                              <th style="text-align: center">Ingreso Total BNP</th>
                              <th style="text-align: center">Ingreso Capital BC2</th>
                              <th style="text-align: center">Ingreso Interes BC2</th>
                              <th style="text-align: center">Ingreso IGV BC2</th>
                              <th style="text-align: center">Ingreso Otros BC2</th>
                              <th style="text-align: center">Ingreso Total BC2</th>
                              <th style="text-align: center">Ingreso Capital xCaja</th>
                              <th style="text-align: center">Ingreso Interes xCaja</th>
                              <th style="text-align: center">Ingreso IGV xCaja</th>
                              <th style="text-align: center">Ingreso Otros xCaja</th>
                              <th style="text-align: center">Ingreso Total xCaja</th>
                              <th style="text-align: center">Ingreso Capital Total</th>
                              <th style="text-align: center">Ingreso Interes Total</th>
                              <th style="text-align: center">Ingreso IGV Total</th>
                              <th style="text-align: center">Ingreso Otros Total</th>
                              <th style="text-align: center">Ingreso Total General</th>
                              <th style="text-align: center">Fecha de Inicio</th>
                              <th style="text-align: center">Fecha Final</th>
                              <th style="text-align: center">Tipo de Asociacion</th>
                              <th style="text-align: center">Tipo de Cambio</th>
                            </thead>
                          </table>                  
                        </div>
                      </div>
                    </div> 
                </div>
                <div class="card-body" id="report02_Contenido" style="display: none;">
                  <div class="row">
                    <div class="col-lg-12">
                        <div id= "div-content-data--1" class="table-responsive" >        
                          <table id="report02_tabla" class="table table-striped table-bordered" cellspacing="0" >
                            <thead class="text-white bg-info text-center align-middle">                  
                                <th style="text-align: center">Año de Proceso</th>
                                <th style="text-align: center">Mes de Proceso</th>
                                <th style="text-align: center">Codigo de Region</th>
                                <th style="text-align: center">Codigo de Cliente</th>
                                <th style="text-align: center">Correlativo</th>
                                <th style="text-align: center">Fecha Emitido</th>
                                <th style="text-align: center">Fecha de Vencimiento</th>
                                <th style="text-align: center">Tipo de Comision</th>
                                <th style="text-align: center">Serie de Comision</th>
                                <th style="text-align: center">Nro de Comision</th>
                                <th style="text-align: center">Tipo de Documento</th>
                                <th style="text-align: center">Nro de Documento</th>
                                <th style="text-align: center">Apellidos y Nombres</th>
                                <th style="text-align: center">VALOR_FACTEXP</th>
                                <th style="text-align: center">Interes</th>
                                <th style="text-align: center">Comisiones</th>
                                <th style="text-align: center">Importe Exonetado</th>
                                <th style="text-align: center">IMP_INAFE</th>
                                <th style="text-align: center">ISC</th>
                                <th style="text-align: center">IGV</th>
                                <th style="text-align: center">OTROS</th>
                                <th style="text-align: center">Importe Total</th>
                                <th style="text-align: center">Tipo de Cambio</th>
                                <th style="text-align: center">Fecha Emitido 2</th>
                                <th style="text-align: center">Tipo de Comisio 2</th>
                                <th style="text-align: center">Serie de Comision 2</th>
                                <th style="text-align: center">Nro de Comision 2</th>
                                <th style="text-align: center">Estado</th>
                                <th style="text-align: center">Tipo de Producto</th>
                                <th style="text-align: center">Codigo de Moneda</th>
                            </thead>
                          </table>                  
                        </div>
                      </div>
                    </div>
                </div>
                <div class="card-body" id="report03_Contenido" style="display: none;">
                  <div class="row">
                    <div class="col-lg-12">
                        <div id= "div-content-data--1" class="table-responsive" >        
                          <table id="report03_tabla" class="table table-striped table-bordered" cellspacing="0">
                            <thead class="text-white bg-info text-center align-middle">                  
                              <th style="text-align: center">FECVENCIMIENTO</th>  
                              <th style="text-align: center">CODREGION</th> 
                              <th style="text-align: center">CODASOCIACION</th> 
                              <th style="text-align: center">DESASOCIACION</th>
                              <th style="text-align: center">TIPOASOCIACION</th>
                              <th style="text-align: center">FECDESEMBOLSO</th>
                              <th style="text-align: center">CICLO</th>
                              <th style="text-align: center">NROPLAZOS</th>
                              <th style="text-align: center">NROCUOTA</th>
                              <th style="text-align: center">MTOCAPITAL</th>
                              <th style="text-align: center">MTOINTERES</th>
                              <th style="text-align: center">MTOIGV</th>
                              <th style="text-align: center">MTOTOTAL</th>
                              <th style="text-align: center">NOMPROMOTORA</th>
                              <th style="text-align: center">ENTIDADFINAN</th>
                            </thead>
                          </table>                  
                        </div>
                      </div>
                    </div>
                </div>
                <div class="card-body" id="report04_Contenido" style="display: none;">
                  <div class="row">
                    <div class="col-lg-12">
                        <div id= "div-content-data--1" class="table-responsive" >        
                          <table id="report04_tabla" class="table table-striped table-bordered" cellspacing="0">
                            <thead class="text-white bg-info text-center align-middle">                  
                                <th style="text-align: center">FECVENCIMIENTO</th>  
                                <th style="text-align: center">CODREGION</th> 
                                <th style="text-align: center">CODASOCIACION</th> 
                                <th style="text-align: center">DESASOCIACION</th> 
                                <th style="text-align: center">ORDEN</th> 
                                <th style="text-align: center">TIPOPRODUCTO</th>  
                                <th style="text-align: center">FECDESEMBOLSO</th> 
                                <th style="text-align: center">CICLO</th> 
                                <th style="text-align: center">CODSOCIA</th>  
                                <th style="text-align: center">APATERNO</th>
                                <th style="text-align: center">AMATERNO</th>  
                                <th style="text-align: center">NOMBRES</th> 
                                <th style="text-align: center">NROPLAZOS</th> 
                                <th style="text-align: center">NROCUOTA</th>  
                                <th style="text-align: center">MTOCAPITAL</th>  
                                <th style="text-align: center">MTOINTERES</th>  
                                <th style="text-align: center">MTOIGV</th>  
                                <th style="text-align: center">MTOTOTAL</th>  
                                <th style="text-align: center">NOMPROMOTORA</th>  
                                <th style="text-align: center">ENTIDADFINAN</th>
                            </thead>
                          </table>                  
                        </div>
                      </div>
                    </div>
              <!--</div>-->
              
          </div>
        </div>
    </div>
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
<script src="../../dist/js/jsint/reporteria.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
    <!-- datatables JS -->
    <script type="text/javascript" src="../../plugins/datatables/datatables.min.js"></script>  
<script src="../../plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="../../plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="../../plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
   <!-- para usar botones en datatables JS -->  
<script src="../../plugins/datatables/Buttons-1.5.6/js/dataTables.buttons.min.js"></script>  
<script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>  
<script src="../../plugins/datatables/JSZip-2.5.0/jszip.min.js"></script>    
<script src="../../plugins/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>    
<script src="../../plugins/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
<script src="../../plugins/datatables/Buttons-1.5.6/js/buttons.html5.min.js"></script>
<script src="../../plugins/sweetalert2/sweetalert2.min.js"></script>
<!-- <script src="../../plugins/sweetalert2/es.js"></script> -->
                        <!-- Validar Usuarios -->
<script src="../../dist/js/main.js"></script>
</body>
</html>

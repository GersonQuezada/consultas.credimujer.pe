<?php
session_start();

if($_SESSION["s_usuario"] === null){
    header("Location: ../../../index.php");
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
      <li class="nav-item has-treeview menu-open ">
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
              <li id = "ModuloSolicitudes" class="nav-item has-treeview menu-open" style="display: none;" >
                <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Modulo Solicitudes
                <i class="right fas fa-angle-left"></i>
                </p>
                </a>               
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                  <a href="../../Modulo/Solicitudes/CuadroGeneralDiario.php" class="nav-link ">
                  <i class="far fa-dot-circle nav-icon"></i>
                  <p>Cuadro General Diario</p>
                  </a>
                  </li>
                </ul>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                  <a href="../../vistas/Solicitudes/ReporteSolicitudes.php" class="nav-link active">
                  <i class="far fa-dot-circle nav-icon"></i>
                  <p>Reportes Solicitudes Desembolsos</p>
                  </a>
                  </li>
                </ul>
              </li>
              <li id = "ModuloOrdenPagos" class="nav-item has-treeview" style=" display : none;" >
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
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                      <a href="../../vistas/Indicadores/Consolidado.php" class="nav-link">
                        <i class="far fa-dot-circle nav-icon"></i>
                        <p>Consolidado</p>                      
                      </a>
                    </li> 
                    </ul>
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
    </div>
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
            <h1 class="m-0 text-dark">Reportes Solicitudes</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="../../../../Menu.php">Home</a></li>
              <li class="breadcrumb-item active">Reportes Solicitudes</li>
            </ol>
          </div>
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
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
                
                        
                      <input id="user" name="user" type="hidden" value="<?php echo $_SESSION['s_usuario']; ?>">
                      <input type="hidden" id="FechaProcesoCuadroDiario" name="fechaProceso"  value="<?php echo date("d-m-Y"); ?>" > 
                    <div class="row"> 
                      <label class="col-form-label" >Fecha de Inicio - Solicitado : </label>
                      <input type="date" id="fechaInicio1" name="fechaInicio1"  class="btn btn-default float col-sm-1.5" value="<?php echo date("Y-n-j"); ?>" min="2019-01-01">    
                      <label for="fechafin1"class="col-form-label">Fecha Final - Solicitado : </label>
                      <input type="date" id="fechafin1" name="fechafin1" class="btn btn-default float col-sm-1.5" value="<?php echo date("Y-n-j"); ?>"  min="2019-01-01">
                      <label for="MESAÑO1" class="col-form-label">Mes: </label>    
                      <input type="month" id="MESAÑO" class="btn btn-default float col-sm-1.5" name="MESAÑO">  
                      <label for="fechaInicio2" class="col-form-label">Fecha de Inicio - Ejecutado : </label>
                      <input type="date" id="fechaInicio2" name="fechaInicio2" class="btn btn-default float col-sm-1.5" value="<?php echo date("Y-n-j"); ?>"  min="2019-01-01">   

                      <label for="fechafin2" class="col-form-label">Fecha Final - Ejecutado : </label>
                      <input type="date" id="fechafin2" name="fechafin2" class="btn btn-default float col-sm-1.5" value="<?php echo date("Y-n-j"); ?>"  min="2019-01-01">                       
                      <label>Reportes :</label>
                      <SELECT name="tiporeporte" id= "ComboReportes"  class="custom-select form-control-border col-sm-4" >
                        <OPTION value="0">Seleccionar</OPTION>
                        <OPTION value="1">01- Reporte de Solicitud</OPTION>
                        <OPTION value="2">02- Reporte de Solicitud Solicitado vs Ejecutado</OPTION>
                        <OPTION value="3">03- Reporte de Solicitud Solicitado vs Ejecutado(Contabilidad)</OPTION>
                      </SELECT>
                      <label>Region :</label>
                      <SELECT name="ComboBoxRegion1" id= "fechaInicio1"  class="custom-select form-control-border col-sm-2" > 
                        <OPTION value="0">Seleccionar</OPTION>
                        <OPTION value='%%'>Todos</OPTION>
                        <OPTION value='007'>AMAZONAS</OPTION>
                        <OPTION value='005'>LA LIBERTAD</OPTION>
                        <OPTION value='011'>LAMBAYEQUE</OPTION>
                        <OPTION value='004'>PUNO</OPTION>
                        <OPTION value='003'>SAN MARTIN</OPTION>
                        <OPTION value='002'>UCAYALI</OPTION>
                      </SELECT>              
                      <button type="button"  class = "btn btn-info col-sm-1" onCLick = "Ejecutar_ReportesSolicitudes();" >Ejecutar</button>
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
                    <table id="report01" class="table table-striped table-bordered table-hover"  cellspacing="0" style="display: none;">                          
                      <thead class="text-white bg-info text-center align-middle">
                        <th>Fecha</th>                          
                        <th>Nombre Region</th>                          
                        <th>Tipo de Banco</th>
                        <th>Nombre del Banco</th>                          
                        <th>Tipo Prestamo</th>                          
                        <th>Banco de la Nacion</th>
                        <th>Banco de Credito</th>
                        <th>BIM</th>
                        <th>Caja Piura</th>
                        <th>Caja Trujillo</th>
                        <th>Cooperativa San Martin</th>
                        <th>Fecha Desembolso</th>
                        <th>Efectivo</th>  
                      </thead>
                      <tbody></tbody>
                    </table>   
                    <table id="report02" class="table table-striped table-bordered table-hover"  cellspacing="0" style="display: none;">                          
                    <thead class="text-white bg-info text-center align-middle">
                      <th>Nombre Region</th>
                            <th>Banco de la Nacion</th>
                            <th>Banco de Credito</th>
                            <th>BIM</th>
                            <th>Caja Piura</th>
                            <th>Caja Trujillo</th>
                            <th>Cooperativa San Martin</th> 
                            <th>Efectivo</th>              
                    </thead>
                    <tfoot>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                    </tfoot>
                    </table>   
                    <table id="report03" class="table table-striped table-bordered table-hover"  cellspacing="0" style="display: none;">                           
                      <thead class="text-white bg-info text-center align-middle">
                      <th>Nombre Region</th>                   
                            <th>Nombre Promotora</th>
                            <th>Tipo Credito</th>                
                            <th>Banco Comunal</th>  
                            <th>Departamento</th>
                            <th>Fecha Solicitado</th>
                            <th>Fecha Ejecutado</th>
                            <th>Banco Credito - Solicitado</th>
                            <th>Banco Nacion - Solicitado</th>
                            <th>Caja Piura - Solicitado</th>
                            <th>Caja Trujillo - Solicitado</th>
                            <th>BIM - Solicitado</th>
                            <th>Cooperativa San Martin - Solicitado</th>
                            <th>Efectivo - Solicitado</th>
                            <th>Banco Credito - Ejecutado</th>
                            <th>Banco Nacion - Ejecutado</th>
                            <th>Caja Piura - Ejecutado</th>
                            <th>Caja Trujillo - Ejecutado</th>
                            <th>BIM - Ejecutado</th>
                            <th>Cooperativa San Martin - Ejecutado</th> 
                      </thead>
                      <tbody></tbody>
                    </table>   
                    <table id="report04" class="table table-striped table-bordered table-hover"  cellspacing="0" style="display: none;">                          
                      <thead class="text-white bg-info text-center align-middle">
                      <th>Nombre Region</th>                   
                            <th>Nombre Promotora</th>
                            <th>Tipo Credito</th>                
                            <th>Banco Comunal</th>  
                            <th>Departamento</th>
                            <th>Fecha Solicitado</th>
                            <th>Fecha Ejecutado</th>
                            <th>Banco Credito - Solicitado</th>
                            <th>Banco Nacion - Solicitado</th>
                            <th>Caja Piura - Solicitado</th>
                            <th>Caja Trujillo - Solicitado</th>
                            <th>BIM - Solicitado</th>
                            <th>Cooperativa San Martin - Solicitado</th>
                            <th>Efectivo - Solicitado</th>
                            <th>Banco Credito - Ejecutado</th>
                            <th>Banco Nacion - Solicitado</th>
                            <th>Caja Piura - Ejecutado</th>
                            <th>Caja Trujillo - Ejecutado</th>
                            <th>BIM - Ejecutado</th>
                            <th>Cooperativa San Martin - Ejecutado</th>   
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
<script>
  $(document).ready( function(){
    $("#fechaInicio1").prop("disabled", true);
    $("#fechafin1").prop("disabled", true); 
    $("#fechaInicio2").prop("disabled", true);
    $("#fechafin2").prop("disabled", true); 
    $("#MESAÑO").prop("disabled", true);   
    $("#ComboBoxRegion1").prop("disabled", true); 
  });

  $("#ComboReportes").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion1").prop("disabled", false); 
            $("#fechaInicio1").prop("disabled", false);
            $("#fechafin1").prop("disabled", false);
            $("#fechaInicio2").prop("disabled", true);
            $("#fechafin2").prop("disabled", true);  
            $('#report01').show(); 
            $('#report02').show();
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');  
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion1").prop("disabled", false); 
            $("#fechaInicio1").prop("disabled", false);
            $("#fechafin1").prop("disabled", false);
            $("#fechaInicio2").prop("disabled", true);
            $("#fechafin2").prop("disabled", true);                  
            $('#report03').show();
            $('#report01').hide();
            destruir('#report01');
            $('#report02').hide();
            destruir('#report02');
            $('#report04').hide();
            destruir('#report04');            
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion1").prop("disabled", false); 
            $("#fechaInicio1").prop("disabled", false);
            $("#fechafin1").prop("disabled", false);
            $("#fechaInicio2").prop("disabled", false);
            $("#fechafin2").prop("disabled", false);                 
            $('#report04').show();
            $('#report01').hide();
            destruir('#report01');
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');            
        }else if ($(this).val() === "0") {         
            Cargar();
            $('#report01').hide();
            destruir('#report01'); 
            $('#report02').hide();
            destruir('#report02'); 
        }
  });

</script> 
<script src="../../plugins/jquery/jquery.min.js"></script>
<script src="../../plugins/sweetalert2/sweetalert2.all.min.js"></script>  
<!-- Bootstrap 4 -->
<script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../../dist/js/adminlte.min.js"></script>
<!-- <script src="../../dist/js/main.js"></script> -->

<script src="../../dist/js/jsint/ComportamientoSolicitudes.js"></script>

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
<script src="//cdn.datatables.net/plug-ins/1.10.24/api/sum().js"  ></script>
<!-- <script src="../../plugins/sweetalert2/es.js"></script> -->
                                    <!-- Validar Usuarios -->
<script src="../../dist/js/main.js"></script>

</body>
</html>

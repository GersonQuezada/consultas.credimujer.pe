<?php
session_start();

if($_SESSION["s_usuario"] === null){
    header("Location: index.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <?php include '../ModalCargaReportes.php' ?>
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
  <script src="../../dist/js/filesaver.js"></script>
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
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
                 <li id = "REPORTESOPERACIONES" class="nav-item has-treeview menu-open"  style="display: none;"  >
                          <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>
                              Reportes Operaciones
                              <i class="right fas fa-angle-left"></i>
                            </p>
                          </a>
                          <ul class="nav nav-treeview">
                            <li class="nav-item">
                              <a href="../../vistas/operaciones/CarteraActivaSemanal.php" class="nav-link ">
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
                              <a href="../../vistas/operaciones/ReportesMigrados.php" class="nav-link active">
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
            <h1 class="m-0 text-dark">Reportes Operaciones Gestion</h1>
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content" >
      <form >
          <label for="fechaInicio" style=" font-family:Arial; color:black">Fecha de Inicio : </label>
          <input type="date" id="fechaInicio" name="fechaInicio"  value="<?php echo date("Y-n-j"); ?>" min="2019-01-01">    
          <label for="fechafin" style="   font-family:Arial; color:black ">Fecha Final : </label>
          <input type="date" id="fechafin" name="fechafin"  value="<?php echo date("Y-n-j"); ?>" min="2019-01-01">     
          <label for="fechaMes" style="  font-family:Arial; color:black">Mes: </label>    
          <input type="month" id="MESAÑO" name="MESAÑO"> 
          <label for="TipoCambio" style="  font-family:Arial; color:black">Tipo de Cambio: </label>    
          <input type="number"  min="0" max="5" step="0.01" value= '2.80' id="TipoCambio" name="TipoCambio"> <br>
          <label>Reportes :</label>
          <SELECT name="tiporeporte" id= "ComboBoxMigracion">
          <OPTION value="0">Seleccionar</OPTION>
          <OPTION value="1">01- INFORMACIÓN DE CARTERA</OPTION>
          <OPTION value="2">02- INFORMACIÓN DE DESEMBOLSOS</OPTION>
          <OPTION value="3">03- RELACIÓN DE DETALLE DE SOCIAS RETIRADAS</OPTION>
          <OPTION value="4">04- RELACIÓN SOCIAS NUEVAS</OPTION>
          <OPTION value="5">05- INFORMACIÓN GENERAL DE CARTERA</OPTION>
          <OPTION value="6">06- INFORMACIÓN GENERAL DE CARTERA POR MONTOS</OPTION>
          <OPTION value="7">07- CARTERA - NRO DE SOCIAS, MONTOS, SALDOS, AHORROS</OPTION>
          <OPTION value="8">08- CARTERA - NRO DE SOCIAS, MONTOS, SALDOS, AHORROS POR DISTRITO</OPTION>
          <OPTION value="9">09- INFORMACIÓN GENERAL DE CARTERA X AREA R-U</OPTION>
          <OPTION value="10">10- INFORMACIÓN GENERAL DE CARTERA X CUOTAS</OPTION>
          <OPTION value="11">11- INFORMACIÓN GENERAL DE CARTERA X PZO VENC.</OPTION>
          <OPTION value="12">12- INFORMACIÓN GENERAL DE CARTERA X SECTOR ECON.</OPTION>
          <OPTION value="13">13- INFORMACIÓN GENERAL DE CARTERA X SEXO</OPTION>
          <OPTION value="14">14- REPORTE DE SOCIAS - CARTERA ACTIVA</OPTION>
          <OPTION value="15">15- INFORMACIÓN MONTOS DESEMBOLSADOS PARA APLICAR PRE EVALUADOR</OPTION>
          <OPTION value="16">16- REPORTE SOCIAS NUEVAS X AÑO CON NIVEL DE RIESGO Y TIPO DE DEUDA</OPTION>
          <OPTION value="17">17- REPORTE DE RETIRO POR PROMOCIÓN DE SOCIAS NUEVAS</OPTION>
          <OPTION value="18">18- REPORTE NUM DE SOCIAS BC-GMT CON-SIN SALDO EN CEXT Y PROMO</OPTION>
          <OPTION value="19">19- CUADRO RELACIÓN LISTA SOCIAS CON MORA A CIERRE DE MES</OPTION>
          <OPTION value="20">20- EVALUACIÓN DE BC PARA FORMACIÓN DE ANILLOS</OPTION>
          <OPTION value="21">21- RELACIÓN DE SOCIAS REINGRESANTES</OPTION>
          <OPTION value="22">22- INFORMACIÓN DESEMBOLSOS MAYORES AL INGRESADO</OPTION>
          <OPTION value="23">23- CONTROL DE PAGOS DE SOCIAS</OPTION>
          <OPTION value="24">24- RELACIÓN DE SOCIAS (F1) CON INFORMACIÓN GENERAL</OPTION>
          <OPTION value="25">25- REPORTE DE CARTERA RESÚMEN DE CREDITOS PARALELOS</OPTION>
          <OPTION value="26">26- REPORTE DE DESEMBOLSOS RESÚMEN DE CRÉDITOS PARALELOS</OPTION>
          <OPTION value="27">27- CUADRO DE SOCIAS ACTIVAS (SOLO PARALELO Y SOLO INDIVIDUALES)</OPTION>
          <OPTION value="28">28- REPORTE DE SOCIAS - SOLO DESEMBOLSOS</OPTION>
          <OPTION value="29">29- ATRASO DE PAGOS DE SOCIAS EN CRÉDITOS PARALELOS</OPTION>
          <OPTION value="30">30- REPORTE CON LLENADO DE CONTRATOS</OPTION>
          <OPTION value="31">31- REPORTE DE SOCIAS - CARTERA ACTIVA (EXTERNA - PROM - SOLO CP)</OPTION>
          </SELECT>
          <label>Region :</label>
          <SELECT name="ComboBoxRegion" id= "ComboBoxRegion">
          <OPTION value="0">Seleccionar</OPTION>
          <OPTION value="%%">Todos</OPTION>
          <OPTION value="007">AMAZONAS</OPTION>
          <OPTION value="005">LA LIBERTAD</OPTION>
          <OPTION value="011">LAMBAYEQUE</OPTION>
          <OPTION value="004">PUNO</OPTION>
          <OPTION value="003">SAN MARTIN</OPTION>
          <OPTION value="002">UCAYALI</OPTION>
          </SELECT> 
          
          <label for="mtomayor" style="   font-family:Arial; color:black ">Monto Mayor</label>
          <input type="text" name="mtomayor" id = "mtomayor">
          <br>
          <label for="FECHAESTUDIO" style="   font-family:Arial; color:black ">Fecha Final : </label>
          <input type="date" id="FECHAESTUDIO" name="FECHAESTUDIO"  value="<?php echo date("Y-n-j"); ?>" min="2019-01-01"> 
          <button type="button" id = "Btn_Ejecutar_Migra" >Ejecutar</button> 
          <!-- <input  type = "button" onclick = " downloadAsExcel() " value = "Exportar a Excel" > -->
          <p>
          <div>
                          
             <!--  <div class="container"> -->
              <div class="row">
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                      <table id="example" class="table table-striped table-bordered" cellspacing="0"style="display: none;">
                         <thead class="text-white bg-info text-center align-middle">                 
                          <th>ANOPROCESO</th>
                          <th>MESPROCESO</th>
                          <th>PERIODO</th>
                          <th>CODREGION</th>
                          <th>NOMREGION</th>
                          <th>CODSOCIA</th>
                          <th>APELLIDOSNOMBRES</th>
                          <th>CODASOCIACION</th>
                          <th>TIPOASOCIACION</th>
                          <th>DESASOCIACION</th>
                          <th>MONTODESEMBOLSO</th>
                          <th>CICLO</th>
                           <th>TASA</th>
                           <th>TIPOCREDITO</th>
                           <th>CODPRODUCTO</th>
                           <th>DESPRODUCTO</th>
                           <th>CODTARIFA</th>
                           <th>DESTARIFA</th>
                           <th>NIVELRIESGO</th>
                           <th>TIPODEUDA</th>
                           <th>CODPROMOTORA</th>
                           <th>NOMPROMOTORA</th>
                           <th>FECHADESEMBOLSO</th>
                           <th>FECHA1ERDESEMBOLSO</th>
                           <th>SALDOCREDITO</th>
                           <th>CODDEPA</th>
                           <th>DESDEPA</th>
                           <th>CODPROVI</th>
                           <th>DESPROVI</th>
                           <th>CODDISTRI</th>
                           <th>DESDISTRI</th>
                           <th>NUMCUOTAS</th>
                           <th>NUMGRACIA</th>
                           <th>CLASE_SOC</th>
                           <th>CODDEPA_SOC</th>
                           <th>DESDEPA_SOC</th>
                           <th>CODPROVI_SOC</th>
                           <th>DESPROVI_SOC</th>
                           <th>CODDISTRI_SOC</th>
                           <th>DESDISTRI_SOC</th>
                           <th>CODLOCAL_SOC</th>
                           <th>DESLOCAL_SOC</th>
                           <th>DIRECCION_SOC</th>
                           <th>CALCINTERES</th>
                           <th>CODPROMOTORA_CIE</th>
                           <th>NOMPROMOTORA_CIE</th>
                           <th>CODCIIU</th>
                           <th>DESCIIU</th>
                           <th>SECECO_NOR</th>
                           <th>NumeroCredito</th>
                           <th>Act_eco</th>                         
                         </thead>
                      </table>                  
                     </div>
                   </div>
                 </div>  
          <!--       </div>    --> 
            

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
<script src="../../dist/js/jsint/reporteriaOpe.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
    <!-- datatables JS -->
<script type="text/javascript" src="../../plugins/datatables/datatables.min.js"></script>  
    <!-- para usar botones en datatables JS -->  
    <script src="../../plugins/datatables/Buttons-1.5.6/js/dataTables.buttons.min.js"></script>  
    <script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>  
    <script src="../../plugins/datatables/JSZip-2.5.0/jszip.min.js"></script>    
    <script src="../../plugins/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>    
    <script src="../../plugins/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
    <script src="../../plugins/datatables/Buttons-1.5.6/js/buttons.html5.min.js"></script>
                                    <!-- Validar Usuarios -->
<script src="../../dist/js/main.js"></script>
<!-- <script src="../../dist/js/tableToExcel2.js"></script> -->

</body>
</html>

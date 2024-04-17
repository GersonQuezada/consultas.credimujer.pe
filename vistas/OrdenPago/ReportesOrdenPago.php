<?php
session_start();

if($_SESSION["s_usuario"] === null){
    header("Location: ../../index.php");
}

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>CredimujerSystem | Manuela Ramos</title>
  <link rel="icon" href="../../dist/img/credito.png">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css">
  

  <!-- Theme style -->
  <link rel="stylesheet" href="../../dist/css/adminlte.css"> 
  <!-- Google Font: Source Sans Pro -->

 <link href="../../plugins/select2/css/select2.min.css" rel="stylesheet" /> 
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
 <script >
  function buscarOrdenesPagos(){
    let region = $('#ComboBoxRegion').find('option:selected').val();
    let fechainicio = $('#fechainicio').val();
    let fechafinal = $('#fechafinal').val();
    let tipo = $('#TipoOperacionID').find('option:selected').val();

    if(!region){
      Swal.fire('Hubo un error!','Debe seleccionar una region','error');
    }
    if(!fechainicio){
      Swal.fire('Hubo un error!','Debe ingresar una fecha','error');
    }
    if(!fechafinal){
      Swal.fire('Hubo un error!','Debe ingresar una fecha','error');
    }
    if(!tipo){
      Swal.fire('Hubo un error!','Debe ingresar un tipo','error');
    }
    

    var controller = "../../bd/OrdenPagos/ListarOrdenesPagos_reporte.php";
    $("#OrdenesPagos").DataTable({
                dom:  "<'row'<''f><''B><'' i>>rtp",
                paging:true,
                pageLength: 7,
                bLengthChange: false,
                destroy: true,
                bFilter: true,
                bInfo: true,buttons:[ 
                    {
         extend:    'excelHtml5',
         text:      '<i class="fas fa-file-excel"></i> ',
         titleAttr: 'Exportar a Excel',
         footer: true,
         title: '',
         className: 'btn btn-success'
                    },
                    {
         extend:    'pdfHtml5',
         text:      '<i class="fas fa-file-pdf"></i> ',
         titleAttr: 'Exportar a PDF',
         className: 'btn btn-danger'
                    },
                    {
        extend:    'print',
        text:      '<i class="fa fa-print"></i> ',
        titleAttr: 'Imprimir',
        className: 'btn btn-info'
                    },
                  ],
                language : {"url": "../../plugins/Spanish.js",},
                ajax : {"cache": false,
                            "method":"POST",                            
                            "url":controller,
                            "data" : {REGION : region , FECHAINICIO : fechainicio , FECHAFINAL : fechafinal , TIPO : tipo},
                            "dataType": "json",
                            "deferRender": true,},
                columns:[                     
                    {"data" : "NOMSUCURSAL"},
                    {"data" : "FECHA_OPERACION"},
                    {"data" : "FECHA_CREACION"},
                    {"data" : "CODASOCIACION"},    
                    {"data" : "DESASOCIACION"},              
                    {"data" : "CODASOCIACION_anillo"}, 
                    {"data" : "DESASOCIACION_anillo"},              
                    {"data" : "TIPO_OPERACION"},
                    {"data" : "TIPOCREDITO"},
                    {"data" : "NOMSOCIA"},
                    {"data" : "ENTIDADBANCARIA"},
                    {"data" : "ImporteTotal",
                        render: function(data,type,row){
                            let to = (row.ImporteTotal).split('.'); 
                            let tot = 0;
                            if(to[0] == ""){
                                tot = 0+row.ImporteTotal; 
                            }else{
                                tot = row.ImporteTotal;
                            } 
                            
                            return tot;
                        }
                    },
                    {"data" : "NROCUENTA"},
                    {"data" : "NROCELULAR"},
                    
                ],
                pagingType: "simple" 
            });

  }
 </script>


</head>
 
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
    <!-- Right navbar links -->
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
                <li id = "ModuloOrdenPagos" class="nav-item has-treeview menu-open" style="display: none;" >
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
                    <a href="../../vistas/OrdenPago/ReportesOrdenPago.php" class="nav-link active">
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
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Ordenes de Pagos - Reportes</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="../../../../Menu.php">Home</a></li>
              <li class="breadcrumb-item active">Ordenes de Pagos - Reportes</li>
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
                
   
              <input id="user" name="user" type="hidden" value="<?php echo $_SESSION['s_usuario']; ?>">
              <label for="Region" style="font-family:Arial; color:black; margin-left: 15px;">Region :</label>
              <SELECT name="ComboBoxRegion" id= "ComboBoxRegion" class="custom-select form-control-border col-sm-2">
                <OPTION value="%%">Seleccionar</OPTION>
                <OPTION value="%%">Todos</OPTION>
                <OPTION value="007">AMAZONAS</OPTION>
                <OPTION value="005">LA LIBERTAD</OPTION>
                <OPTION value="011">LAMBAYEQUE</OPTION>
                <OPTION value="004">PUNO</OPTION>
                <OPTION value="003">SAN MARTIN</OPTION>
                <OPTION value="002">UCAYALI</OPTION>
              </SELECT>     
              <label for="fechainicio" style="font-family:Arial; color:black; margin-left: 15px;">Fecha de Inicio : </label>
              <input type="date" id="fechainicio" name="fechainicio" class = "btn btn-default float"  value="<?php echo date("Y-n-j"); ?>"   min="2019-01-01">
              <label for="fechafinal" style="font-family:Arial; color:black; margin-left: 15px;">Fecha de Fin : </label>
              <input type="date" id="fechafinal" name="fechafinal" class = "btn btn-default float" value="<?php echo date("Y-n-j"); ?>"   min="2019-01-01">   
              <label for="TipoOperacion"  style="font-family:Arial; color:black ; margin-left:  15px; ">Tipo Operacion:</label>
              <select name="TipoOperacion" id= "TipoOperacionID"  class="custom-select form-control-border col-sm-2" style="margin-left:  15px;"> 
                <OPTION value="%%">Seleccionar</OPTION>
                <OPTION value="%%">Todos</OPTION>
                <OPTION value="TRANF">Transf por mora</OPTION>
                <OPTION value="DEVOL">Dev de Ahorros</OPTION>
                <OPTION value="PREST">Prestamo Interno</OPTION>
              </select>
              <button type="button" id = "ConsultarOrdenesPagos" class = "btn btn-info col-sm-1"  style="margin-left : 10px" onclick = buscarOrdenesPagos() >Consultar</button>  
              </div>
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
                  <table id="OrdenesPagos" class="table table-striped table-bordered table-hover"  cellspacing="0">                          
                    <thead class="text-white bg-info text-center align-middle">
                      <th>Nombre Region</th>   
                      <th>Fecha Operacion</th>
                      <th>Fecha Creacion</th> 
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
 
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->
 


<!-- jQuery -->
<script src="../../plugins/jquery/jquery.min.js"></script>
<script src="../../plugins/sweetalert2/sweetalert2.all.min.js"></script>  
<script src="../../plugins/select2/js/select2.min.js"></script> 
<!-- Bootstrap 4 -->
<script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../../dist/js/adminlte.min.js"></script>
<script src="../../dist/js/main.js"></script>
<!-- <script src="../../dist/js/jsMod/ComportamientoOrdenPago.js?v=4"></script> -->
<script type="text/javascript" src="../../plugins/datatables/datatables.min.js"></script>  
    <!-- para usar botones en datatables JS -->  
    <script src="../../plugins/datatables/Buttons-1.5.6/js/dataTables.buttons.min.js"></script>  
    <script src="//cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>  
    <script src="../../plugins/datatables/JSZip-2.5.0/jszip.min.js"></script>    
    <script src="../../plugins/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>    
    <script src="../../plugins/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
    <script src="../../plugins/datatables/Buttons-1.5.6/js/buttons.html5.min.js"></script>

</body>
</html>

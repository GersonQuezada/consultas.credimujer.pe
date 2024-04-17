<?php
session_start();

if($_SESSION["s_usuario"] === null){
    header("Location: ../../index.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <link rel="icon" href="../../dist/img/credito.png">
  <title>CredimujerSystem | Manuela Ramos</title>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../../dist/css/adminlte.min.css">
  <!-- <link rel="stylesheet" href="../../dist/css/main.css">   -->
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {     
       Listar(); 
    });  
    function Listar(){  
     var Controler ="../../bd/Entidadfinanciera/ResumenSociasAnulados.php";
     var Nameexcel = "SociasResumeAnuladosBN";

     var table = $("#ResumenTablaAnuladosBN")
        .DataTable({
          dom:  "<'row'<''f><''B><'' i>>rtp",
          paging:true,
          bLengthChange: false,
          destroy: true,
          bFilter: true,
          bInfo: true,buttons:[ 
                     {
          extend:    'excelHtml5',
          text:      '<i class="fas fa-file-excel"></i> ',
          titleAttr: 'Exportar a Excel',
          footer: true,
          title: Nameexcel,
          className: 'btn btn-success'
                     },
                     {
          extend:    'pdfHtml5',
          text:      '<i class="fas fa-file-pdf"></i> ',
          titleAttr: 'Exportar a PDF',
          className: 'btn btn-danger',
          title: Nameexcel,
          orientation: 'landscape',
          pageSize: 'A4'
                     },
                     
                   ],
        "language": {
                  "url": "../../plugins/Spanish.js",
              },
           "ajax":{
                "cache": false,
                "method":"POST",
                "data": {},
                "url": Controler,
                "dataType": "json",
                "deferRender": true,
              },

         columns:
          [ 
                 {"data" : "Accion",
                  render: function ( data, type, row) {           
                  var BotonRevertir = '<button type="button" id="BotonAgregarTabla" class="BotonAgregarTabla" onclick = "RevertirAnulado(\''+row.FECHAPROCEBN+'___'+row.NRODNI+'___'+row.CODREGION+'\',2);" id = "BotonEditar"><i class="fas fa-history"></i></button>'; 
                  return BotonRevertir;     
                  }
                },
                 {"data" : "FECHAPROCEBN"},               
                 {"data" : "CODSOCIA"},
                 {"data" : "APELLIDOSNOMBRES"},
                 {"data" : "NRODNI"}, 
                 {"data" : "CODREGION"}, 
                 {"data" : "MTOCALCULADO",
                    render: function ( data, type, row) {
                    let to = (row.MTOCALCULADO).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                    tot = 0+row.MTOCALCULADO; 
                    }else{
                    tot = row.MTOCALCULADO;
                    }
                    return tot;
                    }
                  }, 
                 {"data" : "DESASOCIACION"} 

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
  </nav>

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
              <li id="ENTIDADBANCARIABN" class="nav-item has-treeview menu-open"  style="display: none;">
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
                    <li class="nav-item has-treeview menu-open ">
                      <a href="#" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>
                          Creditos Anulados
                          <i class="right fas fa-angle-left"></i>
                        </p>
                      </a>
                      <ul  class="nav nav-treeview">
                        <li id = "InsertCreditosAnulados" class="nav-item">
                          <a href="../../Modulo/Operaciones/InsertAnulados.php" class="nav-link active ">
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
            <h1>Enviar Socias para Anular Credito</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="../../../../Menu.php">Home</a></li>
              <li class="breadcrumb-item active">Enviar Socias para Anular Credito</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>      
  
    <!-- /.content-header -->
    
    <!-- Main content -->
    <div class="content" >
      <div class="card card-info">
        <div class="card-header">
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-2">
                <input id="usuario" name="usuario" type="hidden" value="<?php echo $_SESSION['login']; ?>">
                <label class="col-form-label" >Nombre Socia : </label>
                <input type="text" id="NombreSociaAnulado" class="form-control" name="NombreSociaAnulado" > 
            </div>
            <div class="col-sm-2">
                <label class="col-form-label">  Region :</label>
                <SELECT name="ComboBoxRegionAnulado" class="custom-select form-control-border" id= "ComboBoxRegionAnulado">
                  <OPTION value="0">Seleccionar</OPTION>
                  <OPTION value="%%">Todos</OPTION>
                  <OPTION value="007">AMAZONAS</OPTION>
                  <OPTION value="005">LA LIBERTAD</OPTION>
                  <OPTION value="011">LAMBAYEQUE</OPTION>
                  <OPTION value="004">PUNO</OPTION>
                  <OPTION value="003">SAN MARTIN</OPTION>
                  <OPTION value="002">UCAYALI</OPTION>
                </SELECT> 
            </div>
          </div>  
          
        </div>
        <div class="card-footer">
        <button type="button" class="btn btn-info" id = "Btn_Ejecutar_Anulados" >Ejecutar</button>      
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <form  class="form" action="" method="post" >
     
 
     
            
    
            <div>
                              
                <!--  <div class="container"> -->
    
                    <div class="row">
                    <div class="col-lg-12">
                        <div id= "div-content-data--1" class="table-responsive" >        
                            <table id="TablaAnuladosBN" class="table table-striped table-bordered" cellspacing="0"  >
                            <thead class="text-white bg-info text-center align-middle">
                              <th>Accion</th>
                              <th>Fecha Envio</th> 
                              <th>Codigo Socia</th>
                              <th>Nombre Completo</th>
                              <th>DNI</th>
                              <th>Codigo Region</th> 
                              <th>Monto Calculado</th> 
                              <th>Banco Comunal</th> 
                            </thead>
                            <tbody></tbody>
                          </table>                  
                        </div>
                      </div>
                    </div>  

                    <div class="row">
                    <H5>Resumen del Dia</H5>
                    <div class="col-lg-12">
                        <div id= "div-content-data--1" class="table-responsive" >        
                          <table id="ResumenTablaAnuladosBN" class="table table-striped table-bordered" cellspacing="0"  >
                            <thead class="text-white bg-info text-center align-middle"> 
                              <th>Accion</th>                          
                              <th>Fecha Envio</th> 
                              <th>Codigo Socia</th>
                              <th>Nombre Completo</th>
                              <th>DNI</th>
                              <th>Codigo Region</th> 
                              <th>Monto Calculado</th> 
                              <th>Banco Comunal</th> 
                            </thead>
                            <tbody></tbody>
                          </table>                  
                        </div>
                      </div>
                    </div>          
              <!--       </div>    -->     
              </div>
          </form>     
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
<script src="../../dist/js/jsMod/ComportamientoOpera.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
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
</body>
</html>

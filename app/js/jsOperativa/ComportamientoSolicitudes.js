"use strict";
function Listar(){  
  var Controler ="../../../CRUD/Solicitudes/CuadroDiario.php";
  var Nameexcel = "SociasResumeDevolucionesBN";
  var fecha = document.getElementById('FechaProcesoCuadroDiario').value;
   //  var region = document.getElementById('region').value;
  var Usuario = $("#user").val();
  // return false 
   var table = $("#BusquedaCuentaAbono").DataTable({
       dom: "<''row<''f><''i><B>>rtp",
       paging:true,
       bLengthChange: false,
       destroy: true,
       bFilter: true,
      //  order: [[18, 'desc']],
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
      "url": "../../../js/Spanish.js",
           },
        "ajax":{
             "cache": false,
             "method":"POST",
             "data": { "FechaActual" : fecha , "Usuario" : Usuario},               
             "url": Controler,
             "dataType": "json",
             "deferRender": true,
           },

      columns:[
                  {"data" : "Accion",
                    render: function ( data, type, row) {
                      var botonEliminar = '<button type="button"  onclick = "eliminarSocia(\''+row.REG+'___'+row.NOMBREREGION+'\');" class="btn btn-danger col-sm" ><i class="fas fa-user-slash"></i></button>'+
                                          '<button type="button"   class="btn btn-info col-sm" data-toggle="modal" data-target="#modal-default-2"   onclick = "AbrirModal(\''+row.DESASOCIACION+'___'+row.BANCONACION+'___'+row.BANCOCREDITO+'___'+row.BIM+'___'+row.CAJAPIURA+'___'+row.CAJATRUJILLO+'___'+row.Coop_SanMartin+'___'+row.EFECTIVO+'___'+row.FECHADESEMBOLSO+'___'+row.DESDEPA+'___'+row.DESPROVI+'___'+row.DESDISTRI+'___'+row.NOMBREREGION+'___'+row.REG+'\');"  ><i class="fas fa-pencil-alt"></i></button>';
                      return botonEliminar;     
                    }
                   },
                  {"data" : "NOMBREREGION"},
                  {"data" : "DESASOCIACION"},
                  {"data" : "SITUACION"},
                  {"data" : "DESDEPA"},
                  {"data" : "DESPROVI"},
                  {"data" : "DESDISTRI"},
                  {"data" : "TIPOPRESTAMO"},
                  {"data" : "BANCONACION",
                    render: function ( data, type, row) {
                       let to = (row.BANCONACION).split('.'); 
                       let tot = 0;
                       if(to[0] == ""){
                       tot = 0+row.BANCONACION; 
                       }else{
                       tot = row.BANCONACION;
                       }
                       return tot;
                       }
                   },                     
                  {"data" : "BANCOCREDITO",
                    render: function ( data, type, row) {
                       let to = (row.BANCOCREDITO).split('.'); 
                       let tot = 0;
                       if(to[0] == ""){
                       tot = 0+row.BANCOCREDITO; 
                       }else{
                       tot = row.BANCOCREDITO;
                       }
                       return tot;
                       }
                   },
                  {"data" : "BIM",
                    render: function ( data, type, row) {
                       let to = (row.BIM).split('.'); 
                       let tot = 0;
                       if(to[0] == ""){
                       tot = 0+row.BIM; 
                       }else{
                       tot = row.BIM;
                       }
                       return tot;
                       }
                   }, 
                  {"data" : "CAJAPIURA",
                    render: function ( data, type, row) {
                       let to = (row.CAJAPIURA).split('.'); 
                       let tot = 0;
                       if(to[0] == ""){
                       tot = 0+row.CAJAPIURA; 
                       }else{
                       tot = row.CAJAPIURA;
                       }
                       return tot;
                       }
                   },
                  {"data" : "CAJATRUJILLO",
                    render: function ( data, type, row) {
                       let to = (row.CAJATRUJILLO).split('.'); 
                       let tot = 0;
                       if(to[0] == ""){
                       tot = 0+row.CAJATRUJILLO; 
                       }else{
                       tot = row.CAJATRUJILLO;
                       }
                       return tot;
                       }
                   },
                   {"data" : "Coop_SanMartin",
                     render: function ( data, type, row) {
                     let to = (row.Coop_SanMartin).split('.'); 
                     let tot = 0;
                     if(to[0] == ""){
                     tot = 0+row.Coop_SanMartin; 
                     }else{
                     tot = row.Coop_SanMartin;
                     }
                     return tot;
                     }
                  },
                  {"data" : "EFECTIVO",
                    render: function ( data, type, row) {
                       let to = (row.EFECTIVO).split('.'); 
                       let tot = 0;
                       if(to[0] == ""){
                       tot = 0+row.EFECTIVO; 
                       }else{
                       tot = row.EFECTIVO;
                       }
                       return tot;
                       }
                   }, 
                  {"data" : "FECHADESEMBOLSO"}, 
                  {"data" : "Periodo"},  
                  {"data" : "REG"},
               ],
              pagingType: "simple" 
     });
 }

function Insertar(){
   var Region = $("select[name='ComboBoxRegion'] option:selected").val();
   var Tipobanco = $("select[name='TipoAsociacion'] option:selected").val();
   var Banco = $("select[name='Banco'] option:selected").val();
   var fecha = document.getElementById('FechaProcesoCuadroDiario').value;
   var fecha2 = "";
   var Situacion = $("select[name='Situacion'] option:selected").val(); 
   if(Situacion == "N"){
    Banco = "";
   }
   if(Region == 0){
    Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
   }else if(Situacion == 0){
    Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una situacion'})
   }else if(Tipobanco == 0){
    Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir un tipo de Banco'})
   }else{
    // console.log('paso')

    $.ajax({url:"../../../CRUD/Solicitudes/InsertarSolicitud.php",
                  type:"POST",
                  dataType: "json",
                  data:{Region : Region ,codigobanco : Banco,fechadia : fecha,tipobanco : Tipobanco,situacion : Situacion,fechames : fecha2}, 
                   success:function(data){               
                        if(data == 1 ){
                            Swal.fire('Agregado','Solicitud ingresada','success'); 
                             Listar();
                        }else if(data == 2 ){ 
                            Swal.fire('Alerta!','Ya existe el banco comunal','info'); 

                        }else{
                            Swal.fire('Alerta!','Error','error');
                        }
                      
                    }    
    });     
   }   


}

function BusquedaSolicitudes(){
         var Controler ="../../../CRUD/Solicitudes/CuadroDiario.php";
         var Nameexcel = "SociasResumeDevolucionesBN";
         var fecha = document.getElementById('fechaBus').value;
         var user = $("[name='user']").val();
         var table = $("#BusquedaCuentaAbono").DataTable({
          dom: "<''row<''f><''i><B>>rtp",
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
              "url": "../../../js/Spanish.js",
                  },
               "ajax":{
                    "cache": false,
                    "method":"POST",
                    "data": { "FechaActual" : fecha , "Usuario" : user},               
                    "url": Controler,
                    "dataType": "json",
                    "deferRender": true,
                  },

             columns:[
                          {"data" : "Accion",
                          render: function ( data, type, row) {
                            // var user = $("[name='usuario']").val();
                            var botonEliminar = '<button type="button"  onclick = "eliminarSocia(\''+row.REG+'___'+row.NOMBREREGION+'\');" class="btn btn-danger col-sm" ><i class="fas fa-user-slash"></i></button> <button type="button"   class="btn btn-info col-sm" data-toggle="modal" data-target="#modal-default-2"   onclick = "AbrirModal(\''+row.DESASOCIACION+'___'+row.BANCONACION+'___'+row.BANCOCREDITO+'___'+row.BIM+'___'+row.CAJAPIURA+'___'+row.CAJATRUJILLO+'___'+row.Coop_SanMartin+'___'+row.EFECTIVO+'___'+row.FECHADESEMBOLSO+'___'+row.DESDEPA+'___'+row.DESPROVI+'___'+row.DESDISTRI+'___'+row.NOMBREREGION+'___'+row.REG+'\');"  ><i class="fas fa-pencil-alt"></i></button>';
                            return botonEliminar;     
                           }
                          },
                         {"data" : "NOMBREREGION"},
                         {"data" : "DESASOCIACION"},
                         {"data" : "SITUACION"},
                         {"data" : "DESDEPA"},
                         {"data" : "DESPROVI"},
                         {"data" : "DESDISTRI"},
                         {"data" : "TIPOPRESTAMO"},
                         {"data" : "BANCONACION",
                           render: function ( data, type, row) {
                              let to = (row.BANCONACION).split('.'); 
                              let tot = 0;
                              if(to[0] == ""){
                              tot = 0+row.BANCONACION; 
                              }else{
                              tot = row.BANCONACION;
                              }
                              return tot;
                              }
                          },                     
                         {"data" : "BANCOCREDITO",
                           render: function ( data, type, row) {
                              let to = (row.BANCOCREDITO).split('.'); 
                              let tot = 0;
                              if(to[0] == ""){
                              tot = 0+row.BANCOCREDITO; 
                              }else{
                              tot = row.BANCOCREDITO;
                              }
                              return tot;
                              }
                          },
                         {"data" : "BIM",
                           render: function ( data, type, row) {
                              let to = (row.BIM).split('.'); 
                              let tot = 0;
                              if(to[0] == ""){
                              tot = 0+row.BIM; 
                              }else{
                              tot = row.BIM;
                              }
                              return tot;
                              }
                          }, 
                         {"data" : "CAJAPIURA",
                           render: function ( data, type, row) {
                              let to = (row.CAJAPIURA).split('.'); 
                              let tot = 0;
                              if(to[0] == ""){
                              tot = 0+row.CAJAPIURA; 
                              }else{
                              tot = row.CAJAPIURA;
                              }
                              return tot;
                              }
                          },
                         {"data" : "CAJATRUJILLO",
                           render: function ( data, type, row) {
                              let to = (row.CAJATRUJILLO).split('.'); 
                              let tot = 0;
                              if(to[0] == ""){
                              tot = 0+row.CAJATRUJILLO; 
                              }else{
                              tot = row.CAJATRUJILLO;
                              }
                              return tot;
                              }
                          },
                          {"data" : "Coop_SanMartin",
                            render: function ( data, type, row) {
                            let to = (row.Coop_SanMartin).split('.'); 
                            let tot = 0;
                            if(to[0] == ""){
                            tot = 0+row.Coop_SanMartin; 
                            }else{
                            tot = row.Coop_SanMartin;
                            }
                            return tot;
                            }
                         },
                         {"data" : "EFECTIVO",
                           render: function ( data, type, row) {
                              let to = (row.EFECTIVO).split('.'); 
                              let tot = 0;
                              if(to[0] == ""){
                              tot = 0+row.EFECTIVO; 
                              }else{
                              tot = row.EFECTIVO;
                              }
                              return tot;
                              }
                          }, 
                         {"data" : "FECHADESEMBOLSO"}, 
                         {"data" : "Periodo"},  
                         {"data" : "REG"},
                      ],
                     pagingType: "simple" 
            });
         

}


function AbrirModal(string){
  $("#bancotext").prop("disabled", true);    
  let  datos = string.split('___');   
  var banco = datos[0];
  var BN = datos[1];
  var BC = datos[2];
  var BM = datos[3];
  var CP = datos[4];
  var CT = datos[5];
  var CS = datos[6];
  var EF = datos[7];
  var FA = datos[8];
  var DT = datos[9];
  var DP = datos[10];
  var DD = datos[11];
  var RG = datos[13];
  var NG = datos[12];
  if(banco == ""){
    $("#bancotext").prop("disabled", false);    
  }
  document.getElementById('bancotext').value = banco;
  document.getElementById('departamento').value = DT;
  document.getElementById('Provincia').value = DP;
  document.getElementById('distrito').value = DD;           
  document.getElementById('BN').value = BN;
  document.getElementById('BC').value = BC;
  document.getElementById('BM').value = BM;
  document.getElementById('CT').value = CT;
  document.getElementById('CP').value = CP;
  document.getElementById('CS').value = CS;
  document.getElementById('EF').value = EF;
  document.getElementById('FA').value = FA;
  document.getElementById('REG').value = RG;
  document.getElementById('NOMREGION').value = NG; 
} 

function editarsocia(){
  var banco; 
  var Checkbox = document.getElementById('check');
  if(Checkbox.checked) {
    banco = $("select[name='BancoEdit'] option:selected").text();    
  } else {
    banco = document.getElementById('bancotext').value;
  }
  var fecha = document.getElementById('FechaProcesoCuadroDiario').value;   
  var BN = document.getElementById('BN').value;
  var BC = document.getElementById('BC').value;
  var BM = document.getElementById('BM').value;
  var CT = document.getElementById('CT').value;
  var CP = document.getElementById('CP').value;
  var CS = document.getElementById('CS').value;
  var EF = document.getElementById('EF').value;
  var FA = document.getElementById('FA').value;
  var DT = document.getElementById('departamento').value;
  var DP = document.getElementById('Provincia').value;
  var DD = document.getElementById('distrito').value;
  var RG = document.getElementById('REG').value;
  var NR = document.getElementById('NOMREGION').value;
  $.ajax({url:"../../../CRUD/Solicitudes/EditarSolicitud.php",
          type:"POST",
          dataType: "json",
          data:{RG:RG,fecha:fecha,NR:NR,BN:BN,BC:BC,BM:BM,CT:CT,CP:CP,CS:CS,EF:EF,FA:FA,banco:banco,DT:DT,DP:DP,DD:DD}, 
          success:function(obj){           
            let objeto = obj.data[0];
            if(objeto["RESPUESTA"] = "SE MODIFICO LA SOLICITUD" ){
              Swal.fire('Agregado','Solicitud Modificada','success'); 
              Listar();  
            }else if(objeto["RESPUESTA"] = "NO SE MODIFICO LA SOLICITUD" ){
              Swal.fire('Alerta','Solicitud no pudo ser Modificada','info'); 
              Listar(); 
            }else{
              Swal.fire('Alerta!','Error','error');
            }
          }    
        }); 
}

 function eliminarSocia(string){ 
      var fecha = document.getElementById('FechaProcesoCuadroDiario').value;
      let  datos = string.split('___');
        var Registro = datos[0]; 
        var Region = datos[1]; 
       Swal.fire({
                  title: 'Esta seguro de Eliminar?',
                  text: "Si se elimina no tiene reversion!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si'
              }).then((result) => {
              if (result.value) {
                $.ajax({url:"../../../CRUD/Solicitudes/EliminarSolicitud.php",
                  type:"POST",
                  datatype: "json",
                  data:{Registro:Registro,region:Region,fecha:fecha}, 
                   success:function(data){               
                        if(data == 1 ){
                            Swal.fire('Eliminado!','Se ha eliminado la Solicitud','info') ;
                            Listar(); 
                        }else{ 
                           Swal.fire('Alerta!','Error','error');
                        }
                        }    
                }); 
                  }

              })

}

function cerrarModal(){
  $('.modal').fadeOut();
          document.getElementById('banco').value = "";     
          document.getElementById('BN').value = "";
          document.getElementById('BC').value = "";
          document.getElementById('CT').value = "";
          document.getElementById('CP').value = "";
          document.getElementById('CS').value = "";
          document.getElementById('EF').value = "";
          document.getElementById('FA').value = "";
}

function destruir(table){
      $(table).dataTable().fnClearTable();
    $(table).dataTable().fnDestroy();
 }

function DesactivarModulo(){
  var fecha = document.getElementById('FechaProcesoCuadroDiario').value;
  var value = 'NO';
  $.ajax({url:"../../../CRUD/Solicitudes/EditarRestriccion.php",
          type:"POST",
          dataType: "json",
          data:{fecha : fecha,value : value }, 
          success:function(data){   
            if(data == 1 ){
              Swal.fire('Modificado','Modificacion Realizada','success'); 
             
            }else{
              Swal.fire('Alerta!','Error','error');
            }            
          }    
  }); 
  location.reload(); 
}


function ActivarModulo(){
  var fecha = document.getElementById('FechaProcesoCuadroDiario').value;
  var value = 'SI';
  $.ajax({url:"../../../CRUD/Solicitudes/EditarRestriccion.php",
          type:"POST",
          dataType: "json",
          data:{fecha : fecha,value : value }, 
          success:function(data){ 
            if(data == 1 ){
              Swal.fire('Modificado','Modificacion Realizada','success'); 
             
            }else{
              Swal.fire('Alerta!','Error','error');
            }             
          }    
  }); 
  location.reload(); 
}
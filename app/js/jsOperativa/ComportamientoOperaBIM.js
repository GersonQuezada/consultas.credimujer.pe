"use strict";
function EjecutarProcesoBIM(){
        var fecha = $("[name='fechaProceso']").val();        
        if(fecha.length == ""){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
        }else{
          Listar(fecha);
          // console.log(Entro);
        }

}

function EjecutarProcesoBIMFinal(){
        var fecha = $("[name='fechaProceso']").val();        
        if(fecha.length == ""){
          Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
        }else{
          Listar_Final(fecha);
        }
}

function Listar(fecha){  
 
      var table = $("#example")
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
        title: 'ENVIO_BIM',
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
      "language": {
        "url": "../../../js/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechaProceso":fecha},
              "url":"../../../CRUD/Entidadfinanciera/Vizualizar_BIM_DJ.php",
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
                {"data" : "Editar",
                  render: function ( data, type, row) { 
                  var botonEditar = '<button type="button" id = "BotonEditarTabla" class="btn btn-info "  data-toggle="modal" data-target="#modal-default"  onclick = "AbrirModal(\''+row.NRODNI+'___'+row.CODREGION+'___'+row.FECHAPROCESO+'___'+row.APELLIDOSNOMBRES+'___'+row.MTOADICIONAL+'\');" id = "BotonEditar"><i class="fas fa-pencil-alt"></i></button>';
                  return botonEditar;   
                  }
               },
               {"data" : "Eliminar",
                  render: function ( data, type, row) { 
                  var botonEliminar = '<button type="button" id = "BotonEliminarTabla" class="btn btn-danger  " onclick = "eliminarSocia(\''+row.FECHAPROCESO+'___'+row.CODREGION+'___'+row.NRODNI+'\');" id = "BotonEliminar"><i class="fas fa-user-slash"></i></button>';                   
                  return botonEliminar;
                  }
               },
               {"data" : "CODREGION"},
               {"data" : "REGION"},
               {"data" : "CODASOCIACION"},
               {"data" : "DESASOCIACION"},
               {"data" : "NUMCREDITO"},
               {"data" : "PRODUCTO"},
               {"data" : "CODSOCIA"},
               {"data" : "APELLIDOSNOMBRES"},
               {"data" : "NRODNI"},
               {"data" : "CELULAR"}, 
               {"data" : "MTOADICIONAL",
                  render: function ( data, type, row) {
                  let to = (row.MTOADICIONAL).split('.'); 
                  let tot = 0;
                  if(to[0] == ""){
                  tot = 0+row.MTOADICIONAL; 
                  }else{
                  tot = row.MTOADICIONAL;
                  }
                  return tot;
                  }
                }, 
               {"data" : "MTODESEMBOLSADO",
                  render: function ( data, type, row) {
                  let to = (row.MTODESEMBOLSADO).split('.'); 
                  let tot = 0;
                  if(to[0] == ""){
                  tot = 0+row.MTODESEMBOLSADO; 
                  }else{
                  tot = row.MTODESEMBOLSADO;
                  }
                  return tot;
                  }
                },
               {"data" : "FECHAPROCESO"},
               {"data" : "FECHADESEMBOLSO"},
               {"data" : "FECHAPROCESOBIM"},
               {"data" : "TIPOCOBRO"}

                ],
               pagingType: "simple" 
      });
}

function Listar_Final(fecha){  
 
      var table = $("#example")
      .DataTable({
        dom:  "<'row'<''f><''B><'' i>>rtp",
        order: [[ 5, 'desc' ]], 
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
        title: 'ENVIO_BIM',
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
      "language": {
        "url": "../../../js/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechaProceso":fecha},
              "url":"../../../CRUD/Entidadfinanciera/EnvioFinalBim.php",
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
                {"data" : "REGION"}, 
               {"data" : "BANCO_COMUNAL"}, 
               {"data" : "SOCIA"},
               {"data" : "DNI"},
               {"data" : "CELULAR"}, 
               {"data" : "MONTO",
                  render: function ( data, type, row) {
                  let to = (row.MONTO).split('.'); 
                  let tot = 0;
                  if(to[0] == ""){
                  tot = 0+row.MONTO; 
                  }else{
                  tot = row.MONTO;
                  }
                  return tot;
                  }
                },
               {"data" : "FECHA_DESEMBOLSO"},
               {"data" : "TIPOCOBRO"}
                ],
               pagingType: "simple" 
      });
}

function recargar(){
	var fecha = $("[name='fechaProceso']").val();            
	$('#example').dataTable().fnClearTable();
	$('#example').dataTable().fnDestroy();
	Listar(fecha);  	
}

function cerrarModal(){
  $('.modal').fadeOut();
  document.getElementById('fecha1').value = "";
  document.getElementById('region').value = "";
  document.getElementById('nrodni').value = "";
  document.getElementById('mtodesem').value = "";
}

function AbrirModal(string){
  let  datos = string.split('___');
 
  var nrodni = datos[0];
  var region = datos[1];
  var fecha = datos[2];
  var NomSocia = datos[3];
  var monto = datos[4];

  document.getElementById('nrodni').value = nrodni;     
  document.getElementById('nomsocia').value = NomSocia;
  document.getElementById('mtodesem').value = monto;
  document.getElementById('region').value = region;
  document.getElementById('fecha1').value = fecha;
  
}

function eliminarSocia(string){ 
      let  datos = string.split('___');
        var fecha = datos[0];
        var CODREGION = datos[1];
        var NroDNI = datos[2];
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
                $.ajax({url:"../../../CRUD/Entidadfinanciera/EliminaSociaEnvioBIM.php",
                  type:"POST",
                  datatype: "json",
                  data:{fechaProceso:fecha,CODREGION:CODREGION,NroDNI:NroDNI}, 
                   success:function(data){               
                        if(data == "[]" || data == null){
                            Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                        }else{ 
                            Swal.fire('Eliminado!','Se ha borrado a la Socia para el envio.','success') ;
                            recargar();
                        }
                        }    
                }); 
                  }

              })

}

function editarsocia(){
  var fecha = document.getElementById('fecha1').value;
  var CODREGION = document.getElementById('region').value;
  var NroDNI = document.getElementById('nrodni').value;
  var Mtodesembolso = document.getElementById('mtodesem').value;
  Swal.fire({
  input: 'password',   
  showCancelButton: true, 
  title: 'Contraseña de Confirmacion',
  text: 'Digite la llave' 
  }).then((result) => {
    if (result.value == "Credi2020") {
      console.log("ok");
      $.ajax({url:"../../../CRUD/Entidadfinanciera/EditaSociaDJBIM.php",
              type:"POST",
              datatype: "json",
              data:{fechaProceso:fecha,CODREGION:CODREGION,NroDNI:NroDNI,Mtodesembolso:Mtodesembolso}, 
              success:function(data){               
              if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
              }else{ 
                     Swal.fire('Modificado!','Se ha guardado los cambios','success')    
                     recargar();  
                }
              }    
      });
  }
    });
}

function DevolucionAhorrosBIM(){     
  var CODREGION   = $("select[name='ComboBoxRegion'] option:selected").val();  
  var nombre = $("[name='NombreSocia']").val();
  if(nombre.length == ""){
    Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una Socia'})
  }else{     
    ListarBim(nombre,CODREGION);                
  }   
}

function ListarBim(NombreSocia,CODREGION){  
  var Controler ="../../../CRUD/Entidadfinanciera/DevolucionAhorroBim.php";
  var Nameexcel = "DJBIM";
  var table = $("#TablaBIM")
     .DataTable({
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
       className: 'btn btn-danger'
                  },
                  {
      extend:    'print',
      text:      '<i class="fa fa-print"></i> ',
      titleAttr: 'Imprimir',
      className: 'btn btn-info'
                  },
                ],
     "language": {
               "url": "../../../js/Spanish.js",
           },
        "ajax":{
             "cache": false,
             "method":"POST",
             "data": {"CODREGION":CODREGION,"NombreSocia":NombreSocia},
             "url": Controler,
             "dataType": "json",
             "deferRender": true,
           },

      columns:
       [
           
               {"data" : "Add",
                 render: function ( data, type, row) {           
                 var botonAgregar = '<button type="button" id="BotonAgregarTabla" class="btn btn-info col-sm"  data-toggle="modal" data-target="#modal-default"  onclick = "AbrirModal(\''+row.CODREGION+'___'+row.REGION+'___'+row.CODASOCIACION+'___'+row.DESASOCIACION+'___'+row.NUMCREDITO+'___'+row.PRODUCTO+'___'+row.CODSOCIA+'___'+row.APELLIDOSNOMBRES+'___'+row.NRODNI+'___'+row.CELULAR+'___'+row.MTOADICIONAL+'___'+row.MTODESEMBOLSADO+'___'+row.FECHAPROCESO+'___'+row.FECHADESEMBOLSO+'___'+row.FECHAPROCESOBIM+'___'+row.TIPOCOBRO+'___'+row.CARGATABLA+'\');" id = "BotonEditar"><i class="fas fa-user-plus"></i></button>'; 
                 return botonAgregar;     
                 }
               },
               {"data" : "CODREGION"},
               {"data" : "REGION"},
               {"data" : "CODASOCIACION"},
              {"data" : "DESASOCIACION"},
              {"data" : "NUMCREDITO"},
              {"data" : "PRODUCTO"},
              {"data" : "CODSOCIA"},
              {"data" : "APELLIDOSNOMBRES"},
              {"data" : "NRODNI"},               
              {"data" : "CELULAR"}, 
              {"data" : "MTOADICIONAL",
                 render: function ( data, type, row) {
                 let to = (row.MTOADICIONAL).split('.'); 
                 let tot = 0;
                 if(to[0] == ""){
                 tot = 0+row.MTOADICIONAL; 
                 }else{
                 tot = row.MTOADICIONAL;
                 }
                 return tot;
                 }
               }, 
              {"data" : "MTODESEMBOLSADO",
                 render: function ( data, type, row) {
                 let to = (row.MTODESEMBOLSADO).split('.'); 
                 let tot = 0;
                 if(to[0] == ""){
                 tot = 0+row.MTODESEMBOLSADO; 
                 }else{
                 tot = row.MTODESEMBOLSADO;
                 }
                 return tot;
                 }
               },
              {"data" : "FECHAPROCESO"},
              {"data" : "FECHADESEMBOLSO"},
              {"data" : "FECHAPROCESOBIM"},
              {"data" : "TIPOCOBRO"},
              {"data" : "CARGATABLA"}

               ],
              pagingType: "simple" 
     });
}

function AbrirModal(string,modal){
  let  datos = string.split('___');  
    document.getElementById('CODREGION').value =  datos[0];
    document.getElementById('REGION').value =  datos[1];
    document.getElementById('CODASOCIACION').value =  datos[2];
    document.getElementById('DESASOCIACION').value =  datos[3];
    document.getElementById('NUMCREDITO').value =  datos[4];
    document.getElementById('PRODUCTO').value =  datos[5];
    document.getElementById('CODSOCIA').value =  datos[6];
    document.getElementById('APELLIDOSNOMBRES').value =  datos[7];
    document.getElementById('NRODNI').value =  datos[8];
    document.getElementById('CELULAR').value =  datos[9];
    // document.getElementById('MTOADICIONAL').value =  datos[10];
    document.getElementById('MTODESEMBOLSADO').value =  datos[11];
    document.getElementById('FECHAPROCESO').value =  datos[12];
    document.getElementById('FECHADESEMBOLSO').value =  datos[13];
    document.getElementById('FECHAPROCESOBIM').value =  datos[14];
    document.getElementById('TIPOCOBRO').value =  datos[15];
    document.getElementById('CARGATABLA').value =  datos[16];
     
}

function GuardarBim(){
  var CODREGION = document.getElementById('CODREGION').value;
  var REGION = document.getElementById('REGION').value;
  var CODASOCIACION = document.getElementById('CODASOCIACION').value;
  var DESASOCIACION = document.getElementById('DESASOCIACION').value;
  var NUMCREDITO = document.getElementById('NUMCREDITO').value;
  var PRODUCTO = document.getElementById('PRODUCTO').value;
  var CODSOCIA = document.getElementById('CODSOCIA').value;
  var APELLIDOSNOMBRES = document.getElementById('APELLIDOSNOMBRES').value;
  var NRODNI = document.getElementById('NRODNI').value;
  var CELULAR = document.getElementById('CELULAR').value;
  //var MTOADICIONAL = document.getElementById('MTOADICIONAL').value;
  var MTODESEMBOLSADO = document.getElementById('MTODESEMBOLSADO').value;
  var FECHAPROCESO = document.getElementById('FECHAPROCESO').value;
  var FECHADESEMBOLSO = document.getElementById('FECHADESEMBOLSO').value;
  var FECHAPROCESOBIM = document.getElementById('FECHAPROCESOBIM').value;
  var TIPOCOBRO = document.getElementById('TIPOCOBRO').value;
  var CARGATABLA = document.getElementById('CARGATABLA').value;
  var ENTIDADBANCARIA = document.getElementById('ENTIDADBANCARIA').value;

  $.ajax({url:"../../../CRUD/Entidadfinanciera/GuardaDABim.php",
            type:"POST",
            datatype: "json",
            data:{CODREGION : CODREGION,REGION : REGION,CODASOCIACION : CODASOCIACION,DESASOCIACION : DESASOCIACION,CODSOCIA : CODSOCIA ,APELLIDOSNOMBRES : APELLIDOSNOMBRES,NUMCREDITO : NUMCREDITO,PRODUCTO : PRODUCTO,NRODNI : NRODNI,CELULAR : CELULAR,MTOADICIONAL : MTODESEMBOLSADO,MTODESEMBOLSADO : MTODESEMBOLSADO,REPROGRAMACION : '',FECHADESEMBOLSO : FECHADESEMBOLSO,FECHAPROCESO : FECHAPROCESO,ENTIDADBANCARIA : ENTIDADBANCARIA,CARGATABLA : CARGATABLA ,SITUACION : TIPOCOBRO}, 
            success:function(data){               
            if(data == "[3]" || data == null){
                   Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
            }else if(data == '[{"Resultado":"2"}]'){                    
                   Swal.fire({icon: 'success',title: 'Agregada!',text: 'Se ha agregado a la socia'}) 
              }else if(data == '[{"Resultado":"1"}]'){                    
                   Swal.fire({icon: 'error',title: 'Alerta!!',text: 'La socia ya existe en el envio'})                     
              }
            }    
    });
}
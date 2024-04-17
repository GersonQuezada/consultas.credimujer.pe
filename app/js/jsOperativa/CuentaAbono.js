"use strict";
 function Registro(){
   var NRODNI = $.trim($("#NRODNI").val());    
   var NROCUENTA =$.trim($("#NROCUENTA").val()); 
   var Banco   = $("select[name='Banco'] option:selected").text();    
   var Banc1   = $("select[name='Banco'] option:selected").val();  
    if(NRODNI.length < 8){
Swal.fire({
  type: 'error',
  title: 'Error!!',
  text: 'EL DNI no puede tener menos de 8 números'
})
    }else if(NROCUENTA.length < 12){
Swal.fire({
  type: 'error',
  title: 'Error!!',
  text: 'EL nro de cuenta no puede tener menos de 13 números'
})

    }else  if( NRODNI.length == "" || NROCUENTA.length == ""){
      Swal.fire({
  type: 'error',
  title: 'Error!!',
  text: 'No se acepta campos vacios'
})
       
    }else  if( Banc1 < 1 ){
      Swal.fire({
  type: 'error',
  title: 'Error!!',
  text: 'Debe seleccionar un banco'
})}else{
        $.ajax({
           url:"../../../CRUD/Entidadfinanciera/RegisCuentaAbono.php",
           type:"POST",
           datatype: "json",
           data:{NRODNI:NRODNI,NROCUENTA:NROCUENTA,BANCO:Banco}, 
            success:function(data){               
               if(data == '[{"Respuesta":"1"}]'){
                   Swal.fire({
                      type: 'info',
                       title: 'Ya tiene una cuenta activa',
                         showConfirmButton: true}) 

                  document.getElementById("NROCUENTA").value = "";
                   // document.getElementById("NROCUENTA").value = "";                  
               }else if(data == '[{"Respuesta":"2"}]'){
                   Swal.fire({
                      type: 'success',
                       title: 'Registrado',
                         showConfirmButton: true}) 

                  document.getElementById("NRODNI").value = "";
                  document.getElementById("NROCUENTA").value = "";    
                  location.reload();               
               }
           }    
        });
    }     
}

function Buscar(){   
     $('#BusquedaCuentaAbono').show();  
   $('#ResumenCuentaAbono').hide(); 
   destruir('#ResumenCuentaAbono');
  var NRODNI = $.trim($("#NRODNI").val());   
  Busqueda(NRODNI);
 
}

function Busqueda(NRODNI){  

  // console.log('entro');
   var Controler ="../../../CRUD/Entidadfinanciera/BusquedaCuentaAbono.php";
   var Nameexcel = "CuentaAbono";

   var table = $("#BusquedaCuentaAbono")
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
              "data": {"NRODNI":NRODNI},
              "url": Controler,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [       
           {"data" : "Add",
                  render: function ( data, type, row) {           
                  var botonAgregar = '<button type="button" style="margin-rigth: 15px"   data-toggle="modal" data-target="#modal-default"  id="Editar" class="btn btn-info col-sm-3" onclick = "AbrirModal(\''+row.Socia+'___'+row.NROCUENTA+'___'+row.ACTIVO+'\');" id = "BotonEditar"><i class="fas fa-pencil-alt"></i></button>'+
                  '<button type="button" style="margin-left: 25px" id="Eliminar"  class="btn btn-danger col-sm-3" onclick = "eliminarsocia(\''+row.Socia+'___'+row.NROCUENTA+'___'+row.ACTIVO+'\');" id = "BotonEliminar"><i class="fas fa-user-slash"></i></button>'; 
                  return botonAgregar;     
                  }
                },        
          {"data" : "Socia"},
          {"data" : "NROCUENTA"},
          {"data" : "Entidadbancaria"},
          {"data" : "ACTIVO"},
          {"data" : "FECHACREACION"},
        ],
        pagingType: "simple" 
      });
}

function destruir(table){
  $(table).dataTable().fnClearTable();
  $(table).dataTable().fnDestroy();
}


 

function AbrirModal(string){
  let  datos = string.split('___');
 
  var nomsocia = datos[0];
  var nrocuenta = datos[1];
  var activo = datos[2]; 

  document.getElementById('nomsocia').value = nomsocia;     
  document.getElementById('nrocuenta').value = nrocuenta;
  document.getElementById('activo').value = activo; 
  // $('.modal').fadeIn();
}



function editarsocia(){
  var NRODNI = $.trim($("#NRODNI").val()); 
  var nomsocia = document.getElementById('nomsocia').value;
  var nrocuenta = document.getElementById('nrocuenta').value;
  var activo = document.getElementById('activo').value;
    $.ajax({url:"../../../CRUD/Entidadfinanciera/EditarNroCuentaAbono.php",
                  type:"POST",
                  datatype: "json",
                  data:{nomsocia : nomsocia ,nrocuenta : nrocuenta ,activo :activo }, 
                  success:function(data){               
                  if(data == "[2]" || data == null){
                        Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                  }else{ 
                        Swal.fire('Agregada!','Se ha guardado los cambios','success') 
                        // destruir("#BusquedaCuentaAbono");
                          Busqueda(NRODNI);
                    }
                  }    
          });
}

function eliminarsocia(string){
  let  datos = string.split('___'); 
  // var nomsocia = datos[0];
  var nrocuenta = datos[1];
  var activo = datos[2]; 
  var NRODNI = $.trim($("#NRODNI").val());  
  $.ajax({url:"../../../CRUD/Entidadfinanciera/EliminarNroCuentaAbono.php",
              type:"POST",
              datatype: "json",
              data:{NRODNI : NRODNI ,nrocuenta : nrocuenta ,activo :activo }, 
              success:function(data){               
              if(data == "[2]" || data == null){
                      Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
              }else{ 
                      Swal.fire('Agregada!','Se ha guardado los cambios','success') 
                    // destruir("#BusquedaCuentaAbono");
                      Busqueda(NRODNI);
                }
              }    
      });
}
'use strict';
var _nroDocumento = document.getElementById("NRODNI");   
var _nroCuentaAbono = document.getElementById("NROCUENTA");
var _entidadBancaria = document.getElementById("Banco");

function RegisCuentaAbono(){   
    if(_nroDocumento.value.length < 8 || _nroCuentaAbono.value.length < 12){
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'EL DNI no puede tener menos de 8 o 12 números'
      })
    }else if(_nroCuentaAbono.value.length < 12){
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'EL nro de cuenta no puede tener menos de 13 números'
      })
    }else  if( _nroDocumento.value.length == "" || _nroCuentaAbono.value.length == ""){
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'No se acepta campos vacios'
      })       
    }else  if( _entidadBancaria.value < 1 ){
      Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Debe seleccionar un banco'
      })
    }else{
        $.ajax({
           url:"../../bd/Entidadfinanciera/RegisCuentaAbono.php",
           type:"POST",
           datatype: "json",
           data:{NRODNI:_nroDocumento.value,NROCUENTA:_nroCuentaAbono.value,BANCO:_entidadBancaria.options[_entidadBancaria.selectedIndex].innerText}, 
            success:function(data){               
               if(data == '[{"Respuesta":"1"}]'){
                   Swal.fire({
                      icon: 'info',
                       title: 'Ya tiene una cuenta activa',
                         showConfirmButton: true}) 
                         _nroCuentaAbono.value = "";                
               }else if(data == '[{"Respuesta":"2"}]'){
                   Swal.fire({
                      icon: 'success',
                      title: 'Registrado',
                      showConfirmButton: true}) 

                _nroDocumento.value = "";
                _nroCuentaAbono.value = "";    
                  location.reload();               
               }
           }    
        });
    }     
}

function BuscarSocia (){     
  $('#BusquedaCuentaAbono').show();  
  $('#ResumenCuentaAbono').hide(); 
  destruir('#ResumenCuentaAbono');    
  Busqueda(_nroDocumento.value); 
} 
function Busqueda(NRODNI){  
   var Controler ="../../bd/Entidadfinanciera/BusquedaCuentaAbono.php";
   var Nameexcel = "CuentaAbono";

   var table = $("#BusquedaCuentaAbono")
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
                "url": "../../plugins/Spanish.js",
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
                  var botonAgregar = '<button type="button" id="Editar" class="btn btn-info" data-toggle="modal" data-target="#Modal-CuentaAbono" onclick = "AbrirModal(\''+row.NroCuentaid+'___'+row.Socia+'___'+row.NROCUENTA+'___'+row.ACTIVO+'\');" id = "BotonEditar"><i class="fas fa-pencil-alt"></i></button>'; 
                  return botonAgregar;     
                  }
                },        
          {"data" : "Socia"},
          {"data" : "NROCUENTA"},
          {"data" : "Entidadbancaria"},
          // {"data" : "ACTIVO"},
          {"data" : "ACTIVO",
            render: function (data, type, row){
              let activo = row.ACTIVO;
              if(activo == "Y"){
                let Opcion = '<img style="max-width: 30px;  max-height: 30px; display: block; margin: 0px auto;" src="../../dist/img/accept.png"></img>';
                return  Opcion;
              }else{
                let Opcion = '<img style="max-width: 30px;  max-height: 30px; display: block; margin: 0px auto;" src="../../dist/img/failed.png"></img>';
                return  Opcion;
              }
            }
          },
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
  let id = datos[0];
  let nomsocia = datos[1];
  let nrocuenta = datos[2];
  let activo = datos[3]; 
  document.getElementById('name_socia').value = nomsocia;     
  document.getElementById('new_number_account').value = nrocuenta;
  document.getElementById('StatusAccount').value = activo;   
  document.getElementById('ID_account').value = id;   
}
function EditarNroCuentaAbono(){
  let id = document.getElementById('ID_account').value;
  let activo = document.getElementById('StatusAccount').value;
  let nrodni = document.getElementById('NRODNI').value;
  $.ajax({url:"../../bd/Entidadfinanciera/EditarNroCuentaAbono.php",
                type:"POST",
                datatype: "json",
                data:{ ID : id , Estado : activo}, 
                success:function(data){               
                if(data == "[2]" || data == null){
                      Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                }else{ 
                      Swal.fire('Agregada!','Se ha guardado los cambios','success') 
                      destruir("#BusquedaCuentaAbono");
                      Busqueda(nrodni);
                  }
                }    
        });
} 

function EliminarNroCuentaAbono(){
  let id = document.getElementById('ID_account').value; 
  let nrodni = document.getElementById('NRODNI').value;
  $.ajax({url:"../../bd/Entidadfinanciera/EliminarNroCuentaAbono.php",
                type:"POST",
                datatype: "json",
                data:{ ID : id }, 
                success:function(data){               
                if(data == "[2]" || data == null){
                      Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                }else{ 
                      Swal.fire('Agregada!','Se ha guardado los cambios','success') 
                      // destruir("#BusquedaCuentaAbono");
                        Busqueda(nrodni);
                  }
                }    
        });
}

$(document).on("click", "#Btn_Ejecutar", function (e){ 
        var fecha = $("[name='fechaProceso']").val();        
        if(fecha.length == ""){
          Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
        }else{
          Listar(fecha);
          // console.log(Entro);
        }

});

$(document).on("click", "#Btn_Ejecutar_Final", function (e){ 
        var fecha = $("[name='fechaProceso']").val();        
        if(fecha.length == ""){
          Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
        }else{

          Listar_Final(fecha);
        }

});

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
 			 "url": "../../plugins/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechaProceso":fecha},
              "url":"../../bd/Entidadfinanciera/Vizualizar_BIM_DJ.php",
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
                {"data" : "Editar",
                  render: function ( data, type, row) { 
                  var botonEditar = '<button type="button" id = "BotonEditarTabla" class="BotonEditarTabla" onclick = "AbrirModal(\''+row.NRODNI+'___'+row.CODREGION+'___'+row.FECHAPROCESO+'___'+row.APELLIDOSNOMBRES+'___'+row.MTOADICIONAL+'\');" id = "BotonEditar"><i class="fas fa-pencil-alt"></i></button>';
                  return botonEditar;   
                  }
               },
               {"data" : "Eliminar",
                  render: function ( data, type, row) { 
                  var botonEliminar = '<button type="button" id = "BotonEliminarTabla" class="BotonEliminarTabla" onclick = "eliminarSocia(\''+row.FECHAPROCESO+'___'+row.CODREGION+'___'+row.NRODNI+'\');" id = "BotonEliminar"><i class="fas fa-user-slash"></i></button>';                   
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
       "url": "../../plugins/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechaProceso":fecha},
              "url":"../../bd/Entidadfinanciera/EnvioFinalBim.php",
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
	Listar(fecha,CODREGION);  	
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
  $('.modal').fadeIn();
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
                $.ajax({url:"../../bd/Entidadfinanciera/EliminaSociaEnvioBIM.php",
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
      $.ajax({url:"../../bd/Entidadfinanciera/EditaSociaDJBIM.php",
              type:"POST",
              datatype: "json",
              data:{fechaProceso:fecha,CODREGION:CODREGION,NroDNI:NroDNI,Mtodesembolso:Mtodesembolso}, 
              success:function(data){               
              if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
              }else{ 
                     Swal.fire('Modificado!','Se ha guardado los cambios','success')    
                     recargar(); 
                     cerrarModal();
                }
              }    
      });
  }
    });
}
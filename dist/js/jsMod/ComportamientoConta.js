'use strict';
function MuestraTabla(){
  var CODREGION   = $("select[name='ComboBoxRegion'] option:selected").val();  
  var fecha = $("[name='fechaProceso']").val();        
  if(fecha.length == ""){
    Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
  }else{
    var post = { fechaProceso: fecha , CODREGION: CODREGION}
    // GENERA_ARCHIVO_BCP(post);
    Listar(fecha,CODREGION);
  }
}

function RevertirProcesoBCP(){
        var CODREGION   = $("select[name='ComboBoxRegion'] option:selected").val();  
        var fecha = $("[name='fechaProceso']").val();        
        if(fecha.length == ""){
          Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
        }else{         
          // revierte proceso
          Listar(fecha,CODREGION);
          $.ajax({
              type:"POST",
              url:"../../bd/Entidadfinanciera/RevertirProcesoBCP.php",
              data:{CODREGION:CODREGION,fecha:fecha}, 
              dataType: "json",              
              success:function(data){  
                if(data = '[1]'){
                Swal.fire('Comunicado','Se revirtio el proceso','success')    
                }else{
                  Swal.fire('Comunicado','Error al revertir el proceso','Error')    
                } 
                
              }
          });
        }

}

function GenerarArchivo(){
  let fechaProceso = document.getElementById('fechaProceso');
  let region = document.getElementById('ComboBoxRegion');
  let Select = document.getElementById('ComboBoxTipo');
  let data = {
    'fechaProceso' : fechaProceso.value,
	  'ComboBoxRegion' : region.value,
    'TipoDesembolso' : Select.value
  };

  if(Select.value == '0'){
    swal.fire('Error!','Debe Seleccionar una opcion','error');
  }

  if(Select.value == "CR"){ 
    $.ajax({
      type:"POST",
      url:"../../bd/Entidadfinanciera/Generaciontxt.php",
      data:data, 
      dataType: "json",              
      success:function(data){  
        let result = data.data;
        if(result.length == 1 ){
          Swal.fire('Comunicado','No hay datos por enviar','Info')  
        }else{
          descargarArchivo(generarTexto(result),'PROVEEDORES'+dataTxt(fechaProceso.value,"Txt")+'.txt');
          Swal.fire('Comunicado','Se genero el archivo','success')    
        }        
      }
    }); 
  }else{
    $.ajax({
      type:"POST",
      url:"../../bd/Entidadfinanciera/Generaciontxt.php",
      data:data, 
      dataType: "json",              
      success:function(data){  
        let result = data.data;
        if(result.length == 1 ){
          Swal.fire('Comunicado','No hay datos por enviar','Info')  
        }else{
          descargarArchivo(generarTexto(result),'PROVEEDORES'+dataTxt(fechaProceso.value,"Txt")+'.txt');
          Swal.fire('Comunicado','Se genero el archivo','success')    
        }        
      }
    }); 
  }

} 

function generarTexto (datos) {
  var texto = [];
  if(datos.length === 1){
    texto.push(datos[0]["Campo"]);
  }

  for (var i = 0; i < datos.length -1; i++){
    texto.push(datos[i]["Campo"]);
    texto.push('\n');
  }
  if (datos.length -1) {
    texto.push(datos[i]["Campo"]);
  }
  //El constructor de Blob requiere un Array en el primer
  //parámetro así que no es necesario usar toString. El
  //segundo parámetro es el tipo MIME del archivo
  return new Blob(texto, {
    type: 'text/plain'
  });
}
 
function descargarArchivo  (contenidoEnBlob, nombreArchivo) {
  //creamos un FileReader para leer el Blob
  var reader = new FileReader();
  //Definimos la función que manejará el archivo
  //una vez haya terminado de leerlo
  reader.onload = function (event) {
    //Usaremos un link para iniciar la descarga
    var save = document.createElement('a');
    save.href = event.target.result;
    save.target = '_blank';
    //Truco: así le damos el nombre al archivo
    save.download = nombreArchivo || 'archivo.dat';
    var clicEvent = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
    //Simulamos un clic del usuario
    //no es necesario agregar el link al DOM.
    save.dispatchEvent(clicEvent);
    //Y liberamos recursos...
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
  };
  //Leemos el blob y esperamos a que dispare el evento "load"
  reader.readAsDataURL(contenidoEnBlob);
}

function dataTxt (date) {
  let dateArray=date.split('-');
  return `${dateArray[2]}${dateArray[1]}${dateArray[0]}`
}

function Listar(fecha,CODREGION){  
      var controller = "../../bd/Entidadfinanciera/GeneraArchivoBcp.php";// URL
        
      var table = $("#example").DataTable({
        dom: 
        '<"custom-length"l>' + // Cantidad de registros a la izquierda
        '<"custom-buttons d-flex justify-content-center"B>' + // Botones en el medio
        '<"custom-search"f>' + // Búsqueda a la derecha
        't' + // Tabla
        '<"bottom"ip>',
        paging:true,
        bLengthChange: false,
        pageLength : 5,
        destroy: true,
        bFilter: true,
        bInfo: true,
        buttons:[ 
          {
          extend:    'excelHtml5',
          text:      '<i class="fas fa-file-excel"></i> ',
          titleAttr: 'Exportar a Excel',
          footer: true,
          title: 'Lista_socias_cheque_gerencia',
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
        language: {"url": "../../dist/js/Spanish.js"},
        ajax:{
                "cache": false,
                "method":"POST",
                "data": {"fechaProceso":fecha,"CODREGION":CODREGION},
                "url":controller,
                "dataType": "json",
                "deferRender": true,
              },        
       columns:
        [

                {"data" : "Accion",
                  render: function ( data, type, row) {
                  var user = $("[name='usuario']").val();
                  var botonEliminar = '<button type="button" id="BotonEliminarTabla" class="btn btn-danger col-sm" onclick = "eliminarSocia(\''+row.ID+'\');" id = "BotonEliminar"><i class="fas fa-user-slash"></i></button>';
                  var botonEditar = '<button type="button" id="BotonEditarTabla" class="btn btn-info col-sm"  data-toggle="modal" data-target="#modal-default" onclick = "AbrirModal(\''+row.NRODNI+'___'+row.CODREGION+'___'+row.FECHAPROCESO+'___'+row.APELLIDOSNOMBRES+'___'+row.MTOADICIONAL+'___'+row.ID+'\');" id = "BotonEditar"><i class="fas fa-pencil-alt"></i></button>';
                  var boton = "";
                  if (user == "jacqueline.calero" || user == "gerson" || user == "cdelacruz" || user == "AUTORIZA.CONTABLE"  ) {
                    boton = botonEditar;
                  }else {
                    boton = botonEliminar;
                  }

                  return boton;     
                  }
                },
                {"data": "ID", visible : false },
                {"data" : "REGION", searchable: false },
                {"data" : "CODASOCIACION" , searchable: false },
                {"data" : "DESASOCIACION", searchable: false },
                {"data" : "NUMCREDITO", searchable: false },
                {"data" : "PRODUCTO", searchable: false },
                {"data" : "CODSOCIA", searchable: false },
                {"data" : "APELLIDOSNOMBRES", searchable: false },
                {"data" : "NRODNI", searchable: false },
                {"data" : "NROCTAAHORROSOCIA", searchable: false },
                {"data" : "NROCTACARGO", searchable: false }, 
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
                {"data" : "FECHAPROCESO", searchable: false },
                {"data" : "FECHADESEMBOLSO", searchable: false },
                {"data" : "FECHAPROCESOBCP", searchable: false },
                {"data" : "TIPOCOBRO", searchable: true },
                {"data" : "CARGATABLA", searchable: false },
                {"data" : "FLAGINSERT", searchable: false },

                ],
               pagingType: "simple" 
      });
}

function eliminarSocia(id){       
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
                $.ajax({url:"../../bd/Entidadfinanciera/EliminaSociaEnvioBcp.php",
                  type:"POST",
                  dataType: "json",
                  data:{id:id}, 
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
  var id = document.getElementById('id').value;
  var Mtodesembolso = document.getElementById('mtodesem').value; 
  Swal.fire({
  input: 'password',   
  showCancelButton: true, 
  title: 'Contraseña de Confirmacion',
  text: 'Digite la llave' 
  }).then((result) => {
      if (result.value == "Credi2020") {
        console.log("ok");
        $.ajax({url:"../../bd/Entidadfinanciera/EditaSociaDJCG.php",
                type:"POST",
                dataType: "json",
                data:{ID : id,Mtodesembolso:Mtodesembolso}, 
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

function recargar(){
  var CODREGION   = $("select[name='ComboBoxRegion'] option:selected").val();  
  var fecha = $("[name='fechaProceso']").val();             
  // var post = { fechaProceso: fecha , CODREGION: CODREGION}

    $('#example').dataTable().fnClearTable();
    $('#example').dataTable().fnDestroy();
  Listar(fecha,CODREGION);  
}
function cerrarModal(){
  // $('.modal').fadeOut();
  // document.getElementById('fecha1').value = "";
  // document.getElementById('region').value = "";
  // document.getElementById('nrodni').value = "";
  // document.getElementById('mtodesem').value = "";
  // document.getElementById('nomsocia').value = "";
  // document.getElementById("NroCuenta").value = '0';
}

function AbrirModal(string){
  let  datos = string.split('___'); 
  var nrodni = datos[0];
  var region = datos[1];
  var fecha = datos[2];
  var NomSocia = datos[3];
  var monto = datos[4];
  var id = datos[5];
  document.getElementById('nrodni').value = nrodni;     
  document.getElementById('nomsocia').value = NomSocia;
  document.getElementById('mtodesem').value = monto;
  document.getElementById('region').value = region;
  document.getElementById('fecha1').value = fecha;  
  document.getElementById('id').value = id;
}
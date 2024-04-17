$(function() {Cargar()});
//Acciones de Botones
$(document).on("click", "#Btn_Ejecutar_Devolucion", function (e){
        var TipoDA = $("select[name='ComboBoxTipo'] option:selected").val();     
        var CODREGION   = $("select[name='ComboBoxRegion'] option:selected").val();  
        var nombre = $("[name='NombreSocia']").val();
        if(nombre.length == ""){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una Socia'})
        }else{ 
          if(TipoDA == "1"){
            ListarBim(nombre,CODREGION);            
          }else if (TipoDA == "2"){
            ListarBn(nombre,CODREGION); 
          }           
        }   
    
});

$(document).on("click", "#Btn_Inserta_Socia_ManualBN", function (e){     
    var CODREGION   = $("select[name='ComboBoxRegion1'] option:selected").val();  
    var nombre = $("[name='NombreSocia1']").val();
    if(CODREGION ==0){
      Swal.fire({icon:'error',title : 'Error!!',text: 'Debe Seleccionar una region'})
    }else if (nombre.length == ""){
      Swal.fire({icon:'error',title:'Error!!',text : 'Debe ingresar un Nombre'})
    }else{
      ListaSociaBN(CODREGION,nombre);
    }
    
});

$(document).on("click","#Btn_Ejecutar_Anulados",function(e){
  // console.log(1); return false ;
    var Nombresocia = $("[name='NombreSociaAnulado']").val();
    var CODREGION = $("select[name='ComboBoxRegionAnulado'] option:selected").val(); 
    ListaSociaAnulado(Nombresocia,CODREGION);

});

function RevertirAnulado(string){
 let  datos = string.split('___');    
    console.log(datos[0])
    console.log(datos[1])
    console.log(datos[2])

    Swal.fire({
                  title: 'Esta seguro de Revertir este proceso?',
                  text: "Se volvera al estado anterior",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si'
              }).then((result) => {
              if (result.value) {
                  $.ajax({url:"../../bd/Entidadfinanciera/RevetirSociaAnulada.php",
                  type:"POST",
                  datatype: "json",
                  data:{FECHAPROCEBN : datos[0],NRODNI : datos[1],CODREGION : datos[2]}, 
                  success:function(data){               
                  if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                  }else{ 
                     Swal.fire('Revertido!','Se ha revertido el proceso exitosamente','success') 
                     destruir("#ResumenTablaAnuladosBN");
                     location.reload(); 
                  }
                  }    
                  });
                  }

              })

}

function RevertirInsert(string){
 let  datos = string.split('___');     
    Swal.fire({
                  title: 'Esta seguro de Revertir este proceso?',
                  text: "Se volvera al estado anterior",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si'
              }).then((result) => {
              if (result.value) {
                  $.ajax({url:"../../bd/Entidadfinanciera/RevetirSociaInsertada.php",
                  type:"POST",
                  datatype: "json",
                  data:{FECHAPROCEBN : datos[0],FECHACREDITO : datos[1],CODSOCIA : datos[2],NRODNI : datos[3]}, 
                  success:function(data){               
                  if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                  }else{ 
                     Swal.fire('Revertido!','Se ha revertido el proceso exitosamente','success') 
                     destruir("#TablaManualBNResumen");
                     location.reload(); 
                  }
                  }    
                  });
                  }

              })

}

function IsertarSociaAnulada(string){
  let  datos = string.split('___'); 
 
    // document.getElementById('TIPOREGISTRO2').value = datos[0];
    // document.getElementById('FECHAPROCEBN2').value = datos[1];  
    // document.getElementById('TIPODESEMBOLSO2').value = datos[2];   
    // document.getElementById('NROCREPERSONA2').value = datos[3];  
    console.log(datos[0])
    console.log(datos[1])
    console.log(datos[2])

    Swal.fire({
                  title: 'Esta seguro de Anular?',
                  text: "Se anulara el credito",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si'
              }).then((result) => {
              if (result.value) {
                  $.ajax({url:"../../bd/Entidadfinanciera/InsertSociaAnulada.php",
                  type:"POST",
                  datatype: "json",
                  data:{FECHAPROCEBN : datos[0],FECHAENVIO : datos[0],NRODNI : datos[1],CODREGION : datos[2]}, 
                  success:function(data){               
                  if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                  }else{ 
                     Swal.fire('Agregada!','Se ha agregado a la socia','success') 
                      destruir("#TablaAnuladosBN");
                       location.reload(); 
                  }
                  }    
                  });
                  }

              })



    //$('#modalInsertBN').fadeIn();
    // return false

}


//Listar Socias por Bancos 
 
function ListarBim(NombreSocia,CODREGION){  
   var Controler ="../../bd/Entidadfinanciera/DevolucionAhorroBim.php";
   var Nameexcel = "DJBIM";

   var table = $("#TablaBIM")
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
              "data": {"CODREGION":CODREGION,"NombreSocia":NombreSocia},
              "url": Controler,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
            
                {"data" : "Add",
                  render: function ( data, type, row) {           
                  var botonAgregar = '<button type="button" id="BotonAgregarTabla" class="BotonAgregarTabla" onclick = "AbrirModal(\''+row.CODREGION+'___'+row.REGION+'___'+row.CODASOCIACION+'___'+row.DESASOCIACION+'___'+row.NUMCREDITO+'___'+row.PRODUCTO+'___'+row.CODSOCIA+'___'+row.APELLIDOSNOMBRES+'___'+row.NRODNI+'___'+row.CELULAR+'___'+row.MTOADICIONAL+'___'+row.MTODESEMBOLSADO+'___'+row.FECHAPROCESO+'___'+row.FECHADESEMBOLSO+'___'+row.FECHAPROCESOBIM+'___'+row.TIPOCOBRO+'___'+row.CARGATABLA+'\',1);" id = "BotonEditar"><i class="fas fa-user-plus"></i></button>'; 
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

function ListarBn(NombreSocia,CODREGION){  
   var Controler ="../../bd/Entidadfinanciera/DevolucionAhorroBn.php";
   var Nameexcel = "DJBancoDelaNacion";

   var table = $("#TablaBN")
      .DataTable({
        dom:  "<'row'<''f><''B><'' i>>rtp",
        pageLength: 5,
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
              "data": {"CODREGION":CODREGION,"NombreSocia":NombreSocia},
              "url": Controler,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
                {"data" : "Accion",
                  render: function ( data, type, row) {           
                  var botonAgregar = '<button type="button" id="BotonAgregarTabla" class="btn-info" onclick = "AbrirModal(\''+row.TIPOREGISTRO+'___'+row.FECHAPROCEBN+'___'+row.TIPODESEMBOLSO+'___'+row.NROCREPERSONA+'___'+row.NUMCREDITO+'___'+row.CODSOCIA+'___'+row.APELLIDOSNOMBRES+'___'+row.NRODNI+'___'+row.NROCICLO+'___'+row.CODREGION+'___'+row.CODMONEDA+'___'+row.CODENTIFINAN+'___'+row.TIPOCREDITO+'___'+row.MTOAPROBADO+'___'+row.MTODESEMBOLSADO+'___'+row.SITUACION+'___'+row.NROSOLICITUD+'___'+row.FECHAREGISTRO+'___'+row.FECHACREDITO+'___'+row.CODASOCIACION+'___'+row.DESASOCIACION+'___'+row.NROSOCIO+'___'+row.CARGATABLA+'\',2);" id = "BotonEditar"><i class="fas fa-user-plus"></i></button>'; 
                  return botonAgregar;     
                  }
                },                 
                {"data" : "FECHAPROCEBN"},
                {"data" : "TIPODESEMBOLSO"},               
               {"data" : "CODSOCIA"},
               {"data" : "APELLIDOSNOMBRES"},
               {"data" : "NRODNI"},                
               {"data" : "CODREGION"},               
               {"data" : "MTOAPROBADO",
                  render: function ( data, type, row) {
                  let to = (row.MTOAPROBADO).split('.'); 
                  let tot = 0;
                  if(to[0] == ""){
                  tot = 0+row.MTOAPROBADO; 
                  }else{
                  tot = row.MTOAPROBADO;
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
               {"data" : "DESASOCIACION"},
               {"data" : "NROSOCIO"} 
                ],
               pagingType: "simple" 
      });
}

function ListaSociaBN(CODREGION,NombreSocia){  
   var Controler ="../../bd/Entidadfinanciera/InsertSociaManualBD.php";
   var Nameexcel = "SociasManualBD";

   var table = $("#TablaManualBN")
      .DataTable({
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        pageLength: 5,
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
              "data": {"CODREGION":CODREGION,"NombreSocia":NombreSocia},
              "url": Controler,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
                {"data" : "Add",
                  render: function ( data, type, row) {           
                  var botonAgregar = '<button type="button" id="BotonAgregarTabla" class="btn-info" onclick = "AbrirModalInsertBn(\''+row.TIPOREGISTRO+'___'+row.FECHAPROCEBN+'___'+row.TIPODESEMBOLSO+'___'+row.NROCREPERSONA+'___'+row.NUMCREDITO+'___'+row.CODSOCIA+'___'+row.APELLIDOSNOMBRES+'___'+row.NRODNI+'___'+row.NROCICLO+'___'+row.CODREGION+'___'+row.CODMONEDA+'___'+row.CODENTIFINAN+'___'+row.TIPOCREDITO+'___'+row.MTOAPROBADO+'___'+row.MTODESEMBOLSADO+'___'+row.SITUACION+'___'+row.NROSOLICITUD+'___'+row.FECHAREGISTRO+'___'+row.FECHACREDITO+'___'+row.CODASOCIACION+'___'+row.DESASOCIACION+'___'+row.NROSOCIO+'___'+row.CARGATABLA+'\');" id = "BotonEditar"><i class="fas fa-user-plus"></i></button>'; 
                  return botonAgregar;     
                  }
                },
               
                {"data" : "FECHAPROCEBN"},
                {"data" : "TIPODESEMBOLSO"}, 
               {"data" : "CODSOCIA"},
               {"data" : "APELLIDOSNOMBRES"},
               {"data" : "NRODNI"}, 
               {"data" : "CODREGION"},  
               {"data" : "MTOAPROBADO",
                  render: function ( data, type, row) {
                  let to = (row.MTOAPROBADO).split('.'); 
                  let tot = 0;
                  if(to[0] == ""){
                  tot = 0+row.MTOAPROBADO; 
                  }else{
                  tot = row.MTOAPROBADO;
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
                
               {"data" : "DESASOCIACION"},
               {"data" : "NROSOCIO"} 
                ],
               pagingType: "simple" 
      });
}

function ListaSociaAnulado(Nombresocia,CODREGION){
      var Controler ="../../bd/Entidadfinanciera/VisualizaSociasEnviadasBN.php";
       var Nameexcel = "SociasEnviadas";

       var table = $("#TablaAnuladosBN")
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
                "data": {"CODREGION":CODREGION,"NombreSocia":Nombresocia},
                "url": Controler,
                "dataType": "json",
                "deferRender": true,
              },

         columns:
          [
                  {"data" : "Add",
                    render: function ( data, type, row) {           
                    var botonAgregar = '<button type="button" id="BotonAgregarTabla" class="btn-info" onclick = "IsertarSociaAnulada(\''+row.FECHAPROCEBN+'___'+row.NRODNI+'___'+row.CODREGION+'\');" id = "BotonEditar"><i class="fas fa-user-plus"></i></button>'; 
                    return botonAgregar;     
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

//comportamiento de las tablas
$("#ComboBoxTipo").change( function() {
        if ($(this).val() === "1") {
            $("#NombreSocia").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);
            $('#TablaBIM').show();
            $('#TablaBN').hide();
            destruir('#TablaBN'); 
        } else if ($(this).val() === "2") {
            $("#NombreSocia").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);
            $('#TablaBN').show();
            $('#TablaBIM').hide();
            destruir('#TablaBIM');       
        } else{
          Cargar();
          $('#TablaBN').hide(); 
          destruir('#TablaBN');
          $('#TablaBIM').hide();
          destruir('#TablaBIM'); 
        }
});

function destruir(table){
  $(table).dataTable().fnClearTable();
  $(table).dataTable().fnDestroy();
}

function Cargar(){
   $("#NombreSocia").prop("disabled", true);
   $("#ComboBoxRegion").prop("disabled", true); 
}



//Modales

function cerrarModal(modal){
  if(modal == "#modalDABIM"){
    $(modal).fadeOut();
    document.getElementById('CODREGION').value =  "";
    document.getElementById('REGION').value =  "";
    document.getElementById('CODASOCIACION').value =  "";
    document.getElementById('DESASOCIACION').value =  "";
    document.getElementById('NUMCREDITO').value =  "";
    document.getElementById('PRODUCTO').value =  "";
    document.getElementById('CODSOCIA').value =  "";
    document.getElementById('APELLIDOSNOMBRES').value =  "";
    document.getElementById('NRODNI').value =  "";
    document.getElementById('CELULAR').value =  "";
    document.getElementById('MTOADICIONAL').value =  "";
    document.getElementById('MTODESEMBOLSADO').value =  "";
    document.getElementById('FECHAPROCESO').value =  "";
    document.getElementById('FECHADESEMBOLSO').value =  "";
    document.getElementById('FECHAPROCESOBIM').value =  "";
    document.getElementById('TIPOCOBRO').value =  "";
    document.getElementById('CARGATABLA').value =  "";

  }else if(modal == "#modalDABN"){
        $(modal).fadeOut();
    document.getElementById('TIPOREGISTRO1').value = "";
    document.getElementById('FECHAPROCEBN1').value = "";
    document.getElementById('TIPODESEMBOLSO1').value = "";
    document.getElementById('NROCREPERSONA1').value = "";
    document.getElementById('NUMCREDITO1').value = "";
    document.getElementById('CODSOCIA1').value = "";
    document.getElementById('APELLIDOSNOMBRES1').value = "";
    document.getElementById('NRODNI1').value = "";
    document.getElementById('NROCICLO1').value = "";
    document.getElementById('CODREGION1').value = "";
    document.getElementById('CODMONEDA1').value = "";
    document.getElementById('CODENTIFINAN1').value = "";
    document.getElementById('TIPOCREDITO1').value = "";
    document.getElementById('MTOAPROBADO1').value = "";
    document.getElementById('MTODESEMBOLSADO1').value = "";
    document.getElementById('SITUACION1').value = "";
    document.getElementById('NROSOLICITUD1').value = "";
    document.getElementById('FECHAREGISTRO1').value = "";
    document.getElementById('FECHACREDITO1').value = "";
    document.getElementById('CODASOCIACION1').value = "";
    document.getElementById('DESASOCIACION1').value = "";
    document.getElementById('NROSOCIO1').value = "";
    document.getElementById('CARGATABLA1').value = "";

  }else if (modal == "#modalInsertBN"){
    $(modal).fadeOut();
    document.getElementById('TIPOREGISTRO2').value = "";
    document.getElementById('FECHAPROCEBN2').value = "";
    document.getElementById('TIPODESEMBOLSO2').value = "";
    document.getElementById('NROCREPERSONA2').value = "";
    document.getElementById('NUMCREDITO2').value = "";
    document.getElementById('CODSOCIA2').value = "";
    document.getElementById('APELLIDOSNOMBRES2').value = "";
    document.getElementById('NRODNI2').value = "";
    document.getElementById('NROCICLO2').value = "";
    document.getElementById('CODREGION2').value = "";
    document.getElementById('CODMONEDA2').value = "";
    document.getElementById('CODENTIFINAN2').value = "";
    document.getElementById('TIPOCREDITO2').value = "";
    document.getElementById('MTOAPROBADO2').value = "";
    document.getElementById('MTODESEMBOLSADO2').value = "";
    document.getElementById('SITUACION2').value = "";
    document.getElementById('NROSOLICITUD2').value = "";
    document.getElementById('FECHAREGISTRO2').value = "";
    document.getElementById('FECHACREDITO2').value = "";
    document.getElementById('CODASOCIACION2').value = "";
    document.getElementById('DESASOCIACION2').value = "";
    document.getElementById('NROSOCIO2').value = "";
    document.getElementById('CARGATABLA2').value = "";
  }

}

function AbrirModal(string,modal){
  let  datos = string.split('___'); 
  if(modal == 1){ 
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
    $('#modalDABIM').fadeIn();
  }else if(modal == 2){ 
    document.getElementById('TIPOREGISTRO1').value = datos[0];
    document.getElementById('FECHAPROCEBN1').value = datos[1];  
    document.getElementById('TIPODESEMBOLSO1').value = datos[2];   
    document.getElementById('NROCREPERSONA1').value = datos[3];  
    document.getElementById('NUMCREDITO1').value = datos[4];  
    document.getElementById('CODSOCIA1').value = datos[5];    
    document.getElementById('APELLIDOSNOMBRES1').value = datos[6];  
    document.getElementById('NRODNI1').value = datos[7];  
    document.getElementById('NROCICLO1').value = datos[8];  
    document.getElementById('CODREGION1').value = datos[9];   
    document.getElementById('CODMONEDA1').value = datos[10];  
    document.getElementById('CODENTIFINAN1').value = datos[11];   
    // document.getElementById('TIPOCREDITO1').value = datos[12];  
    document.getElementById('MTOAPROBADO1').value = datos[13];  
    document.getElementById('MTODESEMBOLSADO1').value = datos[14];  
    document.getElementById('SITUACION1').value = datos[15];  
    document.getElementById('NROSOLICITUD1').value = datos[16];   
    document.getElementById('FECHAREGISTRO1').value = datos[17];  
    document.getElementById('FECHACREDITO1').value = datos[18];  
    document.getElementById('CODASOCIACION1').value = datos[19];  
    document.getElementById('DESASOCIACION1').value = datos[20];  
    document.getElementById('NROSOCIO1').value = datos[21];  
    document.getElementById('CARGATABLA1').value = datos[22];  
    // $('#modalDABN').fadeIn();
    $("#modal-default-1").modal({backdrop: 'static', keyboard: false}); 
  }
}

function AbrirModalInsertBn(string){
  let  datos = string.split('___'); 
 
    document.getElementById('TIPOREGISTRO2').value = datos[0];
    document.getElementById('FECHAPROCEBN2').value = datos[1];  
    document.getElementById('TIPODESEMBOLSO2').value = datos[2];   
    document.getElementById('NROCREPERSONA2').value = datos[3];  
    document.getElementById('NUMCREDITO2').value = datos[4];  
    document.getElementById('CODSOCIA2').value = datos[5];    
    document.getElementById('APELLIDOSNOMBRES2').value = datos[6];  
    document.getElementById('NRODNI2').value = datos[7]; 
    document.getElementById('NROCICLO2').value = datos[8];  
    document.getElementById('CODREGION2').value = datos[9];   
    document.getElementById('CODMONEDA2').value = datos[10];  
    document.getElementById('CODENTIFINAN2').value = datos[11];   
    document.getElementById('TIPOCREDITO2').value = datos[12];  
    document.getElementById('MTOAPROBADO2').value = datos[13];  
    document.getElementById('MTODESEMBOLSADO2').value = datos[14];  
    document.getElementById('SITUACION2').value = datos[15];  
    document.getElementById('NROSOLICITUD2').value = datos[16];   
    document.getElementById('FECHAREGISTRO2').value = datos[17];  
    document.getElementById('FECHACREDITO2').value = datos[18];  
    document.getElementById('CODASOCIACION2').value = datos[19];  
    document.getElementById('DESASOCIACION2').value = datos[20];  
    document.getElementById('NROSOCIO2').value = datos[21];  
    document.getElementById('CARGATABLA2').value = datos[22];  
    // $('#modalInsertBN').fadeIn();
    $("#modal-default-1").modal({backdrop: 'static', keyboard: false}); 
  
}
//Acciones Modales
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
 
    $.ajax({url:"../../bd/Entidadfinanciera/GuardaDABim.php",
              type:"POST",
              datatype: "json",
              data:{CODREGION : CODREGION,REGION : REGION,CODASOCIACION : CODASOCIACION,DESASOCIACION : DESASOCIACION,CODSOCIA : CODSOCIA ,APELLIDOSNOMBRES : APELLIDOSNOMBRES,NUMCREDITO : NUMCREDITO,PRODUCTO : PRODUCTO,NRODNI : NRODNI,CELULAR : CELULAR,MTOADICIONAL : MTODESEMBOLSADO,MTODESEMBOLSADO : MTODESEMBOLSADO,REPROGRAMACION : '',FECHADESEMBOLSO : FECHADESEMBOLSO,FECHAPROCESO : FECHAPROCESO,ENTIDADBANCARIA : ENTIDADBANCARIA,CARGATABLA : CARGATABLA ,SITUACION : TIPOCOBRO}, 
              success:function(data){               
              if(data == "[3]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
              }else if(data == '[]'){ 
                     Swal.fire('Agregada!','Se ha agregado a la socia','success') 
                     cerrarModal('#modalDABIM'); 
                }else if(data == '[{"Resultado":"1"}]'){ 
                     Swal.fire('Alerta','La socia ya existe','info') 
                     cerrarModal('#modalDABIM');
                     location.reload(); 
                }
              }    
      });
}

function GuardarBn(){
   var TIPOREGISTR =  document.getElementById('TIPOREGISTRO1').value;
   var FECHAPROCEB = document.getElementById('FECHAPROCEBN1').value;
   var TIPODESEMBOLS = document.getElementById('TIPODESEMBOLSO1').value;
    var NROCREPERSON = document.getElementById('NROCREPERSONA1').value;
    var NROCREDIT = document.getElementById('NUMCREDITO1').value;
    var CODSOCI = document.getElementById('CODSOCIA1').value;
    var APELLIDOSNOMBRE = document.getElementById('APELLIDOSNOMBRES1').value;
    var NRODN = document.getElementById('NRODNI1').value;
    var NROCICL = document.getElementById('NROCICLO1').value;
    var CODREGIO = document.getElementById('CODREGION1').value;
    var CODMONED = document.getElementById('CODMONEDA1').value;
    var CODENTIFINA = document.getElementById('CODENTIFINAN1').value;
    var TIPOCREDIT = '0';
    var MTOAPROBAD = document.getElementById('MTOAPROBADO1').value;
    var MTODESEMBOLSAD = document.getElementById('MTODESEMBOLSADO1').value;
    var SITUACIO = document.getElementById('SITUACION1').value;
    var NROSOLICITU = document.getElementById('NROSOLICITUD1').value;
    var FECHAREGISTR = document.getElementById('FECHAREGISTRO1').value;
    var FECHACREDIT = document.getElementById('FECHACREDITO1').value;
    var CODASOCIACIO = document.getElementById('CODASOCIACION1').value;
    var DESASOCIACIO = document.getElementById('DESASOCIACION1').value;
    var NROSOCI = document.getElementById('NROSOCIO1').value;
    var CARGATABL = document.getElementById('CARGATABLA1').value;
 
    $.ajax({url:"../../bd/Entidadfinanciera/GuardaDABn.php",
              type:"POST",
              datatype: "json",
              data:{FECHAPROCEBN : FECHAPROCEB,CODSOCIA : CODSOCI,APELLIDOSNOMBRES : APELLIDOSNOMBRE ,NRODNI : NRODN ,NROCICLO : NROCICL ,CODREGION : CODREGIO ,CODMONEDA : CODMONED ,CODENTIFINAN : CODENTIFINA ,TIPOCREDITO : TIPOCREDIT ,MTOAPROBADO : MTOAPROBAD ,MTODESEMBOLSADO : MTODESEMBOLSAD ,SITUACION : SITUACIO ,FECHAREGISTRO : FECHAREGISTR ,FECHACREDITO : FECHACREDIT ,CODASOCIACION : CODASOCIACIO,DESASOCIACION : DESASOCIACIO ,NROSOCIO : NROSOCI ,CARGATABLA : CARGATABL},
              success:function(data){       
                let datos = JSON.parse(data);        
                console.log(datos[0].Resultado);
              if(datos[0].Resultado == "3" ){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
              }else if(datos[0].Resultado == "2"){ 
                     Swal.fire('Agregada!','Se ha agregado a la socia','success')                       
                    location.reload();
                }else if(data == "1"){ 
                     Swal.fire('Alerta','La socia ya existe','info')                       
                     location.reload();
                }
              }    
      });
}

function InsertaSociaBD(){
    Swal.fire({title: 'Esta seguro de Insertar a la Socia?',
      text: "Es un proceso muy importante",icon: 'warning',showCancelButton: true,confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',confirmButtonText: 'Si'}).then((result) => {
    if (result.value) {
    var TIPOREGISTRO3 =  document.getElementById('TIPOREGISTRO2').value;
    var FECHAPROCEBN3 = document.getElementById('FECHAPROCEBN2').value;
    var TIPODESEMBOLSO3 = document.getElementById('TIPODESEMBOLSO2').value;
    var NROCREPERSONA3 = document.getElementById('NROCREPERSONA2').value;
    var NROCREDITO3 = document.getElementById('NUMCREDITO2').value;
    var CODSOCIA3 = document.getElementById('CODSOCIA2').value;
    var APELLIDOSNOMBRES3 = document.getElementById('APELLIDOSNOMBRES2').value;
    var NRODNI3 = document.getElementById('NRODNI2').value;
    var NROCICLO3 = document.getElementById('NROCICLO2').value;
    var CODREGION3 = document.getElementById('CODREGION2').value;
    var CODMONEDA3 = document.getElementById('CODMONEDA2').value;
    var CODENTIFINAN3 = document.getElementById('CODENTIFINAN2').value;
    var TIPOCREDITO3 = '0';
    var MTOAPROBADO3 = document.getElementById('MTOAPROBADO2').value;
    var MTODESEMBOLSADO3 = document.getElementById('MTODESEMBOLSADO2').value;
    var SITUACION3 = document.getElementById('SITUACION2').value;
    var NROSOLICITUD3 = document.getElementById('NROSOLICITUD2').value;
    var FECHAREGISTRO3 = document.getElementById('FECHAREGISTRO2').value;
    var FECHACREDITO3 = document.getElementById('FECHACREDITO2').value;
    var CODASOCIACION3 = document.getElementById('CODASOCIACION2').value;
    var DESASOCIACION3 = document.getElementById('DESASOCIACION2').value;
    var NROSOCIO3 = document.getElementById('NROSOCIO2').value;
    var CARGATABLA3 = document.getElementById('CARGATABLA2').value;
 
    $.ajax({url:"../../bd/Entidadfinanciera/InsertSociaManualBD_insert.php",
              type:"POST",
              datatype: "json",
              data:{FECHAPROCEBN : FECHAPROCEBN3,CODSOCIA : CODSOCIA3, APELLIDOSNOMBRES : APELLIDOSNOMBRES3, NRODNI : NRODNI3, NROCICLO : NROCICLO3 , CODREGION : CODREGION3, CODMONEDA : CODMONEDA3, CODENTIFINAN : CODENTIFINAN3, TIPOCREDITO : TIPOCREDITO3, MTOAPROBADO : MTOAPROBADO3, MTODESEMBOLSADO : MTODESEMBOLSADO3 , SITUACION : SITUACION3 , FECHAREGISTRO : FECHAREGISTRO3 , FECHACREDITO : FECHACREDITO3 , CODASOCIACION : CODASOCIACION3 , DESASOCIACION : DESASOCIACION3 , NROSOCIO : NROSOCIO3 , NROCREPERSONA : NROCREPERSONA3  }, 
              success:function(data){               
              if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
              }else{ 
                     Swal.fire('Agregada!','Se ha agregado a la socia','success') 
                     cerrarModal('#modalInsertBN'); 
                     location.reload();
                }
              }    
      });

     }

              })
}
$(document).ready(
  Cargar()
);

function Cargar(){
   $("#fechaInicio").prop("disabled", true);
   $("#fechafin").prop("disabled", true); 
   $("#MESAÑO").prop("disabled", true);   
   $("#ComboBoxRegion").prop("disabled", true);
}

function destruir(table){
    $(table).dataTable().fnClearTable();
    $(table).dataTable().fnDestroy();
 }

$("#tipoindicadores").change( function() {
  var Report01 = document.getElementById("report01");
  var Report02 = document.getElementById("report02");
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            Report01.style.display = "block";    
            Report02.style.display = "none";                     
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);  
            Report01.style.display = "none";    
            Report02.style.display = "block";                        
        } else if ($(this).val() === "0") {         
            Cargar();             
            Report01.style.display = "none";    
            Report02.style.display = "none";            
        }
});


 
$(document).on("click", "#Btn_Ejecutar_ReportesIndicadores", function (e){
        var fecha1 = $("[name='fechaInicio']").val();
        var fecha2 = $("[name='fechafin']").val();
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tipoindicadores'] option:selected").val();
        if(Reporte == "1"){          
           if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
              }else{
                Report01(fecha1,fecha2,region);   
              }
        }else if(Reporte == "2"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
              }else{                
                Report02(fecha,region);    
              }
        }else{
           Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});


function Report01(fecha1,fecha2,region1) {
   // // Invoca Al modal y no permite cerrarlo
   // $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
   //  //Agrega la imagen de carga
   // $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller = "../../bd/Indicadores/ReportIndiGeneral03_01.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report01-table').DataTable({
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        bLengthChange: false,
        destroy: true,
        bFilter: true,
        processing: true,
        bInfo: true,buttons:[ 
                   {
        extend:    'excelHtml5',
        text:      '<i class="fas fa-file-excel"></i> ',
        titleAttr: 'Exportar a Excel',
        footer: true,
        title: name_xlsx,
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
              "data": {"fechaInicio":fecha1,"fechafinal":fecha2,"region":region1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "GESTION"},
        {"data" : "CODSUCURSAL"},
        {"data" : "DESGESTION"},
        {"data" : "TIPOASOCIACION"},
        {"data" : "NRO_CREDITOS"},
        {"data" : "TOTAL_DSBS",
            render: function ( data, type, row) {
            let to = (row.TOTAL_DSBS).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.TOTAL_DSBS; 
            }else{
            tot = row.TOTAL_DSBS;
            }
            return tot;
            }
         },
        {"data" : "NROSOCIASNUEVAS"},
        {"data" : "SUMADSBNUEVAS",
         render: function ( data, type, row) {
            let to = (row.SUMADSBNUEVAS).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SUMADSBNUEVAS; 
            }else{
            tot = row.SUMADSBNUEVAS;
            }
            return tot;
            }
        }     
        ],
               pagingType: "simple"
               // //Finaiza la carga del Ajax
               // initComplete :function(settings, json){
               //    $("#modal-default-1").modal("hide");
               // }  
      });
}

function Report02(fecha1,region1) {
   // // Invoca Al modal y no permite cerrarlo
   // $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
   //  //Agrega la imagen de carga
   // $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller = "../../bd/Indicadores/ReportIndiGeneral03_02.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report02-table').DataTable({
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        bLengthChange: false,
        destroy: true,
        processing: true,
        bFilter: true,
        bInfo: true,buttons:[ 
                   {
        extend:    'excelHtml5',
        text:      '<i class="fas fa-file-excel"></i> ',
        titleAttr: 'Exportar a Excel',
        footer: true,
        title: name_xlsx,
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
              "data": {"fecha":fecha1,"region":region1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [ 
        {"data" : "CLASE_SOC"},
        {"data" : "CODSUCURSAL_CRE"},
        {"data" : "TIPOASOCIACION"},
        {"data" : "FLAGNUEVO"},
        {"data" : "CANT"},
        {"data" : "TOT_DESEMB",
            render: function ( data, type, row) {
            let to = (row.TOT_DESEMB).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.TOT_DESEMB; 
            }else{
            tot = row.TOT_DESEMB;
            }
            return tot;
            }
         }  
        ],
               pagingType: "simple"
               // //Finaiza la carga del Ajax
               // initComplete :function(settings, json){
               //    $("#modal-default-1").modal("hide");
               // }  
      });
}


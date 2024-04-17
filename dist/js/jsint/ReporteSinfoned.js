$(document).ready(Cargar());

function Cargar(){
  $("#fechaInicio").prop("disabled", true);
  $("#fechafin").prop("disabled", true); 
  $("#MESAÑO").prop("disabled", true);   
  $("#tipocambio").prop("disabled", true);   
  $("#ComboBoxRegion").prop("disabled", true);
}

function destruir(table){
  $(table).dataTable().fnClearTable();
  $(table).dataTable().fnDestroy();
}

$("#ComboBox").change( function() {
        if ($(this).val() === "1") {            
            $("#tipocambio").prop("disabled", false);             
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);  
            document.getElementById("Reporte01_contenido").style.display = "block";
            document.getElementById("Reporte02_contenido").style.display = "none";
            document.getElementById("Reporte03_contenido").style.display = "none";  
        }else if ($(this).val() === "2") { 
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);                
            document.getElementById("Reporte01_contenido").style.display = "none";
            document.getElementById("Reporte02_contenido").style.display = "block";
            document.getElementById("Reporte03_contenido").style.display = "none";            
        }else if ($(this).val() === "3") { 
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            document.getElementById("Reporte01_contenido").style.display = "none";
            document.getElementById("Reporte02_contenido").style.display = "none";
            document.getElementById("Reporte03_contenido").style.display = "block";            
        } else if ($(this).val() === "0") {         
            Cargar();
            document.getElementById("Reporte01_contenido").style.display = "none";
            document.getElementById("Reporte02_contenido").style.display = "none";
            document.getElementById("Reporte03_contenido").style.display = "none"; 
        }
});


$(document).on("click", "#Btn_Ejecutar_ReportesSinfoned", function (e){ 
        var Reporte = $("select[name='tiporeporte'] option:selected").val();  
        var fecha1 = $("[name='fechaInicio']").val();
        var fecha2 = $("[name='fechafin']").val();
        var tipocambio = $("[name='tipocambio']").val();
        if(Reporte == "1"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else  {                 
                Report01(fecha1,fecha2,tipocambio);   
              }
        }else if(Reporte == "2"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else  {
              Report02(fecha1,fecha2);   
            }
        }else if(Reporte == "3"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else  {                 
              Report03(fecha1,fecha2);     
            }
        }else{
          Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});


function Report01(fecha1,fecha2,tipocambio) {
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller = "../../bd/Sinfoned/ReportSinfoned_01.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report01-tabla").DataTable({
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        bLengthChange: false,
        destroy: true,
        bFilter: true,
        responsive: true,
        autowidth: false,
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
              "data": {"fechaInicio":fecha1,"fechafinal":fecha2,"tipocambio":tipocambio},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "TIPO",
          render: function ( data, type, row) {
          let to = row.TIPO; 
          let tot = "";
            if(to == "AG"){
              tot = "Anillo Grupales"; 
            }else if(to == "BC"){
              tot = "Banco Comunal"; 
            }else if(to == "CP"){
              tot = "Creditos Paralelos"; 
            }else if(to == "IA"){
              tot = "Anillos Individuales"; 
            }
              return tot;
          }
        },
        {"data" : "TOTAL"}, 
        {"data" : "SUMADESEMBOLSOS",
            render: function ( data, type, row) {
            let to = (row.SUMADESEMBOLSOS).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SUMADESEMBOLSOS; 
            }else{
            tot = row.SUMADESEMBOLSOS;
            }
            return tot;
            }
          },
        {"data" : "DSB_ENTRE_0_400"},
        {"data" : "MDESEMBOLSO_0_400",
            render: function ( data, type, row) {
            let to = (row.MDESEMBOLSO_0_400).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMBOLSO_0_400; 
            }else{
            tot = row.MDESEMBOLSO_0_400;
            }
            return tot;
            }
          },
        {"data" : "DSB_ENTRE_401_1000"},
        {"data" : "MDESEMBOLSO_401_1000",
            render: function ( data, type, row) {
            let to = (row.MDESEMBOLSO_401_1000).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMBOLSO_401_1000; 
            }else{
            tot = row.MDESEMBOLSO_401_1000;
            }
            return tot;
            }
          },
        {"data" : "DSB_ENTRE_1001_3000"},
        {"data" : "MDESEMBOLSO_1001_3000",
            render: function ( data, type, row) {
            let to = (row.MDESEMBOLSO_1001_3000).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMBOLSO_1001_3000; 
            }else{
            tot = row.MDESEMBOLSO_1001_3000;
            }
            return tot;
            }
          },
        {"data" : "DSB_MAYOR_3000"},
        {"data" : "MDESEMBOLSO_3000",
            render: function ( data, type, row) {
            let to = (row.MDESEMBOLSO_3000).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMBOLSO_3000; 
            }else{
            tot = row.MDESEMBOLSO_3000;
            }
            return tot;
            }
          },
        {"data" : "PZOS_0_4"},
        {"data" : "MDESEMB_PZOS_0_4",
            render: function ( data, type, row) {
            let to = (row.MDESEMB_PZOS_0_4).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMB_PZOS_0_4; 
            }else{
            tot = row.MDESEMB_PZOS_0_4;
            }
            return tot;
            }
          },
        {"data" : "PZOS_5_12"},
        {"data" : "MDESEMB_PZOS_5_12",
            render: function ( data, type, row) {
            let to = (row.MDESEMB_PZOS_5_12).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMB_PZOS_5_12; 
            }else{
            tot = row.MDESEMB_PZOS_5_12;
            }
            return tot;
            }
          },
        {"data" : "PZOS_13_24"},
        {"data" : "MDESEMB_PZOS_13_24",
            render: function ( data, type, row) {
            let to = (row.MDESEMB_PZOS_13_24).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMB_PZOS_13_24; 
            }else{
            tot = row.MDESEMB_PZOS_13_24;
            }
            return tot;
            }
          },
        {"data" : "PZOS_MAYOR_24"},
        {"data" : "MDESEMB_PZOS_MAYOR_24",
            render: function ( data, type, row) {
            let to = (row.MDESEMB_PZOS_MAYOR_24).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MDESEMB_PZOS_MAYOR_24; 
            }else{
            tot = row.MDESEMB_PZOS_MAYOR_24;
            }
            return tot;
            }
          }            
        ],
        pagingType: "simple",
        //Finaiza la carga del Ajax
        initComplete :function(settings, json){
          $("#modal-default-1").modal("hide");
        } 
      });
}///ok

function Report02(fecha1,fecha2) {
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller = "../../bd/Sinfoned/ReportSinfoned_02.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report02-tabla")
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
              "data": {"fechaInicio":fecha1,"fechafinal":fecha2},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
          {"data" : "TIPOASOC",
          render: function ( data, type, row) {
          let to = row.TIPOASOC; 
          let tot = "";
            if(to == "AG"){
              tot = "Anillo Grupales"; 
            }else if(to == "BC"){
              tot = "Banco Comunal"; 
            }else if(to == "CP"){
              tot = "Creditos Paralelos"; 
            }else if(to == "IA"){
              tot = "Anillos Individuales"; 
            }
              return tot;
          }
          },
          {"data" : "SECECO",
          render: function ( data, type, row) {
          let to = row.SECECO; 
          let tot = "";
            if(to == "COM"){
              tot = "Comercio"; 
            }else if(to == "SER"){
              tot = "Servicios"; 
            }else if(to == "PRO"){
              tot = "PRODUCCION"; 
            }else if(to == "AGR"){
              tot = "AGROPECUARIO"; 
            }
              return tot;
          }
          },    
          {"data" : "CODMONEDA"},
          {"data" : "CANTIDAD"},    
          {"data" : "TOT_DESEMBOLSO",
            render: function ( data, type, row) {
            let to = (row.TOT_DESEMBOLSO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
              tot = 0+row.TOT_DESEMBOLSO; 
            }else{
              tot = row.TOT_DESEMBOLSO;
            }
              return tot;
            }
          }       
        ],
        pagingType: "simple",
        //Finaiza la carga del Ajax
        initComplete :function(settings, json){
          $("#modal-default-1").modal("hide");
        }  
      });
}

function Report03(fecha1,fecha2) {
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller = "../../bd/Sinfoned/ReportSinfoned_03.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report03-tabla")
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
              "data": {"fechaInicio":fecha1,"fechafinal":fecha2},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
          {"data" : "SEXO"},    
          {"data" : "TIPOASOC",
          render: function ( data, type, row) {
          let to = row.TIPOASOC; 
          let tot = "";
            if(to == "AG"){
              tot = "Anillo Grupales"; 
            }else if(to == "BC"){
              tot = "Banco Comunal"; 
            }else if(to == "CP"){
              tot = "Creditos Paralelos"; 
            }else if(to == "IA"){
              tot = "Anillos Individuales"; 
            }
              return tot;
          }
          }, 
          {"data" : "CODMONEDA",
          render: function ( data, type, row) {
          let to = row.CODMONEDA; 
          let tot = "";
            if(to == "01"){
              tot = "Nuevos Soles"; 
            } 
              return tot;
          }
          }, 
          {"data" : "CANTIDAD"},    
          {"data" : "montodesembolsoS"},    
        ],
        pagingType: "simple",
        //Finaiza la carga del Ajax
        initComplete :function(settings, json){
          $("#modal-default-1").modal("hide");
        } 
      });
} // ok

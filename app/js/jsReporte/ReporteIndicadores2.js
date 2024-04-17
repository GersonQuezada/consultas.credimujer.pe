/*$(document).ready(
  Cargar()
);

function Cargar(){
   $("#fechaInicio").prop("disabled", true);
   $("#fechafin").prop("disabled", true); 
      $("#MESAÑO").prop("disabled", true);   
   $("#ComboBoxRegion").prop("disabled", true);
}



$("#tipoindicadores").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true);
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", false);
            $('#report01').show(); 
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');
            $('#report05').hide();
            destruir('#report05');   
            $('#report06').hide();
            destruir('#report06');         
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true);
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", false); 
            $('#report02').show(); 
            $('#report01').hide();
            destruir('#report01');
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');
            $('#report05').hide();
            destruir('#report05');   
            $('#report06').hide();
            destruir('#report06');            
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);  
            $('#report03').show(); 
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report05').hide();
            destruir('#report05');   
            $('#report06').hide();
            destruir('#report06');           
        }else if ($(this).val() === "4") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true);
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", false);  
            $('#report04').show(); 
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');
            $('#report01').hide();
            destruir('#report01');
            $('#report05').hide();
            destruir('#report05');   
            $('#report06').hide();
            destruir('#report06');          
        }else if ($(this).val() === "5") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);  
            $('#report05').show(); 
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');   
            $('#report06').hide();
            destruir('#report06');         
        }else if ($(this).val() === "6") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true);
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", false);  
            $('#report06').show(); 
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');
            $('#report01').hide();
            destruir('#report01');
            $('#report05').hide();
            destruir('#report05');   
            $('#report04').hide();
            destruir('#report04');          
        } else if ($(this).val() === "0") {         
            Cargar();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');
            $('#report05').hide();
            destruir('#report05');
            $('#report06').hide();
            destruir('#report06'); 
        }
});
*/
function destruir(table){
  $(table).dataTable().fnClearTable();
$(table).dataTable().fnDestroy();
}
 

  function ReportesIndicadores2(){
        var fecha1 = $("[name='fechaInicio']").val();
        var fecha2 = $("[name='fechafin']").val();
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tipoindicadores'] option:selected").val();
        if(Reporte == "1"){          
           if(fecha2.length == ""){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else{
                Report01(fecha2);       
                $('#report01').show();  
              }
        }else if(Reporte == "2"){
            if(fecha2.length == ""){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else{
                Report02(fecha2);       
                $('#report02').show();   
              }
        }else if(Reporte == "3"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
              }else{
                Report03(fecha1,fecha2,region);    
                 $('#report03').show();   
              }

        }else if(Reporte == "4"){
            if(fecha2.length == ""){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else{
                Report04(fecha2);    
                 $('#report04').show();  
              }

        }else if(Reporte == "5"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
              }else{
                Report05(fecha1,fecha2,region);    
                 $('#report05').show();   
              }

        }else if(Reporte == "6"){
              Report06();    
              $('#report06').show();   
             
        }else{
           Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

};


function Report01(fecha1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral02_01.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report01').DataTable({
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
        "url": "../../../js/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechafinal":fecha1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "CODAGENCIA_CRE"},
        {"data" : "CODPROMOTORA"},
        {"data" : "NOMPROMOTORA"},
        {"data" : "CODMONEDA"},
        {"data" : "TIPOASOCIACION"},
        {"data" : "NROXASOC"},
        {"data" : "NROCREXSOCIA"},
        {"data" : "SALDOCREDITO",
            render: function ( data, type, row) {
            let to = (row.SALDOCREDITO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SALDOCREDITO; 
            }else{
            tot = row.SALDOCREDITO;
            }
            return tot;
            }
         }      
        ],
               pagingType: "simple" 
      });
}

function Report02(fecha1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral02_02.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report02').DataTable({
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
        "url": "../../../js/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechafinal":fecha1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "CODSUCURSAL_ASOC"},
        {"data" : "TIPOPRODUCTO"},
        {"data" : "NRO_ASOCIACIONES"}       
        ],
               pagingType: "simple" 
      });
}
 
function Report03(fecha1,fecha2,region1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral02_03.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report03').DataTable({
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
        "url": "../../../js/Spanish.js",
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
        {"data" : "CODSUCURSAL_CRE"},
        {"data" : "TIPOPRODUCTO"},         
        {"data" : "NRO_COLOCACIONES"},
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
        {"data" : "NRO_NUEVOS"},
        {"data" : "SUMADESEMBOLSOS_NUEVOS",
         render: function ( data, type, row) {
            let to = (row.SUMADESEMBOLSOS_NUEVOS).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SUMADESEMBOLSOS_NUEVOS; 
            }else{
            tot = row.SUMADESEMBOLSOS_NUEVOS;
            }
            return tot;
            }
        },
        {"data" : "FECHAINICIO"},
        {"data" : "FECHAFINAL"},
        ],
               pagingType: "simple" 
      });
}

function Report04(fecha1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral02_04.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report04').DataTable({
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
        "url": "../../../js/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechafinal":fecha1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "CODSUCURSAL_ASOC"},
        {"data" : "TIPOPRODUCTO"},
        {"data" : "ESTADO_DE_ASOC"},
        {"data" : "NRO_ASOC"}       
        ],
               pagingType: "simple" 
      });
}

function Report05(fecha1,fecha2,region1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral02_05.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report05').DataTable({
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
        "url": "../../../js/Spanish.js",
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
        {"data" : "CODSUCURSAL_ASOC"},
        {"data" : "TIPOPRODUCTO"},         
        {"data" : "AGRUPADO"},
        {"data" : "ESTADO_DE_ASOC"},
        {"data" : "NRO_ASOC"},
        {"data" : "FECHAINICIO"},
        {"data" : "FECHAFINAL"} 
        ],
               pagingType: "simple" 
      });
}

function Report06() {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral02_06.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report06').DataTable({
        dom:  "<''row<''f><''i><B>>rtp",
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
        "url": "../../../js/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "CODSUCURSAL_CRE"},
        {"data" : "CODASOCIACION"},
        {"data" : "TIPOASOCIACION"},
        {"data" : "DESASOCIACION"},
        {"data" : "FECHAULTDESEMBOLSO"},
        {"data" : "FECHASALIDA"}       
        ],
               pagingType: "simple" 
      });
}
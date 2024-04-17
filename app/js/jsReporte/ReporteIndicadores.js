function destruir(table){
      $(table).dataTable().fnClearTable();
    $(table).dataTable().fnDestroy();
 }

function ReportesIndicadores1(){
   var fecha1 = $("[name='fechaInicio']").val();
   var fecha2 = $("[name='fechafin']").val();
   var fecha = $("[name='MESAÑO']").val();
   var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
   var Reporte = $("select[name='tipoindicadores'] option:selected").val();
   if(Reporte == "1"){          
      if(fecha2 < fecha1){
         Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
       }else if(region == 0){
           Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
         }else{
           Report01(fecha1,fecha2,region);      
           Report01_resumen(fecha1,fecha2,region);
           $('#CardResumen').show();
           $('#report01-Contenido').show();   
           $('#report01-Resumen').show();
           
         }
   }else if(Reporte == "2"){
       if(fecha2 < fecha1){
         Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
       }else if(region == 0){
           Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})

         }else{
           // var post = { fecha: fecha, region: cbx}
           Report02(fecha1,fecha2,region);   
            $('#report02').show();   
         }
   }else if(Reporte == "3"){
       if(fecha2.length == ""){
           Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
         }else{
           Report03(fecha2);    
            $('#report03').show();   
         }

   }else if(Reporte == "4"){
       if(fecha2.length == ""){
           Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
         }else{
            $('#CardResumen').show();
           Report04(fecha2);    
            $('#report04-Contenido').show();   
            Report04_resumen(fecha2);
            $('#report04-Resumen').show();   
         }

   }else{
      Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
   }      

}

function Report01(fecha1,fecha2,region1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral01_01.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report01-Contenido').DataTable({
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
        {"data" : "NRO_CREDITOS"},
        {"data" : "PROMEDIO_DSBS",
         render: function ( data, type, row) {
            let to = (row.PROMEDIO_DSBS).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.PROMEDIO_DSBS; 
            }else{
            tot = row.PROMEDIO_DSBS;
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
        },
        {"data" : "PROMEDIONUEVAS_DSBS"}      
        ],
               pagingType: "simple" 
      });
}

function Report01_resumen(fecha1,fecha2,region1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral01_01Resu.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report01-Resumen').DataTable({
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
        {"data" : "TIPOPRODUCTO"},
        {"data" : "NRO_COLOCACIONES"},
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
        {"data" : "NRO_CREDITOS"},
        {"data" : "PROMEDIO_DSBS",
         render: function ( data, type, row) {
            let to = (row.PROMEDIO_DSBS).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.PROMEDIO_DSBS; 
            }else{
            tot = row.PROMEDIO_DSBS;
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
      });
}

function Report02(fecha1,fecha2,region1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral01_02.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report02').DataTable({
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
        {"data" : "ESTADO"},
        {"data" : "CODSUCURSAL_CRE"},
        {"data" : "TIPOASOCIACION"},
        {"data" : "NROSOCIAS"}     
        ],
               pagingType: "simple" 
      });
}

function Report03(fecha1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral01_03.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report03').DataTable({
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
        {"data" : "TIPOASOCIACION"},
        {"data" : "NRO_CREDITOS"},
        {"data" : "NROCREXSOCIAS"},
        {"data" : "MONTOPROGRAMADO",
            render: function ( data, type, row) {
            let to = (row.MONTOPROGRAMADO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOPROGRAMADO; 
            }else{
            tot = row.MONTOPROGRAMADO;
            }
            return tot;
            }
         },
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
         },
         {"data" : "MONTOEJECUTADO",
            render: function ( data, type, row) {
            let to = (row.MONTOEJECUTADO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOEJECUTADO; 
            }else{
            tot = row.MONTOEJECUTADO;
            }
            return tot;
            }
         },
         {"data" : "PROMDIO_SALDOCREDITO",
            render: function ( data, type, row) {
            let to = (row.PROMDIO_SALDOCREDITO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.PROMDIO_SALDOCREDITO; 
            }else{
            tot = row.PROMDIO_SALDOCREDITO;
            }
            return tot;
            }
         }      
        ],
               pagingType: "simple" 
      });
} 

function Report04(fecha1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral01_04.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report04-Contenido').DataTable({
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
        {"data" : "TIPOASOCIACION"},
        {"data" : "NRO_CREDITOS"},
        {"data" : "NROCREXSOCIAS"},
        {"data" : "MONTOPROGRAMADO",
            render: function ( data, type, row) {
            let to = (row.MONTOPROGRAMADO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOPROGRAMADO; 
            }else{
            tot = row.MONTOPROGRAMADO;
            }
            return tot;
            }
         },
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
         },
         {"data" : "MONTOEJECUTADO",
            render: function ( data, type, row) {
            let to = (row.MONTOEJECUTADO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOEJECUTADO; 
            }else{
            tot = row.MONTOEJECUTADO;
            }
            return tot;
            }
         },
         {"data" : "PROMDIO_SALDOCREDITO",
            render: function ( data, type, row) {
            let to = (row.PROMDIO_SALDOCREDITO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.PROMDIO_SALDOCREDITO; 
            }else{
            tot = row.PROMDIO_SALDOCREDITO;
            }
            return tot;
            }
         }             
        ],
               pagingType: "simple" 
      });
} 

function Report04_resumen(fecha1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiGeneral01_04Resu.php";// URL
  var name_xlsx = $('select[name="tipoindicadores"] option:selected').text(); 
  var table = $('#report04-Resumen').DataTable({
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
        {"data" : "TIPOPRODUCTO"},
        {"data" : "NROCREXASOC"},
        {"data" : "NROCREXSOCIA"},
        {"data" : "MONTOPROGRAMADO",
            render: function ( data, type, row) {
            let to = (row.MONTOPROGRAMADO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOPROGRAMADO; 
            }else{
            tot = row.MONTOPROGRAMADO;
            }
            return tot;
            }
         },
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
         },
         {"data" : "MONTOEJECUTADO",
            render: function ( data, type, row) {
            let to = (row.MONTOEJECUTADO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOEJECUTADO; 
            }else{
            tot = row.MONTOEJECUTADO;
            }
            return tot;
            }
         }    
        ],
               pagingType: "simple" 
      });
}


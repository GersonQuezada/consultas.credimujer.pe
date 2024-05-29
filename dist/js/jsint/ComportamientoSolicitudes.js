 
function Ejecutar_ReportesSolicitudes(){   
    var fecha = $("[name='MESAÑO']").val();
    var region   = $("select[name='ComboBoxRegion1'] option:selected").val();   
    var Reporte = $("select[name='tiporeporte'] option:selected").val();
    var fecha1 = $("[name='fechaInicio1']").val();
    var fecha2 = $("[name='fechafin1']").val();
    var fecha3 = $("[name='fechaInicio2']").val();
    var fecha4 = $("[name='fechafin2']").val();
    if(Reporte == "1"){
        if(fecha2 < fecha1){
          swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
        }else if(region == 0){
            swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
        }else{
          Report01(region,fecha1,fecha2);           
          Report02(region,fecha1,fecha2); 
          $('#report01').show();  
          $('#report02').show();
        }       
    }else if(Reporte == "2"){
        if(fecha2 < fecha1){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
        }else if(region == 0){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
        }else if(fecha.length == ""){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una Periodo'})
        }else{   
          Report03(fecha1,fecha2,region,fecha); 
          $('#report03').show();   
        }       
    }else if(Reporte == "3"){
        if(fecha2 < fecha1){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
        }else if(region == 0){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
        }else if(fecha4 < fecha3){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio desembolso no puede ser mayor a fecha final desembolso'})
        }else{   
          Report04(fecha1,fecha2,fecha3,fecha4,region); 
          $('#report04').show();   
        }       
    }else{
       Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
    }      

}


$("#ComboReportes").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion1").prop("disabled", false); 
            $("#fechaInicio1").prop("disabled", false);
            $("#fechafin1").prop("disabled", false);
            $("#fechaInicio2").prop("disabled", true);
            $("#fechafin2").prop("disabled", true);  
            $('#report01').show(); 
            $('#report02').show();
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');  
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion1").prop("disabled", false); 
            $("#fechaInicio1").prop("disabled", false);
            $("#fechafin1").prop("disabled", false);
            $("#fechaInicio2").prop("disabled", true);
            $("#fechafin2").prop("disabled", true);                  
            $('#report03').show();
            $('#report01').hide();
            destruir('#report01');
            $('#report02').hide();
            destruir('#report02');
            $('#report04').hide();
            destruir('#report04');            
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion1").prop("disabled", false); 
            $("#fechaInicio1").prop("disabled", false);
            $("#fechafin1").prop("disabled", false);
            $("#fechaInicio2").prop("disabled", false);
            $("#fechafin2").prop("disabled", false);                 
            $('#report04').show();
            $('#report01').hide();
            destruir('#report01');
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');            
        }else if ($(this).val() === "0") {         
            Cargar();
            $('#report01').hide();
            destruir('#report01'); 
            $('#report02').hide();
            destruir('#report02'); 
        }
});

function Report01(region,fecha1,fecha2) {
 
    var controller = "../../bd/Solicitudes/ReporteSolicitudes.php";// URL
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  

    var table = $("#report01").DataTable({ 
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        pageLength: 5,
        order: [[ 1, "asc" ]],
        bLengthChange: false,
        destroy: true,
        bFilter: true,        
        processing: true,
        responsive: true,
        autowidth: false,
        bInfo: true,        
        createdRow: function( row, data, dataIndex ) {
             if ( data.TIPOASOCIACION == "TOTAL" ) {        
                 $(row).addClass('red');    
            }
            // console.log(data.TIPOASOCIACION)
        } ,
        buttons:[ 
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
       customize: function(win)
            {
 
                var last = null;
                var current = null;
                var bod = [];
 
                var css = '@page { size: landscape; }',
                    head = win.document.head || win.document.getElementsByTagName('head')[0],
                    style = win.document.createElement('style');
 
                style.type = 'text/css';
                style.media = 'print';
 
                if (style.styleSheet)
                {
                  style.styleSheet.cssText = css;
                }
                else
                {
                  style.appendChild(win.document.createTextNode(css));
                }
 
                head.appendChild(style);
         },
       title: name_xlsx,
       className: 'btn btn-info'
                   },
                 ],
      "language": {
                "url": "../../plugins/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"region":region,"fecha1":fecha1,"fecha2":fecha2},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },
       columns:
        [
        {"data" : "FECHACHAR"},        
        {"data" : "NOMBREREGION"},        
        {"data" : "TIPOASOCIACION"},
        {"data" : "DESASOCIACION"},        
        {"data" : "TIPOPRESTAMO"},        
        {"data" : "BANCONACION",
            render: function ( data, type, row) {
            let to = (row.BANCONACION).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.BANCONACION; 
            }else{
            tot = row.BANCONACION;
            }
            return tot;
            }
        },
        {"data" : "BANCOCREDITO",
            render: function ( data, type, row) {
            let to = (row.BANCOCREDITO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.BANCOCREDITO; 
            }else{
            tot = row.BANCOCREDITO;
            }
            return tot;
            }
        },
        {"data" : "BIM",
            render: function ( data, type, row) {
            let to = (row.BIM).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.BIM; 
            }else{
            tot = row.BIM;
            }
            return tot;
            }
        },
          {"data" : "CAJAPIURA",
            render: function ( data, type, row) {
            let to = (row.CAJAPIURA).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CAJAPIURA; 
            }else{
            tot = row.CAJAPIURA;
            }
            return tot;
            }
        },
        {"data" : "CAJATRUJILLO",
            render: function ( data, type, row) {
            let to = (row.CAJATRUJILLO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CAJATRUJILLO; 
            }else{
            tot = row.CAJATRUJILLO;
            }
            return tot;
            }
         },
         {"data" : "Coop_SanMartin",
            render: function ( data, type, row) {
            let to = (row.Coop_SanMartin).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.Coop_SanMartin; 
            }else{
            tot = row.Coop_SanMartin;
            }
            return tot;
            }
         },
        {"data" : "FECHADESEMBOLSO"},
        {"data" : "EFECTIVO",
            render: function ( data, type, row) {
            let to = (row.EFECTIVO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.EFECTIVO; 
            }else{
            tot = row.EFECTIVO;
            }
            return tot;
            }
         }              
        ],
        pagingType: "simple"  
        
    }); 
}///ok

function Report02(region,fecha1,fecha2) {    
    var controller = "../../bd/Solicitudes/ReporteSolicitudesResumen.php";// URL
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  

    var table = $("#report02").DataTable({ 
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        bLengthChange: false,
        destroy: true,
        bFilter: true,
        responsive: true,        
        processing: true,
        autowidth: false,
        bInfo: true,  
        buttons:[ 
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
       customize: function(win)
            {
 
                var last = null;
                var current = null;
                var bod = [];
 
                var css = '@page { size: landscape; }',
                    head = win.document.head || win.document.getElementsByTagName('head')[0],
                    style = win.document.createElement('style');
 
                style.type = 'text/css';
                style.media = 'print';
 
                if (style.styleSheet)
                {
                  style.styleSheet.cssText = css;
                }
                else
                {
                  style.appendChild(win.document.createTextNode(css));
                }
 
                head.appendChild(style);
         },
       title: name_xlsx,
       className: 'btn btn-info'
                   },
                 ],
    language: {
                url: "../../plugins/Spanish.js",
            },
    ajax:{
              "cache": false,
              "method":"POST",
              "data": {"region":region,"fecha1":fecha1,"fecha2":fecha2},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },
    columns:
        [        
        {"data" : "NOMBREREGION"},        
        {"data" : "BANCONACION",
            render: function ( data, type, row) {
            let to = (row.BANCONACION).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.BANCONACION; 
            }else{
            tot = row.BANCONACION;
            }
            return tot;
            }},        
        {"data" : "BANCOCREDITO",
            render: function ( data, type, row) {
            let to = (row.BANCOCREDITO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.BANCOCREDITO; 
            }else{
            tot = row.BANCOCREDITO;
            }
            return tot;
            }},        
        {"data" : "BIM",
            render: function ( data, type, row) {
            let to = (row.BIM).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.BIM; 
            }else{
            tot = row.BIM;
            }
            return tot;
            }},        
        {"data" : "CAJAPIURA",
            render: function ( data, type, row) {
            let to = (row.CAJAPIURA).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CAJAPIURA; 
            }else{
            tot = row.CAJAPIURA;
            }
            return tot;
            }},        
        {"data" : "CAJATRUJILLO",
            render: function ( data, type, row) {
            let to = (row.CAJATRUJILLO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CAJATRUJILLO; 
            }else{
            tot = row.CAJATRUJILLO;
            }
            return tot;
            }},
            {"data" : "Coop_SanMartin",
            render: function ( data, type, row) {
            let to = (row.Coop_SanMartin).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.Coop_SanMartin; 
            }else{
            tot = row.Coop_SanMartin;
            }
            return tot;
            }
         },        
        {"data" : "Efectivo",
            render: function ( data, type, row) {
            let to = (row.Efectivo).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.Efectivo; 
            }else{
            tot = row.Efectivo;
            }
            return tot;
            }},        
          
        ],
    drawCallback:function(){
                     // alert("La tabla se está recargando"); 
                      var api = this.api();
                      $(api.column(0).footer()).html(
                          'Total:'
                      )
                      $(api.column(1).footer()).html(
                          api.column(1, {page:'current'}).data().sum()
                      )
                      $(api.column(2).footer()).html(
                          api.column(2, {page:'current'}).data().sum()
                      )
                      $(api.column(3).footer()).html(
                          api.column(3, {page:'current'}).data().sum()
                      )
                      $(api.column(4).footer()).html(
                          api.column(4, {page:'current'}).data().sum()
                      )
                      $(api.column(5).footer()).html(
                          api.column(5, {page:'current'}).data().sum()
                      )
                      $(api.column(6).footer()).html(
                          api.column(6, {page:'current'}).data().sum()
                      )
                      $(api.column(7).footer()).html(
                          api.column(7, {page:'current'}).data().sum()
                      )
                }
 
    }); 
}///ok

function Report03(fechaInicio1,fechafin1,region,fecha) {
    //  // Invoca Al modal y no permite cerrarlo
    // $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
    // //Agrega la imagen de carga
    // $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>'); 
    var controller = "../../bd/Solicitudes/ReporteSolicitudesEjecutadoSolicitado.php";// URL
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  

    var table = $("#report03").DataTable({ 
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        bLengthChange: false,
        destroy: true,
        "order": [[ 3, "desc" ],[ 5, "desc" ]],
        bFilter: true,
        responsive: true,
        autowidth: false,
        processing: true,
        bInfo: true,     
        pageLength: 5, 
        buttons:[ 
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
       customize: function(win)
            {
 
                var last = null;
                var current = null;
                var bod = [];
 
                var css = '@page { size: landscape; }',
                    head = win.document.head || win.document.getElementsByTagName('head')[0],
                    style = win.document.createElement('style');
 
                style.type = 'text/css';
                style.media = 'print';
 
                if (style.styleSheet)
                {
                  style.styleSheet.cssText = css;
                }
                else
                {
                  style.appendChild(win.document.createTextNode(css));
                }
 
                head.appendChild(style);
         },
       title: name_xlsx,
       className: 'btn btn-info'
                   },
                 ],
      "language": {
                "url": "../../plugins/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechainicio1":fechaInicio1,"fechafinal1":fechafin1,"region":region,"fecha":fecha},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },
       columns:
        [        
        {"data" : "S_NOMBREREG"},        
        {"data" : "E_DESPROMOTORA"},        
        {"data" : "S_TIPOCRE"},        
        {"data" : "S_DESASOC"},        
        {"data" : "S_DESDEPA"},        
        {"data" : "S_FECHASOLICITUD"},        
        {"data" : "E_FECHAEJEC"},
        {"data" : "S_BCP",
            render: function ( data, type, row) {
            let to = (row.S_BCP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_BCP; 
            }else{
            tot = row.S_BCP;
            }
            return tot;
            }},
        {"data" : "S_BNP",
            render: function ( data, type, row) {
            let to = (row.S_BNP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_BNP; 
            }else{
            tot = row.S_BNP;
            }
            return tot;
            }},         
        {"data" : "S_CMP",
            render: function ( data, type, row) {
            let to = (row.S_CMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_CMP; 
            }else{
            tot = row.S_CMP;
            }
            return tot;
            }},
        {"data" : "S_CMT",
            render: function ( data, type, row) {
            let to = (row.S_CMT).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_CMT; 
            }else{
            tot = row.S_CMT;
            }
            return tot;
            }},
        {"data" : "S_BIM",
            render: function ( data, type, row) {
            let to = (row.S_BIM).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_BIM; 
            }else{
            tot = row.S_BIM;
            }
            return tot;
            }},
        {"data" : "S_SMP",
            render: function ( data, type, row) {
            let to = (row.S_SMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_SMP; 
            }else{
            tot = row.S_SMP;
            }
            return tot;
            }},
        {"data" : "S_EFE",
            render: function ( data, type, row) {
            let to = (row.S_EFE).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_EFE; 
            }else{
            tot = row.S_EFE;
            }
            return tot;
            }},
        {"data" : "E_BCP",
            render: function ( data, type, row) {
            let to = (row.E_BCP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_BCP; 
            }else{
            tot = row.E_BCP;
            }
            return tot;
            }},
        {"data" : "E_BNP",
            render: function ( data, type, row) {
            let to = (row.E_BNP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_BNP; 
            }else{
            tot = row.E_BNP;
            }
            return tot;
            }},         
        {"data" : "E_CMP",
            render: function ( data, type, row) {
            let to = (row.E_CMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_CMP; 
            }else{
            tot = row.E_CMP;
            }
            return tot;
            }},
        {"data" : "E_CMT",
            render: function ( data, type, row) {
            let to = (row.E_CMT).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_CMT; 
            }else{
            tot = row.E_CMT;
            }
            return tot;
            }},
        {"data" : "E_BIM",
            render: function ( data, type, row) {
            let to = (row.E_BIM).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_BIM; 
            }else{
            tot = row.E_BIM;
            }
            return tot;
            }},
        {"data" : "E_SMP",
            render: function ( data, type, row) {
            let to = (row.E_SMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_SMP; 
            }else{
            tot = row.E_SMP;
            }
            return tot;
            }} 
        ],pagingType: "simple"
        // //Finaiza la carga del Ajax
        // initComplete :function(settings, json){
        //   $("#modal-default-1").modal("hide");
        // } 
    }); 
}///ok

function Report04(fechaInicio1,fechafin1,fechaInicio2,fechafin2,region) {
    //  // Invoca Al modal y no permite cerrarlo
    // $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
    // //Agrega la imagen de carga
    // $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>'); 
    var controller = "../../bd/Solicitudes/ReporteSolicitudesEjecutadoSolicitadoCont.php";// URL
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  

    var table = $("#report04").DataTable({ 
        dom:  "<'row'<''f><''B><'' i>>rtp",
        paging:true,
        bLengthChange: false,
        destroy: true,
        bFilter: true, 
        responsive: true,
        autowidth: false,
        processing: true,
        bInfo: true,      
        pageLength: 5,   
        buttons:[ 
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
       customize: function(win)
            {
 
                var last = null;
                var current = null;
                var bod = [];
 
                var css = '@page { size: landscape; }',
                    head = win.document.head || win.document.getElementsByTagName('head')[0],
                    style = win.document.createElement('style');
 
                style.type = 'text/css';
                style.media = 'print';
 
                if (style.styleSheet)
                {
                  style.styleSheet.cssText = css;
                }
                else
                {
                  style.appendChild(win.document.createTextNode(css));
                }
 
                head.appendChild(style);
         },
       title: name_xlsx,
       className: 'btn btn-info'
                   },
                 ],
      "language": {
                "url": "../../plugins/Spanish.js",
            },
         "ajax":{
              "cache": false,
              "method":"POST",
              "data": {"fechainicio1":fechaInicio1,"fechafinal1":fechafin1,"fechainicio2":fechaInicio2,"fechafinal2":fechafin2,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },
       columns:
        [        
        {"data" : "S_NOMBREREG"},        
        {"data" : "E_DESPROMOTORA"},        
        {"data" : "S_TIPOCRE"},        
        {"data" : "S_DESASOC"},        
        {"data" : "S_DESDEPA"},        
        {"data" : "S_FECHASOLICITUD"},        
        {"data" : "E_FECHAEJEC"},
        {"data" : "S_BCP",
            render: function ( data, type, row) {
            let to = (row.S_BCP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_BCP; 
            }else{
            tot = row.S_BCP;
            }
            return tot;
            }},
        {"data" : "S_BNP",
            render: function ( data, type, row) {
            let to = (row.S_BNP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_BNP; 
            }else{
            tot = row.S_BNP;
            }
            return tot;
            }},         
        {"data" : "S_CMP",
            render: function ( data, type, row) {
            let to = (row.S_CMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_CMP; 
            }else{
            tot = row.S_CMP;
            }
            return tot;
            }},
        {"data" : "S_CMT",
            render: function ( data, type, row) {
            let to = (row.S_CMT).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_CMT; 
            }else{
            tot = row.S_CMT;
            }
            return tot;
            }},
        {"data" : "S_BIM",
            render: function ( data, type, row) {
            let to = (row.S_BIM).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_BIM; 
            }else{
            tot = row.S_BIM;
            }
            return tot;
            }},
        {"data" : "S_SMP",
            render: function ( data, type, row) {
            let to = (row.S_SMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_SMP; 
            }else{
            tot = row.S_SMP;
            }
            return tot;
            }},
        {"data" : "S_EFE",
            render: function ( data, type, row) {
            let to = (row.S_EFE).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.S_EFE; 
            }else{
            tot = row.S_EFE;
            }
            return tot;
            }},
        {"data" : "E_BCP",
            render: function ( data, type, row) {
            let to = (row.E_BCP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_BCP; 
            }else{
            tot = row.E_BCP;
            }
            return tot;
            }},
        {"data" : "E_BNP",
            render: function ( data, type, row) {
            let to = (row.E_BNP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_BNP; 
            }else{
            tot = row.E_BNP;
            }
            return tot;
            }},         
        {"data" : "E_CMP",
            render: function ( data, type, row) {
            let to = (row.E_CMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_CMP; 
            }else{
            tot = row.E_CMP;
            }
            return tot;
            }},
        {"data" : "E_CMT",
            render: function ( data, type, row) {
            let to = (row.E_CMT).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_CMT; 
            }else{
            tot = row.E_CMT;
            }
            return tot;
            }},
        {"data" : "E_BIM",
            render: function ( data, type, row) {
            let to = (row.E_BIM).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_BIM; 
            }else{
            tot = row.E_BIM;
            }
            return tot;
            }},
        {"data" : "E_SMP",
            render: function ( data, type, row) {
            let to = (row.E_SMP).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.E_SMP; 
            }else{
            tot = row.E_SMP;
            }
            return tot;
            }} 
        ],pagingType: "simple"
        //Finaiza la carga del Ajax
        // initComplete :function(settings, json){
        //   $("#modal-default-1").modal("hide");
        // } 
    }); 
}///ok

function destruir(table){
      $(table).dataTable().fnClearTable();
    $(table).dataTable().fnDestroy();
}
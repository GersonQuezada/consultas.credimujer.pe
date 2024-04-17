$(document).ready(Cargar());

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

$("#ComboBox").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $('#report01').show();  
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');        
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $('#report02').show();
            $('#report01').hide();
            destruir('#report01');
            $('#report03').hide();
            destruir('#report03');          
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $('#report03').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');          
        } else if ($(this).val() === "0") {         
            Cargar();
            $('#report01').hide();
            destruir('#report01');
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');
        }
});


$(document).on("click", "#Btn_Ejecutar_ReportesRRHH", function (e){
   
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tiporeporte'] option:selected").val();

        if(Reporte == "1"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                // var post = { fecha: fecha, region: cbx}
                Report01(fecha,region);      
                 $('#report01').show();   
              }

        }else if(Reporte == "2"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                // var post = { fecha: fecha, region: cbx}
                Report02(fecha,region);   
                 $('#report02').show();   
              }

        }else if(Reporte == "3"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                Report03(fecha,region);    
                 $('#report03').show();   
              }

        }else{
           Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});


function Report01(fecha1,region1) {
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller  = "../../bd/RRHH/ReportRRHH_01.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report01").DataTable({
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
              "data": {"fecha":fecha1,"region":region1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "codregion"},
        {"data" : "nombreregion"},
        {"data" : "codpromotora"},
        {"data" : "nompromotora"},
        {"data" : "dnipromotora"},
        {"data" : "codproducto"},
        {"data" : "desproducto"},
        {"data" : "codasociacion"},
        {"data" : "tipoasoc"},
        {"data" : "desasociacion"}, 
        {"data" : "saldocredito",
            render: function ( data, type, row) {
            let to = (row.saldocredito).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldocredito; 
            }else{
            tot = row.saldocredito;
            }
            return tot;
            }
        },
        {"data" : "dias_venc"},
        {"data" : "ahorros"}     
        ],
        pagingType: "simple",
        //Finaiza la carga del Ajax
        initComplete :function(settings, json){
          $("#modal-default-1").modal("hide");
        } 
      });
}

function Report02(fecha,region) {
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller  = "../../bd/RRHH/ReportRRHH_02.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report02")
      .DataTable({
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
              "data": {"fecha":fecha,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "codregion"},
        {"data" : "nombreregion"},  
        {"data" : "codoficial"},  
        {"data" : "nombreoficial"}, 
        {"data" : "dnioficial"},  
        {"data" : "cant_bbcc_asoc"},  
        {"data" : "cant_bbcc"},  
        {"data" : "saldo_bbcc",
            render: function ( data, type, row) {
            let to = (row.saldo_bbcc).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_bbcc; 
            }else{
            tot = row.saldo_bbcc;
            }
            return tot;
            }
          },  
		{"data" : "cant_ggss_asoc"},  
		{"data" : "cant_ggss"},  
    {"data" : "saldo_ggss",
            render: function ( data, type, row) {
            let to = (row.saldo_ggss).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_ggss; 
            }else{
            tot = row.saldo_ggss;
            }
            return tot;
            }
          },  
		{"data" : "cant_pro"},   
    {"data" : "saldo_pro",
            render: function ( data, type, row) {
            let to = (row.saldo_pro).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_pro; 
            }else{
            tot = row.saldo_pro;
            }
            return tot;
            }
          }, 
		{"data" : "cant_cam"},   
    {"data" : "saldo_cam",
            render: function ( data, type, row) {
            let to = (row.saldo_cam).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_cam; 
            }else{
            tot = row.saldo_cam;
            }
            return tot;
            }
          }, 
		{"data" : "cant_com"},  
    {"data" : "saldo_com",
            render: function ( data, type, row) {
            let to = (row.saldo_com).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_com; 
            }else{
            tot = row.saldo_com;
            }
            return tot;
            }
          }, 
		{"data" : "cant_mmr"},   
    {"data" : "saldo_mmr",
            render: function ( data, type, row) {
            let to = (row.saldo_mmr).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_mmr; 
            }else{
            tot = row.saldo_mmr;
            }
            return tot;
            }
          }, 
		{"data" : "cant_otro"},  
    {"data" : "saldo_otro",
            render: function ( data, type, row) {
            let to = (row.saldo_otro).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_otro; 
            }else{
            tot = row.saldo_otro;
            }
            return tot;
            }
          },  
		{"data" : "cant_aagg_asoc"},  
		{"data" : "cant_aagg"},   
    {"data" : "saldo_aagg",
            render: function ( data, type, row) {
            let to = (row.saldo_aagg).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_aagg; 
            }else{
            tot = row.saldo_aagg;
            }
            return tot;
            }
          },
		{"data" : "cant_cind"},  
    {"data" : "saldo_cind",
            render: function ( data, type, row) {
            let to = (row.saldo_cind).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_cind; 
            }else{
            tot = row.saldo_cind;
            }
            return tot;
            }
          },  
		{"data" : "cant_solos"},  
    {"data" : "saldo_solos",
            render: function ( data, type, row) {
            let to = (row.saldo_solos).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.saldo_solos; 
            }else{
            tot = row.saldo_solos;
            }
            return tot;
            }
          }, 
		{"data" : "nro_gru"}, 
		{"data" : "nro_ani"}, 
		{"data" : "nro_soc"}, 
		{"data" : "nro_cre"},  
    {"data" : "monto_sal",
            render: function ( data, type, row) {
            let to = (row.monto_sal).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.monto_sal; 
            }else{
            tot = row.monto_sal;
            }
            return tot;
            }
          },       
        ],
        pagingType: "simple",
        //Finaiza la carga del Ajax
        initComplete :function(settings, json){
          $("#modal-default-1").modal("hide");
        }  
      });
}

function Report03(fecha,region) {
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var controller  = "../../bd/RRHH/ReportRRHH_03.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report03")
      .DataTable({
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
              "data": {"fecha":fecha,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
		{"data" : "codregion"},
		{"data" : "nombreregion"},  
		{"data" : "codpromotora"},  
		{"data" : "nompromotora"}, 
    {"data" : "ahorro_bbcc",
            render: function ( data, type, row) {
            let to = (row.ahorro_bbcc).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.ahorro_bbcc; 
            }else{
            tot = row.ahorro_bbcc;
            }
            return tot;
            }
          },    
    {"data" : "ahorro_ggss",
            render: function ( data, type, row) {
            let to = (row.ahorro_ggss).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.ahorro_ggss; 
            }else{
            tot = row.ahorro_ggss;
            }
            return tot;
            }
          },  
    {"data" : "ahorro_aagg",
            render: function ( data, type, row) {
            let to = (row.ahorro_aagg).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.ahorro_aagg; 
            }else{
            tot = row.ahorro_aagg;
            }
            return tot;
            }
          }, 
    {"data" : "ahorro_tot",
            render: function ( data, type, row) {
            let to = (row.ahorro_tot).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.ahorro_tot; 
            }else{
            tot = row.ahorro_tot;
            }
            return tot;
            }
          },  
    {"data" : "montodeuda_bbcc",
            render: function ( data, type, row) {
            let to = (row.montodeuda_bbcc).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.montodeuda_bbcc; 
            }else{
            tot = row.montodeuda_bbcc;
            }
            return tot;
            }
          },   
    {"data" : "montodeuda_ggss",
            render: function ( data, type, row) {
            let to = (row.montodeuda_ggss).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.montodeuda_ggss; 
            }else{
            tot = row.montodeuda_ggss;
            }
            return tot;
            }
          },  
    {"data" : "montodeuda_aagg",
            render: function ( data, type, row) {
            let to = (row.montodeuda_aagg).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.montodeuda_aagg; 
            }else{
            tot = row.montodeuda_aagg;
            }
            return tot;
            }
          },  
    {"data" : "deuda_tot",
            render: function ( data, type, row) {
            let to = (row.deuda_tot).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.deuda_tot; 
            }else{
            tot = row.deuda_tot;
            }
            return tot;
            }
          }, 
		{"data" : "riesgo_bc"}, 
		{"data" : "riesgo_gc"},  
		{"data" : "riesgo_ag"}, 
		{"data" : "riesgo_tot"},       
        ],
        pagingType: "simple",
        //Finaiza la carga del Ajax
        initComplete :function(settings, json){
          $("#modal-default-1").modal("hide");
        } 
      });
}
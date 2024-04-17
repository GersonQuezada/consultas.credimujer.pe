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
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $('#report01').show();  
            $('#report02').hide();
            destruir('#report02');      
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);  
            $('#report02').show();
            $('#report01').hide();
            destruir('#report01');          
        } else if ($(this).val() === "0") {         
            Cargar();
            $('#report01').hide();
            destruir('#report01');
            $('#report02').hide();
            destruir('#report02');
        }
});


$(document).on("click", "#Btn_Ejecutar_ReportesContratos", function (e){
   
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tiporeporte'] option:selected").val();
        var fecha1 = $("[name='fechaInicio']").val();
        var fecha2 = $("[name='fechafin']").val();
           // $('select[name="lineas"] option:selected').text()
        if(Reporte == "1"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                // var post = { fecha: fecha, region: cbx}
                Report01(fecha1,fecha2,region);      
                 $('#report01').show();   
              }

        }else if(Reporte == "2"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                // var post = { fecha: fecha, region: cbx}
                Report02(region,fecha2,fecha1);   
                 $('#report02').show();   
              }

        }else{
           Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});


function Report01(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Contratos/ReportContratos_01.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text(); 
  var table = $("#report01").DataTable({
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [ 
          {"data" : "nomsucursal_cre"},
          {"data" : "desasociacion"},
          {"data" : "desproducto"},
          {"data" : "apellidosnombres"},
          {"data" : "fechadesembolso"},
          {"data" : "montosolicitud",                          
          render: function ( data, type, row) {
           let to = (row.montosolicitud).split('.'); 
           let tot = 0;
           if(to[0] == ""){
            tot = 0+row.montosolicitud; 
           }else{
            tot = row.montosolicitud;
           }
            return tot;
           }
          },
          {"data" : "montodevuelto",
          render: function ( data, type, row) {
           let to = (row.montodevuelto).split('.'); 
           let tot = 0;
           if(to[0] == ""){
            tot = 0+row.montodevuelto; 
           }else{
            tot = row.montodevuelto;
           }
            return tot;
           }},
          {"data" : "montodesembolso",
          render: function ( data, type, row) {
           let to = (row.montodesembolso).split('.'); 
           let tot = 0;
           if(to[0] == ""){
            tot = 0+row.montodesembolso; 
           }else{
            tot = row.montodesembolso;
           }
            return tot;
           }},
          {"data" : "despromotora"},
          {"data" : "enviado_sede"},     
        ],
               pagingType: "simple" 
      });
}///// ok

function Report02(region,fechafinal,fechaInicio) {
  var controller = "../../bd/Contratos/ReportContratos_02.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text(); 
  var table = $("#report02")
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
              "data": {"region":region,"fechafinal":fechafinal,"fechaInicio":fechaInicio},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
                          {"data" : "CODREGION"},
                          {"data" : "NOMBREREGION"},
                          {"data" : "CODASOCIACION"},
                          {"data" : "TIPOASOC"},
                          {"data" : "TIPOCRE"},
                          {"data" : "DESASOCIACION"},
                          {"data" : "CICLO"},
                          {"data" : "CODRESPONSABLE"},
                          {"data" : "NOMRESPONSABLE"},
                          {"data" : "DNIRESPONSABLE"},
                          {"data" : "DOMICILIO"},
                          {"data" : "MONTODESEMBOLSO",
                              render: function ( data, type, row) {
                               let to = (row.MONTODESEMBOLSO).split('.'); 
                               let tot = 0;
                               if(to[0] == ""){
                                tot = 0+row.MONTODESEMBOLSO; 
                               }else{
                                tot = row.MONTODESEMBOLSO;
                               }
                                return tot;
                               }
                          },
                          {"data" : "MONTODEVUELTO",
                              render: function ( data, type, row) {
                               let to = (row.MONTODEVUELTO).split('.'); 
                               let tot = 0;
                               if(to[0] == ""){
                                tot = 0+row.MONTODEVUELTO; 
                               }else{
                                tot = row.MONTODEVUELTO;
                               }
                                return tot;
                               }
                          },
                          {"data" : "MONTONETO",
                              render: function ( data, type, row) {
                               let to = (row.MONTONETO).split('.'); 
                               let tot = 0;
                               if(to[0] == ""){
                                tot = 0+row.MONTONETO; 
                               }else{
                                tot = row.MONTONETO;
                               }
                                return tot;
                               }
                        },
                          {"data" : "INTERES",
                              render: function ( data, type, row) {
                               let to = (row.INTERES).split('.'); 
                               let tot = 0;
                               if(to[0] == ""){
                                tot = 0+row.INTERES; 
                               }else{
                                tot = row.INTERES;
                               }
                                return tot;
                               }
                        },
                          {"data" : "CUOTAS"},
                          {"data" : "FECHADESEMBOLSO"},
                          {"data" : "NUMSOCIAS"},
                          {"data" : "NUMNUEVAS"},
                          {"data" : "NUMEXCLUS"},
                          {"data" : "CODPROMOTORA"},
                          {"data" : "NOMPROMOTORA"},
                          {"data" : "NUMCREDITO14"},
        ],
               pagingType: "simple" 
      });
}


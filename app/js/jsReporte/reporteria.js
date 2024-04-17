function Btn_Ejecutar(){
  var cbx   = $("select[name='tiporeporte'] option:selected").val();   
  var fecha1 = $("[name='fechaInicio']").val();
  var fecha2 = $("[name='fechafinal']").val();
  var nrocre = $("[name='NroCredito']").val();
   if(cbx == 1){         
        if(fecha2 < fecha1){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
        }else{   
          Report_Recu_vs_Boletas(fecha1,fecha2);
        }
    }else if(cbx == 2){
        if(nrocre == ""){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar un Nro de Credito'})
        }
        if(fecha2 < fecha1){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
        }else{ 
          Report_Boletas_noRecuperaciones(fecha1,fecha2,nrocre);
        }
    }else if(cbx == 3){
 
        if(nrocre == ""){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar un Nro de Credito'})
        }
        if(fecha2 < fecha1){
          Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
        }else{  
          Report_Recuperaciones_noBoletas(fecha1,fecha2,nrocre);
        }
    }else{
      Swal.fire({type: 'error',title: 'Error!!',text: 'Debe seleccionar un reporte'})
    }
  };


  function Btn_Ejecutar_Recupe_Total(){
  var fecha1 = $("[name='fechaInicio']").val();
  var fecha2 = $("[name='fechafinal']").val();  
  Report_Recu_Total(fecha1,fecha2);
};





function Btn_Ejecutar_ReporteConta_Migrado(){
   
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tiporeporte'] option:selected").val();
        var fecha1 = $("[name='fechaInicioMigra']").val();
        var fecha2 = $("[name='fechafinMigra']").val();        
        var TipoCam = $("[name='TipoCambio']").val();
           // $('select[name="lineas"] option:selected').text()
        if(Reporte == "1"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else{
                // var post = { fecha: fecha, region: cbx}
                Report_Migrado_01(fecha1,fecha2,TipoCam);      
                 $('#report01').show();   
              }

        }else if(Reporte == "2"){
            if(fecha.length == ""){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})              
            }else if(region == 0){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                // var post = { fecha: fecha, region: cbx}
                Report_Migrado_02(fecha,region);   
                 $('#report02').show();   
              }

        }else if(Reporte == "3"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                // var post = { fecha: fecha, region: cbx}
                Report_Migrado_03(fecha1,fecha2,region);   
                 $('#report03').show();   
              }

        }else if(Reporte == "4"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            
            }else{
                // var post = { fecha: fecha, region: cbx}
                Report_Migrado_04(fecha1,fecha2);   
                 $('#report04').show();   
              }

        }else{
           Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

};


function Report_Recu_vs_Boletas(fecha1,fecha2) {
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false}); 
  
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../../../build/loading/images/loader.gif" alt="loading" /><br/>Un momento, por favor...</div>');    

 var controller = "../../../CRUD/Contabilidad/report1.php";// URL

  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#example")
      .DataTable({
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
              "data": {"fechaInicio":fecha1,"fechafinal":fecha2},
              "url":controller,
              "dataType": "json",
             "deferRender": true,
 
            },
            
       columns:
        [
          {"data" : "RC_AGENCIA"},
          {"data" : "RC_PRODUCTO"},
          {"data" : "RC_NRO_CREDITO"},
          {"data" : "RC_CODIGO_BANCO"},
          {"data" : "RC_BANCO_COMUNAL"},
          {"data" : "RC_CODIGO_SOCIA"},
          {"data" : "RC_NOMBRE_CLIENTE"},
          {"data" : "SRECU_CAPITAL",
            render: function ( data, type, row) {
            let to = (row.SRECU_CAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SRECU_CAPITAL; 
            }else{
            tot = row.SRECU_CAPITAL;
            }
            return tot;
            }
          }, 
          {"data" : "RV_AGENCIA"},
          {"data" : "RV_PRODUCTO"},
          {"data" : "RV_NRO_CREDITO"},
          {"data" : "RV_CODIGO_BANCO"},
          {"data" : "RV_BANCO_COMUNAL"},
          {"data" : "RV_CODIGO_SOCIA"},
          {"data" : "RV_NOMBRE_CLIENTE"},
  
          {"data" : "RECU_CAPITAL",
            render: function ( data, type, row) {
            let to = (row.RECU_CAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.RECU_CAPITAL; 
            }else{
            tot = row.RECU_CAPITAL;
            }
            return tot;
            }
          },  
          {"data" : "RECU_IGV",
            render: function ( data, type, row) {
            let to = (row.RECU_IGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.RECU_IGV; 
            }else{
            tot = row.RECU_IGV;
            }
            return tot;
            }
          },  
          {"data" : "RECU_INTERES",
            render: function ( data, type, row) {
            let to = (row.RECU_INTERES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.RECU_INTERES; 
            }else{
            tot = row.RECU_INTERES;
            }
            return tot;
            }
          }, 
          {"data" : "RECU_M_TOTAL",
            render: function ( data, type, row) {
            let to = (row.RECU_M_TOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.RECU_M_TOTAL; 
            }else{
            tot = row.RECU_M_TOTAL;
            }
            return tot;
            }
          },  
          {"data" : "REGV_CAPITAL",
            render: function ( data, type, row) {
            let to = (row.REGV_CAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.REGV_CAPITAL; 
            }else{
            tot = row.REGV_CAPITAL;
            }
            return tot;
            }
          },  
          {"data" : "REGV_IGV",
            render: function ( data, type, row) {
            let to = (row.REGV_IGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.REGV_IGV; 
            }else{
            tot = row.REGV_IGV;
            }
            return tot;
            }
          },  
          {"data" : "REGV_INTERES",
            render: function ( data, type, row) {
            let to = (row.REGV_INTERES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.REGV_INTERES; 
            }else{
            tot = row.REGV_INTERES;
            }
            return tot;
            }
          },  
          {"data" : "REGV_M_TOTAL",
            render: function ( data, type, row) {
            let to = (row.REGV_M_TOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.REGV_M_TOTAL; 
            }else{
            tot = row.REGV_M_TOTAL;
            }
            return tot;
            }
          }, 
          {"data" : "DIF_DE_INTERES",
            render: function ( data, type, row) {
            let to = (row.DIF_DE_INTERES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.DIF_DE_INTERES; 
            }else{
            tot = row.DIF_DE_INTERES;
            }
            return tot;
            }
          },           
          {"data" : "DIF_DE_IGV",
            render: function ( data, type, row) {
            let to = (row.DIF_DE_IGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.DIF_DE_IGV; 
            }else{
            tot = row.DIF_DE_IGV;
            }
            return tot;
            }
          }

                ],
               pagingType: "simple",
               //Finaliza la carga del ajax
              initComplete :function(settings, json){
                //Cerramos el modal
                $("#modal-default-1").modal("hide");
               
           }
      });
  
}

function Report_Boletas_noRecuperaciones(fecha1,fecha2,nrocre) {
  var controller = "../../../CRUD/Contabilidad/report2.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#example2")
      .DataTable({
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
              "data": {"fechaInicio": fecha1, "fechafinal": fecha2, "NroCredito": nrocre},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
          {"data" : "COD_SUCURSAL"},
          {"data" : "AGENCIA"},
          {"data" : "NRO_SERIE"},
          {"data" : "NRO_CORRELATIVO"},
          {"data" : "PRODUCTO"},
          {"data" : "FECHA_VENCIMIENTO"},
          {"data" : "NUMERO_CREDITO"},
          {"data" : "CODIGO_DE_BANCO"},
          {"data" : "NOMBRE_BANCO_COMUNAL"},
          {"data" : "COD_CLIENTE"},
          {"data" : "NOMBRE_CLIENTE"},
          {"data" : "COD_CLIENTE_PRESIDENTE"},
          {"data" : "NOMBRE_CLIENTE_PRESIDENTE"},           
          {"data" : "CAPITAL",
            render: function ( data, type, row) {
            let to = (row.CAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CAPITAL; 
            }else{
            tot = row.CAPITAL;
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
          {"data" : "IGV",
            render: function ( data, type, row) {
            let to = (row.IGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.IGV; 
            }else{
            tot = row.IGV;
            }
            return tot;
            }
          }, 
          {"data" : "MONTO_TOTAL",
            render: function ( data, type, row) {
            let to = (row.MONTO_TOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTO_TOTAL; 
            }else{
            tot = row.MONTO_TOTAL;
            }
            return tot;
            }
          },
          {"data" : "TIPO_PAGO"},
          {"data" : "FECHA_VENCIMIENTO_CRONOGRAMA"},        ],
               pagingType: "simple" 
      });
}

function Report_Recuperaciones_noBoletas(fecha1,fecha2,nrocre) {
  var controller = "../../../CRUD/Contabilidad/report1.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
   
      var table = $("#example3")
      .DataTable({
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
              "data": {"fechaInicio": fecha1, "fechafinal": fecha2, "NroCredito": nrocre},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
           {"data" : "AGENCIA"},
          {"data" : "ENTIDAD_BANCARIA"},
          {"data" : "PRODUCTO"},
          {"data" : "FECHA_DE_RECUP"},
          {"data" : "NUMERO_CREDITO"},
          {"data" : "CICLO"},
          {"data" : "CODIGO_DE_BANCO"},
          {"data" : "NOMBRE_BANCO_COMUNAL"},
          {"data" : "DNI_CLIENTE"},
          {"data" : "CODSOCIA"},
          {"data" : "NOMBRE_CLIENTE"},
          {"data" : "CAPITAL",
            render: function ( data, type, row) {
            let to = (row.CAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CAPITAL; 
            }else{
            tot = row.CAPITAL;
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
          {"data" : "IGV",
            render: function ( data, type, row) {
            let to = (row.IGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.IGV; 
            }else{
            tot = row.IGV;
            }
            return tot;
            }
          }, 
          {"data" : "SEGURO"},
          {"data" : "COMISION"},
          {"data" : "MONTO_TOTAL",
            render: function ( data, type, row) {
            let to = (row.MONTO_TOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTO_TOTAL; 
            }else{
            tot = row.MONTO_TOTAL;
            }
            return tot;
            }
          },           
          {"data" : "NRO_CUOTA"},      
        ],
               pagingType: "simple" 
      });
}

function Report_Recu_Total(fecha1,fecha2){
  
  var controller = "../../../CRUD/Contabilidad/reportRecupTotal.php";// URL
  var name_xlsx = 'Recuperaciones_total_contabilidad';  
      var table = $("#example")
      .DataTable({
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
              "data": {"fechaInicio":fecha1,"fechafinal":fecha2},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
           {"data" : "AGENCIA"},
            {"data" : "ENTIDAD_BANCARIA"}, 
            {"data" : "PRODUCTO"},
            {"data" : "DESTALLE_PRODUCTO"},
            {"data" : "FECHA_DE_RECUP"},
            {"data" : "NUMERO_CREDITO"},
            {"data" : "CICLO"},
            {"data" : "CODIGO_DE_BANCO"},
            {"data" : "NOMBRE_BANCO_COMUNAL"},
            {"data" : "DNI_CLIENTE"},
            {"data" : "CODSOCIA"},
            {"data" : "NOMBRE_CLIENTE"},            
            {"data" : "CAPITAL",
            render: function ( data, type, row) {
            let to = (row.CAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CAPITAL; 
            }else{
            tot = row.CAPITAL;
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
          {"data" : "IGV",
            render: function ( data, type, row) {
            let to = (row.IGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.IGV; 
            }else{
            tot = row.IGV;
            }
            return tot;
            }
          },  
            {"data" : "SEGURO",
            render: function ( data, type, row) {
            let to = (row.SEGURO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SEGURO; 
            }else{
            tot = row.SEGURO;
            }
            return tot;
            }
          },
            {"data" : "COMISION",
            render: function ( data, type, row) {
            let to = (row.COMISION).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.COMISION; 
            }else{
            tot = row.COMISION;
            }
            return tot;
            }
            },
            {"data" : "AHORRO",
            render: function ( data, type, row) {
            let to = (row.AHORRO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.AHORRO; 
            }else{
            tot = row.AHORRO;
            }
            return tot;
            }
            },
            {"data" : "MONTO_TOTAL",
            render: function ( data, type, row) {
            let to = (row.MONTO_TOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTO_TOTAL; 
            }else{
            tot = row.MONTO_TOTAL;
            }
            return tot;
            }
          },
            {"data" : "NRO_CUOTA"},       
            {"data" : "TIP_ORIG_PAG"}
        ],
               pagingType: "simple" 
      });
}

function Report_Migrado_01(fechaInicio,fechafinal,TipoCambio) {
  var controller = "../../../CRUD/Contabilidad/ReportContabilidadMigrado_01.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text(); 
  var table = $("#report01").DataTable({
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal,"TipoCambio":TipoCambio},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [ 
                          {"data" : "SUCU"},
                          {"data" : "TIPO"},
                          {"data" : "MCAPBCP",
                            render: function ( data, type, row) {
                             let to = (row.MCAPBCP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MCAPBCP; 
                             }else{
                              tot = row.MCAPBCP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MINTBCP",
                            render: function ( data, type, row) {
                             let to = (row.MINTBCP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MINTBCP; 
                             }else{
                              tot = row.MINTBCP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIGVBCP",
                            render: function ( data, type, row) {
                             let to = (row.MIGVBCP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIGVBCP; 
                             }else{
                              tot = row.MIGVBCP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIMOBCP",
                            render: function ( data, type, row) {
                             let to = (row.MIMOBCP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIMOBCP; 
                             }else{
                              tot = row.MIMOBCP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "TOTABCP",
                            render: function ( data, type, row) {
                             let to = (row.TOTABCP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.TOTABCP; 
                             }else{
                              tot = row.TOTABCP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MCAPBNP",
                            render: function ( data, type, row) {
                             let to = (row.MCAPBNP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MCAPBNP; 
                             }else{
                              tot = row.MCAPBNP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MINTBNP",
                            render: function ( data, type, row) {
                             let to = (row.MINTBNP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MINTBNP; 
                             }else{
                              tot = row.MINTBNP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIGVBNP",
                            render: function ( data, type, row) {
                             let to = (row.MIGVBNP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIGVBNP; 
                             }else{
                              tot = row.MIGVBNP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIMOBNP",
                            render: function ( data, type, row) {
                             let to = (row.MIMOBNP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIMOBNP; 
                             }else{
                              tot = row.MIMOBNP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "TOTABNP",
                            render: function ( data, type, row) {
                             let to = (row.TOTABNP).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.TOTABNP; 
                             }else{
                              tot = row.TOTABNP;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MCAPCMT",
                            render: function ( data, type, row) {
                             let to = (row.MCAPCMT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MCAPCMT; 
                             }else{
                              tot = row.MCAPCMT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MINTCMT",
                            render: function ( data, type, row) {
                             let to = (row.MINTCMT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MINTCMT; 
                             }else{
                              tot = row.MINTCMT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIGVCMT",
                            render: function ( data, type, row) {
                             let to = (row.MIGVCMT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIGVCMT; 
                             }else{
                              tot = row.MIGVCMT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIMOCMT",
                            render: function ( data, type, row) {
                             let to = (row.MIMOCMT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIMOCMT; 
                             }else{
                              tot = row.MIMOCMT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "TOTACMT",
                            render: function ( data, type, row) {
                             let to = (row.TOTACMT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.TOTACMT; 
                             }else{
                              tot = row.TOTACMT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MCAPCAJ",
                            render: function ( data, type, row) {
                             let to = (row.MCAPCAJ).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MCAPCAJ; 
                             }else{
                              tot = row.MCAPCAJ;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MINTCAJ",
                            render: function ( data, type, row) {
                             let to = (row.MINTCAJ).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MINTCAJ; 
                             }else{
                              tot = row.MINTCAJ;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIGVCAJ",
                            render: function ( data, type, row) {
                             let to = (row.MIGVCAJ).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIGVCAJ; 
                             }else{
                              tot = row.MIGVCAJ;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIMOCAJ",
                            render: function ( data, type, row) {
                             let to = (row.MIMOCAJ).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIMOCAJ; 
                             }else{
                              tot = row.MIMOCAJ;
                             }
                              return tot;
                             }
                          },
                          {"data" : "TOTACAJ",
                            render: function ( data, type, row) {
                             let to = (row.TOTACAJ).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.TOTACAJ; 
                             }else{
                              tot = row.TOTACAJ;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MCAPTOT",
                            render: function ( data, type, row) {
                             let to = (row.MCAPTOT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MCAPTOT; 
                             }else{
                              tot = row.MCAPTOT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MINTTOT",
                            render: function ( data, type, row) {
                             let to = (row.MINTTOT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MINTTOT; 
                             }else{
                              tot = row.MINTTOT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIGVTOT",
                            render: function ( data, type, row) {
                             let to = (row.MIGVTOT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIGVTOT; 
                             }else{
                              tot = row.MIGVTOT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "MIMOTOT",
                            render: function ( data, type, row) {
                             let to = (row.MIMOTOT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MIMOTOT; 
                             }else{
                              tot = row.MIMOTOT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "TOTATOT",
                            render: function ( data, type, row) {
                             let to = (row.TOTATOT).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.TOTATOT; 
                             }else{
                              tot = row.TOTATOT;
                             }
                              return tot;
                             }
                          },
                          {"data" : "FECHAINI"},
                          {"data" : "FECHAFIN"},
                          {"data" : "TIPOASOC"},
                          {"data" : "TIPOCAM"}
     
        ],
               pagingType: "simple" 
      });
}///// ok

function Report_Migrado_02(fecha,region) {
  var controller = "../../../CRUD/Contabilidad/ReportContabilidadMigrado_02.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text(); 
  var table = $("#report02").DataTable({
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
              "data": {"fecha":fecha,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [ 
                  {"data" : "ANOPROCESO"},
                  {"data" : "MESPROCESO"},
                  {"data" : "CODREGION"},
                  {"data" : "CODCLIENTE"},
                  {"data" : "CORRE"},
                  {"data" : "FECHAEMI1"},
                  {"data" : "FECHAVCTO"},
                  {"data" : "TIPO_COM1"},
                  {"data" : "SERIE_COM1"},
                  {"data" : "NRO_COM1"},
                  {"data" : "TIPO_DOCID"},
                  {"data" : "NRO_DOCID"},
                  {"data" : "APENOM_RSOC"},
                  {"data" : "VALOR_FACTEXP",
                    render: function ( data, type, row) {
                    let to = (row.VALOR_FACTEXP).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.VALOR_FACTEXP; 
                    }else{
                      tot = row.VALOR_FACTEXP;
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
                  {"data" : "COMISIONES",
                    render: function ( data, type, row) {
                    let to = (row.COMISIONES).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.COMISIONES; 
                    }else{
                      tot = row.COMISIONES;
                    }
                      return tot;
                    }
                  },
                  {"data" : "IMP_EXONE",
                    render: function ( data, type, row) {
                    let to = (row.IMP_EXONE).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.IMP_EXONE; 
                    }else{
                      tot = row.IMP_EXONE;
                    }
                      return tot;
                    }
                  },
                  {"data" : "IMP_INAFE",
                    render: function ( data, type, row) {
                    let to = (row.IMP_INAFE).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.IMP_INAFE; 
                    }else{
                      tot = row.IMP_INAFE;
                    }
                      return tot;
                    }
                  },
                  {"data" : "ISC",
                    render: function ( data, type, row) {
                    let to = (row.ISC).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.ISC; 
                    }else{
                      tot = row.ISC;
                    }
                      return tot;
                    }
                  },
                  {"data" : "IGV",
                    render: function ( data, type, row) {
                    let to = (row.IGV).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.IGV; 
                    }else{
                      tot = row.IGV;
                    }
                      return tot;
                    }
                  },
                  {"data" : "OTROS",
                    render: function ( data, type, row) {
                    let to = (row.OTROS).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.OTROS; 
                    }else{
                      tot = row.OTROS;
                    }
                      return tot;
                    }
                  },
                  {"data" : "IMP_TOTAL",
                    render: function ( data, type, row) {
                    let to = (row.IMP_TOTAL).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.IMP_TOTAL; 
                    }else{
                      tot = row.IMP_TOTAL;
                    }
                      return tot;
                    }
                  },
                  {"data" : "TCAMBIO",
                    render: function ( data, type, row) {
                    let to = (row.TCAMBIO).split('.'); 
                    let tot = 0;
                    if(to[0] == ""){
                      tot = 0+row.TCAMBIO; 
                    }else{
                      tot = row.TCAMBIO;
                    }
                      return tot;
                    }
                  },
                  {"data" : "FECHA_EMI2"},
                  {"data" : "TIPO_COM2"},
                  {"data" : "SERIE_COM2"},
                  {"data" : "NRO_COM2"},
                  {"data" : "ESTADO"},
                  {"data" : "TIPOPRODU"},
                  {"data" : "CODMONEDA"},    
        ],
               pagingType: "simple" 
      });
}///// ok

function Report_Migrado_03(fechaInicio,fechafinal,region) {
  var controller = "../../../CRUD/Contabilidad/ReportContabilidadMigrado_03.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text(); 
  var table = $("#report03").DataTable({
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [ 
           {"data" : "FECVENCIMIENTO"},  
           {"data" : "CODREGION"}, 
           {"data" : "CODASOCIACION"}, 
           {"data" : "DESASOCIACION"},
           {"data" : "TIPOASOCIACION"},
           {"data" : "FECDESEMBOLSO"},
           {"data" : "CICLO"},
           {"data" : "NROPLAZOS"},
           {"data" : "NROCUOTA"},
           {"data" : "MTOCAPITAL",
            render: function ( data, type, row) {
            let to = (row.MTOCAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
             tot = 0+row.MTOCAPITAL; 
            }else{
             tot = row.MTOCAPITAL;
            }
              return tot;
            }
           },
           {"data" : "MTOINTERES",
           render: function ( data, type, row) {
            let to = (row.MTOINTERES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
             tot = 0+row.MTOINTERES; 
            }else{
             tot = row.MTOINTERES;
            }
              return tot;
            }
           },
           {"data" : "MTOIGV",
            render: function ( data, type, row) {
            let to = (row.MTOIGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
             tot = 0+row.MTOIGV; 
            }else{
             tot = row.MTOIGV;
            }
              return tot;
            }
           },
           {"data" : "MTOTOTAL",
           render: function ( data, type, row) {
            let to = (row.MTOTOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
             tot = 0+row.MTOTOTAL; 
            }else{
             tot = row.MTOTOTAL;
            }
              return tot;
            }
           },
           {"data" : "NOMPROMOTORA"},
           {"data" : "ENTIDADFINAN"},    
        ],
               pagingType: "simple" 
      });
}///// ok

function Report_Migrado_04(fechaInicio,fechafinal) {
  var controller = "../../../CRUD/Contabilidad/ReportContabilidadMigrado_04.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text(); 
  var table = $("#report04").DataTable({
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [ 
                           {"data" : "FECVENCIMIENTO"},  
                           {"data" : "CODREGION"}, 
                           {"data" : "CODASOCIACION"}, 
                           {"data" : "DESASOCIACION"}, 
                           {"data" : "ORDEN"}, 
                           {"data" : "TIPOPRODUCTO"},  
                           {"data" : "FECDESEMBOLSO"}, 
                           {"data" : "CICLO"}, 
                           {"data" : "CODSOCIA"},  
                           {"data" : "APATERNO"},
                           {"data" : "AMATERNO"},  
                           {"data" : "NOMBRES"}, 
                           {"data" : "NROPLAZOS"}, 
                           {"data" : "NROCUOTA"},  
                           {"data" : "MTOCAPITAL",
                           render: function ( data, type, row) {
                             let to = (row.MTOCAPITAL).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MTOCAPITAL; 
                             }else{
                              tot = row.MTOCAPITAL;
                             }
                              return tot;
                             }
                           },  
                           {"data" : "MTOINTERES",
                            render: function ( data, type, row) {
                             let to = (row.MTOINTERES).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MTOINTERES; 
                             }else{
                              tot = row.MTOINTERES;
                             }
                              return tot;
                             }
                            },  
                           {"data" : "MTOIGV",
                            render: function ( data, type, row) {
                             let to = (row.MTOIGV).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MTOIGV; 
                             }else{
                              tot = row.MTOIGV;
                             }
                              return tot;
                             }
                           },  
                           {"data" : "MTOTOTAL",
                            render: function ( data, type, row) {
                             let to = (row.MTOTOTAL).split('.'); 
                             let tot = 0;
                             if(to[0] == ""){
                              tot = 0+row.MTOTOTAL; 
                             }else{
                              tot = row.MTOTOTAL;
                             }
                              return tot;
                             }
                           },  
                           {"data" : "NOMPROMOTORA"},  
                           {"data" : "ENTIDADFINAN"},     
        ],
               pagingType: "simple" 
      });
}///// ok

/*
$(document).ready(Cargar());


$("#ComboBox").change( function() {
        if ($(this).val() === "1") {
            $("#NroCredito").prop("disabled", true);
            document.getElementById("NroCredito").value = "";
            $('#example').show();
            $('#example2').hide();
            destruir('#example2');
            $('#example3').hide();
            destruir('#example3');
        } else if ($(this).val() === "2") {
            $("#NroCredito").prop("disabled", false);
            $('#example2').show();
            $('#example').hide();
            destruir('#example');
            $('#example3').hide();
            destruir('#example3');        
        }else if($(this).val() === "3"){
          $("#NroCredito").prop("disabled", false);
            $('#example3').show();
            $('#example2').hide();
            destruir('#example2');
            $('#example').hide();
            destruir('#example');
        }else{
          $('#example').hide(); 
          destruir('#example');
          $('#example2').hide();
          destruir('#example2');
          $('#example3').hide();
          destruir('#example3');
        }
    });*/

    /*
$("#ComboBoxMigra").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true);
            $("#fechaInicioMigra").prop("disabled", false);
            $("#fechafinMigra").prop("disabled", false);
            $("#TipoCambio").prop("disabled", false);
            $('#report01').show();  
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');      
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicioMigra").prop("disabled", true);
            $("#fechafinMigra").prop("disabled", true);  
            $('#report02').show();
            $('#report01').hide();
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');
            destruir('#report01');          
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicioMigra").prop("disabled", false);
            $("#fechafinMigra").prop("disabled", false);  
            $('#report03').show();
            $('#report01').hide();
            $('#report02').hide();
            destruir('#report02');
            $('#report04').hide();
            destruir('#report04');
            destruir('#report01');          
        }else if ($(this).val() === "4") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true);
            $("#fechaInicioMigra").prop("disabled", false);
            $("#fechafinMigra").prop("disabled", false);  
            $('#report04').show();
            $('#report01').hide();
            $('#report03').hide();
            destruir('#report03');
            $('#report02').hide();
            destruir('#report02');
            destruir('#report01');          
        } else if ($(this).val() === "0") {         
            Cargar();
            $('#report01').hide();
            destruir('#report01');
            $('#report02').hide();
            destruir('#report02');
            $('#report03').hide();
            destruir('#report03');
            $('#report04').hide();
            destruir('#report04');
        }
});*/

function destruir(table){
      $(table).dataTable().fnClearTable();
    $(table).dataTable().fnDestroy();
}

function Cargar(){
   $("#fechaInicioMigra").prop("disabled", true);
   $("#fechafinMigra").prop("disabled", true); 
   $("#MESAÑO").prop("disabled", true);   
   $("#ComboBoxRegion").prop("disabled", true);
   $("#TipoCambio").prop("disabled", true);
}
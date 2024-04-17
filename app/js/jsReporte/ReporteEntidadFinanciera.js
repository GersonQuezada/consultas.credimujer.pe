$(document).ready(Cargar());

function Cargar(){
   $("#fechaInicio").prop("disabled", true);
   $("#fechafin").prop("disabled", true); 
      $("#MESAÑO").prop("disabled", true);   
      $("#mtomayor").prop("disabled", true);   
   $("#ComboBoxRegion").prop("disabled", true);
}

function destruir(table){
      $(table).dataTable().fnClearTable();
    $(table).dataTable().fnDestroy();
 }

$("#ComboBox").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true); 
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);  
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
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08');
            $('#report09').hide();
            destruir('#report09');
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');      
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
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
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08');
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');  
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
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08');
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');             
        } else if ($(this).val() === "4") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);                    
            $('#report04').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report03').hide();
            destruir('#report03');
            $('#report05').hide();
            destruir('#report05'); 
            $('#report06').hide();
            destruir('#report06');         
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08'); 
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');            
        }else if ($(this).val() === "5") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report05').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report06').hide();
            destruir('#report06');         
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08');
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');              
        }else if ($(this).val() === "6") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report06').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report05').hide();
            destruir('#report05');         
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08');
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10'); 
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');             
        }else if ($(this).val() === "7") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report07').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report06').hide();
            destruir('#report06');         
            $('#report05').hide();
            destruir('#report05');
            $('#report08').hide();
            destruir('#report08');
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');              
        }else if ($(this).val() === "8") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report08').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report06').hide();
            destruir('#report06');         
            $('#report05').hide();
            destruir('#report05');           
            $('#report07').hide();
            destruir('#report07');
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');   
        }else if ($(this).val() === "9") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report09').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report06').hide();
            destruir('#report06');         
            $('#report05').hide();
            destruir('#report05');           
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08'); 
            $('#report10').hide();
            destruir('#report10');
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');   
        }else if ($(this).val() === "10") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report10').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report06').hide();
            destruir('#report06');         
            $('#report05').hide();
            destruir('#report05');           
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08'); 
            $('#report09').hide();
            destruir('#report09'); 
            $('#report11').hide();
            destruir('#report11');   
            $('#report12').hide();
            destruir('#report12');  
        }else if ($(this).val() === "11") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report11').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report06').hide();
            destruir('#report06');         
            $('#report05').hide();
            destruir('#report05');           
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08'); 
            $('#report09').hide();
            destruir('#report09'); 
            $('#report10').hide();
            destruir('#report10');   
            $('#report12').hide();
            destruir('#report12');  
        }else if ($(this).val() === "12") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
            $('#report12').show();
            $('#report02').hide();
            destruir('#report02');
            $('#report01').hide();
            destruir('#report01');
            $('#report04').hide();
            destruir('#report04');
            $('#report03').hide();
            destruir('#report03');
            $('#report06').hide();
            destruir('#report06');         
            $('#report05').hide();
            destruir('#report05');           
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08'); 
            $('#report09').hide();
            destruir('#report09'); 
            $('#report11').hide();
            destruir('#report11');   
            $('#report10').hide();
            destruir('#report10');  
        }
        else if ($(this).val() === "0") {         
            Cargar();
            $('#report01').hide();
            destruir('#report01');
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
            $('#report07').hide();
            destruir('#report07');
            $('#report08').hide();
            destruir('#report08'); 
        }
});


$(document).on("click", "#Btn_Ejecutar_ReportesRiesgo", function (e){
   
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tiporeporte'] option:selected").val();
        var fecha1 = $("[name='fechaInicio']").val();
        var fecha2 = $("[name='fechafin']").val();
        if(Reporte == "1"){
            // if(fecha.length == ""){
            //     Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            //   }else if(region == 0){
            //     Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            //   }else{
                // var post = { fecha: fecha, region: cbx}
                Report01();      
                 $('#report01').show();   
              // }

        }else if(Reporte == "2"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                // var post = { fecha: fecha, region: cbx}
                Report02(fecha1,fecha2,region);
                agregarTR(); 
                 $('#report02').show();   
              }

        }else if(Reporte == "3"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Report03(fecha1,fecha2,region);   
                 $('#report03').show();   
              }

        }else if(Reporte == "4"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
              Report04(fecha1,fecha2,region);    
              $('#report04').show();   
            }

        }else if(Reporte == "5"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
              Report05(fecha1,fecha2,region);    
              $('#report05').show();   
            }
        }else if(Reporte == "6"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
              Report06(fecha1,fecha2);    
              $('#report06').show();   
            }
        }else if(Reporte == "7"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
              Report07(fecha1,fecha2,region);    
              $('#report07').show();   
            }
        }else if(Reporte == "8"){
          var region1   = $("select[name='ComboBoxRegion'] option:selected").text();
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{

              if(region1 == 'Todos'){
                region1 = '%%'
              }
              Report08(fecha1,fecha2,region1);    
              $('#report08').show();   
            }
        }else if(Reporte == "9"){
            var region1   = $("select[name='ComboBoxRegion'] option:selected").text();
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                if(region1 == 'Todos'){
                region1 = '%%'
              }
              Report09(fecha1,fecha2,region1);    
              $('#report09').show();   
            }
        }else if(Reporte == "10"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
              Report10(fecha1,fecha2,region);    
              $('#report10').show();   
            }
        }else if(Reporte == "11"){
            var region1   = $("select[name='ComboBoxRegion'] option:selected").text();
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                if(region1 == 'Todos'){
                region1 = '%%'
              }
              Report11(fecha1,fecha2,region1);    
              $('#report11').show();   
            }
        }else if(Reporte == "12"){
            var region1   = $("select[name='ComboBoxRegion'] option:selected").text();
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                if(region1 == 'Todos'){
                region1 = '%%'
              }
              Report12(fecha1,fecha2,region1);    
              $('#report12').show();   
            }
        }else{
           Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});


function Report01() {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_01.php";// URL
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
              "url":controller,              
              "data": {},
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
            {"data" : "Editar",
                  render: function ( data, type, row) {   
                  var user = $("[name='usuario']").val();        
                  var botonAgregar = '<button type="button" id="BotonEditar" class="BotonEditar" onclick = "SacarSociaBD(\''+row.FECHAENVIO+'___'+row.NRODNI+'\',1);" id = "BotonEditar"><i class="fas fa-user-plus"></i></button>'; 

                  if (user == "CDIAZ" || user == "gerson" || user == "cdelacruz" || user == "ana.hostiliano"  ) {
                    return botonAgregar; 
                  }
                    return   "";
                  }
            },
                          {"data" : "CODREGION"},
                          {"data" : "FECHAENVIO"},
                          {"data" : "NROCRE_BN"},
                          {"data" : "NRODNI"},
                          {"data" : "APELLIDOSNOMBRES"},
                          {"data" : "FECHACREDITO"},
                          {"data" : "FECHACADUCIDAD"},
                          {"data" : "MONTOENVIADO"},
                          {"data" : "DESASOCIACION"},
                          {"data" : "FLAGINSERT"},
                          {"data" : "TIPOREG"},   
        ],
               pagingType: "simple" 
      });
}//ok

function SacarSociaBD(string){
    let  datos = string.split('___');  
    console.log(datos[0])
    console.log(datos[1]) 

    Swal.fire({
        title: 'Esta seguro de Retirar a la socia?',
        text: "Una vez retirada la socia no se visualizara en el reporte",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'}).then((result) => {
            if (result.value) {
                $.ajax({url:"../../bd/Entidadfinanciera/EditarNoCobrado.php",
                type:"POST",
                datatype: "json",
                data:{FECHAPROCEBN : datos[0],NRODNI : datos[1]}, 
                success:function(data){               
                    if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                    }else{ 
                     Swal.fire('Eliminada','Se ha quitado a la socia','alert') 
                     location.reload();    
                    }
                }    
              });
            }
        })
}

function Report02(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_02.php";// URL
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [ 
                        {"data" : "FECHACOBRANZA"},   
                        {"data" : "CODREGION"},   
                        {"data" : "CODASOCIACION"},   
                        {"data" : "DESASOCIACION"},   
                        {"data" : "CODSOCIA"},    
                        {"data" : "NRODNI"},    
                        {"data" : "APELLIDOS_Y_NOMBRES"},   
                        {"data" : "MONTOCOBRADO",
                          render: function ( data, type, row) {
                            let to = (row.MONTOCOBRADO).split('.'); 
                            let tot = 0;
                            if(to[0] == ""){
                                tot = 0+row.MONTOCOBRADO; 
                            }else{
                                tot = row.MONTOCOBRADO;
                            }
                            return tot;
                          }
                        },    
                        {"data" : "FECHAENVIO"},    
                        {"data" : "FECHAVENCIMIENTO"},    
                        {"data" : "FECHADESEMBOLSO"},   
                        {"data" : "COMISION"},    
                        {"data" : "TIPOCOBRO"},  
       
        ],
               pagingType: "simple" 
      });

 // let html = '<tr>'+
 //             '<td>TOTAL  : 5000</td>'+'</tr>';
 //    $(html).appendTo("#report02 tbody"); 
}//ok

function Report03(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_03.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report03")
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
                        {"data" : "FECHACOBRANZA"},   
                        {"data" : "CODREGION"},   
                        {"data" : "CODASOCIACION"},   
                        {"data" : "DESASOCIACION"},   
                        {"data" : "CODSOCIA"},    
                        {"data" : "NRODNI"},    
                        {"data" : "APELLIDOS_Y_NOMBRES"},   
                        {"data" : "MONTOCOBRADO",
                          render: function ( data, type, row) {
                            let to = (row.MONTOCOBRADO).split('.'); 
                            let tot = 0;
                            if(to[0] == ""){
                                tot = 0+row.MONTOCOBRADO; 
                            }else{
                                tot = row.MONTOCOBRADO;
                            }
                            return tot;
                          }
                        },    
                        {"data" : "FECHAENVIO"},    
                        {"data" : "FECHAVENCIMIENTO"},    
                        {"data" : "FECHADESEMBOLSO"},   
                        {"data" : "COMISION"},    
                        {"data" : "TIPOCOBRO"}, 
       
        ],
               pagingType: "simple" 
      });
} // ok

function Report04(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_04.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report04")
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal,"region":region},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
         
        {"data" : "FECHAENVIO"},  
        {"data" : "CODREGION"}, 
        {"data" : "CODASOCIACION"}, 
        {"data" : "DESASOCIACION"}, 
        {"data" : "CODSOCIA"},  
        {"data" : "NRODNI"},  
        {"data" : "APELLIDOS_Y_NOMBRES"}, 
        {"data" : "MONTO_A_COBRAR", 
        render: function ( data, type, row) {
        let to = (row.MONTO_A_COBRAR).split('.'); 
        let tot = 0;
          if(to[0] == ""){
           tot = 0+row.MONTO_A_COBRAR; 
          }else{
            tot = row.MONTO_A_COBRAR;
          }
           return tot;
          }
        },  
        {"data" : "FECHADESEMBOLSO"}, 
        {"data" : "FECHAVENCIMIENTO"},  
        {"data" : "TIPOCOBRO"}, 
               
        ],
               pagingType: "simple" 
      });
} ///ok

function Report05(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_05.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report05").DataTable({
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
         
        {"data" : "FECHAENVIO"},  
        {"data" : "CODREGION"}, 
        {"data" : "CODASOCIACION"}, 
        {"data" : "DESASOCIACION"}, 
        {"data" : "CODSOCIA"},  
        {"data" : "NRODNI"},  
        {"data" : "APELLIDOS_Y_NOMBRES"}, 
        {"data" : "MONTO_A_COBRAR", 
        render: function ( data, type, row) {
        let to = (row.MONTO_A_COBRAR).split('.'); 
        let tot = 0;
          if(to[0] == ""){
           tot = 0+row.MONTO_A_COBRAR; 
          }else{
            tot = row.MONTO_A_COBRAR;
          }
           return tot;
          }
        },  
        {"data" : "FECHADESEMBOLSO"}, 
        {"data" : "FECHAVENCIMIENTO"},  
        {"data" : "TIPOCOBRO"}, 
        ],
               pagingType: "simple" 
      });
}//ok

function Report06(fechaInicio,fechafinal) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_06.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report06").DataTable({
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
              "data": {"fechaInicio":fechaInicio,"fechafinal":fechafinal},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
         
        {"data" : "nombredia"},  
        {"data" : "fechacobranza"},  
        {"data" : "cantidad"},  
        {"data" : "montocobrado", 
        render: function ( data, type, row) {
        let to = (row.montocobrado).split('.'); 
        let tot = 0;
          if(to[0] == ""){
           tot = 0+row.montocobrado; 
          }else{
            tot = row.montocobrado;
          }
           return tot;
          }
        } 
        ],
               pagingType: "simple" , 
               // "drawCallback":function(){
               //  // alert("la tabla se esta recargando");
               //        var api = this.api();
               //        $(api.column(3).footer()).html(
               //            'Total: '+api.column(3, {page:'current'}).data().sum()
               //        )
               // }
      });
}//ok

function Report07(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_07.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report07").DataTable({
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
                              {"data" : "FECHACOBRANZA"},
                          {"data" : "CODREGION"},
                          {"data" : "NOMBREREGION"},
                          {"data" : "CODASOCIACION"},
                          {"data" : "TIPOASOCIACION"},
                          {"data" : "DESASOCIACION"},
                          {"data" : "CODIGORESGUARDO"},
                           {"data" : "MONTODEPOSITO", 
                            render: function ( data, type, row) {
                            let to = (row.MONTODEPOSITO).split('.'); 
                            let tot = 0;
                              if(to[0] == ""){
                               tot = 0+row.MONTODEPOSITO; 
                              }else{
                                tot = row.MONTODEPOSITO;
                              }
                               return tot;
                              }
                            },                          
                          {"data" : "NUMREGISTRO"},
                          {"data" : "DESCRIPCIONCUENTA_BCP"},     
  
        ],
               pagingType: "simple" 
      });
}//ok

function Report08(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_08.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report08").DataTable({
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
                          {"data" : "REGION"}, 
                          {"data" : "DESASOCIACION"}, 
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
                          {"data" : "FECHADESEMBOLSO"},
                          {"data" : "FECHAPROCESOBIM"},
                          {"data" : "TIPOCOBRO"}    
  
        ],
               pagingType: "simple" 
      });
}//ok

function Report09(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_09.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report09").DataTable({
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
                          {"data" : "REGION"},
                          {"data" : "DESASOCIACION"},
                          {"data" : "PRODUCTO"},
                          {"data" : "CODSOCIA"},
                          {"data" : "APELLIDOSNOMBRES"},
                          {"data" : "NRODNI"},
                          {"data" : "NROCTAAHORROSOCIA"},
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
                          {"data" : "FECHAPROCESO"},
                          {"data" : "FECHADESEMBOLSO"},
                          {"data" : "TIPOCOBRO"},


                          
        ],
               pagingType: "simple" 
      });
}//ok

function Report10(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_10.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report10").DataTable({
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
                          {"data" : "Socia"},
                          {"data" : "NROCUENTA"},
                          {"data" : "Entidadbancaria"},
                          {"data" : "ACTIVO"},
                          {"data" : "FECHACREACION"},
 
                          
        ],
               pagingType: "simple" 
      });
}//ok

function Report11(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_11.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report11").DataTable({
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
                          {"data" : "REGION"},
                          {"data" : "DESASOCIACION"},
                          {"data" : "APELLIDOSNOMBRES"},
                          {"data" : "NRODNI"},
                          {"data" : "CTA_AHORRO"},      
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
                          {"data" : "FECHADESEMBOLSO"},
                          {"data" : "FECHAPROCESOCMT"},
                          {"data" : "TIPOCOBRO"},


                          
        ],
               pagingType: "simple" 
      });
}//ok

function Report12(fechaInicio,fechafinal,region) {
  var controller = "../../bd/Entidadfinanciera/ReportEntidadFinanciera_12.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#report12").DataTable({
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
                          {"data" : "REGION"},
                          {"data" : "DESASOCIACION"}, 
                          {"data" : "APELLIDOSNOMBRES"},
                          {"data" : "NRODNI"},
                          {"data" : "CTA_AHORRO"},
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
                          {"data" : "FECHADESEMBOLSO"},
                          {"data" : "FECHAPROCESOCMP"},
                          {"data" : "TIPOCOBRO"},


                          
        ],
               pagingType: "simple" 
      });
}//ok
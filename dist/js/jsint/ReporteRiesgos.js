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
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false); 
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);             
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);

            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);                
          
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);              
         
        } else if ($(this).val() === "4") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);  
            $("#mtomayor").prop("disabled", false);                
             
        }else if ($(this).val() === "5") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
             
        }else if ($(this).val() === "6") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", true);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);              
         
        }else if ($(this).val() === "0") {         
            Cargar();
  
        }
});


$(document).on("click", "#Btn_Ejecutar_ReportesRiesgo", function (e){
   
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tiporeporte'] option:selected").val();
        var fecha1 = $("[name='fechaInicio']").val();
        var fecha2 = $("[name='fechafin']").val();
        if(Reporte == "1"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                // var post = { fecha: fecha, region: cbx}
                Report01(fecha,region);     
              }

        }else if(Reporte == "2"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                // var post = { fecha: fecha, region: cbx}
                Report02(fecha,region);   
              }

        }else if(Reporte == "3"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                Report03(fecha,region);    
              }

        }else if(Reporte == "4"){

          var mtomayor = $("[name='mtomayor']").val();
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
              Report04(fecha1,fecha2,region,mtomayor);
            }

        }else if(Reporte == "5"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
              Report05(region,fecha1,fecha2);    
            }
        }else if(Reporte == "6"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else{
              Report06(fecha1,fecha2);    
              
            }
        }else{
           Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});


function Report01(fecha1,region1){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Riesgos/ReportRiesgos_01.php",
      type:"POST",
      title : name_xlsx,
      dataType: 'json',
       data:{"fecha":fecha1,"region":region1},
      success: function (response) {

        // const data = response
        const worksheet = XLSX.utils.json_to_sheet(  response.data );
        const workbook = {
            Sheets:{
                'data':worksheet
            },
            SheetNames:['data']
         };
        const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
        // console.log(excelBuffer);
        saveAsExcel(excelBuffer,name_xlsx)
        $("#modal-default-1").modal("hide");
      }
    }); 
}

function Report02(fecha,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Riesgos/ReportRiesgos_02.php",
      type:"POST",
      title : name_xlsx,
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
  
        const worksheet = XLSX.utils.json_to_sheet(  response.data );
        const workbook = {
            Sheets:{
                'data':worksheet
            },
            SheetNames:['data']
         };
        const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
        // console.log(excelBuffer);
        saveAsExcel(excelBuffer,name_xlsx)
        $("#modal-default-1").modal("hide");
      }
    }); 
}

function Report03(fecha,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Riesgos/ReportRiesgos_03.php",
      type:"POST",
      title : name_xlsx,
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
 
        const worksheet = XLSX.utils.json_to_sheet(  response.data );
        const workbook = {
            Sheets:{
                'data':worksheet
            },
            SheetNames:['data']
         };
        const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
        // console.log(excelBuffer);
        saveAsExcel(excelBuffer,name_xlsx)
        $("#modal-default-1").modal("hide");
      }
    }); 
}

function Report04(fechainicio,fechafin,region,mtomayor){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Riesgos/ReportRiesgos_04.php",
      type:"POST",
      title : name_xlsx,
      dataType: 'json',
       data:{"fechaInicio":fechainicio,"fechafinal":fechafin,"region":region,"mtomayor":mtomayor},
      success: function (response) {
 
        const worksheet = XLSX.utils.json_to_sheet(  response.data );
        const workbook = {
            Sheets:{
                'data':worksheet
            },
            SheetNames:['data']
         };
        const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
        // console.log(excelBuffer);
        saveAsExcel(excelBuffer,name_xlsx)
        $("#modal-default-1").modal("hide");
      }
    }); 
}

function Report05(region2,fechainicio2,fechafin2){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Riesgos/ReportRiesgos_05.php",
      type:"POST",
      title : name_xlsx,
      dataType: 'json',
       data:{"region":region2,"fechaInicio":fechainicio2,"fechafinal":fechafin2},
      success: function (response) {
 
        const worksheet = XLSX.utils.json_to_sheet(  response.data );
        const workbook = {
            Sheets:{
                'data':worksheet
            },
            SheetNames:['data']
         };
        const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
        // console.log(excelBuffer);
        saveAsExcel(excelBuffer,name_xlsx)
        $("#modal-default-1").modal("hide");
      }
    }); 
}

function Report06(fechainicio,fechafin){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Riesgos/ReportRiesgos_06.php",
      type:"POST",
      dataType: 'json',
       data:{"fechaInicio":fechainicio,"fechafinal":fechafin},
      success: function (response) {
 
        const worksheet = XLSX.utils.json_to_sheet(  response.data );
        const workbook = {
            Sheets:{
                'data':worksheet
            },
            SheetNames:['data']
         };
        const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
        // console.log(excelBuffer);
        saveAsExcel(excelBuffer,name_xlsx)
        $("#modal-default-1").modal("hide");
      }
    }); 
}


function destruir(table){
  $(table).dataTable().fnClearTable();
  $(table).dataTable().fnDestroy();
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

function saveAsExcel(buffer,filename){
  const data = new Blob([buffer],{ type : EXCEL_TYPE});
  saveAs(data,filename+EXCEL_EXTENSION);
}

 
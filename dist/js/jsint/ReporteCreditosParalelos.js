$(document).ready(Cargar());
function Cargar(){
   $("#fechaInicio").prop("disabled", true);
   $("#fechafin").prop("disabled", true);  
   $("#MESAÑO").prop("disabled", true);   
   $("#ComboBoxRegion").prop("disabled", true);
}

$("#ComboBox").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
         	$("#fechaInicio").prop("disabled", true);
   			$("#fechafin").prop("disabled", true); 
        }else if ($(this).val() === "2") {
            $("#fechaInicio").prop("disabled", false);
   			$("#fechafin").prop("disabled", false); 
            $("#ComboBoxRegion").prop("disabled", false);  
         	$("#MESAÑO").prop("disabled", true);
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
         	$("#fechaInicio").prop("disabled", true);
   			$("#fechafin").prop("disabled", true); 
        }else if ($(this).val() === "4") {
            $("#fechaInicio").prop("disabled", false);
   			$("#fechafin").prop("disabled", false); 
            $("#ComboBoxRegion").prop("disabled", false);  
         	$("#MESAÑO").prop("disabled", true);
        } else if ($(this).val() === "5") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
         	$("#fechaInicio").prop("disabled", true);
   			$("#fechafin").prop("disabled", true); 
        }else if ($(this).val() === "6") {
            $("#fechaInicio").prop("disabled", false);
   			$("#fechafin").prop("disabled", false); 
            $("#ComboBoxRegion").prop("disabled", false);  
         	$("#MESAÑO").prop("disabled", true);
        }else if ($(this).val() === "0") {         
            Cargar(); 
        }
});


$(document).on("click", "#Btn_Ejecutar_ReportesParalelos", function (e){
   
        var fecha = $("[name='MESAÑO']").val();
        var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
        var Reporte = $("select[name='tiporeporte'] option:selected").val();
        var fecha1 = $("[name='fechaInicio']").val();
        var fecha2 = $("[name='fechafin']").val();

        if(Reporte == "1"){
            if(fecha.length == ""){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                // // var post = { fecha: fecha, region: cbx}
                // // Report_Varios_14_Cartera_activa(fecha,region);  
                // Swal.fire({
                //   title: 'En breve se descargara el excel',
                //   showClass: {
                //     popup: 'animate__animated animate__fadeInDown'
                //   },
                //   hideClass: {
                //     popup: 'animate__animated animate__fadeOutUp'
                //   }
                // })    
                Report_CreditosParalelos_01(fecha,region);                
                // $('#example').show();   
              }

        }else if(Reporte == "2"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
              }else{
                // // var post = { fecha: fecha, region: cbx}
                // // Report_Varios_14_Cartera_activa(fecha,region);  
                // Swal.fire({
                //   title: 'En breve se descargara el excel',
                //   showClass: {
                //     popup: 'animate__animated animate__fadeInDown'
                //   },
                //   hideClass: {
                //     popup: 'animate__animated animate__fadeOutUp'
                //   }
                // })    
                Report_CreditosParalelos_02(fecha1,fecha2,region);                
                // $('#example').show();   
              }

        }else if(Reporte == "3"){
            if(fecha.length == ""){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                // var post = { fecha: fecha, region: cbx}
                // Report_Varios_14_Cartera_activa(fecha,region);  
                // Swal.fire({
                //   title: 'En breve se descargara el excel',
                //   showClass: {
                //     popup: 'animate__animated animate__fadeInDown'
                //   },
                //   hideClass: {
                //     popup: 'animate__animated animate__fadeOutUp'
                //   }
                // })    
                Report_CreditosParalelos_03(fecha,region);                
                // $('#example').show();   
              }

        }else if(Reporte == "4"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
              }else{
                // var post = { fecha: fecha, region: cbx}
                // Report_Varios_14_Cartera_activa(fecha,region);  
                // Swal.fire({
                //   title: 'En breve se descargara el excel',
                //   showClass: {
                //     popup: 'animate__animated animate__fadeInDown'
                //   },
                //   hideClass: {
                //     popup: 'animate__animated animate__fadeOutUp'
                //   }
                // })    
                Report_CreditosParalelos_04(fecha1,fecha2,region);                
                // $('#example').show();   
              }

        }else if(Reporte == "5"){
            if(fecha.length == ""){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
              }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})

              }else{
                // var post = { fecha: fecha, region: cbx}
                // Report_Varios_14_Cartera_activa(fecha,region);  
                // Swal.fire({
                //   title: 'En breve se descargara el excel',
                //   showClass: {
                //     popup: 'animate__animated animate__fadeInDown'
                //   },
                //   hideClass: {
                //     popup: 'animate__animated animate__fadeOutUp'
                //   }
                // })    
                Report_CreditosParalelos_05(fecha,region);                
                // $('#example').show();   
              }

        }else if(Reporte == "6"){
            if(fecha2 < fecha1){
              Swal.fire({icon: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe elegir una region'})
              }else{
    
                Report_CreditosParalelos_06(fecha1,fecha2,region);                
                // $('#example').show();   
              }

        }else{
           Swal.fire({icon: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});

function Report_CreditosParalelos_01(fecha,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/CreditosParalelos/ReporteCreditosParalelos_01.php",
      type:"POST",
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
        console.log(excelBuffer);
        saveAsExcel(excelBuffer,name_xlsx);
        $("#modal-default-1").modal("hide");
      }
    }); 
}

function Report_CreditosParalelos_02(fecha1,fecha2,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/CreditosParalelos/ReporteCreditosParalelos_02.php",
      type:"POST",
      dataType: 'json',
       data:{"fechainicio":fecha1,"fechafinal":fecha2,"region":region},
      success: function (response) {
        // console.log( response.data );   



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

function Report_CreditosParalelos_03(fecha,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/CreditosParalelos/ReporteCreditosParalelos_03.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );   



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

function Report_CreditosParalelos_04(fecha1,fecha2,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/CreditosParalelos/ReporteCreditosParalelos_04.php",
      type:"POST",
      dataType: 'json',
       data:{"fechainicio":fecha1,"fechafinal":fecha2,"region":region},
      success: function (response) {
        // console.log( response.data );   



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

function Report_CreditosParalelos_05(fecha,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/CreditosParalelos/ReporteCreditosParalelos_05.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );   



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

function Report_CreditosParalelos_06(fecha1,fecha2,region){  
  // Invoca Al modal y no permite cerrarlo
  $("#modal-default-1").modal({backdrop: 'static', keyboard: false});   
  //Agrega la imagen de carga
  $('#content').html('<div class="loading"><img src="../../build/loading/images/loader.gif" alt="loading" /> Generando Reporte, espere por favor...</div>');  
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/CreditosParalelos/ReporteCreditosParalelos_06.php",
      type:"POST",
      dataType: 'json',
       data:{"fechainicio":fecha1,"fechafinal":fecha2,"region":region},
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
 
 

$(document).ready(Cargar());
function Cargar(){
   $("#fechaInicio").prop("disabled", true);
   $("#fechafin").prop("disabled", true);  
   $("#MESAÑO").prop("disabled", true);   
   $("#ComboBoxRegion").prop("disabled", true);
   $("#mtomayor").prop("disabled", true);
   $("#FECHAESTUDIO").prop("disabled", true);
   $("#TipoCambio").prop("disabled", true);
}
$("#ComboBoxMigracion").change( function() {
        if ($(this).val() === "1") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "2") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "3") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "4") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "5") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "6") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", false);
        }else if ($(this).val() === "7") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "7") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "8") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "9") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "10") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "11") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "12") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "13") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "14") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "15") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "16") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "17") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", false);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "18") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "19") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "20") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "21") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "22") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "23") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "24") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "25") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "26") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "27") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "28") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        } else if ($(this).val() === "29") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "30") {
            $("#MESAÑO").prop("disabled", true);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", false);
            $("#fechafin").prop("disabled", false);
            $("#mtomayor").prop("disabled", true);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        } else if ($(this).val() === "31") {
            $("#MESAÑO").prop("disabled", false);
            $("#ComboBoxRegion").prop("disabled", false);  
            $("#fechaInicio").prop("disabled", true);
            $("#fechafin").prop("disabled", true);
            $("#mtomayor").prop("disabled", false);
            $("#FECHAESTUDIO").prop("disabled", true);
            $("#TipoCambio").prop("disabled", true);
        }else if ($(this).val() === "0") {         
            Cargar();
            $('#example').hide();
            destruir('#example');
        }
});

 
$(document).on("click", "#Btn_Ejecutar_CAS", function (e){
   
        var fecha1 = $("[name='fechaProceso']").val();
        if(fecha1.length == ""){
          Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
        }else{
           Report_Cartera_Activa_semanal(fecha1);
        }

});
$(document).on("click", "#Btn_Ejecutar_RECU", function (e){
   
        var fecha1 = $("[name='fechaInicio1']").val();
        var fecha2 = $("[name='fechafin1']").val();
        if(fecha1.length == ""){
          Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
        }else{
        // var post = { fechaIn: fecha1 , fechafi: fecha2}
          Report_Recuperaciones(fecha1,fecha2);
        }

});

$(document).on("click", "#Btn_Ejecutar_Migra", function (e){
    
    var fecha = $("[name='MESAÑO']").val();
    var region   = $("select[name='ComboBoxRegion'] option:selected").val();   
    var Reporte = $("select[name='tiporeporte'] option:selected").val();
    var fecha1 = $("[name='fechaInicio']").val();
    var fecha2 = $("[name='fechafin']").val();
    var mtomayor = $("[name='mtomayor']").val();
    var tipoCambio = $("[name='TipoCambio']").val();
    var fecha3 = $("[name='FECHAESTUDIO']").val();

    if(Reporte == "1"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado01(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "2"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado02(fecha1,fecha2,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "3"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado03(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "4"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado04(fecha1,fecha2,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "5"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado05(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "6"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else if(tipoCambio = 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Ingresar un tipo de cambio'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado06(fecha1,fecha2,region,tipoCambio);                
                // $('#example').show();   
            }

    }else if(Reporte == "7"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado07(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "8"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado08(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "9"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado09(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "10"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado10(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "11"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado11(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "12"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado12(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "13"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado13(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "14"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                }) 
                ReporteMigrado14(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "15"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else if(mtomayor == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar un monto limite'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado15(fecha1,fecha2,region,mtomayor);                
                // $('#example').show();   
            }

    }else if(Reporte == "16"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado16(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "17"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else if(fecha3.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha de estudio'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado17(fecha1,fecha2,region,fecha3);                
                // $('#example').show();   
            }

    }else if(Reporte == "18"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})

            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado18(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "19"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else if(mtomayor.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar un monto limite'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado19(fecha,region,mtomayor);                
                // $('#example').show();   
            }

    }else if(Reporte == "20"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            } else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado20(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "21"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado21(fecha1,fecha2,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "22"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else if(mtomayor == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar un monto limite'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado22(fecha1,fecha2,region,mtomayor);                
                // $('#example').show();   
            }

    }else if(Reporte == "23"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado23(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "24"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado24(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "25"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado25(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "26"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado26(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "27"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado27(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "28"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado28(fecha1,fecha2,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "29"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado29(fecha,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "30"){
            if(fecha2 < fecha1){
              Swal.fire({type: 'error',title: 'Error!!',text: 'Fecha de inicio no puede ser mayor a fecha final'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 2000
                })
                ReporteMigrado30(fecha1,fecha2,region);                
                // $('#example').show();   
            }

    }else if(Reporte == "31"){
            if(fecha.length == ""){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe ingresar una fecha'})
            }else if(region == 0){
                Swal.fire({type: 'error',title: 'Error!!',text: 'Debe elegir una region'})
            }else{
                Swal.fire({
                  iicon: 'info',
                  title: 'Se estan cargando los datos',
                  showConfirmButton: false,
                  timer: 1500
                })                    
                ReporteMigrado31(fecha,region);                
                // $('#example').show();   
            }

    }else{
           Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
    }      

});

function Report_Cartera_Activa_semanal(fecha1) {
  var controller = "../../bd/Operaciones/reportOpera.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#example")
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
              "data": {"fechaProceso": fecha1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "FECHAPROCESO"},
        {"data" : "TIPODECREDITO"},
        {"data" : "NUMCREDITO_SOCIA09"},
        {"data" : "NUMCREDITO_ASOC09"},
        {"data" : "NUMCREDITO_SOCIA14"},
        {"data" : "NUMCREDITO_ASOC14"},
        {"data" : "NombreRegion"},
        {"data" : "CODASOCIACION"},
        {"data" : "DESASOCIACION"},
        {"data" : "CODSOCIA"},
        {"data" : "NombreSocia"},
        {"data" : "NRODNI"},
        {"data" : "CODMONEDA"},
        {"data" : "SITUACION"},
        {"data" : "FECHACANCELACION"},
        {"data" : "AHORRO_FIN"},
        {"data" : "DIASMORA"}, 
        {"data" : "SALDOIGV",
            render: function ( data, type, row) {
            let to = (row.SALDOIGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SALDOIGV; 
            }else{
            tot = row.SALDOIGV;
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
        {"data" : "SALDOinteres",
            render: function ( data, type, row) {
            let to = (row.SALDOinteres).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SALDOinteres; 
            }else{
            tot = row.SALDOinteres;
            }
            return tot;
            }
          }, 
        {"data" : "SALDOcapirtal",
            render: function ( data, type, row) {
            let to = (row.SALDOcapirtal).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SALDOcapirtal; 
            }else{
            tot = row.SALDOcapirtal;
            }
            return tot;
            }
          }, 
        {"data" : "SALDOXSOCIA",
            render: function ( data, type, row) {
            let to = (row.SALDOXSOCIA).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SALDOXSOCIA; 
            }else{
            tot = row.SALDOXSOCIA;
            }
            return tot;
            }
          }, 
        {"data" : "TASAINTERES",
            render: function ( data, type, row) {
            let to = (row.TASAINTERES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.TASAINTERES; 
            }else{
            tot = row.TASAINTERES;
            }
            return tot;
            }
          },
        {"data" : "PROMO"}, 
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
        {"data" : "NUEVACREDITO"},
        {"data" : "CODPRODUCTO"},
        {"data" : "CODTARIFA"},
        {"data" : "TIPOASOC"},
        {"data" : "CODPROMOTORA"},
        {"data" : "CICLO"},
        {"data" : "DIAS_FINCRE"},
        {"data" : "COD_BAJA"},
        {"data" : "DIAS_VENC"},
        {"data" : "DNIPROMOTORA"}, 
        {"data" : "DEUDA_CUOVIG",
            render: function ( data, type, row) {
            let to = (row.DEUDA_CUOVIG).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.DEUDA_CUOVIG; 
            }else{
            tot = row.DEUDA_CUOVIG;
            }
            return tot;
            }
          },
        {"data" : "CODDEPA_ASOC"},
        {"data" : "CODPROVI_ASOC"},
        {"data" : "CODDISTRI_ASOC"},
        {"data" : "NIVELRIESGO"},
        {"data" : "TIPODEUDA"},
        {"data" : "AREA"},
        {"data" : "SECECO"},
        {"data" : "CODCIIU"},
        {"data" : "FECHADESEMBOLSO"},
        {"data" : "CUOTAS"},
        {"data" : "FECHAFINCREDITO"}, 
        {"data" : "CALCINTERES",
            render: function ( data, type, row) {
            let to = (row.CALCINTERES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.CALCINTERES; 
            }else{
            tot = row.CALCINTERES;
            }
            return tot;
            }
          }       
        ],
               pagingType: "simple" 
      });
}//ok

function Report_Recuperaciones(fecha1,fecha2) {
  var controller = "../../bd/Operaciones/reportRecu.php";// URL
  var name_xlsx = $('select[name="tiporeporte"] option:selected').text();  
  var table = $("#example")
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
              "data": {"fechaIn": fecha1 , "fechafi": fecha2},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
     {"data" : "NOMSUCURSAL_CRE"},
         {"data" : "ENTIDAD"},
         {"data" : "DES_MONEDA"},
         {"data" : "TIPOPRODUCTO"},
         {"data" : "FEC_MOVIM"}, 
         {"data" : "MONTOCAPITAL",
            render: function ( data, type, row) {
            let to = (row.MONTOCAPITAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOCAPITAL; 
            }else{
            tot = row.MONTOCAPITAL;
            }
            return tot;
            }
          }, 
         {"data" : "MONTOINTERES",
            render: function ( data, type, row) {
            let to = (row.MONTOINTERES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOINTERES; 
            }else{
            tot = row.MONTOINTERES;
            }
            return tot;
            }
          }, 
         {"data" : "MONTOIGV",
            render: function ( data, type, row) {
            let to = (row.MONTOIGV).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOIGV; 
            }else{
            tot = row.MONTOIGV;
            }
            return tot;
            }
          }, 
         {"data" : "MONTOINTMORATORIO",
            render: function ( data, type, row) {
            let to = (row.MONTOINTMORATORIO).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOINTMORATORIO; 
            }else{
            tot = row.MONTOINTMORATORIO;
            }
            return tot;
            }
          }, 
         {"data" : "SUBTOTAL",
            render: function ( data, type, row) {
            let to = (row.SUBTOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.SUBTOTAL; 
            }else{
            tot = row.SUBTOTAL;
            }
            return tot;
            }
          }, 
         {"data" : "MONTSEGDES",
            render: function ( data, type, row) {
            let to = (row.MONTSEGDES).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTSEGDES; 
            }else{
            tot = row.MONTSEGDES;
            }
            return tot;
            }
          }, 
         {"data" : "MONTCOMI",
            render: function ( data, type, row) {
            let to = (row.MONTCOMI).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTCOMI; 
            }else{
            tot = row.MONTCOMI;
            }
            return tot;
            }
          }, 
         {"data" : "MONTOTOTAL",
            render: function ( data, type, row) {
            let to = (row.MONTOTOTAL).split('.'); 
            let tot = 0;
            if(to[0] == ""){
            tot = 0+row.MONTOTOTAL; 
            }else{
            tot = row.MONTOTOTAL;
            }
            return tot;
            }
          },      
        ],
               pagingType: "simple" 
      });
}//ok

function ReporteMigrado01(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
     
    $.ajax({
      url:"../../bd/Operaciones/reportMi01.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
 
        // Invoca Al modal y no permite cerrarlo
        $("#modal-default-1").modal({backdrop: 'static', keyboard: false}); 
          
        //Agrega la imagen de carga
        $('#content').html('<div class="loading"><img src="../../../../build/loading/images/loader.gif" alt="loading" /><br/>Un momento, por favor...</div>');    

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
         //Cerramos el modal
         $("#modal-default-1").modal("hide");
      }
    }); 
}//ok

function ReporteMigrado02(fecha1,fecha2,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi02.php",
      type:"POST",
      dataType: 'json',
       data:{"fechaInicio":fecha1,"fechafinal":fecha2,"region":region},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}//ok

function ReporteMigrado03(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi03.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}//ok

function ReporteMigrado04(fecha1,fecha2,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi04.php",
      type:"POST",
      dataType: 'json',
       data:{"fechaInicio":fecha1,"fechafinal":fecha2,"region":region},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}//ok

function ReporteMigrado05(fecha,region,mtomayor){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi05.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region,"mtomayor":mtomayor},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}//ok

function ReporteMigrado06(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi06.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}//ok


function ReporteMigrado07(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi07.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado08(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi08.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado09(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi09.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado10(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi10.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado11(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi11.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado12(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi12.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado13(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi13.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado14(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi14.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) { 
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado15(fecha1,fecha2,region,mtomayor){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi15.php",
      type:"POST",
      dataType: 'json',
       data:{"fechaInicio":fecha1,"fechafinal":fecha2,"region":region,"mtomayor":mtomayor},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}

function ReporteMigrado16(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi16.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado17(fecha1,fecha2,region,fecha3){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi17.php",
      type:"POST",
      dataType: 'json',
       data:{"region":region,"fechaInicio":fecha1,"fechafinal":fecha2,"fechaestudio":fecha3},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}

function ReporteMigrado18(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi18.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado19(fecha,region,mtomayor){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi19.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region,"mtomayor":mtomayor},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}
 
function ReporteMigrado20(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi20.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado21(fecha1,fecha2,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi21.php",
      type:"POST",
      dataType: 'json',
       data:{"fechaInicio":fecha1,"fechafinal":fecha2,"region":region},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}

function ReporteMigrado22(fecha1,fecha2,region,mtomayor){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi22.php",
      type:"POST",
      dataType: 'json',
       data:{"fechaInicio":fecha1,"fechafinal":fecha2,"region":region,"mtomayor":mtomayor},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado23(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi23.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado24(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi24.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado25(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi25.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado26(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi26.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado27(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi27.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado28(fecha1,fecha2,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi28.php",
      type:"POST",
      dataType: 'json',
       data:{"region":region,"fechafinal":fecha2,"fechaInicio":fecha1},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}

function ReporteMigrado29(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi29.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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
      }
    }); 
}

function ReporteMigrado30(fecha1,fecha2,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi30.php",
      type:"POST",
      dataType: 'json',
       data:{"fechaInicio":fecha1,"fechafinal":fecha2,"region":region},
      success: function (response) {  
      Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })   
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
      }
    }); 
}



function ReporteMigrado31(fecha,region){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Operaciones/reportMi31.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
        // console.log( response.data );
        // const data = response
        Swal.fire({
                  title: 'En breve se descargara el excel',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })  
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

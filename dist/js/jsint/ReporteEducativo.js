$(document).ready(Cargar());

function Cargar(){
   $("#ano").prop("disabled", true);
   $("#mes").prop("disabled", true); 
 
}

function destruir(table){
      $(table).dataTable().fnClearTable();
    $(table).dataTable().fnDestroy();
 }

$("#ComboBox").change( function() {
        if ($(this).val() === "1") {
            $("#ano").prop("disabled", false);
            $("#mes").prop("disabled", false);              
        }else if ($(this).val() === "0") {         
            Cargar();
  
        }
});


$(document).on("click", "#Btn_Ejecutar_ReportesEducativo", function (e){
   
        var ano = $("[name='ano']").val();
        var mes = $("[name='mes']").val();
        var Reporte = $("select[name='tiporeporte'] option:selected").val();
        if(Reporte == "1"){
          Report01(ano,mes);      
        }else{
           Swal.fire({type: 'error',title: 'Error!!',text: 'Debe Seleccionar un Reporte'})
        }      

});


function Report01(ano,mes){  
    var name_xlsx = $('select[name="tiporeporte"] option:selected').text();   
    $.ajax({
      url:"../../bd/Educativo/Reporte_Educativa_Actividades.php",
      type:"POST",
      title : name_xlsx,
      dataType: 'json',
       data:{ano:ano,mes:mes},
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


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

function saveAsExcel(buffer,filename){
    const data = new Blob([buffer],{ type : EXCEL_TYPE});
    saveAs(data,filename+EXCEL_EXTENSION);
}

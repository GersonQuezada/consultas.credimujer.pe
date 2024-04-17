'use strict';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


function downloadAsExcel(){
    var fecha = '2020-08'
    var region = '%%' 
    $.ajax({
      url:"../../bd/reportMi14.php",
      type:"POST",
      dataType: 'json',
       data:{"fecha":fecha,"region":region},
      success: function (response) {
 

        console.log( response.data );         
  
        
        const data = response
        const worksheet = XLSX.utils.json_to_sheet(  response.data );
        const workbook = {
            Sheets:{
                'data':worksheet
            },
            SheetNames:['data']
         };
        const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
        console.log(excelBuffer);
        saveAsExcel(excelBuffer,'prueba')
      }
    });
 
 
  
}

function saveAsExcel(buffer,filename){
    const data = new Blob([buffer],{ type : EXCEL_TYPE});
    saveAs(data,filename+'_export_'+new Date().getTime()+EXCEL_EXTENSION);
}

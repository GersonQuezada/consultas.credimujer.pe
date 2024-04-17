/*$(document).on("click", "#Btn_Ejecutar_ReportesConsolidado", function (e){
        var fecha = $("[name='MESAÑO']").val();
        Report(fecha);   
       
});*/


function Report(fecha1) {
  var controller = "../../../CRUD/Indicadores/ReportIndiConsolidado.php";// URL
  var name_xlsx = "Consolidado"; 
  var table = $('#report01').DataTable({
        dom: "<''row<''f><''i><B>>rtp",
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
              "data": {"fecha":fecha1},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
            },

       columns:
        [
        {"data" : "CODCONCEPTO"},
        {"data" : "DESCONCEPTO"},
        {"data" : "ANO"},
        {"data" : "MES"},
        {"data" : "BBCC"},
        {"data" : "GGSS"},
        {"data" : "CCPP"},
        {"data" : "PERIODO"},
        {"data" : "MES"},
        {"data" : "BBCC"},
        {"data" : "GGSS"},
        {"data" : "CCPP"},
        {"data" : "PERIODO"},        
        {"data" : "TRI"},
        {"data" : "BBCC"},
        {"data" : "GGSS"},
        {"data" : "CCPP"},
        {"data" : "PERIODO"},
        {"data" : "TOT"},
        {"data" : "BBCC"},
        {"data" : "GGSS"},
        {"data" : "CCPP"},
        {"data" : "PERIODO"}
        // {"data" : "SUMADSBNUEVAS",
        //  render: function ( data, type, row) {
        //     let to = (row.SUMADSBNUEVAS).split('.'); 
        //     let tot = 0;
        //     if(to[0] == ""){
        //     tot = 0+row.SUMADSBNUEVAS; 
        //     }else{
        //     tot = row.SUMADSBNUEVAS;
        //     }
        //     return tot;
        //     }
        // }     
        ],
               pagingType: "simple" 
      });
}

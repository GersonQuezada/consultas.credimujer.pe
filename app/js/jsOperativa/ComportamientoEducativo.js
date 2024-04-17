$(document).ready(Cargar());
function Cargar(){ 	 
   $("#SociaCompleta").prop("disabled", true);
   // document.getElementById('Desactivar').style.display = 'none'; 
   // document.getElementById('Activar').style.display = 'none'; 
}
$("#MESAÑO").change( function() {
	$("#SociaCompleta").prop("disabled", false);
	var fecha = document.getElementById('MESAÑO').value;
	
	$("#SociaCompleta").select2();

        	$("#SociaCompleta").select2({
           	 placeholder: 'Seleccione una socia',
	            ajax: {
	                url: '../../bd/Educativo/BusquedaSocia.php',
	                dataType: 'json',
	                type:'POST',
	                delay: 250,
	                data: function (data) {
	                    return {
	                        name: data.term// search term ,  
	                        ,fecha : fecha                    
	                    };
	                },
	                processResults: function (response) {
	                    return {
	                        results:response
	                    };
	                },
	                cache: true
	                }
            });
})

$(document).on("click", "#insertar", function (e){

   var SociaCompleta = $("select[name='SociaCompleta'] option:selected").val(); 
   var fecha = document.getElementById('MESAÑO').value;
   ListarSocia(SociaCompleta,fecha);

});

function ListarSocia(name,fecha) {
  var controller = "../../bd/Educativo/ListarSocia.php";// URL  
  var table = $("#ListaSocia").DataTable({
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
        title: "Asistencia Socia",
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
                "url": "../../plugins/Spanish.js",},
        "ajax":{
              "cache": false,
              "method":"POST",
              "data": {name:name,fecha:fecha},
              "url":controller,
              "dataType": "json",
              "deferRender": true,
        },
       	columns:[
       	{"data" : "Accion",
          render: function ( data, type, row) {
            botonEliminar = '<button type="button" id="BotonEditarTabla" class="BotonEditarTabla" onclick = "EditModal(\''+row.CODSOCIA+'___'+row.DESASOCIACION+'___'+row.APELLIDOSNOMBRES+'___'+row.ASISTEN_TAT+'___'+row.ASISTEN_TCCA+'\');"  id = "BotonEditar"><i class="fas fa-pencil-alt"></i></button>';
            boton = botonEliminar;
            return boton;     
          }
        }, 
        {"data" : "DESASOCIACION"},
        {"data" : "APELLIDOSNOMBRES"},
        {"data" : "ASISTEN_TAT"},
        {"data" : "ASISTEN_TCCA"}],
        pagingType: "simple" 
      });
}

function EditModal(string){
 let  datos = string.split('___'); 
 var codsocia = datos[0];        
 var Socia = datos[2];
 var ASISTEN_TAT = datos[3];
 var ASISTEN_TCCA = datos[4]; 
 var fecha = document.getElementById('MESAÑO').value;
 document.getElementById('NombreSocia').value = Socia;
 document.getElementById('TAT').value = ASISTEN_TAT;
 document.getElementById('TCCA').value = ASISTEN_TCCA;
 document.getElementById('CODSO').value = codsocia;
 document.getElementById('DATE').value = fecha;
 $('.modal').fadeIn();
}

function editarsocia(){
 var Socia = document.getElementById('NombreSocia').value;
 var ASISTEN_TAT = document.getElementById('TAT').value;
 var ASISTEN_TCCA = document.getElementById('TCCA').value;
 var codsocia = document.getElementById('CODSO').value;
 var fecha = document.getElementById('DATE').value;
 // if( ASISTEN_TAT = null or ASISTEN_TCCA = null ){
console.log(ASISTEN_TAT);
console.log(ASISTEN_TCCA);
 // }s
 $.ajax({
  type:"POST",
  url:"../../bd/Educativo/RegistraAsistenciaTaller.php",
  data:{codsocia:codsocia,fecha:fecha,ASISTEN_TAT:ASISTEN_TAT,ASISTEN_TCCA:ASISTEN_TCCA}, 
  dataType: "json",              
  success:function(data){  
    if(data = '[1]'){
      Swal.fire('Comunicado','Se guardaron los cambios','success')   
      location.reload(); 
    }else{
      Swal.fire('Comunicado','Error al guardar la Asistencia','Error')    
    }                 
   }
  });

}

function cerrarModal(){
  $('.modal').fadeOut();
  document.getElementById('NombreSocia').value = "";
  document.getElementById('TAT').value = "";
  document.getElementById('TCCA').value = "";
  document.getElementById('CODSO').value = "";
  document.getElementById("DATE").value = '0';
}
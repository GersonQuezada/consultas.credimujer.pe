
function AbrirModal(string){
  let  datos = string.split('___'); 
  var nrodni = datos[0];
  var region = datos[2];
  var Nombresocia = datos[1];
  var TipoCredito = datos[3];
  var MTODsmbolso = datos[4];
  document.getElementById('NRODNI').value = nrodni;     
  document.getElementById('APELLIDOSNOMBRES').value = Nombresocia;
  document.getElementById('TIPOCREDITO').value = TipoCredito;
  document.getElementById('MTODESEMBOLSADO').value = MTODsmbolso;
  $('#modalDJBN').fadeIn();
}



 


function cerrarModal(Modal){
  $(Modal).fadeOut();
  document.getElementById('NRODNI').value = "";
  document.getElementById('APELLIDOSNOMBRES').value = "";
   document.getElementById('TIPOCREDITO').value = "";
  document.getElementById('MTODESEMBOLSADO').value = "";
}

function EditarDJ(){
  var DNI = document.getElementById('NRODNI').value;
  var APELLIDOSNOMBRE = document.getElementById('APELLIDOSNOMBRES').value;
  var TIPOCREDITO = document.getElementById('TIPOCREDITO').value;
  var MTODESEMBOLSO = document.getElementById('MTODESEMBOLSADO').value;
 
  Swal.fire({
  input: 'password',   
  showCancelButton: true, 
  title: 'Contraseña de Confirmacion',
  text: 'Digite la llave' 
  }).then((result) => {
    if (result.value == "Credi2020") {
         $.ajax({url:"../../bd/Entidadfinanciera/EditaSociaDJBN.php",
              type:"POST",
              dataType: "json",
              data:{DNI:DNI,APELLIDOSNOMBRE:APELLIDOSNOMBRE,TIPOCREDITO:TIPOCREDITO,MTODESEMBOLSO:MTODESEMBOLSO}, 
              success:function(data){               
              if(data == "[2]" || data == null){
                     Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
              }else{ 
                     Swal.fire('Modificado!','Se ha guardado los cambios','success')    
                     Listar();
                     cerrarModal();
                }
              }    
         });
    }else{
      Swal.fire('Hubo un error!','Contraseña Incorrecta o no ingresada','info') 
    }
    });
}

function RevertirSociaDJ(string){
  let  datos = string.split('___'); 
  // let usuario = $("[name='usuario']").val();
  let DNI = datos[0];
  let APELLIDOSNOMBRE = datos[1];
  let TIPOCREDITO = datos[3];
  let MTODESEMBOLSO = datos[4];
  Swal.fire({
    input: 'password',   
    showCancelButton: true, 
    title: 'Contraseña de Confirmacion',
    text: 'Digite la llave' 
    }).then((result) => {
      if (result.value == "Credi2020") {
           $.ajax({url:"../../bd/Entidadfinanciera/RevertirEliminarSociaDJBN.php",
                type:"POST",
                dataType: "json",
                data:{DNI:DNI,APELLIDOSNOMBRE:APELLIDOSNOMBRE,TIPOCREDITO:TIPOCREDITO,MTODESEMBOLSO:MTODESEMBOLSO}, 
                success:function(data){               
                  if(data == "[2]" || data == null){
                        Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                  }else{ 
                        Swal.fire('Modificado!','Se ha revertido a la socia','warning')    
                        Listar();
                        $('#RevertirSocia').fadeOut();
                  }
                }    
              });
      }else{
        Swal.fire('Hubo un error!','Contraseña Incorrecta o no ingresada','info') 
      }
      console.log(result.value,result)
      });

}


function EliminarSociaDJ(string){
  let  datos = string.split('___'); 
  let usuario = $("[name='usuario']").val();
  let DNI = datos[0];
  let APELLIDOSNOMBRE = datos[1];
  let TIPOCREDITO = datos[3];
  let MTODESEMBOLSO = datos[4];

  Swal.fire({
  input: 'password',   
  showCancelButton: true, 
  title: 'Contraseña de Confirmacion',
  text: 'Digite la llave' 
  }).then((result) => {
    if (result.value == "Credi2020") {
         $.ajax({url:"../../bd/Entidadfinanciera/EliminarSociaDJBN.php",
              type:"POST",
              dataType: "json",
              data:{DNI:DNI,APELLIDOSNOMBRE:APELLIDOSNOMBRE,TIPOCREDITO:TIPOCREDITO,MTODESEMBOLSO:MTODESEMBOLSO,USUARIO:usuario}, 
              success:function(data){               
                if(data == "[2]" || data == null){
                      Swal.fire('Hubo un error!','Revisar Ejecucion','info')  
                }else{ 
                      Swal.fire('Modificado!','Se ha eliminado a la socia para el envio','warning')    
                      Listar();
                      cerrarModal();
                }
              }    
            });
    }else{
      Swal.fire('Hubo un error!','Contraseña Incorrecta o no ingresada','info') 
    }
    console.log(result.value,result)
    });
} 
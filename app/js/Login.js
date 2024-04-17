$('#formLogin').submit(function(e){
   e.preventDefault();
   var usuario = $.trim($("#usuario").val());    
   var password =$.trim($("#password").val());    
    
   if(usuario.length == "" || password == ""){
        Swal.fire({
          icon: 'error',
          title: 'Error!!',
          text: 'Debe Ingresar Usuario y/o Contraseña'
        })
        return false; 
    }else{
        $.ajax({
           url:"app/CRUD/login.php",
           type:"POST",
           datatype: "json",
           data:{usuario:usuario,password:password}, 
            success:function(data){               
               if(data == "[]" || data == null){
                   Swal.fire({
                       type:'error',
                       title:'Usuario y/o password incorrecta',
                   })
                   document.getElementById("usuario").value = "";
                   document.getElementById("password").value = "";
               }else if(data == "Error de Ejecucion"){
                  Swal.fire({
                       type:'error',
                       title:'Error de Ejecucion - comunicarse con sistemas',
                   })
                   document.getElementById("usuario").value = "";
                   document.getElementById("password").value = "";
               }else{
                console.log(data);
                //    Swal.fire({
                //     icon: 'success',        
                //       title: 'Bienvenido',
                //       showConfirmButton: true
                //   }).then((result) => {
                //        if(result.value){
                //            window.location.href = "Menu.php";
                //        }
                //    })                   
               }
           }    
        });
    }     
});
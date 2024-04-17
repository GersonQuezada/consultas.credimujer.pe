 

function BuscarBanco(){
    document.getElementById('span_Saldo').innerText = '';
    document.getElementById('span_OficialCredito').innerText = '';
    document.getElementById('span_BancoComunal').innerText = '';
    document.getElementById('span_AnilloComunal').innerText = '';
    var BancoComunal_value = $("select[name='BancoComunal'] option:selected").val(); 
    var region =  $("#ComboBoxRegion").find('option:selected').val();
    ConsultaSaldoPromotora(region,BancoComunal_value);
}

function Insertar(){
    var Codregion =  $("#ComboBoxRegion").find('option:selected').val();
    var Nomregion =  $("#ComboBoxRegion").find('option:selected').text();
    var CodBanco =  $("#BancoComunal_name").find('option:selected').val();
    var Banco =  $("#BancoComunal_name").find('option:selected').text();
    var CodAnillo =  $("#Anillogrupal_name").find('option:selected').val();
    var Anillo =  $("#Anillogrupal_name").find('option:selected').text();
    var fechaproceso = $("#fechaproceso").val();
    if(CodAnillo == 0  ){
        CodAnillo = "";
        Anillo = "";
    }
    if(fechaproceso == ""){
        Swal.fire('Informativo','Debe ingresar una fecha','info');
    }else{
        $.ajax({url:"../../../CRUD/OrdenPagos/InsertarOrdenPagos.php",
            type:"POST",
            dataType: "json",
            data:{CodRegion : Codregion, NomRegion : Nomregion, CodBanco : CodBanco, Banco:Banco,CodAnillo:CodAnillo,Anillo:Anillo, FECHAPROCESO : fechaproceso }, 
                success:function(data){               
                    if(data == 1 ){
                        Swal.fire('Agregado','Orden de Pago ingresado','success'); 
                        Enlistar();
                    // }else if(data == 2 ){ 
                    //     Swal.fire('Alerta!','Ya existe el banco comunal','info'); 
                    }else{
                        Swal.fire('Alerta!','Error','error');
                    }                      
                }    
        });
    }
}


function HabilitarItems(string){    
    let  datos = string.split('_');

    var region = datos[0];
    var Item = datos[1];
    var FECHA = datos[2];
    var codAnillo = datos[4];

    // if(codAnillo == ""){
    //     $("#CampoCredi_"+Item+'_'+region+'_'+FECHA).append('<option value="">Seleccionar</option>'); 
    //     $("#CampoCredi_"+Item+'_'+region+'_'+FECHA).append('<option value="BC">BC</option>');     
    //     $("#CampoCredi_"+Item+'_'+region+'_'+FECHA).append('<option value="CP">CP</option>');     
    // }else{
    //     $("#CampoCredi_"+Item+'_'+region+'_'+FECHA).append('<option value="">Seleccionar</option>'); 
    //     $("#CampoCredi_"+Item+'_'+region+'_'+FECHA).append('<option value="AG">AG</option>');     
    //     $("#CampoCredi_"+Item+'_'+region+'_'+FECHA).append('<option value="CIAS">CIAS</option>');
    // }
    // Items de la tabla
    ItemTable('#CampoOpera_','#textOpera_',Item,region,FECHA);
    ItemTable("#CampoCredi_","#textCredi_",Item,region,FECHA);
    ItemTable("#CampoSocia_","#textSocia_",Item,region,FECHA);
    ItemTable("#CampoEnti_","#textEnti_",Item,region,FECHA);
    ItemTable("#CampoImpor_","#textImpor_",Item,region,FECHA);
    ItemTable('#CampoCuenta_','#textCuenta_',Item,region,FECHA);
    ItemTable("#CampoCelular_","#textCelular_",Item,region,FECHA);
    //Botones
    $("#BotonEditar_"+region+'_'+Item+'_'+FECHA).hide();
    $("#BotonAgregar_"+region+'_'+Item+'_'+FECHA).show();    
}

function CambioSocia(string) {
    let datos = string.split('_');
    var region = datos[0];
    var Item = datos[1];
    var fecha = datos[2];
    let banco = $('#CampoEnti_'+Item+'_'+region+'_'+fecha).find('option:selected').val();

    if(banco == 'BN'){
        $("#CampoCuenta_"+Item+'_'+region+'_'+fecha).hide();
        $("#CampoCelular_"+Item+'_'+region+'_'+fecha).hide(); 
    }else{
        let socia = $("#CampoSocia_"+Item+"_"+region+"_"+fecha).find('option:selected').val();
        let entidad = $("#CampoEnti_"+Item+"_"+region+"_"+fecha).find('option:selected').text();
        $("#CampoCuenta_"+Item+'_'+region+'_'+fecha).show();
        $("#CampoCuenta_"+Item+'_'+region+'_'+fecha).html("");
        $("#CampoCuenta_"+Item+'_'+region+'_'+fecha).append('<option value="">Seleccionar</option>'); 
        $.ajax({
            type:"POST",
            url:"../../../CRUD/Entidadfinanciera/BusquedaCuentaAbonoCombo.php",
            data:{EntidadBancaria:entidad,Socia:socia}, 
            dataType: "json",
            success:function(data){             
                // console.log(data.length)
                $.each(data, function(i, item){
                    $("#CampoCuenta_"+Item+'_'+region+'_'+fecha).append('<option value='+item.NROCUENTA+'>'+item.Descripcion+'</option>');
                });
            }    
        });

    }
    if(banco == 'BCP'){
        $("#CampoFechaproceso_"+Item+'_'+region+'_'+fecha).show(); 
        $("#textFechaproceso_"+Item+'_'+region+'_'+fecha).hide(); 
    }else{
        $("#CampoFechaproceso_"+Item+'_'+region+'_'+fecha).hide(); 
        $("#textFechaproceso_"+Item+'_'+region+'_'+fecha).show(); 
    }    
}

function TipoOperacion(string){
    let datos = string.split('_');   
    var region = datos[0];
    var Item = datos[1];    
    var fecha = datos[2];    
    var codbanco = datos[3];
    var codAnillo = datos[4];

    let tipoOperacion = $("#CampoOpera_"+Item+"_"+region+"_"+fecha).find('option:selected').val();

    if(tipoOperacion == "TRANF"){
        $("#CampoSocia_"+Item+'_'+region+'_'+fecha).hide();
        $("#CampoSocia_"+Item+'_'+region+'_'+fecha).next(".select2-container").hide();
        // $("#CampoSocia_"+Item+'_'+region).select2().hide();
        $("#CampoEnti_"+Item+'_'+region+'_'+fecha).hide();
        $("#CampoCuenta_"+Item+'_'+region+'_'+fecha).hide();
        $("#CampoCelular_"+Item+'_'+region+'_'+fecha).hide(); 
        if(codAnillo == ""){
            $("#CampoCredi_"+Item+'_'+region+'_'+fecha).append('<option value="">Seleccionar</option>'); 
            $("#CampoCredi_"+Item+'_'+region+'_'+fecha).append('<option value="BC">BC</option>');     
            $("#CampoCredi_"+Item+'_'+region+'_'+fecha).append('<option value="CP">CP</option>');     
        }else{
            $("#CampoCredi_"+Item+'_'+region+'_'+fecha).append('<option value="">Seleccionar</option>'); 
            $("#CampoCredi_"+Item+'_'+region+'_'+fecha).append('<option value="AG">AG</option>');     
            $("#CampoCredi_"+Item+'_'+region+'_'+fecha).append('<option value="CIAS">CIAS</option>');
        }
    }else if(tipoOperacion == 0){

    }else{
        if(codAnillo == ""){
            codbanco = codbanco;
        }else{
            codbanco = codAnillo;
        }
        $("#CampoCredi_"+Item+'_'+region+'_'+fecha).hide(); 
        $("#CampoSocia_"+Item+'_'+region+'_'+fecha).select2();
        $("#CampoSocia_"+Item+'_'+region+'_'+fecha).select2({
            placeholder: 'Seleccione una socia',
                ajax: {
                    url: '../../../CRUD/OrdenPagos/BusquedaBancoComunal_socia.php',
                    dataType: 'json',
                    type:'POST',
                    delay: 250,
                    data: function (data) {
                        return {
                            name: data.term// search term ,  
                            ,codbanco : codbanco                    
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

        $("#CampoEnti_"+Item+'_'+region+'_'+fecha).show();
        $("#CampoCuenta_"+Item+'_'+region+'_'+fecha).show();
        $("#CampoCelular_"+Item+'_'+region+'_'+fecha).show();

    }
    

}

function GuardarOrdenesPagos(string) {
    let datos = string.split('_');
    let item = datos[0];
    let region = datos[1]; 
    let banco = datos[2];
    let anillo = datos[3];
    let fecha = datos[4];
    let codbanco = "";
    var TipoOperacion = $("#CampoOpera_"+item+"_"+region+"_"+fecha).val();
    var TipoCredito = $("#CampoCredi_"+item+"_"+region+"_"+fecha).val();
    var CodSocia = $("#CampoSocia_"+item+"_"+region+"_"+fecha).val();
    var Socia = $("#CampoSocia_"+item+"_"+region+"_"+fecha).find('option:selected').text();
    var EntidadBancaria = $("#CampoEnti_"+item+"_"+region+"_"+fecha).val();
    var ImporteTotal = $("#CampoImpor_"+item+"_"+region+"_"+fecha).val();
    var NroCuenta = $("#CampoCuenta_"+item+"_"+region+"_"+fecha).val();
    var Celular =  $("#CampoCelular_"+item+"_"+region+"_"+fecha).val();         
    var fechaproceso = !$("#CampoFechaproceso_"+item+"_"+region+"_"+fecha).val() ? $("#textFechaproceso_"+item+"_"+region+"_"+fecha).text() : $("#CampoFechaproceso_"+item+"_"+region+"_"+fecha).val() ;
    // return false;
    var Carga = ""; 
    TipoOperacion == "TRANF" ? Carga = "S" : Carga = 'N';
    if(TipoOperacion == 0){
        Swal.fire('Informativo','Se necesita seleccionar un tipo de Operacion','info');
    }
    if(TipoOperacion == "TRANF" ){
        if(TipoCredito == 0){
            Swal.fire('Informativo','Se necesita seleccionar un tipo de credito','info');
        }else if(ImporteTotal == 0.00){
            Swal.fire('Informativo','Se necesita ingresar un importe','info');
        }else{
            CodSocia = "";
            Socia = "";
            EntidadBancaria = "";
            NroCuenta = "";
            Celular = "";
            $.ajax({url:"../../../CRUD/OrdenPagos/ModificarOrdenPago.php",
              type:"POST",
              dataType: "json",
              data:{item : item,region : region,TipoOperacion : TipoOperacion, TipoCredito : TipoCredito , CodSocia : CodSocia ,Socia : Socia , EntidadBancaria : EntidadBancaria , ImporteTotal : ImporteTotal, NroCuenta : NroCuenta, Celular : Celular, CODBANCO : banco , CODANILLO : anillo , FechaProceso : fechaproceso , Carga : Carga }, 
              success:function(data){ 
                let respuesta = data.data[0].Respuesta            
                if(respuesta == 1){
                    Swal.fire('Informativo','El banco no cuenta con saldo disponible o el monto excede al saldo','info'); 
                }else if(respuesta == 2 ){
                  Swal.fire('Modificado','Modificacion Realizada','success'); 
                  Enlistar();
                }else if(respuesta == 3){
                    Swal.fire('Informativo','El banco ya tiene una orden de pago con este tipo de operacion','info'); 
                }else{
                  Swal.fire('Alerta!','Error','error');
                }             
              }    
            });
        }  
    }else{
        // if(TipoCredito == 0){
        //     Swal.fire('Informativo','Se necesita seleccionar un tipo de credito','info');
        // }else         
        if(CodSocia == 0){
            Swal.fire('Informativo','Se necesita seleccionar una socia','info');
        }else if(EntidadBancaria == 0){
            Swal.fire('Informativo','Se necesita seleccionar una entidad bancaria','info');
        }
        // else if(EntidadBancaria == 'BN'){
        //     NroCuenta = "";
        //     Celular = "";
        // }
        else if(ImporteTotal == 0.00){
            Swal.fire('Informativo','Se necesita ingresar un importe','info');
        }else{
            $.ajax({url:"../../../CRUD/OrdenPagos/ModificarOrdenPago.php",
              type:"POST",
              dataType: "json",
              data:{item : item,region : region,TipoOperacion : TipoOperacion, TipoCredito : TipoCredito , CodSocia : CodSocia ,Socia : Socia , EntidadBancaria : EntidadBancaria , ImporteTotal : ImporteTotal, NroCuenta : NroCuenta, Celular : Celular, CODBANCO : banco , CODANILLO : anillo , FechaProceso : fechaproceso  , Carga : Carga }, 
              success:function(data){ 
                let respuesta = data.data[0].Respuesta            
                if(respuesta == 1){
                    Swal.fire('Informativo','El banco no cuenta con saldo disponible o el monto excede al saldo','info'); 
                }else if(respuesta == 2 ){
                  Swal.fire('Modificado','Modificacion Realizada','success'); 
                  Enlistar();
                }else if(respuesta == 3){
                    Swal.fire('Informativo','El banco ya tiene una orden de pago con este tipo de operacion','info'); 
                }else{
                  Swal.fire('Alerta!','Error','error');
                }             
              }    
            });
        }  
    }
    
     
}

function EliminarOrdenesPagos(string) {
    let datos = string.split('_');
    let item = datos[1];
    let region = datos[0];  
    $.ajax({url:"../../../CRUD/OrdenPagos/EliminarOrdenPago.php",
        type:"POST",
        dataType: "json",
        data:{item : item,region : region}, 
        success:function(data){ 
            if(data == 1 ){
              Swal.fire('Eliminado','Orden de Pago Eliminado','warning'); 
              Enlistar();
            }else{
              Swal.fire('Alerta!','Error','error');
            }             
          }    
    });
    
}

function ItemTable(Items,Value,Item,region,fecha){
    if($(Value+Item+'_'+region+'_'+fecha).text() == ""){
        $(Items+Item+'_'+region+'_'+fecha).show();
        $(Value+Item+'_'+region+'_'+fecha).hide();
    }else{
        $(Items+Item+'_'+region+'_'+fecha).show();
        $(Value+Item+'_'+region+'_'+fecha).hide();
        $(Items+Item+'_'+region+'_'+fecha).val($(Value+Item+'_'+region+'_'+fecha).text())
    } 
}

async function ConsultaSaldoPromotora(region,banco) {
    var BancoComunal_name = $("select[name='BancoComunal'] option:selected").text(); 
    var Anillogrupal_name = $("select[name='Anillogrupal'] option:selected").text();   
    if (Anillogrupal_name == "Seleccionar"){
        Anillogrupal_name = "";
    }        
    $('#content').html('<div class="loading"><img src="../../../../build/loading/images/loader.gif" alt="loading" /><br/>Un momento, por favor...</div>');    
    try {
        const response = await fetch('../../../CRUD/OrdenPagos/BusquedaBancoComunal_saldo.php',
                        {method : 'post',                                                                                        
                        headers:new Headers({
                            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }),
                        body: `CODREGION=${region}&codasociacion=${banco}`
                        }); 
                        const Items = await response.json();  
                        $.each(Items.data, function(x,item){
                            if( item['SALDO'] < 0){
                                $('#content').fadeIn(1000).html("");
                                alert("el banco no tiene saldo");
                                document.getElementById('span_Saldo').innerText = "0";
                            }else{      
                                $('#content').fadeIn(1000).html("");                          
                                document.getElementById('span_BancoComunal').innerText = BancoComunal_name;     
                                document.getElementById('span_AnilloComunal').innerText = Anillogrupal_name;   
                                document.getElementById('span_Saldo').innerText = item['SALDO'];
                                document.getElementById('span_OficialCredito').innerText = item['promotora'];
                                document.getElementById('insertar').style.display = 'inline'; 
                                // $("#fechaProceso").prop("disabled", false);    
                                $("#insertar").prop("disabled", false);   
                            }
                        });
                              
    } catch (error) {
        console.log(error);
    }   
}

function cerrarModal(Modal){
    $(Modal).fadeOut();  
}

function DesactivarModal(){
    var fecha = document.getElementById('FechaActual').value;
    var value = 'NO';
    $.ajax({url:"../../../CRUD/OrdenPagos/EditarRestriccion.php",
            type:"POST",
            dataType: "json",
            data:{fecha : fecha,value : value }, 
            success:function(data){   
              if(data == 1 ){
                Swal.fire('Modificado','Modificacion Realizada','success');  
                
              }else{
                Swal.fire('Alerta!','Error','error');
              }            
            }    
    }); 
    location.reload(); 
}
  
function ActivarModal(){
    var fecha = document.getElementById('FechaActual').value;
    var value = 'SI';
    $.ajax({url:"../../../CRUD/OrdenPagos/EditarRestriccion.php",
            type:"POST",
            dataType: "json",
            data:{fecha : fecha,value : value }, 
            success:function(data){ 
              if(data == 1 ){
                Swal.fire('Modificado','Modificacion Realizada','success');  
                
              }else{
                Swal.fire('Alerta!','Error','error');
              }             
            }    
    }); 
    location.reload(); 
}
  
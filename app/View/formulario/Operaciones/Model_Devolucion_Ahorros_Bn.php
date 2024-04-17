<div class="modal" id="modalDABN">
  <div class="bodyModal"> 
  <form method="post" action="" name="form_edit_DJ" id="form_edit_DJ" onsubmit="event.preventDefault();">
    <h1 style="font-family:Arial; font-size: 15pt; color:black"><i class="far fa-id-badge"></i> Devolucion de Ahorros - BN</h1> 
    <label >Nro DNI</label><br>
    <input class="cajadetexto" type="text" name ="NRODNI" id ="NRODNI1"  disabled="disabled" ><br>
    <label>Nombre de Socia</label><br>
    <input class="cajadetexto" type="text" name="APELLIDOSNOMBRES" id="APELLIDOSNOMBRES1" disabled="disabled"><br>
    <label>NroCrePersona</label><br>
    <input class="cajadetexto" type="text" name="NROCREPERSONA" id="NROCREPERSONA1"   ><br>
    <label>Monto a Desembolsar</label><br>
    <input class="cajadetexto" type="text" name="MTODESEMBOLSADO" id="MTODESEMBOLSADO1"   ><br>
    <label>Monto Aprobado</label><br>
    <input class="cajadetexto" type="text" name="MTOAPROBADO" id="MTOAPROBADO1"   ><br><br>
    <button onclick="GuardarBn();"><i class="fas fa-save"></i></button>
    <button onclick="cerrarModal('#modalDABN')"><i class="fas fa-sign-out-alt"></i></button>
    <input id="CODREGION1" name="CODREGION" type="hidden" >
    <input id="TIPOREGISTRO1" name="TIPOREGISTRO" type="hidden" >
    <input id="CODASOCIACION1" name="CODASOCIACION" type="hidden" >
    <input id="DESASOCIACION1" name="DESASOCIACION" type="hidden" >
    <input id="NUMCREDITO1" name="NUMCREDITO" type="hidden" >
    <input id="NROCICLO1" name="NROCICLO" type="hidden" >
    <input id="CODSOCIA1" name="CODSOCIA" type="hidden" >
    <input id="CARGATABLA1" name="CARGATABLA" type="hidden" >
    <input id="NROSOCIO1" name="NROSOCIO" type="hidden" >
    <input id="FECHACREDITO1" name="FECHACREDITO" type="hidden" >
    <input id="FECHAREGISTRO1" name="FECHAREGISTRO" type="hidden" >
    <input id="NROSOLICITUD1" name="NROSOLICITUD" type="hidden" >
    <input id="SITUACION1" name="SITUACION" type="hidden" >
    <input id="FECHAPROCEBN1" name="FECHAPROCEBN" type="hidden" >
     <input id="TIPODESEMBOLSO1" name="TIPODESEMBOLSO" type="hidden" >
     <input id="CODMONEDA1" name="CODMONEDA" type="hidden" >
     <input id="CODENTIFINAN1" name="CODENTIFINAN" type="hidden" >
     <input id="TIPOCREDITO1" name="TIPOCREDITO" value = 0 type="hidden" >
  </form></div>
</div>
<script src="../../dist/js/jsMod/ComportamientoOpera.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
 
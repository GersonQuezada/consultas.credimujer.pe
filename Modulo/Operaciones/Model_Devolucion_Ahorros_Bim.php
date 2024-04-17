<div class="modal" id="modalDABIM">
  <div class="bodyModal"> 
  <form method="post" action="" name="form_edit_DJ" id="form_edit_DJ" onsubmit="event.preventDefault();">
    <h1 style="font-family:Arial; font-size: 15pt; color:black"><i class="far fa-id-badge"></i> Devolucion de Ahorros - Bim</h1> 
    <label >Nro DNI</label><br>
    <input class="cajadetexto" type="text" name="NRODNI" id="NRODNI"  disabled="disabled" ><br>
    <label>Nombre de Socia</label><br>
    <input class="cajadetexto" type="text" name="APELLIDOSNOMBRES" id="APELLIDOSNOMBRES" disabled="disabled"><br>
    <label>Nro Celular:</label><br>
    <input class="cajadetexto" type="text" name="CELULAR" id="CELULAR"  maxlength="9" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" ><br>
    <label>Fecha del Desembolso</label><br>
    <input class="cajadetexto" type="text" name="FECHADESEMBOLSO" id="FECHADESEMBOLSO"     ><br>
    <label>Monto a Desembolsar</label><br>
    <input class="cajadetexto" type="text" name="MTODESEMBOLSADO" id="MTODESEMBOLSADO"   ><br> <br>
    <button onclick="GuardarBim();"><i class="fas fa-save"></i></button>
    <button onclick="cerrarModal('#modalDABIM')"><i class="fas fa-sign-out-alt"></i></button>
    <input id="CODREGION" name="CODREGION" type="hidden" >
    <input id="REGION" name="REGION" type="hidden" >
    <input id="CODASOCIACION" name="CODASOCIACION" type="hidden" >
    <input id="DESASOCIACION" name="DESASOCIACION" type="hidden" >
    <input id="NUMCREDITO" name="NUMCREDITO" type="hidden" >
    <input id="PRODUCTO" name="PRODUCTO" type="hidden" >
    <input id="CODSOCIA" name="CODSOCIA" type="hidden" >
    <!-- <input id="CELULAR" name="CELULAR" type="hidden" > -->
    <input id="FECHAPROCESO" name="FECHAPROCESO" type="hidden" >
    <!-- <input id="FECHADESEMBOLSO" name="FECHADESEMBOLSO" type="hidden" > -->
    <input id="FECHAPROCESOBIM" name="FECHAPROCESOBIM" type="hidden" >
    <input id="TIPOCOBRO" name="TIPOCOBRO" type="hidden" >
    <input id="CARGATABLA" name="CARGATABLA" type="hidden" >
    <input id="ENTIDADBANCARIA" name="ENTIDADBANCARIA" value="BIM" type="hidden" >
    
  </form></div>
</div>
<script src="../../dist/js/jsMod/ComportamientoOpera.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
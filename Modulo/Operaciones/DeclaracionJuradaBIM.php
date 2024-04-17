<div class="modal" id="modal">
  <div class="bodyModal"> 
  <form method="post" action="" name="form_edit_DJ" id="form_edit_DJ" onsubmit="event.preventDefault();">
    <h1 style="font-family:Arial; font-size: 15pt; color:black"><i class="far fa-id-badge"></i> Formulario De Declaracion Jurada - BIM</h1> 
    <label >Nro DNI</label><br>
    <input class="cajadetexto" type="text" name="nrodni" id="nrodni"  disabled="disabled" ><br>
    <label>Nombre de Socia que Cobrara</label><br>
    <input class="cajadetexto" type="text" name="nomsocia" id="nomsocia" disabled="disabled"><br>
    <label>Monto a Desembolsar</label><br>
    <input class="cajadetexto" type="text" name="mtodesem" id="mtodesem" required="Campo nesesario" ><br><br>
    <button onclick="editarsocia();"><i class="fas fa-save"></i></button>
    <button onclick="cerrarModal()"><i class="fas fa-sign-out-alt"></i></button>
    <input id="fecha1" name="fecha1" type="hidden" >
    <input id="region" name="region" type="hidden" >
  </form></div>
</div>
<script src="../../dist/js/jsMod/ComportamientoOperaBIM.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
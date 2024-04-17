<div class="modal" id="modalDJBN">
  <div class="bodyModal"> 
  <form method="post" action="" name="form_edit_DJ" id="form_edit_DJ" onsubmit="event.preventDefault();">
    <h1 style="font-family:Arial; font-size: 15pt; color:black"><i class="far fa-id-badge"></i> Declaracion Jurada - BN</h1> 
    <label >Nro DNI:</label><br>
    <input class="cajadetexto" type="text" name ="NRODNI" id ="NRODNI"  disabled="disabled" ><br>
    <label>Nombre de Socia:</label><br>
    <input class="cajadetexto" type="text" name="APELLIDOSNOMBRES" id="APELLIDOSNOMBRES" disabled="disabled"><br>
    <label>Tipo Credito:</label><br>
    <input class="cajadetexto" type="text" name="TIPOCREDITO" id="TIPOCREDITO" disabled="disabled"   ><br>
    <label>Monto a Desembolsar:</label><br>
    <input class="cajadetexto" type="text" name="MTODESEMBOLSADO" id="MTODESEMBOLSADO"   ><br>    
    <button onclick="EditarDJ();" style="margin-top : 20px"><i class="fas fa-save"></i></button>
    <button onclick="cerrarModal('#modalDJBN')"><i class="fas fa-sign-out-alt"></i></button>
  </form></div>
</div>
<script src="../../dist/js/jsMod/ComportamientoDJBN.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
 
<div class="modal" id="modal"  style="overflow-y: scroll;">
  <div class="bodyModal"> 
  <form method="post" action="" name="form_edit_DJ" id="form_edit_DJ" onsubmit="event.preventDefault();">
    <h1 style="font-family:Arial; font-size: 15pt; color:black"><i class="far fa-id-badge"></i>Registro de Asistencia</h1>
    <label>Nombre Completo</label><br>
    <input type="text" name="NombreSocia" id="NombreSocia" style=" width: 100%;" ><br>
    <label>Asistencia al Taller de Asistencia Tecnica</label>
    <SELECT name="TAT" id= "TAT" style=" width: 100%;">
        <OPTION value="null">Seleccionar</OPTION>
        <OPTION value="P">Presente</OPTION>
        <OPTION value="F">Falto</OPTION> 
        <OPTION value="FJ">Falta Justificada</OPTION>        
    </SELECT><br>
    <label>Asistencia al Taller de Capacitacion al Comite de Administracion</label>     
    <SELECT name="TCCA" id= "TCCA" style=" width: 100%;" >
        <OPTION value="null">Seleccionar</OPTION>
        <OPTION value="P">Presente</OPTION>
        <OPTION value="F">Falto</OPTION> 
        <OPTION value="FJ">Falta Justificada</OPTION>        
    </SELECT><br>
    <input id="CODSO" name="CODSO" type="hidden">
    <input id="DATE" name="DATE" type="hidden">

    <button onclick="editarsocia();" style="margin-top: 25px"><i class="fas fa-save"></i></button>
    <button onclick="cerrarModal()" style="margin-top: 25px"><i class="fas fa-sign-out-alt" ></i></button>
  </form></div>
</div>
<script src="../../dist/js/jsMod/ComportamientoEducativo.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="../../dist/js/adminlte.min.js"></script>

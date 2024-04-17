<link rel="icon" href="../../../../dist/img/credito.png"> 
  <div class="modal fade" id="modal-default">
        <div class="modal-dialog  ">
          <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Edicion de Estado de Nro de Cuenta de Abono</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">   
            <label >Nombre Socia</label><br>
            <input class="form-control" type="text" name="nomsocia" id="nomsocia"  disabled="disabled" ><br>
            <label>Nro Cuenta</label><br>
            <input class="form-control" type="text" name="nrocuenta" id="nrocuenta" disabled="disabled"><br>
            <label>Activo</label><br>
            <select class="custom-select form-control-border col"  name="activo" id="activo" Requiere="Se necesita este dato." >
                  <OPTION value="0">Seleccionar</OPTION>
                  <OPTION value="Y">ACTIVO</OPTION>
                  <OPTION value="N">INACTIVO</OPTION> 
                  </select>  
            <button onclick="editarsocia();"  data-dismiss="modal"  class = "btn btn-primary" style="margin-top: 25px"><i class="fas fa-save"></i></button> 
            </div>  
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <script src="../../../../app/js/jsOperativa/CuentaAbono.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
      
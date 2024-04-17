<link rel="icon" href="../../dist/img/credito.png"> 
<div class="modal fade"  data-backdrop="static" id="Modal-CuentaAbono">
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
          <input class="form-control" type="text" name="name_socia" id="name_socia"  disabled="disabled" ><br>
          <label>Nro Cuenta</label><br>
          <input class="form-control" type="text" name="new_number_account" id="new_number_account" disabled="disabled"><br>
          <label>Activo</label><br>
          <select class="custom-select form-control-border col"  name="StatusAccount" id="StatusAccount" Requiere="Se necesita este dato." >
                <OPTION>Seleccionar</OPTION>
                <OPTION value="Y">ACTIVO</OPTION>
                <OPTION value="N">INACTIVO</OPTION> 
          </select>  
          <imput type = "hidden" name="ID_account" id="ID_account" disabled="disabled">
          </div>
          <div class="modal-footer">
            <button data-dismiss="modal"  class = "btn btn-primary" onclick="EditarNroCuentaAbono();"  ><i class="fas fa-save"></i></button> 
            <button data-dismiss="modal"  class = "btn btn-danger" onclick="EliminarNroCuentaAbono();" ><i class="fas fa-user-slash"></i></button> 
          </div>  
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
</div>
<script src="../../dist/js/jsMod/CuentaAbono.js"></script>
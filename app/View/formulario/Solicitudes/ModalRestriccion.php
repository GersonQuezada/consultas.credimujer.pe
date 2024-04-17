<link rel="icon" href="../../../../dist/img/credito.png"> 
  <div class="modal fade" id="modal-default-1"  >
        <div class="modal-dialog  ">
          <div class="modal-content bg-danger">
          <div class="modal-header">
              <h4 class="modal-title" style = "font-size: 25pt; color:	#FFFFFF">   MODULO INACTIVO</h4>       
             </div>
            <div class="modal-body">   
            <label style="font-family:Arial; font-size: 15pt; color:	#FFFFFF"><i class="fas fa-exclamation-circle"></i>   NO SE PUEDE USAR EL MODULO.</label> 
            <input id="user" name="user" type="hidden" value="<?php echo $_SESSION['login']; ?>"><br>
            <button id = "botoncerrar"  class="btn btn-danger" data-dismiss="modal" style="margin-top: 25px"><i class="fas fa-sign-out-alt" ></i></button>
            </div>  
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
 <script src="../../../../app/js/jsOperativa/ComportamientoSolicitudes.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script> 
 
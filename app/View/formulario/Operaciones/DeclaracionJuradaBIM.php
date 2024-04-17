<link rel="icon" href="../../../../dist/img/credito.png">
<div class="modal fade" id="modal-default">
        <div class="modal-dialog  ">
          <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Formulario De Declaracion Jurada - BIM</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">   
            <label >Nro DNI</label><br>
            <input class="form-control" type="text" name="nrodni" id="nrodni"  disabled="disabled" ><br>
            <label>Nombre de Socia que Cobrara</label><br>
            <input class="form-control" type="text" name="nomsocia" id="nomsocia" disabled="disabled"><br>
            <label>Monto a Desembolsar</label><br>
            <input class="form-control" type="text" name="mtodesem" id="mtodesem" required="Campo nesesario" ><br><br>
            <button class = "btn btn-primary" onclick="editarsocia();"><i class="fas fa-save"></i></button>          
            <input id="fecha1" name="fecha1" type="hidden" >
            <input id="region" name="region" type="hidden" >                        
            </div>  
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
<script src="../../../../app/js/jsOperativa/ComportamientoOperaBIM.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>

 

<link rel="icon" href="../../dist/img/credito.png"> 
      <div class="modal fade" id="modal-default">
        <div class="modal-dialog  ">
          <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Formulario De Declaracion Jurada - Cheque Gerencia</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">            
            <label >Nro DNI</label>
            <input class="form-control" type="text" name="nrodni" id="nrodni"  disabled="disabled" > 
            <label>Nombre de Socia que Cobrara</label>
            <input class="form-control" type="text" name="nomsocia" id="nomsocia" disabled="disabled">
            <label>Monto a Desembolsar</label> 
            <input class="form-control" type="text" name="mtodesem" id="mtodesem" required="Campo nesesario" >
            <input id="fecha1" name="fecha1" type="hidden" >
            <input id="region" name="region" type="hidden" >
            <input id="id" name="region" type="hidden" >
            <button onclick="editarsocia();" style="margin-top: 25px" class = "btn btn-primary" class="close" data-dismiss="modal" ><i class="fas fa-save"></i></button>
            </div>  
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
<script src="../../dist/js/jsMod/ComportamientoConta.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
  
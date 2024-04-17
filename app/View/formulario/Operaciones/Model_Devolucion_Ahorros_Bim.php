<link rel="icon" href="../../../../dist/img/credito.png"> 
  <div class="modal fade" id="modal-default">
        <div class="modal-dialog  ">
          <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Devolucion de Ahorros - Bim</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">   
            <label >Nro DNI</label><br>
            <input class="form-control" type="text" name="NRODNI" id="NRODNI"  disabled="disabled" ><br>
            <label>Nombre de Socia</label><br>
            <input class="form-control" type="text" name="APELLIDOSNOMBRES" id="APELLIDOSNOMBRES" disabled="disabled"><br>
            <label>Nro Celular:</label><br>
            <input class="form-control" type="text" name="CELULAR" id="CELULAR"  maxlength="9" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" ><br>
            <label>Fecha del Desembolso</label><br>
            <input class="form-control" type="text" name="FECHADESEMBOLSO" id="FECHADESEMBOLSO"     ><br>
            <label>Monto a Desembolsar</label><br>
            <input class="form-control" type="text" name="MTODESEMBOLSADO" id="MTODESEMBOLSADO"   ><br> <br>
            <button onclick="GuardarBim();"  data-dismiss="modal"  class = "btn btn-primary"  ><i class="fas fa-save"></i></button>
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
            </div>  
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <script src="../../../../app/js/jsOperativa/ComportamientoOperaBIM.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
      
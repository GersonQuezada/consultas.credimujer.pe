<link rel="icon" href="../../dist/img/credito.png">
<div class="modal fade" id="modal-default-1"  >
        <div class="modal-dialog  ">
          <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Insertar Socia en la BD - BN</h4>    
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>   
             </div>
            <div class="modal-body">   
            <form method="post" action="" name="form_edit_DJ" id="form_edit_DJ" onsubmit="event.preventDefault();">     
              <div class="card-body">
              <div class="form-group">
              <label >Nro DNI</label><br>
              <input class="cajadetexto" type="text" name ="NRODNI" id ="NRODNI2"    ><br>
              <label>Nombre de Socia</label><br>
              <input class="cajadetexto" type="text" name="APELLIDOSNOMBRES" id="APELLIDOSNOMBRES2" ><br>
              <label>NroCrePersona</label><br>
              <input class="cajadetexto" type="text" name="NROCREPERSONA" id="NROCREPERSONA2" disabled="disabled"  ><br>
              <input id="MTODESEMBOLSADO2" name="MTODESEMBOLSADO" type="hidden" >
          
              <label>Monto Aprobado</label><br>
              <input class="cajadetexto" type="text" name="MTOAPROBADO" id="MTOAPROBADO2"   ><br><br>
              <button onclick="InsertaSociaBD();"><i class="fas fa-save"></i></button>
              <button onclick="cerrarModal('#modalInsertBN')"><i class="fas fa-sign-out-alt"></i></button>
              <input id="CODREGION2" name="CODREGION" type="hidden" >
              <input id="TIPOREGISTRO2" name="TIPOREGISTRO" type="hidden" >
              <input id="CODASOCIACION2" name="CODASOCIACION" type="hidden" >
              <input id="DESASOCIACION2" name="DESASOCIACION" type="hidden" >
              <input id="NUMCREDITO2" name="NUMCREDITO" type="hidden" >
              <input id="NROCICLO2" name="NROCICLO" type="hidden" >
              <input id="CODSOCIA2" name="CODSOCIA" type="hidden" >
              <input id="CARGATABLA2" name="CARGATABLA" type="hidden" >
              <input id="NROSOCIO2" name="NROSOCIO" type="hidden" >
              <input id="FECHACREDITO2" name="FECHACREDITO" type="hidden" >
              <input id="FECHAREGISTRO2" name="FECHAREGISTRO" type="hidden" >
              <input id="NROSOLICITUD2" name="NROSOLICITUD" type="hidden" >
              <input id="SITUACION2" name="SITUACION" type="hidden" >
              <input id="FECHAPROCEBN2" name="FECHAPROCEBN" type="hidden" >
              <input id="TIPODESEMBOLSO2" name="TIPODESEMBOLSO" type="hidden" >
              <input id="CODMONEDA2" name="CODMONEDA" type="hidden" >
              <input id="CODENTIFINAN2" name="CODENTIFINAN" type="hidden" >
              <input id="TIPOCREDITO2" name="TIPOCREDITO" type="hidden" >
              </div>
              </div>
            </form>
            </div>  
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
 
<script src="../../dist/js/jsMod/ComportamientoOpera.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
 
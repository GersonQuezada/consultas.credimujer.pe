<link rel="icon" href="../../dist/img/credito.png">
<link rel="stylesheet" href="../../plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
<div class="modal fade" id="modalDJBN"  >
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h1 style="font-family:Arial; font-size: 15pt; color:black"><i class="far fa-id-badge"></i> Declaracion Jurada - BN</h1>  
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>   
      </div>
      <div class="modal-body">   
              <form >                
                <label >Nro DNI:</label><br>
                <input class="form-control" type="text" name ="NRODNI" id ="NRODNI"  disabled="disabled" ><br>
                <label>Nombre de Socia:</label><br>
                <input class="form-control" type="text" name="APELLIDOSNOMBRES" id="APELLIDOSNOMBRES" disabled="disabled"><br>
                <label>Tipo Credito:</label><br>
                <input class="form-control" type="text" name="TIPOCREDITO" id="TIPOCREDITO" disabled="disabled"   ><br>
                <label>Monto a Desembolsar:</label><br>
                <input class="form-control" type="text" name="MTODESEMBOLSADO" id="MTODESEMBOLSADO"   ><br>    
                <button onclick = "EditarDJ()" class="btn btn-info" style="margin-top : 20px"><i class="fas fa-save"></i></button>                
              </form>
      </div>                        
    </div>  
  </div>
</div>  
<script src="../../dist/js/jsMod/ComportamientoDJBN.js"></script>  
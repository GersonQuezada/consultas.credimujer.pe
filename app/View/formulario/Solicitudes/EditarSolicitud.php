<link rel="icon" href="../../../../dist/img/credito.png"> 
  <div class="modal fade" id="modal-default-2"  >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title">Edicion de Estado de Nro de Cuenta de Abono</h4>    
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>   
             </div>
            <div class="modal-body">        
            <div class ="row" >      
              <div class ="col-sm-6" > 
                <div class ="input-group">                  
                  <label style= "color: black; font-weight: bold; display: block;">Nombre del Banco :</label>
                  <div class ="input-group-text" id = "CheckGrupo" ><input type="checkbox" id = "check"></div>                  
                  <input class="form-control" type="text" name="bancotext" id="bancotext" >
                  <SELECT name="BancoEdit" id= "BancoEdit" class="form-control select2bs4"  lang="es">  
                  </SELECT>
                </div>
              </div>
              <div class ="col-sm-6" >  
                <label style= "color: black; font-weight: bold;  display: block;">Departamento</label>
                <input class="form-control" type="text" name="departamento" id="departamento"  >   
              </div>          
            </div>
            <div class ="row" >
              <div class ="col-sm-6" >
                <label style= "color: black; font-weight: bold; display: block;">Provincia</label>
                <input class="form-control" type="text" name="Provincia" id="Provincia">    
              </div>
              <div class ="col-sm-6" >  
                <label style= "color: black; font-weight: bold; display: block;">Distrito</label>
                <input class="form-control" type="text" name="distrito" id="distrito"  >                  
              </div> 
            </div>
            <div class ="row" >
              <div class ="col-sm-6" >
                <label style= "color: black; font-weight: bold; display: block;">Banco Nacion</label>
                <div class ="input-group">
                  <span class ="input-group-text">S/</span><input class="form-control" type="number"  step='0.01' value='0.00' placeholder='0.00' name="BN" id="BN"><span class ="input-group-text">.00</span>  
                </div>
              </div>
              <div class ="col-sm-6" >  
                <label style= "color: black; font-weight: bold; display: block;">Banco Credito</label>
                <div class ="input-group">
                  <span class ="input-group-text">S/</span><input class="form-control" type="number"  step='0.01' value='0.00' placeholder='0.00' name="BC" id="BC"><span class ="input-group-text">.00</span>  
                </div>                             
              </div> 
            </div>
            <div class ="row" >
              <div class ="col-sm-6" >
                <label style= "color: black; font-weight: bold; display: block;">BIM</label>
                <div class ="input-group">
                  <span class ="input-group-text">S/</span><input class="form-control" type="number"  step='0.01' value='0.00' placeholder='0.00' name="BM" id="BM"><span class ="input-group-text">.00</span>  
                </div>
              </div>
              <div class ="col-sm-6" >  
                <label style= "color: black; font-weight: bold; display: block;">Caja Piura</label>
                <div class ="input-group">
                  <span class ="input-group-text">S/</span><input class="form-control" type="number"  step='0.01' value='0.00' placeholder='0.00' name="CP" id="CP"><span class ="input-group-text">.00</span>  
                </div>                             
              </div> 
            </div> 
            <div class ="row" >
              <div class ="col-sm-6" >
                <label style= "color: black; font-weight: bold; display: block;">Caja Trujillo</label>
                <div class ="input-group">
                  <span class ="input-group-text">S/</span><input class="form-control" type="number"  step='0.01' value='0.00' placeholder='0.00' name="CT" id="CT"><span class ="input-group-text">.00</span>  
                </div>
              </div>
              <div class ="col-sm-6" >  
                <label style= "color: black; font-weight: bold; display: block;">Cooperativa San Martin</label>
                <div class ="input-group">
                  <span class ="input-group-text">S/</span><input class="form-control" type="number"  step='0.01' value='0.00' placeholder='0.00' name="CS" id="CS"><span class ="input-group-text">.00</span>  
                </div>                             
              </div> 
            </div> 
            <div class ="row" >
              <div class ="col-sm-6" >
                <label style= "color: black; font-weight: bold; display: block;">Efectivo</label>
                <div class ="input-group">
                  <span class ="input-group-text">S/</span><input class="form-control" type="number"  step='0.01' value='0.00' placeholder='0.00' name="EF" id="EF"> <span class ="input-group-text">.00</span>  
                </div>
              </div>      
              <div class ="col-sm-6" >        
              <label style= "color: black; font-weight: bold; display: block;">Fecha Desembolso</label>
              <div class ="input-group">
                  <span class ="input-group-text"><i class="far fa-calendar-alt"></i></span><input  class = "btn btn-default float" type="date" name="FA" id="FA"> 
                </div>
              
              </div>
            </div>
            <input id="REG" name="REG" type="hidden" >
            <input id="CODBANCO" name="CODBANCO" type="hidden" >
            <input id="NOMREGION" name="NOMREGION" type="hidden" >
            <button onclick="editarsocia();" class="btn btn-primary" data-dismiss="modal"   style="margin-top: 25px"><i class="fas fa-save"></i></button>            
            </div>  
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
<script src="../../../../app/js/jsOperativa/ComportamientoSolicitudes.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script> 

 
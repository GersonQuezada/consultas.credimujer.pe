<div class="modal" id="RevertirSocia">
  <div class="bodyModalLargo"> 
  <form method="post" action="" name="form_edit_DJ" id="form_edit_DJ" onsubmit="event.preventDefault();">
    <Label>Revertir socia Eliminada</label>
                <div class="col-lg-12">
                    <div id= "div-content-data--1" class="table-responsive" >        
                        <table id="ResumenSociasEliminadas" class="table table-striped table-bordered" cellspacing="0"  >
                         <thead class="text-white bg-info text-center align-middle"> 
                         <th>Accion</th> 
                         <th style = "margin-left:  1300px;">BANCO COMUNAL</th>
                         <th>NOMBRE COMPLETO</th>
                         <th>DNI</th> 
                         <th>MTODESEMBOLSADO</th> 
                         <th>TIPODESEMBOLSO</th>                          
                         <th>FECHA PROCESO</th>      
                         </thead>
                         <tbody></tbody>
                       </table>                  
                     </div>
                   </div>
                 </div>
                 <button onclick="cerrarModal('#RevertirSocia')"><i class="fas fa-sign-out-alt"></i></button>
  </form>
</div>
</div>
<script src="../../dist/js/jsMod/ComportamientoDJBN.js?v="<?php echo $_SESSION["Version_cod"]; ?>></script>
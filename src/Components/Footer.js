import React from "react"


const Footer = () => {
    return (
<div class="footer">
<div className="row">
 <div className="col-lg-2"> <a href="#" class="fa fa-facebook"></a></div>
 <div className="col-lg-2"> <a href="#" class="fa fa-linkedin"></a></div>
 <div className="col-lg-2"> <a href="#" class="fa fa-github"></a></div>
 <div className="col-lg-2">  <a href="#" class="fa fa-google"></a></div>
 <div className="col-lg-2">  <a href="#" class="glyphicon glyphicon-phone" data-toggle="modal" data-target="#myModal"></a></div>
 




                           
  </div>
  
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Phone Number</h4>
        </div>
        <div class="modal-body">
          <p>0796433676</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  
  </div>
</div>
         
    )

}

export default Footer


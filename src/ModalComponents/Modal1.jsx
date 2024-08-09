export default function Modal1(){
    return(
       <div>



<div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">My Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="text-center">
      <img src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png" alt="" className="w-50"/>
      <h5 className="text-center">You don't have any items in your cart</h5>
      <p className="text-center">our favourite items are just a click away</p>
      <button id="start">Start Shopping</button>
    </div>
  </div>
</div>



       </div>
    )
}


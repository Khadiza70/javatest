import React from 'react'
import logo from '../../img/Bootstrap_logo.svg.png'


export const Checkout = () => {
  return (
    <div>
       <div className='container'>
       <div className='text-center'>
        <img src={logo} className="img-fluid mt-2" style={{ width: "50px" }} alt="" />
        <h3>Checkout form</h3>
        <p className='lead fs-5'>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
       </div>
        
        <div className='row mt-5'>
          <div className='col'>
            <h3 className='mb-3'>Billing address</h3>
            <form className='mb-5'>
              <div className='row  g-3'>
                <div className='col-md-6'>
                  <label for="First name" className='form-label float-start'>First name</label>
                  <input type="text" className='form-control'></input>
                </div>

                <div className='col-md-6'>
                  <label for="Last name" className='form-label float-start'>Last name</label>
                  <input
                   type="text" 
                   className='form-control'
                   >

                   </input>
                </div>

                <div className='col-md-12'>
                  <label for="Last name" className='form-label float-start ' >UserName</label>
                  <input type="text" className='form-control' placeholder='Username'></input>
                </div>
                <div className='col-md-12'>
                  <label for="Last name" className='form-label float-start'>Email <span className='lead fs-6'>(Optional)</span></label>
                  <input type="text" className='form-control'></input>
                </div>
                <div className='col-md-12'>
                  <label for="Last name" className='form-label float-start'>Address</label>
                  <input type="text" className='form-control'></input>
                </div>
                <div className='col-md-12'>
                  <label for="Last name" className='form-label float-start'>Address  <span className='lead fs-6'>(Optional)</span></label>
                  <input type="text" className='form-control'></input>
                </div>

                {/* Country */}
                <div className='row mt-2'>
                  <div className='col'>
                    <label for="Country" className='form-label'>Country </label>
                    <input type="text" className='form-control'></input>
                  </div>
                  <div className='col'>
                    <label for="State " className='form-label'>State </label>
                    <input type="text" className='form-control'></input>
                  </div>
                  <div className='col'>
                    <label for="Zip " className='form-label'>Zip </label>
                    <input type="text" className='form-control'></input>
                  </div>
                </div>
                <hr />

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Save this information for next time
                  </label>
                </div>
                <hr />
                {/* radio */}

                <h4 className='mb-3 '>Payment</h4>
                <div className="my-3">
                  <div className='form-check'>
                    <input type='radio' className='form-check-input' name='paymentMethod'></input>
                    <label for="Credit " className='form-check-label'>Credit card</label>
                  </div>

                  <div className='form-check'>
                    <input type='radio' className='form-check-input' />
                    <label for="Debit" className='form-check-label'>Debit card</label>
                  </div>

                  <div className='form-check'>
                    <input type='radio' className='form-check-input'></input>
                    <label for="paypal" className='form-check-label'>PayPal</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label for="c-name" className='form-label float-start'>Name on card</label>
                    <input type="text" className='form-control'></input>
                    <small className='text-muted float-start '>Full name as displayed on card</small>
                  </div>
                  <div className='col-md-6'>
                    <label for="c-name" className='form-label float-start'>Credit card number</label>
                    <input type="text" className='form-control'></input>
                  </div>
                  <div className='col-md-3'>
                    <label for="c-name" className='form-label float-start'>Expiration</label>
                    <input type="text" className='form-control'></input>
                  </div>
                  <div className='col-md-3'>
                    <label for="c-name" className='form-label float-start'>CVV</label>
                    <input type="text" className='form-control'></input>
                  </div>
                </div>
                <hr />
                <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button> 

                 
                </div>
              </div>
            </form>
          </div>
          <div className='col-md-4'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-primary'>Your cart</span>
              <span className='badge bg-primary rounded-pill'>3</span></h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className='my-0'>Product name</h6>
                  <small className='text-muted'>Brief description</small>
                </div>
                <span className='text-muted'>$12</span>
              </li>

              <li class="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className='my-0'>Second product</h6>
                  <small className='text-muted'>Brief description</small>
                </div>
                <span className='text-muted'>$8</span>
              </li>

              <li class="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className='my-0'>Third item</h6>
                  <small className=''>Brief description</small>
                </div>
                <span className=''>$5</span>
              </li>

              <li className="list-group-item d-flex justify-content-between ">
                <div className='text-success'>
                  <h6 className='my-0 '>Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className='text-success'>-$5</span>
              </li>

              <li class="list-group-item d-flex justify-content-between">
                <div>
                  <h6 className='my-0'>Total (USD)</h6>

                </div>
                <strong>$20</strong>
              </li>

            </ul>
          </div>



        </div>
      </div>

    </div>
  )
}

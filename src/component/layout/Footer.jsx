import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container   my-5 " id='foot'>


      <div className="row">

        <div className=" col-6 col-md-3   ">

<h6 className='tag fw-bold'>Who We Serve</h6>

<p>Financial Institutions</p>


<p>EnterPrises</p>
<p>partners</p>
<p>Developers</p>
        </div>
        <div className="col-6 col-md-3  ">

<h6 className='tag fw-bold'>Who We Do</h6>

<p>Financial Institutions</p>


<p>EnterPrises</p>
<p>partners</p>
<p>Developers</p>
        </div>
        <div className="col-6 col-md-3  ">

<h6 className='tag fw-bold'>Who We Do It</h6>

<p>Enterprises</p>


<p>Payment</p>
<p>Insurnace</p>
<p>Encosystem</p>
        </div>
        
        <div className="col-6 col-md-3 ">

<h6 className='tag fw-bold'>ABOUT US</h6>

<p>Mission and Values</p>


<p>EnterPrises</p>
<p>Ladder Ship </p>
<p>Career</p>
<p>Contcts</p>

        </div>
<hr />
<div className="row">

  <div className="col-md-6">

  <a className="navbar-brand" href="#"><img src="assets/download.png" alt=" "width={200} /></a>
<div className='style9 '>© 2022 Quant Network Limited. All rights reserved</div>
  </div> 
  <div className="col-md-2">

    <h6>Privacy Policy</h6>
  </div>
  <div className="col-md-2">
  <h6>Term of use</h6>
  

  </div>
  <div className="col-md-1">
    <div>
<AiFillTwitterCircle size={30} color="blue" />

</div>

  </div>
  <div className="col-md-1">
    <div>
<AiFillLinkedin size={30} color="black"/>

</div>

  </div>


</div>
      </div>
    </div>
  )
}

export default Footer

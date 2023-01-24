import React from 'react'
import image1 from '../Image/Footer.jpg';
import image2 from '../Image/Footer-1.png';
import image3 from '../Image/Footer-2.png';
 export default function Footer() {
  return (
    <div className='container footer pt-5 pb-5'>
        <div className='row'>
<div className='col-lg-6'>
    <img src={image1} className="img-responsive px-5"/>
</div>
<div className='col-lg-6 p-5'>
<h1>BONGO Thursday Sale! Start Now</h1>
<p>Shopping fastly and easily more with Bonik Express. Get this offer to provide us your email!</p>
<div class="input-group">
    <div class="input-group-text bg-warning" id="btnGroupAddon">Subscribe</div>
    <input type="text" class="form-control text-center" placeholder="type your gmail" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </div>
<div className='row pt-4'>
    <div className='col-lg-6'>
        <img src={image2} className="img-responsive"/>
    </div>
    <div className='col-lg-6'>
    <img src={image3} className="img-responsive"/>

    </div>
</div>
</div>
        </div>
    </div>
  )
}

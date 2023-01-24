import React from 'react'
import item7 from '../Image/item-7.jpg';
import item8 from '../Image/item-8.jpg';
export default function Babesitems() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg babe">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">Babies Milk & Foods</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link px-3" href="#">New Arrivals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Best Seller</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Most Popular</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3">View All</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container pt-5'>
      <div className='row'>
        <div className='col-lg-4'>
          <a href='#'>
          <div class="card mt-2">
            <img class="card-img" src={item7} alt="..." />
            <div class="card-img-overlay text-dark d-flex justify-content-start">
             <p className=''><span className='fw-bold'>HUAWEI Telephone </span>Sim <br/><p className='pt-2'>Discount</p><br/>
             <p className='text-success  '>৳ 1,700.00<span className='text-decoration-line-through text-secondary'>৳ 2,000.00</span>
            <br/>
            <span className='btn btn-warning mt-3'>Shop Now</span>
             </p></p>
             
            </div>
          </div>
          </a>
        </div>
     
      <div className='col-lg-4'>
      <a href='#'>
          <div class="card mt-2">
            <img class="card-img" src={item8} alt="..." />
            <div class="card-img-overlay text-dark d-flex justify-content-start">
             <p className=''><span className='fw-bold'>HUAWEI Telephone </span>Sim <br/><p className='pt-2'>Discount</p><br/>
             <p className='text-success '>৳ 1,700.00<span className='text-decoration-line-through text-secondary'>৳ 2,000.00</span>
            <br/>
            <span className='btn btn-warning mt-3'>Shop Now</span>
             </p></p>
             
            </div>
          </div>
          </a>
      </div>
      <div className='col-lg-4'>
      <a href='#'>
          <div class="card mt-2">
            <img class="card-img" src={item8} alt="..." />
            <div class="card-img-overlay text-dark d-flex justify-content-start">
             <p className=''><span className='fw-bold'>HUAWEI Telephone </span>Sim <br/><p className='pt-2'>Discount</p><br/>
             <p className='text-success'>৳ 1,700.00<span className='text-decoration-line-through text-secondary'>৳ 2,000.00</span>
            <br/>
            <span className='btn btn-warning mt-3'>Shop Now</span>
             </p></p>
             
            </div>
          </div>
          </a>
      </div>
      </div>
    </div>
    </div>
  )
}

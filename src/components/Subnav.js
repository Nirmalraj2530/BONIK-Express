import React from 'react'

export default function Subnav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container">

          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link d-flex dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="me-2 fas fa-bars"></i><span><h6 className='fw-bold'>Shop By Category</h6></span>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link fst-normal text-dark" href="#">Home</a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link fst-normal text-dark" href="#">Shop</a>

            </li>
            <li class="nav-item px-4">
              <a class="nav-link fst-normal text-dark" href="#">Contact</a>
            </li>
          </ul>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Sell On Bonik Express</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Track Your Order</a>
              </li>
              <li class="nav-item">
                <button className='btn btn-light rounded-pill'>USD $</button>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

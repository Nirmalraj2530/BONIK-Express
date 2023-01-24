import React from 'react'
import carousel1 from '../Image/carousel-1.jpg';
import carousel2 from '../Image/carousel-2.jpg';
import carousel3 from '../Image/carousel-3.jpg';
import side1 from '../Image/side-1.jpg';
import side2 from '../Image/side-2.jpg';

export default function Offerzone() {
    return (
        <div className='offerzone container-fluid'>
            <div className='row'>
                <div className='col-lg-9'>
                    <div id="carouselExampleCaptions" class="carousel slide p-4" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <div class="card">
                                <img class="card-img" src={carousel1} alt="..." height="380" />
                                <div class="card-img-overlay text-dark d-flex justify-content-start align-items-end p-5">
                                <p className='text-info pb-5 fw-bold px-5'>Limited Edition<span className='text-dark'>
                                <h1>Experiance Feel<br/>Greatest With<br/>Realty Just <span className='text-success'>$599</span></h1>
                                </span>
                                <a href='#' className='btn btn-warning mt-4'>SHOP NOW</a>
                                </p>
                                </div>
                            </div> 
                            </div>
                            <div class="carousel-item">
                            <div class="card">
                                <img class="card-img" src={carousel2} alt="..." height="380" />
                                <div class="card-img-overlay text-dark d-flex justify-content-start align-items-end">
                                <p className='text-info pb-5 fw-bold px-5'>Limited Edition<span className='text-dark'>
                                <h1>Experiance Feel<br/>Greatest With<br/>Realty Just <span className='text-success'>$599</span></h1>
                                </span>
                                <a href='#' className='btn btn-warning mt-4'>SHOP NOW</a>
                                </p>
                                </div>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <div class="card">
                                <img class="card-img" src={carousel3} alt="..." height="380" />
                                <div class="card-img-overlay text-dark d-flex justify-content-start align-items-end" >
                                <p className='text-info pb-5 fw-bold px-5'>Limited Edition<span className='text-dark'>
                                <h1>Experiance Feel<br/>Greatest With<br/>Realty Just <span className='text-success'>$599</span></h1>
                                </span>
                                <a href='#' className='btn btn-warning mt-4'>SHOP NOW</a>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='row pt-4'>
                        <div className='col-lg-12'>
                            <div class="card">
                                <img class="card-img" src={side1} alt="..." />
                                <div class="card-img-overlay text-dark d-flex justify-content-start align-items-end">
                                <h3>Unio<br/>Leather Bags<span>
                                   <p className='fs-5 fw-light'>100% Leather<br/>handmade</p></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 pt-3'>
                            <div class="card">
                                <img class="card-img" src={side2} alt="..." />
                                <div class="card-img-overlay text-dark d-flex justify-content-start align-items-end">
                                   <h3>iPhone 6+<br/>32Gb<span>
                                   <p className='fs-5 fw-light'>Experiance with<br/> best smartphone <br/>with world</p></span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            
        
        
    )
}

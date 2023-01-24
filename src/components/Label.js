import React from 'react'

export default function Label() {
    return (
        <div className='container border'>
            <div className='hstack  p-4'>
                <div className='col-lg-3'>
                    <i class="fas fa-umbrella text-warning fs-1 pt-2 px-3 float-start"></i>
                    <h1 className='fs-4 fw-bolder'>Buy and Save</h1>
                    <p>Lowest Price Ever Now</p>
                </div>
                <div class="vr">.</div>
                <div className='col-lg-3'>
                    <i class="fas fa-sync text-warning fs-1 float-start pt-2 px-3"></i>
                    <h1 className='fs-4 fw-bolder'>Buy and Save</h1>
                    <p>Lowest Price Ever Now</p>
                </div>
                <div class="vr">.</div>

                <div className='col-lg-3'>
                    <i class="fas fa-credit-card text-warning fs-1 float-start pt-2 px-3"></i>
                    <h1 className='fs-4 fw-bolder'>Buy and Save</h1>
                    <p>Lowest Price Ever Now</p>
                </div>
                <div class="vr">.</div>
                <div className='col-lg-3'>
                    <i class="far fa-comments text-warning fs-1 float-start pt-2 px-3"></i>
                    <h1 className='fs-4 fw-bolder'>Buy and Save</h1>
                    <p>Lowest Price Ever Now</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import item1 from '../Image/item-1.jpg';
import item2 from '../Image/item-2.jpg';
import item3 from '../Image/item-3.jpg';
import item4 from '../Image/item-4.jpg';
import item5 from '../Image/item-5.jpg';
import item6 from '../Image/item-6.jpg';

export default function Items() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-2'>
            <a>
                <div class="card border-0" >
  <img src={item1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p className='card-title text-success'>$4.89 <sapn className="text-decoration-line-through text-secondary">$8.89</sapn></p>
    <p class="card-text text-info">Mini Capsules Packet Umbrella</p>
  </div>
</div>
                </a>
            </div>
            <div className='col-lg-2'>
                <a>
                <div class="card border-0" >
  <img src={item2} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='card-title text-success'>$4.89 <sapn className="text-decoration-line-through text-secondary">$8.89</sapn></p>
    <p class="card-text text-info">Mini Capsules Packet Umbrella</p>
  </div>
</div>
                </a>
            </div>
            <div className='col-lg-2'>
            <a>
                <div class="card border-0" >
  <img src={item3} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='card-title text-success'>$4.89 <sapn className="text-decoration-line-through text-secondary">$8.89</sapn></p>
    <p class="card-text text-info">Mini Capsules Packet Umbrella</p>
  </div>
</div>
                </a>
            </div>
            <div className='col-lg-2'>
            <a>
                <div class="card border-0" >
  <img src={item4} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='card-title text-success'>$4.89 <sapn className="text-decoration-line-through text-secondary">$8.89</sapn></p>
    <p class="card-text text-info">Mini Capsules Packet Umbrella</p>
  </div>
</div>
                </a>
            </div>
            <div className='col-lg-2'>
            <a>
                <div class="card border-0" >
  <img src={item5} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='card-title text-success'>$4.89 <sapn className="text-decoration-line-through text-secondary">$8.89</sapn></p>
    <p class="card-text text-info">Mini Capsules Packet Umbrella</p>
  </div>
</div>
                </a>
            </div>
            <div className='col-lg-2'>
            <a>
                <div class="card border-0" >
  <img src={item6} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p className='card-title text-success'>$4.89 <sapn className="text-decoration-line-through text-secondary">$8.89</sapn></p>
    <p class="card-text text-info">Mini Capsules Packet Umbrella</p>
  </div>
</div>
                </a>
            </div>

        </div>
    </div>
  )
}

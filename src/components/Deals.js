import React from 'react';
import { useState,useEffect } from 'react';
export default function Deals() {
  const [sec, setSecond] = useState(0);
  const [min, setMinite] = useState(0);
  const [hr, setHour] = useState(0);
  const deadline = "december,31,2022";
  const getTime = () =>{
  const time = Date.parse(deadline)-Date.now();
  setHour(Math.floor((time/(1000*60*60))%24))
  setMinite(Math.floor((time/1000*60)%60))
  setSecond(Math.floor((time/1000)%60))
 };
  useEffect(()=>{
  const intervel = setInterval(()=> getTime(deadline),1000);
  return()=>clearInterval(intervel);
  },[]);
  return (
    <div className='pt-5 container'>
        <div className='row'>
        <div className='col-lg-3'>
        <p className='fw-bold fs-4'>Deals of the day</p>
        </div>
        <div className='col-lg-3'>
        <p className='fw-bold fs-4 border bg-danger text-light text-center mx-4'>Ends in:{hr}:{min}:{sec}</p>
        </div>
        <div className='col-lg-6 text-end'><a href='#' className='text-dark'>view all</a></div>
        </div>
    </div>
  )
}

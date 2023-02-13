import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';


const AllCars = () => {
    const [cars,setCars]=useState([]);
    useEffect(() => {
        axios
        .get ('/api/items/AllCars')
        .then((res)=>{
            setCars(res.data)
          //   console.log("hhhh",res.data)
          // console.log("data of cars",cars)
        }).catch((err)=>console.log(err))
    
      }, [])

  return (
    <div>
      <button id='sellbutton'>test</button>
      <NavBar/>
      <div className='grid'>
      {cars.map((el)=>{
        return(
        <div key={el.idCars} className='allcarcart'>
            <img src={el.imageUrl}  />
            <p>Brand: {el.brand}</p>
            <p>Color: {el.color}</p>
            <p>Price: {el.price}</p>
            <p>Owner's phone number: {el.PhoneNumber}</p>
            <p>Description: {el.description}</p>
            <p>Gearbox: {el.gearbox}</p> 
            <p>Fuel: {el.fuel}</p> 
        </div>)
      })}
      </div>
            <button id='hh'><Link to={'/SellCars'} >Sell your car</Link></button>
    </div>
  )
}

export default AllCars

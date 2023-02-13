import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import SellCars from './SellCars.jsx'

const Login = () => {
  const nav=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [idUser,setIdUser]=useState('')
    const [userName,setUserName]=useState('')
    const [data,setData]=useState([])

    const toLogin= (e)=>{
    e.preventDefault()
    if (validator()){
       axios
       .get(`/api/items/oneUser${email}`)
       .then((res)=>{
        setData(res.data)
        
      if(res.data.length===0){
        // toast.error("this email is not exist")
        alert("this email is not exist")
      }
      else if (res.data[0].password===password){
        // toast.success("Success")
        alert("Welcome  "+res.data[0].userName)
        nav('AllCars')
      }
      else{
        alert("The password is incorrect")
        // toast.error("The password is incorrect")
      }
    })
       .catch((err)=>{
        // toast.error("login filed in :"+err.message)
        alert("login filed in :"+err.message)
       })
    }

 }
 const validator=()=>{
  let result=true
  if(!email){

    result=false
    // toast.warning("Plise enter email")
    alert("Please enter email")
  }
  return result
 }
<SellCars data={data} />
  return (
    <div>
      
      <form onSubmit={toLogin} className="loginCart">
        <img id='loginicon' src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"  /><br/>
        <label id='email'>Email</label><br/>
      <input type="email" placeholder='email...' value={email} 
      onChange={e=> setEmail(e.target.value)} /><br/>
       <label>Password</label><br/>
      <input type="password" placeholder='password...' value={password}
      onChange={e=> setPassword(e.target.value)} /><br/>
      <button id='login' type='submit' >Login</button><br/>
       <button id='logout' ><Link to={'/register'} >New user</Link></button>
      </form>
      {data.map((user,index)=>{
        return(
          <div key={index} >
          <NavBar data={user} />
          <SellCars data={user} />
          </div>
        )
      })}
     
    </div>
  )
}

export default Login

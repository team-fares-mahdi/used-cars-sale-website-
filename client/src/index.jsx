import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login.jsx'
import NavBar from './components/NavBar.jsx'

import Register from './components/Register.jsx'
import AllCars from './components/AllCars.jsx'
import SellCars from './components/SellCars.jsx'

const App = () => {
 

  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        

        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='AllCars' element={<AllCars/>} />
        <Route path='/SellCars' element={<SellCars/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
   
ReactDOM.render(<App />, document.getElementById('app'))

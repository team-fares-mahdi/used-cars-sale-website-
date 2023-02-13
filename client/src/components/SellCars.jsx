import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SellCars = (props) => {
    const [file,setFile]=useState(null)

    const [image,setImage]=useState("")
    const [brand,setBrand]=useState("")
    const [color,setColor]=useState("")
    const [price,setPrice]=useState("")
    const [phone,setPhone]=useState("")
    const [description,setDescription]=useState("")
    const [gearbox,setGearbox]=useState("")
    const [fuel,setFuel]=useState("")

    
    const sellCar=  (e)=>{
        e.preventDefault()
         setUser(props.data)
        axios
        .post(`/api/items/add14`,{
            imageUrl:image,
            brand:brand,
            color:color,
            price:price,
            PhoneNumber:phone,
            description:description,
            gearbox:gearbox,
            fuel:fuel,
            User_idUser:14
        }).then((response)=>{

            console.log(response)
        }).catch(err=>{console.log(err)})
    }

    const uploadImage=(e)=>{
      e.preventDefault()
      const formData = new FormData()
        formData.append('file',file)
        formData.append('upload_preset',"farescloud")
         axios.post('https://api.cloudinary.com/v1_1/dt7t7wjql/image/upload',formData)
         .then((res)=>setImage(res.data.secure_url))
         .catch(err=>console.log(err))
    }
    return ( 
    <div>
     
      <form className="carForm" onSubmit={sellCar}>
        <h1>Add your car's data</h1>
        <div>
     
        <label>Upload images</label>
        <input type="file"
        onChange={(e)=>setFile(e.target.files[0])} />
        <button onClick={uploadImage}>up image</button><br/>
        <img id='carimg' src={image} alt="No picture"/><br/>
       <input type="text" className='inputtext'
        placeholder="image Link.." onChange={(e)=>setImage(e.target.value)} value={image} /><br/>
       <label>the brand</label><br/>
       <input type="text" className='inputtext' placeholder="brand.." onChange={(e)=>setBrand(e.target.value)} value={brand} /><br/>
       <label>color</label><br/>
       <input type="text" className='inputtext' placeholder="color.." onChange={(e)=>setColor(e.target.value)} value={color}/><br/>
       <label>price</label><br/>
       <input type="text" className='inputtext' placeholder="price.." onChange={(e)=>setPrice(e.target.value)} value={price}/><br/>
       <label>Phone number</label><br/>
       <input type="text" className='inputtext' placeholder="+216.." onChange={(e)=>setPhone(e.target.value)} value={phone}/><br/>
       <label>descriptio</label><br/>
       <input type="text" className='inputtext' placeholder="descriptio.." onChange={(e)=>setDescription(e.target.value)} value={description} /><br/>
       <div>
       <label>fuel:  </label>
       <select onChange={(e)=>setFuel(e.target.value)} value={fuel} id='fuel' ><br/>
        <option value="diesel">diesel</option>
        <option value="essence">essence</option>
        <option value="hybrid">hybrid</option>
       </select><br/>
       <label>gearbox: </label>
       <input className='radio' type="radio" value="automatique"  onChange={(e)=>setGearbox(e.target.value)} checked={gearbox==='automatique'}/>
        <label >automatique</label>
        <input className='radio' type="radio" value="manuel"   onChange={(e)=>setGearbox(e.target.value)} checked={gearbox==='manuel'}/>
        <label >manuel</label><br/>
        </div>
       
        <button type='submit' >sell !</button>
        <button><Link to={"AllCars"} >Back</Link></button>
    
        </div>
      </form>
    </div>
  )
}

export default SellCars

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useNotificationCenter } from 'react-toastify/addons/use-notification-center';
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[user,setUser]=useState("")
const navigate=useNavigate()

  const handelSabite = (e) => {
    e.preventDefault();
    let regobj={username,email,password}
    console.log(regobj);
    axios
    .post("/api/items/addUser",{
      userName:username,
      email:email,
     password:password
    }).then((response)=>{
      setUser(response.data)
     alert("Registered successfully")
      navigate('/login')
    }).catch((err)=>{
      toast.error("Failed :"+ err.message)
    })
  };
  return (
    <div className="loginCart">
      
      <img id='loginicon' src="https://cdn-icons-png.flaticon.com/512/747/747968.png"  />
      <form onSubmit={handelSabite}>
      <div >
        <label>Your Name  </label><br/>
        <input required
          placeholder="username .."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Your E-mail  </label><br/>
        <input required
          type="email"
          placeholder="email .."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="password">
        <label>make a Password  </label><br/>
        <input required
          type="password"
          placeholder="password .."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">add</button>
      </div>
      </form>
    </div>
  );
};

export default Register;
{
  /* <Link to="/register">re</Link> */
}

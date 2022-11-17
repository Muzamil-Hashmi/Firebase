import React,{useEffect} from 'react'
import { collection, addDoc,Doc } from "firebase/firestore"; 

import { useNavigate } from "react-router-dom";
import { TextField,Box } from '@mui/material'
import Button from './Button';
import { useState } from 'react';
import {db}from '../../firebase'
import {Link} from "react-router-dom"


function Home() {
    const navigate = useNavigate();
    const [name,setName]=useState("")
    const [adress,setAdress]=useState("")


     useEffect(() =>{
        let authToken = sessionStorage.getItem("auth");
     if (authToken) {
       navigate("/home");
     }
     if (!authToken) {
       navigate("/login");
     }
   }, []);
   const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");

   
  };

  const adduser = () => {
      // alert("errror");
    
// Add a new document in collection "cities"
 
 

// Add a new document with a generated id.
addDoc(collection(db,"user"), {
  name: name,
  adress: adress
});
// console.log("Document written with ID: ", docRef.id);
  } 

  
  return (
    <div>
      
      <div className="card  my-5 rounded-5  bg-info"  style={{width: '28rem', height:'22rem'}}>

<div className="cad-body text-center">

<TextField className='  bg-white  mt-5 '
id="name"
label="Username"
type="text"
variant="outlined"
onChange={(e) => setName (e.target.value)}

/>
<br />
<TextField className=' bg-white  border-none my-4'
id="adress"
label="Adress"
type="text"
variant="outlined"
onChange={(e) => setAdress(e.target.value)}

/>
<br />
<button className="btn btn-danger   rounded-3 my-4" onClick={adduser}> ADD</button>
</div>

</div>
 <button className="btn   btn-danger" onClick={logout}>Log out </button>
 <Link className="btn   btn-danger" to="/Hero">users details </Link>


    </div>
  )
}

export default Home



import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { collection, getDocs,deleteDoc,doc } from "firebase/firestore"; 
import {db}from '../../firebase'
import {Link} from "react-router-dom"




export default function Hero() {
  const [user,setUser]=useState([])

  const Delete = (id)=>{
    // alert("hahhaha")
    deleteDoc(doc(db, "user", id));
    console.log(id)
    

  }

  const userCollectionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log("Document data:", data);
    };
    getUsers();
  });
  

  return (
    <div className="container my-5">
    <div className="row">

      <div className="col-md-12">
       
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Adress</th>
      <th scope="col">File</th>

      <th scope="col">Delete</th>
      <th scope="col">edit</th>

    </tr>
  </thead>
  <tbody>
    {user.map((user)=>{

      return(
        <tr>
        <th className="table-secondary" scope="row">1</th>
        <td className="table-secondary">  {user.name}</td>
        <td className="table-secondary">{user.adress}</td>
        <td className="table-secondary">{user.file}</td>

        <td className="table-secondary"><button className="btn   btn-danger" onClick= {()  =>Delete((user.id))}>delete</button></td>
        <td className="table-secondary"><Link className="btn   btn-primary" to={`/edit/${user.id}`} >Edit</Link></td>
        
        
      </tr>
      )


     
    })}
   

   
  </tbody>
</table>

      </div>
    </div>
    </div>
  );
}

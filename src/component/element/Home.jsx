import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate();

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
  return (
    <div>
      
<h1>Home</h1>
 <button onClick={logout}>Log out </button>

    </div>
  )
}

export default Home



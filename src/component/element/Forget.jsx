import React from "react";
import { TextField, Box } from "@mui/material";

export default function Forget({ updateEmail, setEmail, title }) {
  return (
    <div className="container-fluid text-center mt-5 " >
   <div className="container text-center mt-5  py-5">
    <div className="row ">
        <h1 className="display-3 fw-bold align-items-center my-5 ">{title}</h1>
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
            <div className="card bg-danger" >
        <TextField  className="w-75 mx-auto my-5  bg-white "
        id="email"
        label="email"
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button className="btn btn-primary mb-3 bg-white text-danger border-success rounded-4 fw-bold mx-auto w-25" onClick={updateEmail}>
        {title}
      </button>
      </div>
        </div>
    </div>
   </div>
    </div>
  );
}

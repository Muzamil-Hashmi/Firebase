import React, { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");

  const updateUser = () => {
    setDoc(doc(db, "user", id), {
      name: name,
      adress: adress,
    });
  };
  // const washingtonRef = doc(db,);

  // Set the "capital" field of the city 'DC'
  // updateDoc(washingtonRef, {
  //    name:true,
  // });

  return (
    <div className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-3"> </div>
          <div className="col-6 mt-5 justify-content-center ms-5 mt-5">
            <div
              className="card  my-5 rounded-5  bg-info"
              style={{ width: "28rem", height: "22rem" }}
            >
              <div className="cad-body text-center">
                <TextField
                  className="  bg-white  mt-5 "
                  id="name"
                  label="Username"
                  type="text"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <TextField
                  className=" bg-white  border-none my-4"
                  id="adress"
                  label="Adress"
                  type="text"
                  variant="outlined"
                  onChange={(e) => setAdress(e.target.value)}
                />
                <br />
                <button
                  className="btn btn-danger   rounded-3 my-4"
                  onClick={updateUser}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

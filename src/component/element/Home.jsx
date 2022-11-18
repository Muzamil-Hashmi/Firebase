import React, { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, getStorage,  uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import Button from "./Button";
import { useState } from "react";
import { db, storage } from "../../firebase";
import { Link } from "react-router-dom";
import {FaCamera} from "react-icons/fa"


const Home=()=> {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  // const [ImageUpload, setImageUpload] = useState(null);


  const [fileUrl, setFileUrl] = useState(null);
const [progress, setprogress] = useState(0);

  // const handleFileChange = function (e) {
  //   var ref = firebase
  //     .storage()
  //     .ref()
  //     .child(`images/${e.target.files[0].name}`)
  //     .put(e.target.files[0]);
  //   ref.on(
  //     "state_changed",
  //     snapshot => {
  //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

  //       console.log("Upload is " + progress + "% done");
  //       setprogress(progress);
  //     },
  //     error => {},
  //     () => {
  //       ref.snapshot.ref.getDownloadURL().then(url => {
  //         console.log(url);
  //         setFileUrl(url);
  //       });
  //     },
  //   );
  // };

  useEffect(() => {
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
    addDoc(collection(db, "user"), {
      name: name,
      adress: adress,
    });

  
    // console.log("Document written with ID: ", docRef.id);
  };

 const handleFileChange =()=>{

    const storage = getStorage();

// Create the file metadata
// /** @type {any} */
// // const metadata = {
// //   contentType: 'image/jpeg'
// // };

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'images/');
const uploadTask = uploadBytesResumable(storageRef, fileUrl);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setprogress(progress)
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setFileUrl(downloadURL)
    });
  }
);
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-5 text-center">
          <div
            className="card  my-5 rounded-5 justify-content-center bg-info"
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
                className=" bg-white  my-4"
                id="adress"
                label="Adress"
                type="text"
                variant="outlined"
                onChange={(e) => setAdress(e.target.value)}
              /> <br />
                 <label>
                {progress < 1 ? (
                  <>
                    <input
                      type='file'
                      id='input-file'
                      className='form-control '
                      onChange={handleFileChange}
                    />
                    <FaCamera size={20} /> <br />
                    <progress value={progress} max='100' />
                  </>
                ) : (
                  <img src={fileUrl} alt='...' />
                )}
              </label>
              <br />
              <button
                className="btn btn-danger   rounded-3 my-4"
                onClick={adduser}
              >
                {" "}
                ADD
              </button>
            </div>
          </div>
          <button className="btn   btn-danger px-2" onClick={logout}>
            Log out{" "}
          </button>
          <Link className="btn   btn-danger ms-5" to="/Hero">
            Details{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

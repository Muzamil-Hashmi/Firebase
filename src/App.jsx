import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./component/element/Home";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Form from "./component/element/Form";
import app, { db } from "./firebase";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";
import Forget from "./component/element/Forget";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
  }, []);

  const updateEmail = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        if (error.code == "auth/user-not-found") {
          toast.error("please check the email");
        }
        // ..
      });
  };

  const handleAction = (id) => {
    console.log(id);
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/home");
          console.log(res);

          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
          addDoc(collection(db, "Users"), {
            email: email,
            password: password,
          });
          //   addDoc(collection(db,"auth"),{
          //     email:email,
          //     password:password
          //   });
        })
        .catch((e) => {
          if (e.code == "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code == "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }
    if (id == 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
        })
        .catch((e) => {
          if (e.code == "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code == "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }
  };

  return (
    <>
      <>
        <ToastContainer />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/forget"
            element={
              <Forget
                setEmail={setEmail}
                updateEmail={() => updateEmail()}
                title="forget "
              />
            }
          />
          <Route
            path="/login"
            element={
              <Form
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
                title="login "
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
                title="register "
              />
            }
          />
        </Routes>
      </>
    </>
  );
}

export default App;

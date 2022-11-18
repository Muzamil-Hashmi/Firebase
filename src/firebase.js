// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, addDoc } from "firebase/firestore"; 
import {getStorage} from 'firebase/storage'

import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMGwVBgizG4_WhaFLzHbFYGM6Ki53_bm0",
  authDomain: "reactfirebase-1e7fb.firebaseapp.com",
  projectId: "reactfirebase-1e7fb",
  storageBucket: "reactfirebase-1e7fb.appspot.com",
  messagingSenderId: "40623413768",
  appId: "1:40623413768:web:324839f7150bf2d3c94fbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const db= getFirestore(app);
export const storage = getStorage();

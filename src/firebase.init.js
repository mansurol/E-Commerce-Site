// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {

  apiKey: "AIzaSyC2dE0qIJ-wCjSPr-2wIsA9dkBPgaOGGps",

  authDomain: "ecommerce-site-fefc9.firebaseapp.com",

  projectId: "ecommerce-site-fefc9",

  storageBucket: "ecommerce-site-fefc9.appspot.com",

  messagingSenderId: "891727378988",

  appId: "1:891727378988:web:cf9927c2d720b7312d6f89"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;
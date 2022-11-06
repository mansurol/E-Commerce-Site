// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDU2Ekmu94FiRa6uAQfGlUUKuApOl2pIr0",
    authDomain: "ewebsite-996f2.firebaseapp.com",
    projectId: "ewebsite-996f2",
    storageBucket: "ewebsite-996f2.appspot.com",
    messagingSenderId: "808764091092",
    appId: "1:808764091092:web:b8040f47ebdd7b11dda941"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;
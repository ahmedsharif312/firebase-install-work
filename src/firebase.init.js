// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAE5iNjxPv6lijVauzQxRM8pGBbuTIBDk",
    authDomain: "simple-firebase-learn.firebaseapp.com",
    projectId: "simple-firebase-learn",
    storageBucket: "simple-firebase-learn.appspot.com",
    messagingSenderId: "534089198889",
    appId: "1:534089198889:web:36df183e58339f1fe69b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,onAuthStateChanged} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASHfZiQegaSe2zaovAH4zAFqX0AiwyEQk",
  authDomain: "cmsthdcihet.firebaseapp.com",
  projectId: "cmsthdcihet",
  storageBucket: "cmsthdcihet.appspot.com",
  messagingSenderId: "360213749141",
  appId: "1:360213749141:web:c9fc4a6979c845161f2a9c",
  measurementId: "G-ZJG51YQCRS"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFVT-jSz-DrhAj3BxusgB3hT1n-xizTg4",
  authDomain: "jobi-clientsite.firebaseapp.com",
  projectId: "jobi-clientsite",
  storageBucket: "jobi-clientsite.appspot.com",
  messagingSenderId: "326545897468",
  appId: "1:326545897468:web:69ec1cb77d83875014e479"
};

const app = initializeApp(firebaseConfig);

export default app;
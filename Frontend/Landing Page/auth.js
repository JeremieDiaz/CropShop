// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2PUYxpmO4l1kBRlnnNJmJrQS_zuqboKA",
  authDomain: "cropshop-8b52f.firebaseapp.com",
  projectId: "cropshop-8b52f",
  storageBucket: "cropshop-8b52f.appspot.com",
  messagingSenderId: "37652561121",
  appId: "1:37652561121:web:7a4ac2f0900cf6342f4ba0",
  measurementId: "G-JTR0ZN2KT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    alert(5);
})

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
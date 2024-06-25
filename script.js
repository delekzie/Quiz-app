  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDieZOVNNH3d10pPH006ppT1OL6fFn1UeU",
    authDomain: "quiz-app-ecb8e.firebaseapp.com",
    projectId: "quiz-app-ecb8e",
    storageBucket: "quiz-app-ecb8e.appspot.com",
    messagingSenderId: "505178996930",
    appId: "1:505178996930:web:d23661ecb9a734737f3b5b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 

  //inputs

  const email = document.getElementById("email")

  const password = document.getElementById("password")

  const submit = document.getElementById("submit")
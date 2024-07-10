
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

  import { getAuth,GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDieZOVNNH3d10pPH006ppT1OL6fFn1UeU",
    authDomain: "quiz-app-ecb8e.firebaseapp.com",
    projectId: "quiz-app-ecb8e",
    storageBucket: "quiz-app-ecb8e.appspot.com",
    messagingSenderId: "505178996930",
    appId: "1:505178996930:web:d23661ecb9a734737f3b5b"
  };

 

  //inputs

  const email = document.getElementById("email")
  const password = document.getElementById("password")
  const submit = document.getElementById("submit")
//email and password
submit.addEventListener("click", function (event){
    event.preventDefault()
    alert("fiver")
    console.log("fdyecgk")
})


  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth(app)

const user = auth.currentUser

 const signG = () => {
      signInWithPopup(auth, provider)
      .then((result)=>{
        console.log(result)


        sendEmailVerification(auth.currentUser)
        .then((reponse) => {
          console.log(reponse)
          console.log("email sent")
        })
        .catch((error)=>{
          console.log(error)
        });

        result?window.location.href = "index.html":window.location.href = "signup.html"

      
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    window.signG = signG

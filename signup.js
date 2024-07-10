
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDieZOVNNH3d10pPH006ppT1OL6fFn1UeU",
  authDomain: "quiz-app-ecb8e.firebaseapp.com",
  projectId: "quiz-app-ecb8e",
  storageBucket: "quiz-app-ecb8e.appspot.com",
  messagingSenderId: "505178996930",
  appId: "1:505178996930:web:d23661ecb9a734737f3b5b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const user = auth.currentUser;



function updateUserProfile(user) {

    const userName  = user.displayName
    const userEmail = user.email
    const userProfilePicture = user.photoURL

    document.getElementById ("userName").textContent = userName;
    document.getElementById ("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}
updateUserProfile()

onAuthStateChanged (auth, (user)=>{
    if(user){
        updateUserProfile(user)
    }else{
        console.log("user is signed out")
        window.location.href = "/signin.html"
    }

})
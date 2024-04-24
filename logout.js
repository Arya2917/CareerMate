document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('mobile-menu-open');
    });
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyC5fQUvV4Q72DviO8IMUQS40DFAO_xnqGo",
authDomain: "pbl-chatbot.firebaseapp.com",
projectId: "pbl-chatbot",
storageBucket: "pbl-chatbot.appspot.com",
messagingSenderId: "782023287383",
appId: "1:782023287383:web:1d0cb033f6a62987007912"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const logout = document.getElementById('logoutButton');

logout.addEventListener('click', function(event){
    console.log("Logout button clicked")
    event.preventDefault()
    signOut(auth).then(() => {
        alert("Logged out succesfully")
        window.location.href = "index.html";
      }).catch((error) => {
        console(error)
      });
})

function showUser(user){
    const userName = user.displayName;
    document.getElementById("name").textContent = userName;
}
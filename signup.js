document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('mobile-menu-open');
    });
});


const signUpButton = document.getElementById('ghostup');
const signInButton = document.getElementById('ghostin');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signUpButton.addEventListener('click', () => {
	container.classList.remove("left-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.add("left-panel-active");
});
  

//EMAIL-PASSWORD AUTHENTICATION
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

const submit1 = document.getElementById('create');
const submit2 = document.getElementById('signin');

submit1.addEventListener('click', function(event){
	console.log("Sign up button clicked")
	event.preventDefault()
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;  

	createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		//Signed up
	const user = userCredential.user;
	alert("Creating Account")
	window.location.href = "chatbot.html";
	alert("You have been signed in successfully!")
	})
	.catch((error) => {
	const errorCode = error.code;
	const errorMessage = error.message;
	alert(errorMessage)
	});
})

submit2.addEventListener('click', function(event) {
    console.log("Login button clicked");
    event.preventDefault();
    const emailElement = document.getElementById('email1');
    const passwordElement = document.getElementById('password1');

    console.log("Email element:", emailElement);
    console.log("Password element:", passwordElement);
    
    const email = emailElement.value.trim(); 
    const password = passwordElement.value;
    
    if (!email || !password) {
        console.log("Empty email or password");
        alert("Please enter both email and password");
        return; 
    }

    console.log("Email pw checking");
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log("Logged in");
            const user = userCredential.user;
            window.location.href = "chatbot.html";
            alert("You have been logged in successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});


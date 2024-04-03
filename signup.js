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
const submit3 = document.getElementById('googleSignButtonCreate');
const submit4 = document.getElementById('googleSignButtonSignIn');

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


//GOOGLE AUTHENTICATION
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// submit3.addEventListener('click', function(event){
// 	console.log("Google Sign up button clicked")
// 	event.preventDefault()
	
// 	signInWithRedirect(auth, provider);

// 	signInWithPopup(auth, provider)
// 	.then((result) => {
// 		// This gives you a Google Access Token. You can use it to access the Google API.
// 		const credential = GoogleAuthProvider.credentialFromResult(result);
// 		const token = credential.accessToken;
// 		// The signed-in user info.
// 		const user = result.user;
// 		// IdP data available using getAdditionalUserInfo(result)
// 		// ...
// 	}).catch((error) => {
// 		// Handle Errors here.
// 		const errorCode = error.code;
// 		const errorMessage = error.message;
// 		// The email of the user's account used.
// 		const email = error.customData.email;
// 		// The AuthCredential type that was used.
// 		const credential = GoogleAuthProvider.credentialFromError(error);
// 		// ...
// 	});

// 	getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// })
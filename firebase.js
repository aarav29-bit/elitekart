
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBixMYSDoBvGJCz2DgKUHesw5xykV9UMms",
    authDomain: "elitekart-37062.firebaseapp.com",
    projectId: "elitekart-37062",
    storageBucket: "elitekart-37062.firebasestorage.app",
    messagingSenderId: "681282775832",
    appId: "1:681282775832:web:b0b2dfedded15b4d8e8c6d",
    measurementId: "G-1TVFE7WWFR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //inputs
// Get the form element
const form = document.getElementById("signup-form");

// Add an event listener to the form for the "submit" event
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the email and password values after the form is submitted
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Show an alert with the values (for testing purposes)
    alert("Email: " + email + "\nPassword: " + password);

    // You can now use these values to authenticate the user (e.g., Firebase Authentication)
});



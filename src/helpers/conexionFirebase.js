 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDfJsVvS1c2nSVzzkk9y0ul0bD0YRhFzw8",
   authDomain: "kvztiendatcc.firebaseapp.com",
   projectId: "kvztiendatcc",
   storageBucket: "kvztiendatcc.appspot.com",
   messagingSenderId: "647876252528",
   appId: "1:647876252528:web:c088f2b73545eb784875b5",
   measurementId: "G-DG9GQ168WR"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
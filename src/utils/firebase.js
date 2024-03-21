// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy-6TmIsjg2TgoJrnWNgS7Tn1BRgQdmmA",
  authDomain: "netflixgpt-68be6.firebaseapp.com",
  projectId: "netflixgpt-68be6",
  storageBucket: "netflixgpt-68be6.appspot.com",
  messagingSenderId: "845165047536",
  appId: "1:845165047536:web:13c35f39ff5b672a97dc35",
  measurementId: "G-P999B3S713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

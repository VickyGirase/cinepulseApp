// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu5xrekLoD2O24DYCPfpwxnGFUbKJ8a7o",
  authDomain: "cinepulse-d8a0d.firebaseapp.com",
  projectId: "cinepulse-d8a0d",
  storageBucket: "cinepulse-d8a0d.appspot.com",
  messagingSenderId: "240562930537",
  appId: "1:240562930537:web:9d5d2838842240b42233f8",
  measurementId: "G-J6ZX2C6V3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
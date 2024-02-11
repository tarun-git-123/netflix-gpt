// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLwKcBfclj1n0YWj0gacQOqtOyNkN4MvM",
  authDomain: "netflixgpt-53508.firebaseapp.com",
  projectId: "netflixgpt-53508",
  storageBucket: "netflixgpt-53508.appspot.com",
  messagingSenderId: "399837398029",
  appId: "1:399837398029:web:b58e68f4b4acdab3efc144",
  measurementId: "G-5TEFQZTQP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
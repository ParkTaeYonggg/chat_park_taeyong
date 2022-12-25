// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5rUlswM2OBhDx9wmlRAbeFC3DtqgvdeY",
  authDomain: "chatting-f6cd4.firebaseapp.com",
  projectId: "chatting-f6cd4",
  storageBucket: "chatting-f6cd4.appspot.com",
  messagingSenderId: "735619007957",
  appId: "1:735619007957:web:a7e9e4c8c1471e4419a95c",
  measurementId: "G-G6YP7JPEZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "app");
export const auth = getAuth(app);

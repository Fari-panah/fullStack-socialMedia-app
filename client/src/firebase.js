// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "socialmedia-app-45b93.firebaseapp.com",
  projectId: "socialmedia-app-45b93",
  storageBucket: "socialmedia-app-45b93.firebasestorage.app",
  messagingSenderId: "310125654886",
  appId: "1:310125654886:web:701b076cd126ef3aab8ea7",
  measurementId: "G-SK56QEW2CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
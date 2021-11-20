// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2biQFTGazFk19iaUVtqbENHsJ6IIUuhM",
  authDomain: "trustest-db.firebaseapp.com",
  databaseURL:
    "https://trustest-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trustest-db",
  storageBucket: "trustest-db.appspot.com",
  messagingSenderId: "954748544347",
  appId: "1:954748544347:web:5195b60fedd40c654d267e",
  measurementId: "G-9DRXDS7C8C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

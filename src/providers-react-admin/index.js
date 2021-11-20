import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

const config = {
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

const firebaseApp = firebase.initializeApp(config);
const options = {
  app: firebaseApp,
  logging: true,
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

export { dataProvider, authProvider };

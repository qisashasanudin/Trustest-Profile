// import React, { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

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

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

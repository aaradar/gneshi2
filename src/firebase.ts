// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyB6fUYX5YGBsYoa5EhsJ5wv9Xi0tov5Iy8",
  authDomain: "zhongli-1d924.firebaseapp.com",
  projectId: "zhongli-1d924",
  storageBucket: "zhongli-1d924.appspot.com",
  messagingSenderId: "968114366314",
  appId: "1:968114366314:web:5781b247e76559a0bde713",
  measurementId: "G-LYHP3NYCSE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

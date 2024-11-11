// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDHA8rsCUWNH6S208IJmHuoglUQ4lOYViM",
    authDomain: "x-291a3.firebaseapp.com",
    projectId: "x-291a3",
    storageBucket: "x-291a3.firebasestorage.app",
    messagingSenderId: "97690560435",
    appId: "1:97690560435:web:b34a424b1103e022c3cdc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export both auth and db

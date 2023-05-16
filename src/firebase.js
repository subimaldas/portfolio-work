import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCq_9i8dLl3OdB0wIOSPV7k03nCjeHyQYQ",
  authDomain: "portfolio-e0f4f.firebaseapp.com",
  projectId: "portfolio-e0f4f",
  storageBucket: "portfolio-e0f4f.appspot.com",
  messagingSenderId: "707020847285",
  appId: "1:707020847285:web:d0e806bed96e93ba0aa6fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore();
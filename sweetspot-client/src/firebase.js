import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWrdGyva1TEK6Ht6J4sMML9YNimOvnnRg",
  authDomain: "cakeory-195c1.firebaseapp.com",
  projectId: "cakeory-195c1",
  storageBucket: "cakeory-195c1.firebasestorage.app",
  messagingSenderId: "989619023714",
  appId: "1:989619023714:web:7148ca592db775578e863b",
  measurementId: "G-5GHM4R9CP5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMQW-yTZMcrkkHnlGeXF4ohkBxRoa7cmU",
  authDomain: "vite-contact-464ed.firebaseapp.com",
  projectId: "vite-contact-464ed",
  storageBucket: "vite-contact-464ed.firebasestorage.app",
  messagingSenderId: "34942845213",
  appId: "1:34942845213:web:d849c6cd4f319a1331e1f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

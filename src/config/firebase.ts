// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlXeIKfOm3mAqDMSr7RzufZTxONq3eL8I",
  authDomain: "areas-c788d.firebaseapp.com",
  projectId: "areas-c788d",
  storageBucket: "areas-c788d.appspot.com",
  messagingSenderId: "697815978107",
  appId: "1:697815978107:web:bf4d85a17573c783d392de",
  measurementId: "G-6QSRDN5SCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

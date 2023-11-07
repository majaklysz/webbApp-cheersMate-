// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBd0F3eCKniMbCVzgIA5ZY88Ux8jYfdeuc",
  authDomain: "webapp-exam-f3829.firebaseapp.com",
  databaseURL:
    "https://webapp-exam-f3829-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webapp-exam-f3829",
  storageBucket: "webapp-exam-f3829.appspot.com",
  messagingSenderId: "796357530864",
  appId: "1:796357530864:web:c3e7327b0a7b1647f49e35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// eslint-disable-next-line no-unused-vars
const db = getDatabase(app);

// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATNIui4WK7QQJXju_DeMQYbZYmWCnwaJU",
  authDomain: "donraulstore.firebaseapp.com",
  projectId: "donraulstore",
  storageBucket: "donraulstore.appspot.com",
  messagingSenderId: "658014232118",
  appId: "1:658014232118:web:bc8841675908ec7a068297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGYVQTzWQuBjDN0YOm_PTlcCQfXBwCCxs",
  authDomain: "login1-ddcec.firebaseapp.com",
  projectId: "login1-ddcec",
  storageBucket: "login1-ddcec.appspot.com",
  messagingSenderId: "410613265893",
  appId: "1:410613265893:web:36dd53b1799dfdf5746b0c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
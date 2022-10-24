// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//NewProject>>MyApp
const firebaseConfig = {
    apiKey: "AIzaSyBh-BDeb1AA7ALcVbCyvyqrdyFNzSftk7U",
    authDomain: "newproject-6d370.firebaseapp.com",
    projectId: "newproject-6d370",
    storageBucket: "newproject-6d370.appspot.com",
    messagingSenderId: "636698741591",
    appId: "1:636698741591:web:7def0674d10282f6038c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdp4HQwjMPh0EXMfvn_oKEJ9hj4f3hqiA",
    authDomain: "firea-fa882.firebaseapp.com",
    projectId: "firea-fa882",
    storageBucket: "firea-fa882.appspot.com",
    messagingSenderId: "939004150642",
    appId: "1:939004150642:web:ec115dd78a2b1f23d7d3eb",
    measurementId: "G-YPMVE4SP5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsHU4NCMaUkWr0IE_Z8DrPC7uVU152yb0",
    authDomain: "labime.firebaseapp.com",
    databaseURL: "https://labime.firebaseio.com",
    projectId: "labime",
    storageBucket: "labime.appspot.com",
    messagingSenderId: "144931978831",
    appId: "1:144931978831:web:b3558b2accf2459fa4343a",
    measurementId: "G-1D6JY5PML7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore();
const auth = getAuth();
const dbName = "Task";

export { firestore };
export { analytics }
export { auth }
export { dbName }

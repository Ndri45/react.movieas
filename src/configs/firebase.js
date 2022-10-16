// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn9ehlKLGqppWZ9XlcNSLodlwYhvn2rgk",
    authDomain: "movieas-96f2c.firebaseapp.com",
    projectId: "movieas-96f2c",
    storageBucket: "movieas-96f2c.appspot.com",
    messagingSenderId: "473211698032",
    appId: "1:473211698032:web:ccaf74d7fcbc471d856db5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

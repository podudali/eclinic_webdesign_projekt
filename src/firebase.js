
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMLFZM5tcgtAKKbiG9Jh7tQeLFrThkgOw",
    authDomain: "login-f2322.firebaseapp.com",
    projectId: "login-f2322",
    storageBucket: "login-f2322.appspot.com",
    messagingSenderId: "104680399759",
    appId: "1:104680399759:web:4c2703d354eed5c50d61fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
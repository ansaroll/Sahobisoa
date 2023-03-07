// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpeovODovr1XcaWw6uG1S3JZM2H1qRp6Y",
  authDomain: "seeme-ac760.firebaseapp.com",
  projectId: "seeme-ac760",
  storageBucket: "seeme-ac760.appspot.com",
  messagingSenderId: "92568131608",
  appId: "1:92568131608:web:05e9f8e51959a461ba0b6d",
  measurementId: "G-ERRK9PG62T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const providerAutGoogle = new GoogleAuthProvider();
export const providerAuthGithub = new GithubAuthProvider();
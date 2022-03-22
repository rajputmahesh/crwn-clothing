// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0qYirFUA9Tl3TSQE4qVxEWmDkmOsaPNM",
  authDomain: "crwn-db-acfd0.firebaseapp.com",
  projectId: "crwn-db-acfd0",
  storageBucket: "crwn-db-acfd0.appspot.com",
  messagingSenderId: "450400272566",
  appId: "1:450400272566:web:f59d61d8a55eee7bdc6617",
  measurementId: "G-0JN5923HD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

};
